'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { cookiesUsed } from '../lib/cookiesUsed';
import { usePathname } from 'next/navigation';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

const CookieConsentNotification = () => {
  const pathname = usePathname(); // Dohvati putanju
  const segments = pathname.split('/'); // Razdvoji putanju na segmente

  const lang = getSuffixFromLang(segments[1]) || 'Hr';
  return (
    <CookieConsent
      location='bottom'
      buttonText='Prihvaćam'
      declineButtonText='Odbijam'
      enableDeclineButton
      cookieName='userCookieConsent'
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      expires={365} // Vrijedi 1 godinu
    >
      <h3>Kolačići koje koristimo {lang}</h3>
      <p>Na ovoj web stranici koristimo sljedeće kolačiće:</p>
      <ul>
        {cookiesUsed.map((cookie, index) => (
          <li key={index}>
            <strong>{cookie.name}</strong> - domena: <strong>{cookie.domain}</strong>, opis: {/* @ts-ignore */}
            <strong>{cookie[`description${lang}`]}</strong>
          </li>
        ))}
      </ul>
    </CookieConsent>
  );
};

export default CookieConsentNotification;
