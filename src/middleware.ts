import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
const AB_COOKIE_NAME = '@sutra-ab-test';
const LANG_COOKIE_NAME = '@sutra-user-lang';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // skip static and API
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

  // read cookies
  const abGroup = request.cookies.get(AB_COOKIE_NAME)?.value;
  const userLangCookie = request.cookies.get(LANG_COOKIE_NAME)?.value;

  // determine desired language
  let langToUse: UserLanguage;
  // if we're on root, derive from cookie or accept-language
  if (pathname === '/') {
    if (userLangCookie && SUPPORTED_LANGUAGES.includes(userLangCookie as UserLanguage)) {
      langToUse = userLangCookie as UserLanguage;
    } else {
      const acceptLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'hr';
      langToUse = (SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang)) || 'hr') as UserLanguage;
    }
  } else {
    // for non-root, extract from path
    const segment = pathname.split('/')[1] as UserLanguage;
    langToUse = SUPPORTED_LANGUAGES.includes(segment) ? segment : ('hr' as UserLanguage);
  }

  // if either AB or lang cookie missing -> single redirect to correct path with both cookies
  if (!abGroup || userLangCookie !== langToUse) {
    // build new URL keeping path after lang
    const segments = pathname === '/' ? [] : pathname.split('/').slice(2);
    const newPath = ['', '' + langToUse, ...segments].join('/');
    const redirectUrl = new URL(newPath, url.origin);

    const res = NextResponse.redirect(redirectUrl);
    // set both cookies
    if (!abGroup) {
      const newGroup = Math.random() < 0.5 ? 'A' : 'B';
      res.cookies.set(AB_COOKIE_NAME, newGroup, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    }
    if (userLangCookie !== langToUse) {
      res.cookies.set(LANG_COOKIE_NAME, langToUse, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    }
    return res;
  }

  // all cookies present and path is valid, continue
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml).*)',
};
