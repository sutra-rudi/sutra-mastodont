import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);

  // Izuzmi sitemap.xml iz middleware-a
  if (request.nextUrl.pathname === '/sitemap.xml' || request.nextUrl.pathname.startsWith('/hr/sitemap.xml')) {
    return NextResponse.next();
  }

  // Ako je URL osnovni ("/"), preusmjerite na "/hr"
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/hr', request.url));
  }

  const pathSegments = request.nextUrl.pathname.split('/');
  const lang = pathSegments[1];

  if (!SUPPORTED_LANGUAGES.includes(lang as UserLanguage)) {
    return NextResponse.redirect(new URL('/hr', request.url));
  }

  // Ako nije osnovni URL, samo nastavi s trenutnim zahtjevom
  return NextResponse.next();
}

// Konfigurirajte middleware da presreće osnovni URL ("/")
export const config = {
  matcher: '/((?!api|_next|static|favicon.ico|sitemap.xml).*)',
};
