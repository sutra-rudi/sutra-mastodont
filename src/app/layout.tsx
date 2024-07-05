import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppHeader from './globalComponents/AppHeader';
import AppFooter from './globalComponents/AppFooter';
import { Toaster } from 'react-hot-toast';
import SpeedDial from './components/SpeedDial';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sutra mastodont',
  description: 'One repo to rule them all',
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
      <body className={inter.className}>
        <AppHeader />
        <Toaster />
        {children}
        <SpeedDial />
        <AppFooter />
      </body>
    </html>
  );
}
