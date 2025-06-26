import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
const AB_COOKIE_NAME = '@sutra-ab-test';
const LANG_COOKIE_NAME = '@sutra-user-lang';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Skip static and API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.endsWith('/sitemap.xml') ||
    pathname.endsWith('/robots.txt') ||
    pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  // Determine AB group and language cookie
  const abCookie = request.cookies.get(AB_COOKIE_NAME)?.value;
  const langCookie = request.cookies.get(LANG_COOKIE_NAME)?.value;

  // 1) Always handle root
  if (pathname === '/') {
    // Choose language
    const acceptLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'hr';
    const langToUse: UserLanguage = (
      langCookie && SUPPORTED_LANGUAGES.includes(langCookie as UserLanguage)
        ? langCookie
        : SUPPORTED_LANGUAGES.find((l) => l.startsWith(acceptLang)) || 'hr'
    ) as UserLanguage;

    // Redirect to /lang
    url.pathname = `/${langToUse}`;
    const res = NextResponse.redirect(url);

    // Set cookies if missing
    if (!abCookie)
      res.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', { maxAge: 60 * 60 * 24 * 30, path: '/' });
    if (langCookie !== langToUse)
      res.cookies.set(LANG_COOKIE_NAME, langToUse, { maxAge: 60 * 60 * 24 * 30, path: '/' });

    return res;
  }

  // 2) For non-root, extract first segment
  const segment = pathname.split('/')[1] as UserLanguage;
  const validLang = SUPPORTED_LANGUAGES.includes(segment);
  const langToUse: UserLanguage = validLang ? segment : ('hr' as any);
  const hasLangPrefix = validLang;

  // 3) If missing prefix or cookies, redirect once
  if (!hasLangPrefix || !abCookie || langCookie !== langToUse) {
    // Build new path: /lang/...rest
    const rest = hasLangPrefix ? pathname.split('/').slice(2).join('/') : pathname.slice(1);
    url.pathname = `/${langToUse}${rest ? '/' + rest : ''}`;
    const res = NextResponse.redirect(url);

    // Set AB cookie if missing
    if (!abCookie)
      res.cookies.set(AB_COOKIE_NAME, Math.random() < 0.5 ? 'A' : 'B', { maxAge: 60 * 60 * 24 * 30, path: '/' });
    // Set lang cookie if mismatch
    if (langCookie !== langToUse)
      res.cookies.set(LANG_COOKIE_NAME, langToUse, { maxAge: 60 * 60 * 24 * 30, path: '/' });

    return res;
  }

  // 4) All good
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)',
};
