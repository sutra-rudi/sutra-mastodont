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
import SpeedDial from './components/SpeedDial';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from './providers';

// const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Sutra mastodont',
  description: 'One repo to rule them all',

  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: 'https://cms.sutra.hr/cms_sutra/Favicon/favicon-32x32.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='scrollbar scrollbar-thumb-primary-light dark:scrollbar-thumb-primary-dark  scrollbar-track-primary-dark dark:scrollbar-track-primary-light '
    >
      <body className={poppins.className}>
        <Suspense fallback={<Loading />}>
          <AppHeader />
          <Toaster />
          <Providers>{children}</Providers>

          <AppFooter />
        </Suspense>
      </body>
    </html>
  );
}
