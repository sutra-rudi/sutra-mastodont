'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { LuSun as SunIcon, LuMoon as MoonIcon } from 'react-icons/lu';
import { Hr, Gb, It, De } from 'react-flags-select';
import Image from 'next/image';
import { useLocalStorage } from '@uidotdev/usehooks';

const AppHeader = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [getThemeIfAny, setThemeToStorage] = useLocalStorage('@sutra-user-crl-scheme', 'light');
  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

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

  const [theme, setTheme] = React.useState(getThemeIfAny);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const langs = [
    { title: 'Hrvatski', lang: 'hr', flag: <Hr width={24} height={24} /> },
    { title: 'English', lang: 'eng', flag: <Gb width={24} height={24} /> },
    { title: 'Deutsch', lang: 'ger', flag: <De width={24} height={24} /> },
    { title: 'Italiano', lang: 'ita', flag: <It width={24} height={24} /> },
  ];

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setThemeToStorage(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    getThemeIfAny === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');

    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme, getThemeIfAny]);

  React.useEffect(() => {
    isMobileMenuOpen
      ? document.documentElement.classList.add('overflow-hidden')
      : document.documentElement.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  const handleLangSwitch = (lang: string) => {
    // Postavi kolačić na odabrani jezik
    document.cookie = `@sutra-mastodont-user-lang=${lang}; path=/; max-age=31536000`; // 1 godina

    // Preusmjeri na novu putanju
    router.push(
      `/${lang}${currentPath.replace(`/${currentLang}`, '')}${
        searchParams.toString() ? '?' + searchParams.toString() : ''
      }`
    );
  };

  return (
    <nav className=' dark:bg-gray-800  relative'>
      <div className='max-w-screen-xl mx-auto xl:px-0 md:px-4 px-2  py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <a href={`/${currentLang}`} title='' className='w-8 h-8 block'>
                <Image
                  className='dark:hidden block w-full h-full'
                  src='https://cms.sutra.hr/wp-content/uploads/2024/06/Sutra-profilna-slika-1.jpg'
                  alt=''
                  width={128}
                  height={128}
                />

                <Image
                  className='hidden dark:block w-full h-full'
                  src='https://cms.sutra.hr/wp-content/uploads/2024/06/Sutra-profilna-slika-1.jpg'
                  alt=''
                  width={128}
                  height={128}
                />
              </a>
            </div>

            <div
              className={`absolute z-[90] w-full h-screen bg-almost-white inset-0 transition-all duration-300 flex items-center lg:justify-center justify-start flex-col lg:pt-0 pt-24 px-4  ${
                isMobileMenuOpen
                  ? 'opacity-100 pointer-events-auto select-auto'
                  : 'opacity-0 select-none pointer-events-none'
              }`}
            >
              <ul className='lg:text-h3-desktop md:text-h3-tablet text-h3-mobile'>
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
            {langs.map((language) => (
              <button
                disabled={currentLang === language.lang}
                key={language.lang}
                className='text-sm font-medium text-gray-900 dark:text-white flex place-items-center gap-2 transition-all ease-out hover:-translate-y-1 hover:scale-110'
                onClick={() => handleLangSwitch(language.lang)}
              >
                {language.flag}
              </button>
            ))}

            <div
              onClick={handleTheme}
              className='z-40 cursor-pointer outline outline-1 rounded-full outline-offset-4 outline-almost-black dark:outline-almost-white transition-all duration-300 ease-linear'
            >
              {theme === 'light' ? <SunIcon size={24} color='#181816' /> : <MoonIcon size={24} color='#F8F7F2' />}
            </div>
            <div className='w-min '>
              <Hamburger
                color={theme === 'light' ? '#181816' : '#F8F7F2'}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
