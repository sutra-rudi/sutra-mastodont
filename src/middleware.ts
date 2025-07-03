import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const userLangFromCookie = request.cookies.get('@sutra-user-lang')?.value;
  const url = request.nextUrl;

  // Funkcija za preusmjeravanje s postavljanjem jezika u kolačić
  const redirectToLanguage = (lang: string) => {
    const response = NextResponse.redirect(new URL(`/${lang}`, url));
    response.cookies.set('@sutra-user-lang', lang, { maxAge: 60 * 60 * 24 * 30 }); // 30 dana trajanja
    return response;
  };

  // Izuzetak za sitemap.xml
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/static') ||
    url.pathname.startsWith('/api') ||
    url.pathname === '/favicon.ico' ||
    url.pathname.endsWith('/sitemap.xml') ||
    url.pathname.endsWith('/robots.txt') ||
    url.pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  // Ako korisnik posjećuje osnovnu stranicu "/"
  if (url.pathname === '/') {
    if (userLangFromCookie && SUPPORTED_LANGUAGES.includes(userLangFromCookie as UserLanguage)) {
      return redirectToLanguage(userLangFromCookie);
    }

    const acceptLanguage = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
    if (acceptLanguage) {
      const langMatch = SUPPORTED_LANGUAGES.find((lang) => lang.startsWith(acceptLanguage));
      if (langMatch) return redirectToLanguage(langMatch);
    }
    return redirectToLanguage('hr');
  }

  // Pročitaj jezik iz putanje ("/lang/...")
  const lang = url.pathname.split('/')[1];
  if (!SUPPORTED_LANGUAGES.includes(lang as UserLanguage)) return redirectToLanguage('hr');

  // Ako kolačić nije postavljen, postavi ga
  if (!userLangFromCookie) {
    const response = NextResponse.next();
    response.cookies.set('@sutra-user-lang', lang, { maxAge: 60 * 60 * 24 * 30 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next|static|favicon.ico|sitemap.xml).*)',
};
