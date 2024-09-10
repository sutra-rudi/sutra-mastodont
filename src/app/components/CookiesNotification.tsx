'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { cookiesUsed } from '../lib/cookiesUsed';
// import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { FaCookieBite as CookieIcon } from 'react-icons/fa';
import { SutraButtonBase } from './SutraButton';

interface CookieInt {
  pageContent: any;
}

const CookieConsentNotification = ({ pageContent }: CookieInt) => {
  //   const l = getSuffixFromLang(lang);

  console.log('Page content', pageContent);

  const contentShorthand = pageContent.adminCookiesFooterNewsletter.cookiesTekstovi;

  // Callback functions
  const handleAccept = () => {
    console.log('Cookies accepted');
    // Logic for accepting cookies
  };

  const handleDecline = () => {
    console.log('Cookies declined');
    // Logic for declining cookies
  };

  return (
    <CookieConsent
      location='none'
      // buttonText='Prihvaćam'
      // declineButtonText='Odbijam'
      // enableDeclineButton
      ButtonComponent={() => null}
      buttonText={null} // Hide default button text
      declineButtonText={null} // Hide default decline button text
      debug
      cookieName='userCookieConsent'
      onAccept={handleAccept}
      onDecline={handleDecline}
      style={{ background: '#2B373B', color: '#fff', padding: '20px', textAlign: 'left' }}
      // buttonStyle={{ backgroundColor: '#4CAF50', color: '#fff', fontSize: '14px', borderRadius: '4px' }}
      // declineButtonStyle={{ backgroundColor: '#f44336', color: '#fff', fontSize: '14px', borderRadius: '4px' }}
      expires={365} // Vrijedi 1 godinu
      overlay
    >
      <div className='consent-container'>
        <h3 className='text-lg font-bold mb-4'>{contentShorthand.naslov}</h3>
        <p className='mb-4'>{contentShorthand.tekst}</p>

        <p>{contentShorthand.napomena}</p>
      </div>

      <div className=''>
        <SutraButtonBase innerText='I accept' size='small' onClickAction={handleAccept} />
        <SutraButtonBase innerText='I decline' size='small' />
      </div>
    </CookieConsent>
  );
};

export default CookieConsentNotification;
