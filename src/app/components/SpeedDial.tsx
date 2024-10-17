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
// import { FaRegFileLines as FileIcon } from 'react-icons/fa6';
// import { BsCloudDownload as DownloadIcon } from 'react-icons/bs';

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
    <div className='fixed xl:end-12 lg:end-10 md:end-8 end-6 bottom-16  z-30 flex flex-col items-start xl:gap-3 lg:gap-4 md:gap-5 gap-6'>
      <FacebookShareButton
        url={currentLocation}
        className='flex justify-center items-center group xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile  bg-almost-white rounded-full  shadow-sm  group cursor-pointer transition-all ease-in-out hover:shadow'
      >
        <FacebookIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all ' />
      </FacebookShareButton>

      <FacebookShareButton
        url={currentLocation}
        className='flex justify-center items-center group xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile  bg-almost-white rounded-full  shadow-sm  group cursor-pointer transition-all ease-in-out hover:shadow'
      >
        <MsgIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all ' />
      </FacebookShareButton>

      <TwitterShareButton
        url={currentLocation}
        className='flex justify-center items-center group xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile  bg-almost-white rounded-full  shadow-sm  group cursor-pointer transition-all ease-in-out hover:shadow'
      >
        <TwitterIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all ' />
      </TwitterShareButton>

      <RedditShareButton
        url={currentLocation}
        className='flex justify-center items-center group xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile  bg-almost-white rounded-full  shadow-sm  group cursor-pointer transition-all ease-in-out hover:shadow'
      >
        <RedditIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all ' />
      </RedditShareButton>

      <div
        className='flex justify-center items-center group xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile  bg-almost-white rounded-full  shadow-sm  group cursor-pointer transition-all ease-in-out hover:shadow border-none bg-transparent'
        onClick={handlePrint}
      >
        <PrintIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all ' />
      </div>

      <div
        onClick={copyToClip}
        className='flex justify-center items-center group xl:w-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile xl:h-veličina-kruga-avatar-xl lg:h-veličina-kruga-avatar-desktop md:h-veličina-kruga-avatar-tablet h-veličina-kruga-avatar-mobile  bg-almost-white rounded-full  shadow-sm  group cursor-pointer transition-all ease-in-out hover:shadow border-none bg-transparent'
      >
        <CopyIcon className='text-text-light-mode dark:text-text-dark-mode group-hover:text-accent-boja transition-all ' />
      </div>
    </div>
  );
};

export default SpeedDial;
