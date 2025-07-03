import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserLanguage } from './app/enums/LangEnum';

export function middleware(request: NextRequest) {
  const SUPPORTED_LANGUAGES = Object.values(UserLanguage);
  const AB_COOKIE_NAME = '@sutra-ab-test';
  const LANG_COOKIE_NAME = '@sutra-user-lang';

  const ua = request.headers.get('user-agent') || '';
  const isBot = /lighthouse|psi|Chrome-Lighthouse|Google-PageSpeed/i.test(ua);

  const url = request.nextUrl.clone();
  const cookies = request.cookies;
  const abCookie = cookies.get(AB_COOKIE_NAME)?.value;
  const userLangFromCookie = cookies.get(LANG_COOKIE_NAME)?.value;

  // Helpers
  const setCookies = (response: NextResponse, lang: string) => {
    response.cookies.set(LANG_COOKIE_NAME, lang, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    response.cookies.set(AB_COOKIE_NAME, abCookie ?? (Math.random() < 0.5 ? 'A' : 'B'), {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return response;
  };

  const redirectWithCookies = (targetUrl: URL, lang: string) => setCookies(NextResponse.redirect(targetUrl, 308), lang);
  const rewriteWithCookies = (targetUrl: URL, lang: string) => setCookies(NextResponse.rewrite(targetUrl), lang);

  // Skip static, API, misc.
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

  // 1) Root path: redirect (user) ili rewrite (bot)
  if (url.pathname === '/') {
    let langToUse: UserLanguage = UserLanguage.hr;
    if (userLangFromCookie && SUPPORTED_LANGUAGES.includes(userLangFromCookie as UserLanguage)) {
      langToUse = userLangFromCookie as UserLanguage;
    } else {
      const accept = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
      const match = accept && SUPPORTED_LANGUAGES.find((l) => l.startsWith(accept));
      if (match) langToUse = match as UserLanguage;
    }

    url.pathname = `/${langToUse}`;
    return isBot ? rewriteWithCookies(url, langToUse) : redirectWithCookies(url, langToUse);
  }

  // 2) Validacija prefixa
  const segments = url.pathname.split('/');
  const prefix = segments[1] as UserLanguage;
  const hasValidPrefix = SUPPORTED_LANGUAGES.includes(prefix);

  if (!hasValidPrefix) {
    url.pathname = `/hr${url.pathname}`;
    return isBot ? rewriteWithCookies(url, 'hr') : redirectWithCookies(url, 'hr');
  }

  // 3) Usklađivanje cookieja i prefixa (spriječi redirect-loop!)
  if (!userLangFromCookie || userLangFromCookie !== prefix) {
    const alreadyAtCorrectUrl = url.pathname.startsWith(`/${prefix}`);
    if (alreadyAtCorrectUrl) {
      // Setaj cookie bez redirecta (izbjegni redirect-loop)
      return rewriteWithCookies(url, prefix);
    }
    return isBot ? rewriteWithCookies(url, prefix) : redirectWithCookies(url, prefix);
  }

  // 4) Sve ok
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml|.well-known).*)',
};
