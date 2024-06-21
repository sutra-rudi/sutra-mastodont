import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import AppHeader from './globalComponents/AppHeader';

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
    <html lang='en'>
      <body className={inter.className}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
