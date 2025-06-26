import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
const AB_COOKIE_NAME = '@sutra-ab-test';
const LANG_COOKIE_NAME = '@sutra-user-lang';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // 1) UVIJEK redirect sa root "/" na "/:lang"
  if (pathname === '/') {
    // prvo očitaj (ili defaultaj na prazan string)
    let abGroup = request.cookies.get(AB_COOKIE_NAME)?.value ?? '';
    let userLangCookie = request.cookies.get(LANG_COOKIE_NAME)?.value ?? '';

    // odredi željeni jezik
    const acceptLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'hr';
    const langToUse: UserLanguage =
      userLangCookie && SUPPORTED_LANGUAGES.includes(userLangCookie as UserLanguage)
        ? (userLangCookie as UserLanguage)
        : ((SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang)) || 'hr') as UserLanguage);

    // redirect na "/:lang"
    url.pathname = `/${langToUse}`;
    const res = NextResponse.redirect(url);

    // cookie postavljamo samo kad ga nema ili se razlikuje
    if (!abGroup) {
      res.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', { maxAge: 60 * 60 * 24 * 30, path: '/' });
    }
    if (userLangCookie !== langToUse) {
      res.cookies.set(LANG_COOKIE_NAME, langToUse, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    }

    return res;
  }

  // 2) Skip static i API rute
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

  // 3) Čitanje cookie-ja, ali bez undefined:
  //    - za AB: prazan string ako nema
  //    - za LANG: ili cookie, ili segment iz patha, ili prazan string
  const rawLangCookie = request.cookies.get(LANG_COOKIE_NAME)?.value;
  const segment = pathname.split('/')[1] as UserLanguage;
  const derivedFromPath = SUPPORTED_LANGUAGES.includes(segment) ? segment : '';
  const userLangCookie = rawLangCookie ?? derivedFromPath;
  const abGroup = request.cookies.get(AB_COOKIE_NAME)?.value ?? '';

  // 4) Odredi željeni jezik za non-root (iz patha ili fallback na 'hr')
  const langToUse: UserLanguage = SUPPORTED_LANGUAGES.includes(segment) ? segment : ('hr' as any);

  // 5) Provjera infinite-loop: imamo li već ispravan prefix?
  const hasLangPrefix = SUPPORTED_LANGUAGES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  // 6) Ako fali AB ili cookie mismatch, i URL još nema prefix, redirect
  if ((!abGroup || userLangCookie !== langToUse) && !hasLangPrefix) {
    const segments = pathname.split('/').slice(2); // sve iza "/:lang"
    url.pathname = `/${langToUse}${segments.length ? '/' + segments.join('/') : ''}`;
    const res = NextResponse.redirect(url);

    if (!abGroup) {
      res.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', { maxAge: 60 * 60 * 24 * 30, path: '/' });
    }
    if (userLangCookie !== langToUse) {
      res.cookies.set(LANG_COOKIE_NAME, langToUse, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    }

    return res;
  }

  // 7) Sve ok → nastavi dalje
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml).*)',
};
