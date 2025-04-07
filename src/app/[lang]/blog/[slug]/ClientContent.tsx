'use client';

import React from 'react';
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon, FaRedditAlien as RedditIcon } from 'react-icons/fa';
import { FaRegFileLines as FileIcon } from 'react-icons/fa6';
import { BsCloudDownload as DownloadIcon } from 'react-icons/bs';

import { FacebookShareButton, RedditShareButton, TwitterShareButton } from 'react-share';
import toast from 'react-hot-toast';
import useEmblaCarousel from 'embla-carousel-react';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

interface BlogPageContent {
  gallery: any;
  files: any;
  currentLang: string;
}

const ClientContent = ({ gallery, files, currentLang }: BlogPageContent) => {
  const [currentLocation, setCurrentLocation] = React.useState<string>('');
  const l = getSuffixFromLang(currentLang);
  const [emblaRef] = useEmblaCarousel({ loop: false });
  const parseFiles = files[`f${l}`];
  // console.log('FAJLOV', parseFiles);
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
    <article className='w-full max-w-[750px] mx-auto'>
      <div ref={emblaRef} className='w-full embla  lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
        <div className='embla__container w-full gap-4'>
          {gallery.map((galImage: any) => {
            return (
              <picture
                key={galImage.node.sourceUrl}
                className='embla__slide_blog_gallery relative block w-[350px] h-[250px]'
              >
                <img
                  className='object-cover object-center aspect-auto block w-full h-full'
                  src={galImage.node.sourceUrl}
                  alt={`Gallery image - ${galImage.node.sourceUrl}`}
                  width={350}
                  height={250}
                />
              </picture>
            );
          })}
        </div>

        <div className='w-full px-4'>
          <div className='w-full flex items-center justify-start gap-1 text-base text-text-light-mode dark:text-text-dark-mode font-normal cursor-pointer lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl '>
            {parseFiles && (
              <button
                onClick={() =>
                  downloadFile(parseFiles[`${currentLang}`].node.mediaItemUrl, parseFiles[`nazivDokumenta${l}`])
                }
                className='flex items-center border rounded-sutraCardTagBorderRadius border-accent/50 px-2 py-1 text-accent-boja/70  hover:text-accent-boja transition-all ease-in-out gap-2'
              >
                <DownloadIcon /> <span>Preuzmi {parseFiles[`nazivDokumenta${l}`]}</span>
              </button>
            )}
          </div>

          <div className='w-full mx-auto bg-almost-black/10 h-px lg:-my--desktop---xl md:-my--tablet---xl -my--mobile---xl '></div>

          <div className='w-full  mx-auto flex items-center gap-4 justify-center pb-24 '>
            <div
              className='px-botun-base-lr py-botun-base-td text-button-base gap-element-inside-btn-m flex items-center justify-start transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs'
              onClick={copyToClip}
            >
              <FileIcon /> <span>Copy link</span>
            </div>
            <div className='flex items-center gap-2'>
              <FacebookShareButton
                url={currentLocation}
                className='px-botun-base-lr py-botun-base-td text-button-base gap-element-inside-btn-m flex items-center justify-start transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs'
              >
                <FacebookIcon />
              </FacebookShareButton>

              <TwitterShareButton
                url={currentLocation}
                className='px-botun-base-lr py-botun-base-td text-button-base gap-element-inside-btn-m flex items-center justify-start transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs'
              >
                <TwitterIcon />
              </TwitterShareButton>

              <RedditShareButton
                url={currentLocation}
                className='px-botun-base-lr py-botun-base-td text-button-base gap-element-inside-btn-m flex items-center justify-start transition-all ease-in-out cursor-pointer   bg-transparent  text-text-light-mode dark:text-text-dark-mode  outline outline-1 outline-offset-0 active:outline-[3px] xl:rounded-botun-l lg:rounded-botun-base md:rounded-botun-s rounded-botun-xs'
              >
                <RedditIcon />
              </RedditShareButton>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ClientContent;
