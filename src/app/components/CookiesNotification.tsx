'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
// import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { FaCookieBite as CookieIcon } from 'react-icons/fa';
import { AccentButton, PrimaryLightButton } from './SutraButton';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { setCookie, getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { GoArrowUpRight as ArrowIcon } from 'react-icons/go';

import Link from 'next/link';
// import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

interface CookieInt {
  pageContent: any;
}

const CookieConsentNotification = ({ pageContent }: CookieInt) => {
  const currentPath = usePathname();
  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];
  //   const l = getSuffixFromLang(currentLang);

  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  const [userHasCookies, setUserHasCookies] = React.useState<boolean>(false);

  const contentShorthand = pageContent.adminCookiesFooterNewsletter.cookiesTekstovi;

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

  React.useEffect(() => {
    const checkCookie = getCookie('@sutra-cookies-consent');

    if (checkCookie) {
      setUserHasCookies(true);
    }
  }, []);

  return (
    isVisible &&
    !userHasCookies && (
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
          //     debug
          cookieName='userCookieConsent'
          onAccept={handleAccept}
          onDecline={handleDecline}
          expires={365} // Vrijedi 1 godinu
          contentClasses='cookie-custom-container'
          containerClasses='cookie-custom-master'
          hideOnAccept
          hideOnDecline
        >
          <div className='w-full h-full flex flex-col items-start gap-2'>
            <h3 className='text-lg font-bold text-primarna-svijetla flex items-center justify-start gap-2'>
              <CookieIcon />
              <span>{contentShorthand.naslov}</span>
            </h3>
            <p className='text-primarna-svijetla text-sm'>{contentShorthand.tekst}</p>

            <p className='text-primarna-svijetla italic text-xs'>{contentShorthand.napomena}</p>

            <Link
              href={`/${currentLang}/legal-info`}
              className='flex items-center justify-start gap-2 text-sm mb-4 text-accent-boja border-b border-b-accent'
            >
              <span>Postavke privatnosti</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className='w-full flex items-center justify-start gap-4'>
            <AccentButton innerText='Prihvačam sve' size='sm' onClickAction={handleAccept} />
            <PrimaryLightButton innerText='Prihvačam samo nužne' size='sm' onClickAction={handleDecline} />
          </div>
        </CookieConsent>
      </motion.div>
    )
  );
};

export default CookieConsentNotification;
