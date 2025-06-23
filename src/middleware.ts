import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
const AB_COOKIE_NAME = '@sutra-ab-test';
const LANG_COOKIE_NAME = '@sutra-user-lang';
const INIT_PATH = '/__init-ab';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  const abGroup = request.cookies.get(AB_COOKIE_NAME)?.value;
  const userLangCookie = request.cookies.get(LANG_COOKIE_NAME)?.value;

  // Skip static and API routes
  if (
    pathname === '/.well-known/appspecific/com.chrome.devtools.json' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.endsWith('/sitemap.xml') ||
    pathname.endsWith('/robots.txt')
  ) {
    return NextResponse.next();
  }

  // 1. Handle the /__init-ab route
  if (pathname === INIT_PATH) {
    const returnTo = url.searchParams.get('returnTo') || '/';
    const newGroup = Math.random() < 0.5 ? 'A' : 'B';

    const response = NextResponse.redirect(new URL(returnTo, request.url));
    response.cookies.set(AB_COOKIE_NAME, newGroup, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return response;
  }

  // 2. If A/B cookie missing, redirect to /__init-ab with returnTo
  if (!abGroup) {
    const redirectUrl = new URL(INIT_PATH, request.url);
    redirectUrl.searchParams.set('returnTo', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // 3. Root route "/" → redirect based on cookie or header
  if (pathname === '/') {
    if (userLangCookie && SUPPORTED_LANGUAGES.includes(userLangCookie as UserLanguage)) {
      return redirectToLanguage(url, userLangCookie);
    }

    const acceptLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
    const match = acceptLang && SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang));
    return redirectToLanguage(url, match || 'hr');
  }

  // 4. Path should contain valid language (e.g. /hr, /eng)
  const langInPath = pathname.split('/')[1];
  if (!SUPPORTED_LANGUAGES.includes(langInPath as UserLanguage)) {
    return redirectToLanguage(url, 'hr');
  }

  // 5. If lang cookie missing, set it without redirect loop
  if (!userLangCookie) {
    const response = NextResponse.next();
    response.cookies.set(LANG_COOKIE_NAME, langInPath, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return response;
  }

  return NextResponse.next();
}

// Utility function to redirect and set language cookie
function redirectToLanguage(currentUrl: URL, lang: string) {
  const redirectUrl = new URL(`/${lang}`, currentUrl.origin);
  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set(LANG_COOKIE_NAME, lang, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  });
  return response;
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|sitemap.xml|robots.txt).*)',
};
