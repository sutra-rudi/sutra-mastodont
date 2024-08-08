'use client';

import React from 'react';
import toast from 'react-hot-toast';

interface SideButtonsDefault {}

import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';
import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaRedditAlien as RedditIcon,
  FaPrint as PrintIcon,
  FaFacebookMessenger as MsgIcon,
} from 'react-icons/fa';
// import { FaRegFileLines as FileIcon } from 'react-icons/fa6';
// import { BsCloudDownload as DownloadIcon } from 'react-icons/bs';

const SpeedDial = () => {
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
    <div className='fixed end-12 bottom-16 group z-30 flex flex-col items-start gap-3'>
      <div className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400'>
        <FacebookShareButton url={currentLocation} className=''>
          <FacebookIcon />
        </FacebookShareButton>
      </div>

      <div className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400'>
        <FacebookShareButton url={currentLocation} className=''>
          <MsgIcon />
        </FacebookShareButton>
      </div>

      <div className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400'>
        <TwitterShareButton url={currentLocation}>
          <TwitterIcon />
        </TwitterShareButton>
      </div>

      <div className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400'>
        <RedditShareButton url={currentLocation} className=''>
          <RedditIcon />
        </RedditShareButton>
      </div>

      <div className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400'>
        {/* <RedditShareButton url={currentLocation} className=''> */}
        <PrintIcon />
        {/* </RedditShareButton> */}
      </div>

      <button
        type='button'
        onClick={copyToClip}
        className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400'
      >
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 18 20'
        >
          <path d='M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z' />
          <path d='M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z' />
        </svg>
      </button>
      <div
        id='tooltip-copy'
        role='tooltip'
        className='absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
      >
        Copy
        <div className='tooltip-arrow' data-popper-arrow></div>
      </div>
    </div>
  );
};

export default SpeedDial;
