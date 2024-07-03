'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const AppHeader = () => {
  const currentPath = usePathname();
  const router = useRouter();

  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

  const langs = [
    { title: 'Hr', lang: 'Hr' },
    { title: 'Eng', lang: 'Eng' },
    { title: 'Ger', lang: 'Ger' },
    { title: 'Ita', lang: 'Ita' },
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
  ];

  const handleLangSwitch = (pathName: string) => {
    let constructNewPath = splitPath[1];

    constructNewPath = pathName;

    // console.log('path', constructNewPath);
  };

  const [theme, setTheme] = React.useState('light');
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <nav className='bg-white dark:bg-gray-800 antialiased'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <div className='shrink-0'>
              <a href='/' title='' className=''>
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

            <ul className='hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center flex-wrap'>
              {navLinks.map((navLink) => {
                return (
                  <li key={navLink.title} className='shrink-0'>
                    <a
                      href={navLink.url}
                      className='flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500'
                    >
                      {navLink.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <button onClick={handleTheme} className=' border bg-yellow-200 px-4 py-2 rounded-lg dark:bg-white'>
          THEME Switch
        </button>
      </div>
    </nav>
  );
};

export default AppHeader;
