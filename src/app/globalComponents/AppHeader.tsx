'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { Hr, Gb, It, De } from 'react-flags-select';
import LanguageDropdown from './LangDropdown';

interface Header {
  logos: any;
}

const AppHeader = ({ logos }: Header) => {
  const currentPath = usePathname();

  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

  const [visible, setVisible] = React.useState(true);
  const prevScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  const baseNav = [
    {
      hr: 'O nama',
      eng: 'About Us',
      ger: 'Über uns',
      ita: 'Chi siamo',
      esp: 'Sobre nosotros',
      fra: 'À propos de nous',
      url: `/${currentLang}/about`,
    },
    {
      hr: 'Blog',
      eng: 'Blog',
      ger: 'Blog',
      ita: 'Blog',
      esp: 'Blog',
      fra: 'Blog',
      url: `/${currentLang}/blog`,
    },
    {
      hr: 'Novosti',
      eng: 'News',
      ger: 'Neuigkeiten',
      ita: 'Novità',
      esp: 'Noticias',
      fra: 'Actualités',
      url: `/${currentLang}/news`,
    },
    {
      hr: 'Oglasi',
      eng: 'Listings',
      ger: 'Anzeigen',
      ita: 'Annunci',
      esp: 'Anuncios',
      fra: 'Annonces',
      url: `/${currentLang}/job-listings`,
    },
    {
      hr: 'Kontakt',
      eng: 'Contact',
      ger: 'Kontakt',
      ita: 'Contatto',
      esp: 'Contacto',
      fra: 'Contact',
      url: `/${currentLang}/contact`,
    },
  ];

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const langs = [
    { title: 'Hrvatski', lang: 'hr', flag: <Hr width={24} height={24} /> },
    { title: 'English', lang: 'eng', flag: <Gb width={24} height={24} /> },
    { title: 'Deutsch', lang: 'ger', flag: <De width={24} height={24} /> },
    { title: 'Italiano', lang: 'ita', flag: <It width={24} height={24} /> },
  ];

  React.useEffect(() => {
    isMobileMenuOpen
      ? document.documentElement.classList.add('overflow-hidden')
      : document.documentElement.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
            // Scroll dolje i već smo skroz gore -> sakrij
            setVisible(false);
          } else {
            // Scroll gore -> pokaži
            setVisible(true);
          }
          prevScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
        transform transition-transform duration-500 ease-in-out  ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } bg-white shadow-sm`}
    >
      <div className='container mx-auto xl:px-0 md:px-4 px-2  py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <a href={`/${currentLang}`} className='block'>
                <picture>
                  <img
                    src={logos.verticalLight}
                    alt='SITE_LOGO'
                    width={190}
                    height={50}
                    className='aspect-auto object-cover object-center block'
                  />
                </picture>
              </a>
            </div>

            <div
              className={`absolute z-[90] w-full max-w-full h-screen bg-almost-white inset-0 transition-all duration-300 flex items-center lg:justify-center justify-start flex-col lg:pt-0 pt-24 px-4  ${
                isMobileMenuOpen
                  ? 'opacity-100 pointer-events-auto select-auto'
                  : 'opacity-0 select-none pointer-events-none'
              }`}
            >
              <ul className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile flex flex-col gap-4'>
                {baseNav.map((item) => (
                  <li key={item.url}>
                    {/* @ts-ignore */}
                    <a href={item.url}>{item[currentLang]}</a>
                  </li>
                ))}
              </ul>

              <ul className='flex items-center justify-center gap-4 mt-24 lg:text-h4-desktop md:text-h4-tablet text-h4-mobile flex-wrap'>
                {linksLegalSet.map((item) => (
                  <li key={item.url}>
                    {/* @ts-ignore */}
                    <a href={item.url}>{item[currentLang]}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex items-center space-x-4 z-[101]'>
            <LanguageDropdown langs={langs as any} />

            <div className='w-min '>
              <Hamburger onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
