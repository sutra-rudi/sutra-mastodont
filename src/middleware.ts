import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Read cookies
  const userLangCookie = request.cookies.get('@sutra-user-lang')?.value;
  const abCookieName = '@sutra-ab-test';
  const abGroup = request.cookies.get(abCookieName)?.value;

  // Helper: redirect and set lang cookie
  const redirectToLanguage = (lang: string) => {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${lang}`;
    const res = NextResponse.redirect(newUrl);
    res.cookies.set('@sutra-user-lang', lang, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    return res;
  };

  // Exclude static and API routes
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.endsWith('/favicon.ico') ||
    pathname.endsWith('/sitemap.xml') ||
    pathname.endsWith('/robots.txt') ||
    pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  // If AB cookie missing, redirect just once to set it
  if (!abGroup) {
    const newGroup = Math.random() < 0.5 ? 'A' : 'B';
    const res = NextResponse.next();
    res.cookies.set(abCookieName, newGroup, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    return res;
  }

  // Root path: decide language and redirect
  if (pathname === '/') {
    if (userLangCookie && SUPPORTED_LANGUAGES.includes(userLangCookie as UserLanguage)) {
      return redirectToLanguage(userLangCookie);
    }

    const acceptLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
    const matchedLang = SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang ?? ''));

    return redirectToLanguage(matchedLang || 'hr');
  }

  // Extract language from URL
  const langInPath = pathname.split('/')[1];

  // If path doesn't include valid language, redirect to default
  if (!SUPPORTED_LANGUAGES.includes(langInPath as UserLanguage)) {
    return redirectToLanguage('hr');
  }

  // If language cookie is missing, set it based on the URL
  if (!userLangCookie) {
    const res = NextResponse.next();
    res.cookies.set('@sutra-user-lang', langInPath, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    return res;
  }

  return NextResponse.next();
}

// Apply to all routes except known static/api ones
export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)',
};
