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
    const abGroup = request.cookies.get(AB_COOKIE_NAME)?.value;
    const userLangCookie = request.cookies.get(LANG_COOKIE_NAME)?.value as UserLanguage | undefined;

    // odredi željeni jezik
    const acceptLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'hr';
    const langToUse =
      userLangCookie && SUPPORTED_LANGUAGES.includes(userLangCookie)
        ? userLangCookie
        : ((SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang)) || 'hr') as UserLanguage);

    // redirect na "/:lang"
    url.pathname = `/${langToUse}`;
    const res = NextResponse.redirect(url);

    // postavi AB-test cookie ako ga nema
    if (!abGroup) {
      res.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    }
    // postavi jezični cookie ako se razlikuje
    if (userLangCookie !== langToUse) {
      res.cookies.set(LANG_COOKIE_NAME, langToUse, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
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

  // 3) Čitanje cookie-ja
  const abGroup = request.cookies.get(AB_COOKIE_NAME)?.value;
  const userLangCookie = request.cookies.get(LANG_COOKIE_NAME)?.value as UserLanguage | undefined;

  // 4) Odredi željeni jezik za non-root
  let langToUse: UserLanguage;
  const segment = pathname.split('/')[1] as UserLanguage;
  if (SUPPORTED_LANGUAGES.includes(segment)) {
    langToUse = segment;
  } else {
    langToUse = 'hr' as any;
  }

  // 5) Provjera infinite-loop: imamo li već ispravan prefix?
  const hasLangPrefix = SUPPORTED_LANGUAGES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  // 6) Ako fali AB ili cookie mismatch, i URL još nema prefix, redirect
  if ((!abGroup || userLangCookie !== langToUse) && !hasLangPrefix) {
    // sredi novi path
    const segments = pathname.split('/').slice(2); // sve iza "/:lang"
    url.pathname = `/${langToUse}${segments.length ? '/' + segments.join('/') : ''}`;
    const res = NextResponse.redirect(url);

    if (!abGroup) {
      res.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    }
    if (userLangCookie !== langToUse) {
      res.cookies.set(LANG_COOKIE_NAME, langToUse, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    }

    return res;
  }

  // 7) Sve ok → nastavi dalje
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml).*)',
};
