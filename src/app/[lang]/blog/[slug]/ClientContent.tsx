'use client';

import React from 'react';
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon, FaRedditAlien as RedditIcon } from 'react-icons/fa';
import { FaRegFileLines as FileIcon } from 'react-icons/fa6';
import { BsCloudDownload as DownloadIcon } from 'react-icons/bs';
import Slider from 'react-slick';
import { FacebookShareButton, RedditShareButton, TwitterShareButton } from 'react-share';
import toast from 'react-hot-toast';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BlogPageContent {
  gallery: any;
  files: any;
}

const blogGallerySliderSettings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 2,
  speed: 500,
  dots: true,
};

const ClientContent = ({ gallery, files }: BlogPageContent) => {
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

  const downloadFile = async (url: any, fileName: any) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error('Error while downloading file:', error);
    }
  };

  return (
    <article className='w-full'>
      <div className='xl:max-w-[1080px] xl:px-0 md:px-4 px-2 mx-auto xl:-pb--xl---2xl lg:-pb--desktop---2xl md:-pb--tablet---2xl -pb--mobile---2xl'>
        {
          <div className='w-full mx-auto py-6 overflow-x-hidden'>
            <div className='slider-container'>
              <Slider {...blogGallerySliderSettings}>
                {gallery.map((galImage: any) => {
                  return (
                    galImage && (
                      <div key={galImage.node.sourceUrl} className='h-[250px] w-[350px] relative'>
                        <img
                          src={galImage.node.sourceUrl ?? 'https://placehold.co/400.png'}
                          alt='gallery image'
                          // fill
                          className='object-cover object-center aspect-auto block w-full h-full'
                        />
                      </div>
                    )
                  );
                })}
              </Slider>
            </div>
          </div>
        }
        <div className='w-full flex items-center justify-start max-w-sutraBlogTestMaxWidth mx-auto mt-4 mb-6 gap-1 text-base text-text-light-mode dark:text-text-dark-mode font-normal cursor-pointer '>
          {files.file && (
            <button
              onClick={() => downloadFile(files.file.node.mediaItemUrl, files.fileName)}
              className='flex items-center border rounded-sutraCardTagBorderRadius border-accent/50 px-2 py-1 text-accent-boja/70  hover:text-accent-boja transition-all ease-in-out gap-2'
            >
              <DownloadIcon /> <span>Preuzmi {files.fileName}</span>
            </button>
          )}
        </div>

        <div className='w-full max-w-sutraBlogTestMaxWidth mx-auto bg-almost-black/10 h-px my-10'></div>
        {
          <div className='w-full max-w-sutraBlogTestMaxWidth mx-auto flex items-center gap-4 justify-center'>
            <div
              className='px-botun-base-lr py-botun-base-td text-button-base gap-element-inside-btn-m flex items-center justify-start transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs'
              onClick={copyToClip}
            >
              <FileIcon /> <span>Copy link</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs'>
                <FacebookShareButton url={currentLocation} className=''>
                  <FacebookIcon />
                </FacebookShareButton>
              </div>
              <div className='transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs'>
                <TwitterShareButton url={currentLocation}>
                  <TwitterIcon />
                </TwitterShareButton>
              </div>

              <div className='transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs text-button-base'>
                <RedditShareButton url={currentLocation} className='px-botun-base-lr py-botun-base-td'>
                  <RedditIcon />
                </RedditShareButton>
              </div>
            </div>
          </div>
        }
      </div>
    </article>
  );
};

export default ClientContent;
