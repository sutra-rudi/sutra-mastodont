'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { Twirl as Hamburger } from 'hamburger-react';
import { LuSun as SunIcon, LuMoon as MoonIcon } from 'react-icons/lu';
import { Hr, Gb, It, De } from 'react-flags-select';
const AppHeader = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();

  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const langs = [
    { title: 'Hrvatski', lang: 'hr', flag: <Hr width={24} height={24} /> },
    { title: 'English', lang: 'eng', flag: <Gb width={24} height={24} /> },
    { title: 'Deutsch', lang: 'ger', flag: <De width={24} height={24} /> },
    { title: 'Italiano', lang: 'ita', flag: <It width={24} height={24} /> },
  ];

  const navLinks = [
    { url: `/${currentLang}`, title: 'Home' },
    {
      url: `/${currentLang}/blog`,
      title: 'Blog',
    },
    {
      url: `/${currentLang}/news`,
      title: 'News',
    },
    {
      url: `/${currentLang}/about-us`,
      title: 'About',
    },
    {
      url: `/${currentLang}/contact`,
      title: 'Contact',
    },
    {
      url: `/${currentLang}/what-to-visit`,
      title: 'What to visit?',
    },
    {
      url: `/${currentLang}/legal-info`,
      title: 'Legal info',
    },
    {
      url: `/${currentLang}/company-info`,
      title: 'Company info',
    },
    { url: `/${currentLang}/faq`, title: 'FAQ' },
    {
      url: `/${currentLang}/sub-page-5`,
      title: 'Baza tekstova 5 pasusa',
    },
    {
      url: `/${currentLang}/sub-page-1`,
      title: 'Baza tekstova 1 modul',
    },
    {
      url: `/${currentLang}/msg-singles`,
      title: 'Poruke pojedinacno',
    },
    {
      url: `/${currentLang}/hero-sections`,
      title: 'Hero kompilacija',
    },
    {
      url: `/${currentLang}/maps`,
      title: 'Mape kompilacija',
    },
    {
      url: `/${currentLang}/schedule`,
      title: 'Rasporedi',
    },
  ];

  const [theme, setTheme] = React.useState('light');
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const router = useRouter();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  const handleLangSwitch = (where: string) => {
    router.push(where);

    // router.refresh();
  };

  return (
    <nav className='bg-white dark:bg-gray-800 antialiased relative'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <a href={`/${currentLang}`} title=''>
                <picture>
                  <img
                    className='block w-auto h-8 dark:hidden'
                    src='https://cms.sutra.hr/wp-content/uploads/2024/06/Sutra-profilna-slika-1.jpg'
                    alt=''
                  />
                </picture>
                <picture>
                  <img
                    className='hidden w-auto h-8 dark:block'
                    src='https://cms.sutra.hr/wp-content/uploads/2024/06/Sutra-profilna-slika-1.jpg'
                    alt=''
                  />
                </picture>
              </a>
            </div>

            <div
              className={`absolute z-40 w-full h-screen bg-red-300 inset-0 transition-all duration-300 flex items-center justify-center ${
                isMobileMenuOpen
                  ? 'opacity-100 pointer-events-auto select-auto'
                  : 'opacity-0 select-none pointer-events-none'
              }`}
            >
              <ul className='grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-2'>
                {navLinks.map((navLink) => (
                  <li key={navLink.title} className='shrink-0'>
                    <a
                      href={navLink.url}
                      className='flex text-h3 font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500'
                    >
                      {navLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex items-center space-x-4 z-40'>
            {langs.map((language) => (
              <button
                disabled={currentLang === language.lang}
                key={language.lang}
                className='text-sm font-medium text-gray-900 dark:text-white flex place-items-center gap-2 transition-all ease-out hover:-translate-y-1 hover:scale-110'
                onClick={() =>
                  handleLangSwitch(
                    `/${language.lang}${currentPath.replace(`/${currentLang}`, '')}${
                      searchParams.toString() ? '?' + searchParams.toString() : ''
                    }`
                  )
                }
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
            <div className='w-min z-40'>
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
