import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-phone-number-input/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@uploadcare/react-uploader/core.css';
import '@uploadcare/blocks/web/lr-file-uploader-regular.min.css';
import AppHeader from './globalComponents/AppHeader';
import AppFooter from './globalComponents/AppFooter';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from './providers';
import { appleTouchIcons, favicons } from './pathsUtils/mediaImportsDynamic';
import { getAdminTokensQuery } from './queries/getAdminTokens';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import Script from 'next/script';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

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
  const getAllTokens = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAdminTokensQuery(),
    }),
    cache: 'no-cache',
  });

  const adminTokenData = await getAllTokens.json();

  const adminTokenDataShorthand = adminTokenData.data.kodoviApitokenStylebox.edges[0].node;

  console.log('darmar', adminTokenDataShorthand.kodoviAdminApi.hotjar);

  return (
    <html
      lang='en'
      className='scrollbar scrollbar-thumb-primary-light dark:scrollbar-thumb-primary-dark  scrollbar-track-primary-dark dark:scrollbar-track-primary-light '
    >
      <body className={poppins.className}>
        {adminTokenDataShorthand.kodoviAdminApi.googleAnalytics && (
          <GoogleAnalytics gaId={adminTokenDataShorthand.kodoviAdminApi.googleAnalytics} />
        )}
        {adminTokenDataShorthand.kodoviAdminApi.googleTagManager && (
          <GoogleTagManager gtmId={adminTokenDataShorthand.kodoviAdminApi.googleTagManager} />
        )}
        <Suspense fallback={<Loading />}>
          <AppHeader />
          <Toaster />
          <Providers>{children}</Providers>

          <AppFooter />
        </Suspense>
        {adminTokenDataShorthand.kodoviAdminApi.microsoftClarity && (
          <Script id='clarity-script' strategy='afterInteractive'>
            {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${adminTokenDataShorthand.kodoviAdminApi.microsoftClarity}");
          `}
          </Script>
        )}
        {adminTokenDataShorthand.kodoviAdminApi.hotjar && (
          <Script id='hotjar-snippet'>
            {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${adminTokenDataShorthand.kodoviAdminApi.hotjar},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
          </Script>
        )}
      </body>
    </html>
  );
}
