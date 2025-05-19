// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

const COOKIE_NAME = '@sutra-user-lang'; // bez '@'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 dana
const SUPPORTED_LANGUAGES = Object.values(UserLanguage);

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const p = url.pathname;
  const cookieLang = request.cookies.get(COOKIE_NAME)?.value as string | undefined;

  // 1) Izuzeci za statiku, API, _next, favicon, sitemap i .well‑known
  if (
    p.startsWith('/api') ||
    p.startsWith('/_next') ||
    p.startsWith('/static') ||
    p === '/favicon.ico' ||
    p === '/sitemap.xml' ||
    p.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  // 2) Korisnik na root "/"
  if (p === '/') {
    // 2.a) iz cookieja
    if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang as UserLanguage)) {
      const res = NextResponse.redirect(new URL(`/${cookieLang}`, request.url));
      res.cookies.set(COOKIE_NAME, cookieLang, { maxAge: COOKIE_MAX_AGE, path: '/' });
      return res;
    }
    // 2.b) iz headera
    const accept = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
    const matched = SUPPORTED_LANGUAGES.find((l) => l.startsWith(accept || ''));
    const langToUse = matched || UserLanguage.hr;
    const res = NextResponse.redirect(new URL(`/${langToUse}`, request.url));
    res.cookies.set(COOKIE_NAME, langToUse, { maxAge: COOKIE_MAX_AGE, path: '/' });
    return res;
  }

  // 3) Dohvati prvi segment i provjeri je li validan jezik
  const [_, first] = p.split('/');
  if (!SUPPORTED_LANGUAGES.includes(first as UserLanguage)) {
    // nije validno /lang/... → pusti Next.js da izgenerira 404 ili drugu logiku
    return NextResponse.next();
  }

  // 4) Validan jezik u pathu
  const pathLang = first as UserLanguage;
  const res = NextResponse.next();

  // 5) Ako cookie ne postoji ili se razlikuje, sinkroniziraj
  if (cookieLang !== pathLang) {
    res.cookies.set(COOKIE_NAME, pathLang, {
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    });
  }

  return res;
}

export const config = {
  matcher: '/((?!api|_next|static|favicon.ico|sitemap.xml).*)',
};
