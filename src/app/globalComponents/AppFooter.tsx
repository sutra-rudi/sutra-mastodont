'use client';

import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';

interface Footer {
  logos: any;
}

export default function AppFooter({ logos }: Footer) {
  const currentPath = usePathname();

  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];
  const linksLegalSet = [
    {
      hr: 'Uvijeti korištenja',
      eng: 'Terms of Use',
      ger: 'Nutzungsbedingungen',
      ita: 'Termini di utilizzo',
      esp: 'Términos de uso',
      fra: "Conditions d'utilisation",
      url: `/${currentLang}/terms-of-use`,
    },
    {
      hr: 'Politika kolačića',
      eng: 'Cookie Policy',
      ger: 'Cookie-Richtlinie',
      ita: 'Politica sui cookie',
      esp: 'Política de cookies',
      fra: 'Politique de cookies',
      url: `/${currentLang}/cookie-policy`,
    },
    {
      hr: 'Pravila privatnosti',
      eng: 'Privacy Policy',
      ger: 'Datenschutzrichtlinie',
      ita: 'Norme sulla privacy',
      esp: 'Política de privacidad',
      fra: 'Politique de confidentialité',
      url: `/${currentLang}/privacy-policy`,
    },
  ];
  return (
    <footer className='bg-sekundarna-tamna flex flex-col sticky bottom-0 w-full'>
      <div className='flex-grow flex items-center py-12'>
        <div className='container mx-auto px-4 flex items-center md:justify-between justify-center md:gap-0 gap-10 w-full md:flex-nowrap flex-wrap'>
          <picture>
            <img
              src={logos.verticalDark}
              alt='SITE_LOGO'
              width={190}
              height={50}
              className='aspect-auto object-cover object-center block'
            />
          </picture>

          <div className='flex items-start  justify-end gap-12 text-text-dark-mode'>
            <div className='flex flex-col'>
              <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
                Linkovi
              </p>
              <div className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-small md:-gap--tablet-liste-udaljenost-u-listama-small -gap--mobile-liste-udaljenost-u-listama-small text-almost-white/80'>
                <a href='' className='cursor-pointer transition-all hover:text-almost-white hover:translate-x-1'>
                  Neki link jedan
                </a>
                <a href='' className='cursor-pointer transition-all hover:text-almost-white hover:translate-x-1'>
                  Neki link dva
                </a>
                <a href='' className='cursor-pointer transition-all hover:text-almost-white hover:translate-x-1'>
                  Neki link tri
                </a>
              </div>
            </div>

            <div className='flex flex-col'>
              <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
                Social
              </p>
              <div className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-small md:-gap--tablet-liste-udaljenost-u-listama-small -gap--mobile-liste-udaljenost-u-listama-small text-almost-white/80'>
                <a href='' className='cursor-pointer transition-all hover:text-almost-white hover:translate-x-1'>
                  Social link jedan
                </a>
                <a href='' className='cursor-pointer transition-all hover:text-almost-white hover:translate-x-1'>
                  Social link dva
                </a>
                <a href='' className='cursor-pointer transition-all hover:text-almost-white hover:translate-x-1'>
                  Social link tri
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full py-6 bg-primarna-tamna text-almost-white'>
        <div className='container mx-auto px-4 flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between w-full h-full'>
          <div className='flex md:flex-row flex-col items-center md:justify-start justify-center gap-6 lg:text-text-base-base-desktop text-sm'>
            {linksLegalSet.map((l) => {
              return (
                <a
                  href={l.url}
                  key={l.url}
                  className='cursor-pointer transition-all text-almost-white/80 hover:text-almost-white hover:translate-x-1'
                >
                  {
                    //@ts-ignore
                    l[currentLang]
                  }
                </a>
              );
            })}
          </div>
          <div className='md:mt-0 mt-4'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.sutra.hr/'
              className='lg:text-text-base-base-desktop text-sm'
            >{`©${dayjs().year()} Studio Sutra`}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
