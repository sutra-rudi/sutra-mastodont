import React from 'react';

interface Footer {
  logos: any;
  currentLang: any;
}

export default async function AppFooter({ logos, currentLang }: Footer) {
  return (
    <footer className='bg-sekundarna-tamna lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl min-h-[300px]'>
      <div className='container mx-auto px-4 flex justify-between w-full h-full'>
        <picture>
          <img
            src={logos.verticalDark}
            alt='SITE_LOGO'
            width={190}
            height={50}
            className='aspect-auto object-cover object-center block'
          />
        </picture>

        <div className='flex items-start justify-end gap-12 text-text-dark-mode'>
          <div className='flex flex-col'>
            <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
              Linkovi
            </p>
            <div className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-small md:-gap--tablet-liste-udaljenost-u-listama-small -gap--mobile-liste-udaljenost-u-listama-small text-almost-white/80'>
              <a
                href=''
                className='cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-white hover:translate-x-1'
              >
                Neki link jedan
              </a>
              <a
                href=''
                className='cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-white hover:translate-x-1'
              >
                Neki link dva
              </a>
              <a
                href=''
                className='cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-white hover:translate-x-1'
              >
                Neki link tri
              </a>
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
              Social
            </p>
            <div className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-small md:-gap--tablet-liste-udaljenost-u-listama-small -gap--mobile-liste-udaljenost-u-listama-small text-almost-white/80'>
              <a
                href=''
                className='cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-white hover:translate-x-1'
              >
                Social link jedan
              </a>
              <a
                href=''
                className='cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-white hover:translate-x-1'
              >
                Social link dva
              </a>
              <a
                href=''
                className='cursor-pointer transition-all ease-in-out duration-300 hover:text-almost-white hover:translate-x-1'
              >
                Social link tri
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-12 bg-primarna-tamna mt-auto'></div>
    </footer>
  );
}
