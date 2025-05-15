import React, { useState, useRef, useEffect } from 'react';
import { UserLanguage } from '../enums/LangEnum';

interface Language {
  lang: UserLanguage;
  flag: React.ReactNode;
}

interface Props {
  langs: Language[];
  currentLang: UserLanguage;
  handleLangSwitch: (lang: UserLanguage) => void;
}

export default function LanguageDropdown({ langs, currentLang, handleLangSwitch }: Props) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        className='inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none'
      >
        {langs.find((l) => l.lang === currentLang)?.flag}
        <svg
          className={`ml-2 h-5 w-5 text-gray-500 dark:text-gray-400 transition-all ease-in-out duration-300 ${
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
                }}
                className='w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 disabled:opacity-50 disabled:cursor-default'
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
