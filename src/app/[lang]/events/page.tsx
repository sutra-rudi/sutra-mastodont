import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import React from 'react';

export default function EventsPage({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen bg-white z-40 -mt--desktop---5xl'>
      <div className='container mx-auto px-4 lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj'>
        <Breadcrumbs />
      </div>
      <div className='container mx-auto px-4 flex items-center justify-center w-full h-full'>
        <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-light-mode dark:text-hero-heading-color-dark-mode'>
          Arhiva eventova
        </h1>
      </div>
    </main>
  );
}
