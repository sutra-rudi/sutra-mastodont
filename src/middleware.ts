import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const AB_COOKIE_NAME = '@sutra-ab-test';
  const LANG_COOKIE_NAME = '@sutra-user-lang';

  const url = request.nextUrl.clone();
  const cookies = request.cookies;

  // Read existing cookies
  const abCookie = cookies.get(AB_COOKIE_NAME)?.value;
  const userLangFromCookie = cookies.get(LANG_COOKIE_NAME)?.value;

  // Helper to set both cookies and rewrite to new URL
  const rewriteWithCookies = (targetUrl: URL, lang: string) => {
    const response = NextResponse.rewrite(targetUrl);
    // Set language cookie
    response.cookies.set(LANG_COOKIE_NAME, lang, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    // Set A/B test cookie if not present
    response.cookies.set(AB_COOKIE_NAME, abCookie ?? (Math.random() < 0.5 ? 'A' : 'B'), {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return response;
  };

  // Skip static, API, and misc
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

  // 1) Root path: rewrite to /<lang> with cookies
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
    return rewriteWithCookies(url, langToUse);
  }

  // 2) Validate prefix
  const segments = url.pathname.split('/');
  const prefix = segments[1] as UserLanguage;
  const hasValidPrefix = SUPPORTED_LANGUAGES.includes(prefix);

  if (!hasValidPrefix) {
    // No valid prefix: rewrite to /hr/<rest> with cookies
    const rest = url.pathname;
    url.pathname = `/hr${rest}`;
    return rewriteWithCookies(url, 'hr');
  }

  // 3) Prefix present: ensure cookies match
  if (!userLangFromCookie || userLangFromCookie !== prefix) {
    // Same URL but set cookies
    return rewriteWithCookies(url, prefix);
  }

  // 4) Everything good
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)',
};
