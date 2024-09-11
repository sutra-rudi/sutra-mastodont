'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { cookiesUsed } from '../lib/cookiesUsed';
// import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { FaCookieBite as CookieIcon } from 'react-icons/fa';
import { SutraButtonBase } from './SutraButton';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

interface CookieInt {
  pageContent: any;
}

const CookieConsentNotification = ({ pageContent }: CookieInt) => {
  //   const l = getSuffixFromLang(lang);

  //   console.log('Page content', pageContent);

  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const contentShorthand = pageContent.adminCookiesFooterNewsletter.cookiesTekstovi;

  const router = useRouter();

  // Callback functions
  const handleAccept = () => {
    setIsVisible(false);

    setCookie('@sutra-cookies-consent', true);

    toast.success('Vaš odabir je ažuriran!');
    window.location.reload();
  };

  const handleDecline = () => {
    setIsVisible(false);

    setCookie('@sutra-cookies-consent', false);

    toast.success('Vaš odabir je ažuriran!');
    window.location.reload();
  };

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Početni stil
        animate={{ opacity: 1, y: 0 }} // Stil kad se animira
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }} // Trajanje i vrsta animacije
        key={'motion-cookie-key'}
        style={{
          transition: 'allow-discrete',
        }}
      >
        <CookieConsent
          location='none'
          cookieValue={'@sutra-cookies-consent'}
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
          hideOnAccept
          hideOnDecline
        >
          <div className='w-full h-full outline outline-red-500 px-2 pt-3'>
            <h3 className='text-lg font-bold mb-4 text-primary-light flex items-center justify-start gap-2'>
              <CookieIcon />
              <span>{contentShorthand.naslov}</span>
            </h3>
            <p className='mb-4 text-primary-light text-sm'>{contentShorthand.tekst}</p>

            <p className='mb-2 text-primary-light italic text-xs'>{contentShorthand.napomena}</p>
          </div>

          <div className='outline outline-blue-400 my-6 px-2 w-full flex items-center justify-start gap-4'>
            <SutraButtonBase innerText='Prihvačam sve' size='small' onClickAction={handleAccept} isAccentButton />
            <SutraButtonBase
              innerText='Prihvačam samo nužne'
              size='small'
              onClickAction={handleDecline}
              isAccentButton
            />
          </div>
        </CookieConsent>
      </motion.div>
    )
  );
};

export default CookieConsentNotification;
