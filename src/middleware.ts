import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';

  // 1) Preskoči stvarne PSI/Lighthouse botove
  if (/lighthouse|psi|Chrome-Lighthouse|PageSpeed/i.test(ua)) {
    return NextResponse.next();
  }

  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const AB_COOKIE_NAME = '@sutra-ab-test';
  const LANG_COOKIE_NAME = '@sutra-user-lang';

  const url = request.nextUrl.clone();
  const cookies = request.cookies;

  const abCookie = cookies.get(AB_COOKIE_NAME)?.value;
  const userLangFromCookie = cookies.get(LANG_COOKIE_NAME)?.value;

  // 2) helper za **permanent** redirect (308) + postavi cookie
  const redirectWithCookies = (targetUrl: URL, lang: string) => {
    const response = NextResponse.redirect(targetUrl, 308);
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

  // 3) Preskoči assete, API, sitemap itd.
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

  // 4) Root path → redirect na /<lang>
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

  // 5) Validacija jez. prefixa
  const segments = url.pathname.split('/');
  const prefix = segments[1] as UserLanguage;
  const hasValid = SUPPORTED_LANGUAGES.includes(prefix);

  if (!hasValid) {
    // npr. /foo → /hr/foo
    url.pathname = `/hr${url.pathname}`;
    return redirectWithCookies(url, 'hr');
  }

  // 6) Podudaranje cookieja i prefixa?
  if (!userLangFromCookie || userLangFromCookie !== prefix) {
    // isti URL, samo osvježi cookieje
    return redirectWithCookies(url, prefix);
  }

  // 7) Sve ok → nastavi
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)',
};
