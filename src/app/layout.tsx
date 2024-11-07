export const maxDuration = 60;

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';

import { cookies } from 'next/headers';
import { UserLanguage } from './enums/LangEnum';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from './providers';
import { appleTouchIcons, favicons } from './pathsUtils/mediaImportsDynamic';
import { getAdminTokensQuery } from './queries/getAdminTokens';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import Script from 'next/script';
import CookieConsentNotification from './components/CookiesNotification';
import { getAdminTekstoviManjihKomponentiQuery } from './queries/getAdminTekstoviManjihKomponenti';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });

import { getBasicSchemaOrgProjectQuery } from './queries/getBasicSchemaOrgProjectQuery';
import dynamic from 'next/dynamic';

const AppHeader = dynamic(() => import('./globalComponents/AppHeader'), { ssr: false });
const AppFooter = dynamic(() => import('./globalComponents/AppFooter'), { ssr: false });
import { fetchData } from './utils/callApi';
import { generateSeoSchemaOrg } from './utils/generateSchemaGlobal';

export const metadata: Metadata = {
  title: 'Sutra mastodont',
  description: 'One repo to rule them all',

  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '196x196',
      url: favicons['196x196'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: favicons['96x96'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: favicons['32x32'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: favicons['16x16'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '128x128',
      url: favicons['128x128'],
    },
    // Apple Touch Icons
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      url: appleTouchIcons['57x57'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: appleTouchIcons['114x114'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: appleTouchIcons['72x72'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: appleTouchIcons['144x144'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: appleTouchIcons['60x60'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: appleTouchIcons['120x120'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: appleTouchIcons['76x76'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: appleTouchIcons['152x152'],
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adminTokens = await fetchData(getAdminTokensQuery());
  const adminTekstovi = await fetchData(getAdminTekstoviManjihKomponentiQuery());
  const parseSchemaData = await fetchData(getBasicSchemaOrgProjectQuery());

  const adminTokensDataShorthand = !adminTokens.error ? adminTokens.data.kodoviApitokenStylebox?.edges[0]?.node : null;
  const adminTekstoviShorthand = !adminTekstovi.error
    ? adminTekstovi.data?.allAdminTekstoviManjihKomponenti?.edges[0]?.node
    : null;

  const schemaBasicData = !parseSchemaData.error ? generateSeoSchemaOrg(parseSchemaData) : null;

  const getUserCookieConsent = cookies().get('@sutra-cookies-consent')?.value;
  const userEnabledAllCookies = getUserCookieConsent === 'true';

  const cookieStore = cookies();
  const lang = (cookieStore.get('@sutra-user-lang')?.value as UserLanguage) || 'hr';

  return (
    <html lang={lang} className='scrollbar scrollbar-thumb-accent-boja scrollbar-track-primarna-tamna'>
      <body className={`${poppins.className} w-full h-full`}>
        {adminTekstoviShorthand && <CookieConsentNotification pageContent={adminTekstoviShorthand} />}

        {adminTokensDataShorthand?.kodoviAdminApi?.googleAnalytics && userEnabledAllCookies && (
          <GoogleAnalytics gaId={adminTokensDataShorthand.kodoviAdminApi.googleAnalytics} />
        )}

        {adminTokensDataShorthand?.kodoviAdminApi?.googleTagManager && userEnabledAllCookies && (
          <GoogleTagManager gtmId={adminTokensDataShorthand.kodoviAdminApi.googleTagManager} />
        )}

        <AppHeader />
        <Toaster />
        <Suspense fallback={<Loading />}>
          <Providers>{children}</Providers>
        </Suspense>
        <AppFooter />

        {schemaBasicData && (
          <Script id='schema-org' type='application/ld+json' dangerouslySetInnerHTML={{ __html: schemaBasicData }} />
        )}

        {adminTokensDataShorthand?.kodoviAdminApi?.microsoftClarity && userEnabledAllCookies && (
          <Script id='clarity-script' strategy='afterInteractive'>
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${adminTokensDataShorthand.kodoviAdminApi.microsoftClarity}");
            `}
          </Script>
        )}

        {adminTokensDataShorthand?.kodoviAdminApi?.hotjar && userEnabledAllCookies && (
          <Script id='hotjar-snippet'>
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${adminTokensDataShorthand.kodoviAdminApi.hotjar},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}

        {adminTokensDataShorthand?.kodoviAdminApi?.plerdySiteHashCode &&
          adminTokensDataShorthand?.kodoviAdminApi?.plerdySuidSiteUniqueId &&
          userEnabledAllCookies && (
            <Script id='plerdy-script' strategy='afterInteractive'>
              {`
                var _protocol="https:"==document.location.protocol?"https://":"http://";
                var _site_hash_code = "${adminTokensDataShorthand.kodoviAdminApi.plerdySiteHashCode}";
                var _suid = ${adminTokensDataShorthand.kodoviAdminApi.plerdySuidSiteUniqueId};
                var plerdyScript=document.createElement("script");
                plerdyScript.setAttribute("defer","");
                plerdyScript.dataset.plerdymainscript="plerdymainscript";
                plerdyScript.src="https://a.plerdy.com/public/js/click/main.js?v="+Math.random();
                var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
                if(plerdymainscript) plerdymainscript.parentNode.removeChild(plerdymainscript);
                try {
                  document.head.appendChild(plerdyScript);
                } catch(t) {
                  console.log(t,"unable to add script tag");
                }
              `}
            </Script>
          )}

        {adminTokensDataShorthand?.kodoviAdminApi?.inspectlet && userEnabledAllCookies && (
          <Script id='inspectlet-script' strategy='afterInteractive'>
            {`
              window.__insp = window.__insp || [];
              __insp.push(['wid', ${adminTokensDataShorthand.kodoviAdminApi.inspectlet}]);
              (function() {
                function ldinsp() {
                  if (typeof window.__inspld != "undefined") return;
                  window.__inspld = 1;
                  var insp = document.createElement('script');
                  insp.type = 'text/javascript';
                  insp.async = true;
                  insp.id = "inspsync";
                  insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=${adminTokensDataShorthand.kodoviAdminApi.inspectlet}&r=' + Math.floor(new Date().getTime()/3600000);
                  var x = document.getElementsByTagName('script')[0];
                  x.parentNode.insertBefore(insp, x);
                }
                setTimeout(ldinsp, 0);
              })();
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
