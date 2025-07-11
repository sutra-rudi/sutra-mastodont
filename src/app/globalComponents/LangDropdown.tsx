'use client';

import React, { useState, useRef, useEffect } from 'react';
import { UserLanguage } from '../enums/LangEnum';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Language {
  lang: UserLanguage;
  flag: React.ReactNode;
}

interface Props {
  langs: Language[];
}

export default function LanguageDropdown({ langs }: Props) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];
  const r = useRouter();

  const handleLangSwitch = (lang: string) => {
    // Postavi kolačić na odabrani jezik
    document.cookie = `@sutra-user-lang=${lang}; path=/; max-age=31536000`; // 1 godina

    // Preusmjeri na novu putanju
    r.push(
      `/${lang}${currentPath.replace(`/${currentLang}`, '')}${
        searchParams.toString() ? '?' + searchParams.toString() : ''
      }`
    );

    r.refresh();
  };

  const openDropdown = () => {
    setIsVisible(true);
    setTimeout(() => setOpen(true), 10);
  };

  const closeDropdown = () => {
    setOpen(false);
    timeoutRef.current = setTimeout(() => setIsVisible(false), 150);
  };

  const toggleOpen = () => {
    if (open) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [open]);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        onClick={toggleOpen}
        className='inline-flex items-center justify-start gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-heading-color-light-mode dark:text-hero-heading-color-dark-mode hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none '
      >
        <div className='shrink-0'>{langs.find((l) => l.lang === currentLang)?.flag}</div>
        <span>{langs.find((l) => l.lang === currentLang)?.lang.toUpperCase()}</span>
        <svg
          className={` h-5 w-5 text-heading-color-light-mode dark:text-hero-heading-color-dark-mode transition-all ease-in-out duration-300 shrink-0 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      {isVisible && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform transform ${
            open ? 'animate-scale-in' : 'animate-scale-out'
          }`}
        >
          <div className='py-1'>
            {langs.map((language) => (
              <button
                key={language.lang}
                disabled={currentLang === language.lang}
                onClick={() => {
                  handleLangSwitch(language.lang);
                  closeDropdown();
                  r.refresh();
                }}
                className='w-full text-left px-4 py-2 text-sm text-heading-color-light-mode dark:text-heading-color-dark-mode hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 disabled:opacity-50 disabled:cursor-default transition-all ease-in-out duration-300 hover:translate-x-1'
              >
                {language.flag} <span>{language.lang.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scale-out {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.15s ease-out forwards;
        }

        .animate-scale-out {
          animation: scale-out 0.15s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
