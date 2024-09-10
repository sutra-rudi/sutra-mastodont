'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { cookiesUsed } from '../lib/cookiesUsed';
// import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { FaCookieBite as CookieIcon } from 'react-icons/fa';
import { SutraButtonBase } from './SutraButton';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
interface CookieInt {
  pageContent: any;
}

const CookieConsentNotification = ({ pageContent }: CookieInt) => {
  //   const l = getSuffixFromLang(lang);

  console.log('Page content', pageContent);

  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const contentShorthand = pageContent.adminCookiesFooterNewsletter.cookiesTekstovi;

  // Callback functions
  const handleAccept = () => {
    console.log('Cookies accepted');
    // Logic for accepting cookies
    setIsVisible(false);

    toast.success('Vaš odabir je ažuriran!');
  };

  const handleDecline = () => {
    console.log('Cookies declined');
    setIsVisible(false);
    toast.success('Vaš odabir je ažuriran!');

    // Logic for declining cookies
  };

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Početni stil
        animate={{ opacity: 1, y: 0 }} // Stil kad se animira
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }} // Trajanje i vrsta animacije
        key={'motion-cookie-key'}
      >
        <CookieConsent
          location='none'
          ButtonComponent={() => null}
          buttonText={null} // Hide default button text
          declineButtonText={null} // Hide default decline button text
          debug
          cookieName='userCookieConsent'
          onAccept={handleAccept}
          onDecline={handleDecline}
          expires={365} // Vrijedi 1 godinu
          contentClasses='cookie-custom-container'
          containerClasses='cookie-custom-master'
          overlay
          hideOnAccept
          hideOnDecline
        >
          <div className='w-full h-full outline outline-red-500 px-2'>
            <h3 className='text-lg font-bold mb-4 text-primary-dark'>{contentShorthand.naslov}</h3>
            <p className='mb-4 text-primary-dark'>{contentShorthand.tekst}</p>

            <p className='mb-2 text-primary-dark italic text-xs'>{contentShorthand.napomena}</p>
          </div>

          <div className='outline outline-blue-400 mt-6 px-2 w-full flex items-center justify-start gap-4'>
            <SutraButtonBase innerText='Prihvačam sve' size='small' onClickAction={handleAccept} />
            <SutraButtonBase innerText='Prihvačam samo nužne' size='small' onClickAction={handleDecline} />
          </div>
        </CookieConsent>
      </motion.div>
    )
  );
};

export default CookieConsentNotification;
