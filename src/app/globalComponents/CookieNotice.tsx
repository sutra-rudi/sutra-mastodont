'use client';

import React, { useState, useEffect } from 'react';
import { FaCookieBite as CI } from 'react-icons/fa';
import { RiCloseLargeFill as X } from 'react-icons/ri';
import { UserLanguage } from '../enums/LangEnum';

interface CookieNotice {
  lng: any;
}

const textMap: Record<UserLanguage, { intro: string; policy: string }> = {
  hr: {
    intro: 'Ova stranica koristi kolačiće, za više informacija pročitajte našu ',
    policy: 'politiku kolačića',
  },
  eng: {
    intro: 'This website uses cookies. For more information, please read our ',
    policy: 'cookie policy',
  },
  ger: {
    intro: 'Diese Website verwendet Cookies. Weitere Informationen finden Sie in unserer ',
    policy: 'Cookie-Richtlinie',
  },
  ita: {
    intro: 'Questo sito utilizza i cookie. Per maggiori informazioni, leggi la nostra ',
    policy: 'politica sui cookie',
  },
  fra: {
    intro: 'Ce site utilise des cookies. Pour en savoir plus, consultez notre ',
    policy: 'politique en matière de cookies',
  },
  esp: {
    intro: 'Este sitio web utiliza cookies. Para más información, consulta nuestra ',
    policy: 'política de cookies',
  },
  slo: {
    intro: 'Slo cookie',
    policy: 'Slo cookie',
  },
  //     hu: {
  //       intro: 'Ez a weboldal sütiket használ. További információért olvassa el ',
  //       policy: 'sütikre vonatkozó irányelveinket',
  //     },
  //     pl: {
  //       intro: 'Ta strona używa plików cookie. Więcej informacji znajdziesz w naszej ',
  //       policy: 'politykę plików cookie',
  //     },
};

export default function CookieNotice({ lng }: CookieNotice) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie.split('; ').find((row) => row.startsWith('cookieConsent='));
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    document.cookie = `cookieConsent=1; Path=/; Max-Age=${60 * 60 * 24 * 365}`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full z-50'>
      <div className='flex items-center relative gap-2 justify-center container mx-auto bg-white text-text-light-mode py-4 rounded-lg shadow-lg  px-4 '>
        <CI />
        <p className='md:text-text-base-l-desktop text-text-base-l-mobiletablet'>
          {/* @ts-ignore */}
          {textMap[lng].intro}
          <a href={`/${lng}/cookie-policy`} className='underline'>
            {/* @ts-ignore */}
            {textMap[lng].policy}
          </a>
          .
        </p>

        <X
          onClick={handleAccept}
          className='absolute top-1/2 -translate-y-1/2 right-4 md:text-text-base-l-desktop text-text-base-l-mobiletablet shrink-0'
        />
      </div>
    </div>
  );
}
