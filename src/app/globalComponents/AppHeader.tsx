'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { Hr, Gb, It, De, Fr, Es } from 'react-flags-select';
import LanguageDropdown from './LangDropdown';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const [isShrink, setIsShrink] = React.useState<boolean>(false);

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
      hr: 'Usluge',
      eng: 'Services',
      ger: 'Dienstleistungen',
      ita: 'Servizi',
      esp: 'Servicios',
      fra: 'Services',
      url: `/${currentLang}/services`,
    },
    {
      hr: 'Događaji',
      eng: 'Events',
      ger: 'Veranstaltungen',
      ita: 'Eventi',
      esp: 'Eventos',
      fra: 'Événements',
      url: `/${currentLang}/events`,
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
      hr: 'FAQ',
      eng: 'FAQ',
      ger: 'FAQ',
      ita: 'FAQ',
      esp: 'FAQ',
      fra: 'FAQ',
      url: `/${currentLang}/faq`,
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
    {
      hr: 'Galerija',
      eng: 'Gallery',
      ger: 'Galerie',
      ita: 'Galleria',
      esp: 'Galería',
      fra: 'Galerie',
      url: `/${currentLang}/gallery`,
    },
    {
      hr: 'Press',
      eng: 'Press',
      ger: 'Presse',
      ita: 'Stampa',
      esp: 'Prensa',
      fra: 'Presse',
      url: `/${currentLang}/press`,
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

  const langs = [
    { title: 'Hrvatski', lang: 'hr', flag: <Hr width={24} height={24} /> },
    { title: 'English', lang: 'eng', flag: <Gb width={24} height={24} /> },
    { title: 'Deutsch', lang: 'ger', flag: <De width={24} height={24} /> },
    { title: 'Italiano', lang: 'ita', flag: <It width={24} height={24} /> },
    { title: 'Français', lang: 'fra', flag: <Fr width={24} height={24} /> },
    { title: 'Español', lang: 'esp', flag: <Es width={24} height={24} /> },
    // { title: 'Español', lang: 'esp', flag: <Es width={24} height={24} /> },
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
            setIsShrink(true);
            setVisible(false);
          } else {
            // Scroll gore -> pokaži
            setVisible(true);
            setIsShrink(false);
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

  const [mounted, setMounted] = React.useState(false);

  // nakon prvog mounta, postavi mounted na true
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
        transform transition-transform duration-500 ease-in-out delay-500  ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } bg-white shadow-sm `}
    >
      <div
        className={`container mx-auto xl:px-0 md:px-4 px-2  py-4 transition-all duration-1000   ease-in-out ${
          isShrink ? 'h-20' : 'h-24 delay-[600ms]'
        }`}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <a href={`/${currentLang}`} className={`block`}>
                <picture>
                  <img
                    src={logos.verticalLight}
                    alt='SITE_LOGO'
                    width={190}
                    height={50}
                    className={`aspect-auto object-cover object-center block ${
                      isShrink ? 'scale-50 ' : 'scale-100 delay-[600ms]'
                    } transition-all duration-1000   ease-in-out`}
                  />
                </picture>
              </a>
            </div>

            <div
              className={`absolute z-[90] w-full max-w-full h-screen bg-almost-white inset-0 flex items-center lg:justify-center justify-start flex-col lg:pt-0 pt-24 px-4 md:pb-0 pb-44 transition-all ease-in-out duration-700 will-change-transform transform-gpu overflow-scroll ${
                !mounted
                  ? 'translate-x-full opacity-0 pointer-events-none'
                  : isMobileMenuOpen
                  ? 'motion-translate-x-in-100 motion-opacity-in-100 motion-duration-[700ms] motion-ease-spring-smooth pointer-events-auto'
                  : 'motion-translate-x-out-100 motion-opacity-out-0 motion-duration-[700ms] motion-ease-spring-smooth pointer-events-none'
              }`}
            >
              <ul className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile grid md:grid-cols-2 grid-cols-1 !gap-x-20 lg:-gap--desktop-liste-udaljenost-u-listama-big md:-gap--tablet-liste-udaljenost-u-listama-big -gap--mobile-liste-udaljenost-u-listama-big select-none'>
                {baseNav.map((item, i) => (
                  <li
                    //@ts-ignore
                    data-gtm={slugify(`nav click ${item[currentLang]}`, { ...slugifyOptions })}
                    key={item.url}
                    style={{ animationDelay: `${i * 0.15}s ` }}
                    className={`${
                      isMobileMenuOpen ? 'motion-preset-slide-up motion-ease-spring-bouncy' : ''
                    } text-heading-color-light-mode dark:text-heading-color-dark-mode group`}
                  >
                    <a href={item.url} className='group-hover:translate-x-2 block transition-all ease-out duration-300'>
                      {/* @ts-ignore */}
                      {item[currentLang]}
                    </a>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-12 relative md:hidden block z-20 ${
                  isMobileMenuOpen ? 'motion-preset-slide-down motion-ease-spring-smooth motion-delay-500' : ''
                }`}
              >
                <LanguageDropdown langs={langs as any} />
              </div>

              <ul className='flex items-center justify-center gap-4 mt-24 lg:text-nadnaslov-xl md:text-nadnaslov-desktop text-nadnaslov-tablet flex-wrap select-none '>
                {linksLegalSet.map((item, i) => (
                  <li
                    key={item.url}
                    //@ts-ignore
                    data-gtm={slugify(`nav click ${item[currentLang]}`, { ...slugifyOptions })}
                    style={{ animationDelay: `${i * 0.45}s ` }}
                    className={`${
                      isMobileMenuOpen ? 'motion-preset-slide-right motion-ease-spring-bouncy' : ''
                    } text-heading-color-light-mode dark:text-heading-color-dark-mode group`}
                  >
                    <a href={item.url} className='group-hover:translate-y-1 block transition-all ease-out duration-300'>
                      {/* @ts-ignore */}
                      {item[currentLang]}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                data-gtm={slugify(`nav click sutra hr`)}
                href='https://www.sutra.hr/'
                target='_blank'
                rel='noopener noreferrer'
                className={`relative mt-12 select-none  hover:translate-y-1 block transition-all ease-out duration-300 text-heading-color-light-mode dark:text-heading-color-dark-mode  text-all-caps-small${
                  isMobileMenuOpen ? 'motion-preset-slide-right motion-ease-spring-bouncy' : ''
                }`}
              >
                Made by Sutra.hr
              </a>
            </div>
          </div>
          <div
            className={`flex items-center space-x-4 z-[101] ${
              isShrink ? 'scale-50 ' : 'scale-100 delay-[600ms]'
            } transition-all duration-1000   ease-in-out`}
          >
            <div className='md:block hidden'>
              <LanguageDropdown langs={langs as any} />
            </div>

            <div className='w-min '>
              <Hamburger onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} color={'#174173'} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
