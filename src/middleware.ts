import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
const AB_COOKIE_NAME = '@sutra-ab-test';
const LANG_COOKIE_NAME = '@sutra-user-lang';

/**
 * Middleware to handle language prefixing and A/B testing cookie setup.
 * - Detects bots (Lighthouse, PSI) and serves /hr rewrite without redirects.
 * - Redirects root "/" to /<lang>, setting cookies via redirect.
 * - Ensures all non-static paths are prefixed with valid language code.
 * - Sets or syncs cookies via redirect when missing or mismatched.
 * - Avoids redirect loops by only redirecting when necessary.
 */
export function middleware(request: NextRequest) {
  const { nextUrl, cookies, headers } = request;
  const url = nextUrl.clone();
  const pathname = url.pathname;

  // 1) Bot detection: serve /hr for bots without redirect loops
  const ua = headers.get('user-agent') || '';
  if (/Googlebot|Lighthouse|Speed Insights/i.test(ua)) {
    if (!pathname.startsWith('/hr')) {
      url.pathname = `/hr${pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // 2) Skip static and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.endsWith('/sitemap.xml') ||
    pathname.endsWith('/robots.txt') ||
    pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  // Read cookies
  const abValue = cookies.get(AB_COOKIE_NAME)?.value;
  const langCookie = cookies.get(LANG_COOKIE_NAME)?.value as UserLanguage | undefined;

  // Determine preferred language: cookie > Accept-Language > 'hr'
  const acceptLang = headers.get('accept-language')?.split(',')[0].split('-')[0];
  const preferredLang = (
    langCookie && SUPPORTED_LANGUAGES.includes(langCookie)
      ? langCookie
      : SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang || '')) || 'hr'
  ) as UserLanguage;

  // 3) Root path: redirect to /<lang> and set cookies
  if (pathname === '/') {
    url.pathname = `/${preferredLang}`;
    const response = NextResponse.redirect(url);
    response.cookies.set(AB_COOKIE_NAME, abValue ?? (Math.random() < 0.5 ? 'A' : 'B'), {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    response.cookies.set(LANG_COOKIE_NAME, preferredLang, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    return response;
  }

  // Parse first segment for prefix
  const segments = pathname.split('/');
  const prefix = segments[1] as UserLanguage;
  const hasValidPrefix = SUPPORTED_LANGUAGES.includes(prefix);

  // 4a) Valid prefix: sync cookies if needed, no redirect loop
  if (hasValidPrefix) {
    // If missing or mismatched, redirect to same URL to set
    if (!abValue || prefix !== langCookie) {
      const response = NextResponse.redirect(url);
      if (!abValue) {
        response.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', { path: '/', maxAge: 60 * 60 * 24 * 30 });
      }
      if (prefix !== langCookie) {
        response.cookies.set(LANG_COOKIE_NAME, prefix, { path: '/', maxAge: 60 * 60 * 24 * 30 });
      }
      return response;
    }
    return NextResponse.next();
  }

  // 4b) Missing prefix: redirect to /<preferredLang><originalPath> and set cookies
  url.pathname = `/${preferredLang}${pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(AB_COOKIE_NAME, abValue ?? (Math.random() < 0.5 ? 'A' : 'B'), {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
  response.cookies.set(LANG_COOKIE_NAME, preferredLang, { path: '/', maxAge: 60 * 60 * 24 * 30 });
  return response;
}

export const config = {
  matcher: ['/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)'],
};
