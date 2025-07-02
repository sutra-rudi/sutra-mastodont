import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
const AB_COOKIE_NAME = '@sutra-ab-test';
const LANG_COOKIE_NAME = '@sutra-user-lang';

/**
 * Middleware to handle language prefixing and A/B testing cookie setup.
 * - Redirects root "/" to preferred language based on cookie > Accept-Language > default 'hr'.
 * - Ensures all non-static paths are prefixed with a valid language code.
 * - Sets or syncs A/B test and language cookies.
 */
export function middleware(request: NextRequest) {
  const { nextUrl, cookies, headers } = request;
  const url = nextUrl.clone();
  const pathname = url.pathname;

  // Skip static assets and API routes
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

  // Prepare cookies
  const abValue = cookies.get(AB_COOKIE_NAME)?.value;
  const langCookie = cookies.get(LANG_COOKIE_NAME)?.value as UserLanguage | undefined;

  // Determine preferred language: cookie > Accept-Language > 'hr'
  const acceptLang = headers.get('accept-language')?.split(',')[0].split('-')[0];
  const preferredLang = (
    langCookie && SUPPORTED_LANGUAGES.includes(langCookie)
      ? langCookie
      : SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang || '')) || 'hr'
  ) as UserLanguage;

  // 1) Root path: redirect once to /<lang>
  if (pathname === '/') {
    url.pathname = `/${preferredLang}`;
    const response = NextResponse.redirect(url);
    // Set AB cookie if missing
    if (!abValue) {
      response.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', {
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      });
    }
    // Set language cookie
    response.cookies.set(LANG_COOKIE_NAME, preferredLang, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    return response;
  }

  // 2) Check for existing prefix
  const segments = pathname.split('/');
  const prefix = segments[1] as UserLanguage;
  const hasValidPrefix = SUPPORTED_LANGUAGES.includes(prefix);

  // If URL has a valid prefix
  if (hasValidPrefix) {
    // Sync cookies if needed
    let response = NextResponse.next();
    // Ensure AB cookie
    if (!abValue) {
      response.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', { path: '/', maxAge: 60 * 60 * 24 * 30 });
    }
    // If prefix !== cookie, overwrite cookie to match prefix
    if (prefix !== langCookie) {
      response.cookies.set(LANG_COOKIE_NAME, prefix, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    }
    return response;
  }

  // 3) Missing prefix: redirect once to /<preferredLang><originalPath>
  url.pathname = `/${preferredLang}${pathname}`;
  const response = NextResponse.redirect(url);
  // Set cookies
  if (!abValue) {
    response.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', { path: '/', maxAge: 60 * 60 * 24 * 30 });
  }
  response.cookies.set(LANG_COOKIE_NAME, preferredLang, { path: '/', maxAge: 60 * 60 * 24 * 30 });
  return response;
}

export const config = {
  matcher: ['/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)'],
};
