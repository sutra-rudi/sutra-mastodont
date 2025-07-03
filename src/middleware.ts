import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const AB_COOKIE_NAME = '@sutra-ab-test';
  const LANG_COOKIE_NAME = '@sutra-user-lang';

  const url = request.nextUrl.clone();
  const { cookies } = request;

  // Read existing cookies (ako su već poslani)
  const abCookie = cookies.get(AB_COOKIE_NAME)?.value;
  const userLangFromCookie = cookies.get(LANG_COOKIE_NAME)?.value;

  // Helper: redirect + postavi cookie
  const redirectWithCookies = (targetUrl: URL, lang: string) => {
    // 307 = temporary redirect; možeš staviti 301 ako želiš trajni
    const response = NextResponse.redirect(targetUrl, 307);
    response.cookies.set(LANG_COOKIE_NAME, lang, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    response.cookies.set(AB_COOKIE_NAME, abCookie ?? (Math.random() < 0.5 ? 'A' : 'B'), {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return response;
  };

  // Preskoči assete, API, sitemap itd.
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/static') ||
    url.pathname.startsWith('/api') ||
    url.pathname === '/favicon.ico' ||
    url.pathname === '/_not-found' ||
    url.pathname.endsWith('/sitemap.xml') ||
    url.pathname.endsWith('/robots.txt') ||
    url.pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  // 1) Root path: redirect na /<lang>
  if (url.pathname === '/') {
    let langToUse = 'hr';
    if (userLangFromCookie && SUPPORTED_LANGUAGES.includes(userLangFromCookie as UserLanguage)) {
      langToUse = userLangFromCookie;
    } else {
      const accept = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
      const match = accept && SUPPORTED_LANGUAGES.find((l) => l.startsWith(accept));
      if (match) langToUse = match;
    }
    url.pathname = `/${langToUse}`;
    return redirectWithCookies(url, langToUse);
  }

  // 2) Provjeri prefix
  const segments = url.pathname.split('/');
  const prefix = segments[1] as UserLanguage;
  const hasValidPrefix = SUPPORTED_LANGUAGES.includes(prefix);

  if (!hasValidPrefix) {
    // npr. /foo → /hr/foo
    const rest = url.pathname;
    url.pathname = `/hr${rest}`;
    return redirectWithCookies(url, 'hr');
  }

  // 3) Ako cookie ne slaže s prefixom, samo refresh cookie i redirect na isti URL
  if (!userLangFromCookie || userLangFromCookie !== prefix) {
    return redirectWithCookies(url, prefix);
  }

  // 4) sve ok
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)',
};
