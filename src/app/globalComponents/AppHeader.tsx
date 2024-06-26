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

  return (
    <nav className='w-full py-4 bg-slate-100'>
      <div className='max-w-[1240px] flex justify-between mx-auto'>
        <div className='flex gap-3'>
          {navLinks.map((lin) => {
            const { url, title } = lin;

            return (
              <Link key={url} href={url}>
                {title}
              </Link>
            );
          })}
        </div>

        <div className='flex gap-3'>
          {langs.map((lan) => {
            const { title, lang } = lan;
            return (
              <span onClick={() => handleLangSwitch(lang)} key={title}>
                {lang}
              </span>
            );
          })}
        </div>
      </div>
      <div className=''>PATH: {currentPath}</div>
    </nav>
  );
};

export default AppHeader;
