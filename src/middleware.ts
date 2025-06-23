import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const url = request.nextUrl;
  const pathname = url.pathname;

  const abCookieName = '@sutra-ab-test';
  const abGroup = request.cookies.get(abCookieName)?.value;

  // 👇 Special route used to finalize AB test cookie init
  if (pathname === '/__init-ab') {
    const returnTo = url.searchParams.get('returnTo') || '/';
    if (!abGroup) {
      const newGroup = Math.random() < 0.5 ? 'A' : 'B';
      const res = NextResponse.redirect(new URL(returnTo, request.url));
      res.cookies.set(abCookieName, newGroup, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      return res;
    }
    return NextResponse.redirect(new URL(returnTo, request.url));
  }

  // ❗ If abGroup is missing — redirect to init route
  if (!abGroup) {
    const redirectUrl = new URL('/__init-ab', request.url);
    redirectUrl.searchParams.set('returnTo', url.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Static/api exclusions
  if (
    pathname === '/.well-known/appspecific/com.chrome.devtools.json' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico' ||
    pathname.endsWith('/sitemap.xml') ||
    pathname.endsWith('/robots.txt') ||
    pathname === '/__init-ab'
  ) {
    return NextResponse.next();
  }

  const userLangCookie = request.cookies.get('@sutra-user-lang')?.value;

  const redirectToLanguage = (lang: string) => {
    const res = NextResponse.redirect(url);
    res.cookies.set('@sutra-user-lang', lang, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return res;
  };

  if (pathname === '/') {
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

  const langInPath = pathname.split('/')[1];
  if (!SUPPORTED_LANGUAGES.includes(langInPath as UserLanguage)) {
    return redirectToLanguage('hr');
  }

  if (!userLangCookie) {
    const res = NextResponse.redirect(url);
    res.cookies.set('@sutra-user-lang', langInPath, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!favicon.ico|_next|static|api|sitemap.xml).*)',
};
