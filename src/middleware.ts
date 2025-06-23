import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const url = request.nextUrl;

  // Read cookies
  const userLangCookie = request.cookies.get('@sutra-user-lang')?.value;
  const abCookieName = '@sutra-ab-test';
  const abGroup = request.cookies.get(abCookieName)?.value;

  // If AB cookie missing, first set it via redirect so next request SSR sees it
  if (!abGroup) {
    const newGroup = Math.random() < 0.5 ? 'A' : 'B';
    const res = NextResponse.redirect(url);
    res.cookies.set(abCookieName, newGroup, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    return res;
  }

  // Helper: redirect and set lang cookie
  const redirectToLanguage = (lang: string) => {
    const res = NextResponse.redirect(url);
    res.cookies.set('@sutra-user-lang', lang, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    return res;
  };

  // Exclude static and API routes
  if (
    url.pathname === '/.well-known/appspecific/com.chrome.devtools.json' ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/static') ||
    url.pathname === '/favicon.ico' ||
    url.pathname.endsWith('/sitemap.xml') ||
    url.pathname.endsWith('/robots.txt')
  ) {
    return NextResponse.next();
  }

  // Root: redirect based on cookie or header
  if (url.pathname === '/') {
    if (userLangCookie && SUPPORTED_LANGUAGES.includes(userLangCookie as UserLanguage)) {
      return redirectToLanguage(userLangCookie);
    }
    const acceptLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
    if (acceptLang) {
      const match = SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang));
      if (match) return redirectToLanguage(match);
    }
    return redirectToLanguage('hr');
  }

  // Path includes language segment
  const langInPath = url.pathname.split('/')[1];
  if (!SUPPORTED_LANGUAGES.includes(langInPath as UserLanguage)) {
    return redirectToLanguage('hr');
  }

  // If language cookie missing, redirect once to set it
  if (!userLangCookie) {
    const res = NextResponse.redirect(url);
    res.cookies.set('@sutra-user-lang', langInPath, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    return res;
  }

  // All cookies present, proceed
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!favicon.ico|_next|static|api|sitemap.xml).*)',
};
