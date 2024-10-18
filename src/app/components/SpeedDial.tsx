'use client';

import React from 'react';
import toast from 'react-hot-toast';

import { FacebookShareButton, RedditShareButton, TwitterShareButton } from 'react-share';
import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaRedditAlien as RedditIcon,
  FaPrint as PrintIcon,
  FaFacebookMessenger as MsgIcon,
  FaCopy as CopyIcon,
} from 'react-icons/fa';

interface SpeedDialInterface {
  // pageContentForPrint: any;
  handlePrint: () => any;
}

const SpeedDial = ({ handlePrint }: SpeedDialInterface) => {
  const [currentLocation, setCurrentLocation] = React.useState<string>('');

  React.useEffect(() => {
    if (window && typeof window !== 'undefined') {
      setCurrentLocation(String(window.location));
    }
  }, []);

  async function copyToClip() {
    await navigator.clipboard.writeText(currentLocation);

    toast.success('Poveznica kopirana!');
  }

  return (
    <div className=' xl:end-12 lg:end-10 md:end-8 end-6 bottom-16  z-30 flex flex-col items-start xl:gap-3 lg:gap-4 md:gap-5 gap-6'>
      <FacebookShareButton url={currentLocation} className='flex justify-center items-center group'>
        <FacebookIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile' />
      </FacebookShareButton>

      <FacebookShareButton url={currentLocation} className='flex justify-center items-center group'>
        <MsgIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile' />
      </FacebookShareButton>

      <TwitterShareButton url={currentLocation} className='flex justify-center items-center group'>
        <TwitterIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile' />
      </TwitterShareButton>

      <RedditShareButton url={currentLocation} className='flex justify-center items-center group'>
        <RedditIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile' />
      </RedditShareButton>

      <div
        className='flex justify-center items-center group p-2 rounded-full bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'
        onClick={handlePrint}
      >
        <PrintIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile' />
      </div>

      <div
        onClick={copyToClip}
        className='flex justify-center items-center group p-2 rounded-full  bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'
      >
        <CopyIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile' />
      </div>
    </div>
  );
};

export default SpeedDial;
