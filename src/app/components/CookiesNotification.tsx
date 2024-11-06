'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { FaCookieBite as CookieIcon } from 'react-icons/fa';
import { AccentButton, PrimaryLightButton } from './SutraButton';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { setCookie, getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { GoArrowUpRight as ArrowIcon } from 'react-icons/go';
import Link from 'next/link';

interface CookieInt {
  pageContent: any;
}

const CookieConsentNotification = ({ pageContent }: CookieInt) => {
  const currentPath = usePathname();
  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  const [userHasCookies, setUserHasCookies] = React.useState<boolean>(false);

  // Dinamično dohvaćanje tekstova
  const { naslov, tekst, napomena } = pageContent?.adminCookiesFooterNewsletter?.cookiesTekstovi || {};

  const handleConsent = (accepted: boolean) => {
    setIsVisible(false);
    setCookie('@sutra-mastodont-user-lang', accepted ? 'true' : 'false');
    setUserHasCookies(true);
    toast.success('Vaš odabir je ažuriran!');
  };

  React.useEffect(() => {
    const checkCookie = getCookie('@sutra-mastodont-user-lang');
    if (checkCookie) {
      setUserHasCookies(true);
      setIsVisible(false);
    }
  }, []);

  return (
    isVisible &&
    !userHasCookies && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }}
        key={'motion-cookie-key'}
      >
        <CookieConsent
          location='none'
          cookieName='@sutra-mastodont-user-lang'
          ButtonComponent={() => null}
          buttonText={null}
          declineButtonText={null}
          onAccept={() => handleConsent(true)}
          onDecline={() => handleConsent(false)}
          expires={365}
          contentClasses='cookie-custom-container'
          containerClasses='cookie-custom-master'
          hideOnAccept
          hideOnDecline
        >
          <div className='w-full h-full flex flex-col items-start gap-2'>
            <h3 className='text-lg font-bold text-primarna-svijetla flex items-center gap-2'>
              <CookieIcon />
              <span>{naslov}</span>
            </h3>
            <p className='text-primarna-svijetla text-sm'>{tekst}</p>
            <p className='text-primarna-svijetla italic text-xs'>{napomena}</p>
            <Link
              href={`/${currentLang}/legal-info`}
              className='flex items-center gap-2 text-sm mb-4 text-accent-boja border-b border-b-accent'
            >
              <span>Postavke privatnosti</span>
              <ArrowIcon />
            </Link>
          </div>
          <div className='w-full flex items-center gap-4'>
            <AccentButton innerText='Prihvaćam sve' size='sm' onClickAction={() => handleConsent(true)} />
            <PrimaryLightButton innerText='Prihvaćam samo nužne' size='sm' onClickAction={() => handleConsent(false)} />
          </div>
        </CookieConsent>
      </motion.div>
    )
  );
};

export default CookieConsentNotification;
