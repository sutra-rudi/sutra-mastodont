'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon, FaRedditAlien as RedditIcon } from 'react-icons/fa';
import { FaRegFileLines as FileIcon } from 'react-icons/fa6';
import { BsCloudDownload as DownloadIcon } from 'react-icons/bs';
import Slider from 'react-slick';
import { FacebookShareButton, RedditShareButton, TwitterShareButton } from 'react-share';
import toast from 'react-hot-toast';
import { useReactToPrint } from 'react-to-print';
import { ParallaxBanner } from 'react-scroll-parallax';
import SpeedDial from '@/app/components/SpeedDial';
import { TracingBeam } from '@/app/aceternityComponents/TracingBeam';
import { heroImagesHomePage } from '@/app/pathsUtils/mediaImportsDynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Poltawski_Nowy } from 'next/font/google';
const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });

interface BlogPageContent {
  content: any;
  global: any;
  gallery: any;
  files: any;
  tags: any;
  author: any;
  intro: any;
  category: any[];
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

const PageContent = ({ content, global, gallery, files, tags, author, intro, category }: BlogPageContent) => {
  const [currentLocation, setCurrentLocation] = React.useState<string>('');

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    //@ts-ignore
    content: () => componentRef.current,
  });

  React.useEffect(() => {
    if (window && typeof window !== 'undefined') {
      setCurrentLocation(String(window.location));
    }
  }, []);

  async function copyToClip() {
    await navigator.clipboard.writeText(currentLocation);

    toast.success('Poveznica kopirana!');
  }
  const prepareContent: any[] = Object.values(content);

  const prepareGallery = Object.values(gallery);

  const prepareTags =
    tags &&
    tags.split(', ').map((singleTag: string) => {
      return `#${singleTag.trim()}`;
    });

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
    <article
      /*@ts-ignore*/
      ref={componentRef}
      className='w-full max-w-screen-lg  xl:-py--xl---5xl lg:-py--desktop---5xl md:-py--tablet---5xl -py--mobile---5xl'
    >
      <div className='w-full  mx-auto xl:-pb--xl---s lg:-pb--desktop---s md:-pb--tablet---s -pb--mobile---s xl:px-0 md:px-4 px-2 '>
        {category.map((cat) => {
          return (
            <span
              className='xl:text-captions-xl lg:text-captions-desktop md:text-captions-tablet text-captions-mobile font-light italic uppercase text-heading-color-light-mode dark:text-heading-color-dark-mode'
              key={cat.catName}
            >
              {cat.catName}
            </span>
          );
        })}
      </div>
      <div className='w-full mx-auto xl:max-w-[1080px] xl:px-0 md:px-4 px-2 '>
        <h1
          className={`${POT.className} xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 font-bold  mx-auto text-heading-color-light-mode dark:text-heading-color-dark-mode xl:-pb--xl---m lg:-pb--desktop---m md:-pb--tablet---m -pb--mobile---m`}
        >
          {prepareContent[1]}
        </h1>
        <div className='w-full  mx-auto xl:-pb--xl---2xl lg:-pb--desktop---2xl md:-pb--tablet---2xl -pb--mobile---2xl'>
          <div className='flex items-center justify-start gap-2'>
            <div className='flex items-center justify-start gap-2'>
              {author.node.avatar ? (
                <Image
                  src={author.node.avatar.url}
                  width={27}
                  height={27}
                  alt='Blog author image'
                  className='rounded-full object-cover object-center block'
                />
              ) : (
                <div></div>
              )}
              <p className='flex items-center justify-start gap-1 xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet text-heading-color-light-mode dark:text-heading-color-dark-mode'>
                <span>{author.node.firstName}</span>
                <span>{author.node.lastName}</span>
              </p>
            </div>
            <span className='text-blog-datum'>/</span>
            <p className='xl:text-captions-xl lg:text-captions-desktop md:text-captions-tablet text-captions-mobile text-blog-datum'>
              {dayjs(global.datum).format('DD.MM.YYYY')}
            </p>
          </div>
        </div>
      </div>
      <ParallaxBanner
        layers={[
          {
            image: global.naslovnaSlika ? global.naslovnaSlika.node.sourceUrl : heroImagesHomePage.desktop,
            speed: -15,
          },
        ]}
        className='block object-cover object-center aspect-video h-[250px] w-full mx-auto xl:min-h-[650px] lg:min-h-[580px] md:min-h-[460px] min-h-[300px]'
      />

      <div className='xl:max-w-[1080px] xl:px-0 md:px-4 px-2 mx-auto'>
        <div className='prose  mx-auto my-0 max-w-full relative'>
          <TracingBeam>
            <div className=' prose-p:text-text-light-mode dark:prose-p:text-text-dark-mode  w-full xl:prose-p:text-text-base-l-xl lg:prose-p:text-text-base-l-desktop prose-p:text-text-base-l-mobiletablet prose-p:italic xl:prose-p:-py--xl---2xl lg:prose-p:-py--desktop---2xl md:prose-p:-py--tablet---2xl prose-p:-py--mobile---2xl prose-p:my-0'>
              {parse(intro)}
            </div>

            <div className='proza-custom-blog prose-headings:font-SERIF prose-headings:text-heading-color-light-mode dark:prose-headings:text-heading-color-dark-mode prose-blockquote:text-text-light-mode dark:prose-blockquote:text-hero-text-dark-mode prose-p:text-text-light-mode dark:prose-p:text-text-dark-mode  prose-figcaption:text-text-light-mode dark:prose-figcaption:text-text-dark-mode xl:prose-h1:text-h3-xl lg:prose-h1:text-h3-desktop md:prose-h1:text-h3-tablet prose-h1:text-h3-mobile xl:prose-h2:text-h4-xl lg:prose-h2:text-h4-desktop md:prose-h2:text-h4-tablet prose-h2:text-h4-mobile w-full xl:prose-p:text-text-base-base-xl lg:prose-p:text-text-base-base-desktop prose-p:text-text-base-base-mobiletablet  prose-blockquote:border-accent-boja prose-blockquote:border-l-4 xl:prose-blockquote:text-quote-xl lg:prose-blockquote:text-quote-desktop md:prose-blockquote:text-quote-tablet prose-blockquote:text-quote-mobile xl:prose-figcaption:text-captions-xl lg:prose-figcaption:text-captions-desktop md:prose-figcaption:text-captions-tablet prose-figcaption:text-captions-mobile prose-figcaption:italic prose-figcaption:font-light prose-figcaption:mt-3 prose-img:mb-0 prose-blockquote:my-0 xl:prose-blockquote:-mb--xl---2xl lg:prose-blockquote:-mb--desktop---2xl md:prose-blockquote:-mb--tablet---2xl prose-blockquote:-mb--mobile---2xl prose-p:my-0 xl:prose-p:-pb--xl---xl lg:prose-p:-pb--desktop---xl md:prose-p:-pb--tablet---xl prose-p:-pb--mobile---xl prose-h2:my-0 prose-h1:my-0 xl:prose-headings:-pb--xl---m lg:prose-headings:-pb--desktop---m md:prose-headings:-pb--tablet---m prose-headings:-pb--mobile---m xl:prose-ul:-pb--xl---xl lg:prose-ul:-pb--desktop---xl md:prose-ul:-pb--tablet---xl prose-ul:-pb--mobile---xl prose-ul:text-text-light-mode dark:prose-ul:text-text-dark-mode dark:prose-strong:text-text-dark-mode'>
              {parse(prepareContent[2])}
            </div>
          </TracingBeam>
        </div>
        {prepareGallery.every((item) => item !== null) && (
          <div className='w-full mx-auto py-6 overflow-x-hidden'>
            <div className='slider-container'>
              <Slider {...blogGallerySliderSettings}>
                {prepareGallery.map((galImage: any) => {
                  return (
                    galImage && (
                      <div key={galImage.node.sourceUrl} className='h-[250px] w-[350px] relative'>
                        <Image
                          src={galImage.node.sourceUrl ?? 'https://placehold.co/400.png'}
                          alt='gallery image'
                          fill
                          className='object-cover object-center aspect-auto block w-full h-full'
                        />
                      </div>
                    )
                  );
                })}
              </Slider>
            </div>
          </div>
        )}
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
        <div className='flex gap-1 w-full max-w-sutraBlogTestMaxWidth mx-auto my-4'>
          {prepareTags &&
            prepareTags.map((singTag: string) => {
              return (
                <span
                  className='border rounded-sutraCardTagBorderRadius border-accent/50 px-2 py-1 text-text-light-mode dark:text-text-dark-modecursor-pointer hover:text-accent-boja transition-all ease-in-out'
                  key={singTag}
                >
                  {singTag}
                </span>
              );
            })}
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

export default PageContent;
