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

  console.log('AUTORCINA', author.node);
  return (
    /*@ts-ignore*/
    <article ref={componentRef} className='mx-auto  w-full bg-blog-pozadina-light-mode my-0 py-8 lg:px-0 px-4 '>
      <div className='w-full xl:max-w-screen-xl mx-auto'>
        {category.map((cat) => {
          return (
            <span
              className='xl:text-captions-xl lg:text-captions-desktop md:text-captions-tablet text-captions-mobile font-light italic uppercase'
              key={cat.catName}
            >
              {cat.catName}
            </span>
          );
        })}
      </div>
      <div className='w-full mx-auto xl:max-w-screen-xl'>
        <h1
          className={`${POT.className} xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 font-bold  mx-auto text-almost-black text-balance`}
        >
          {prepareContent[1]}
        </h1>
        <div className='w-full  mx-auto'>
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
              <p className='flex items-center justify-start gap-1 xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet'>
                <span>{author.node.firstName}</span>
                <span>{author.node.lastName}</span>
              </p>
            </div>
            <span className=''>/</span>
            <p className='xl:text-captions-xl lg:text-captions-desktop md:text-captions-tablet text-captions-mobile text-sekundarna-tamna'>
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
        className='block object-cover object-center aspect-video h-[250px] w-full mx-auto my-0 min-h-[640px]'
      />

      <div className='xl:max-w-screen-xl mx-auto'>
        <div className='prose  mx-auto my-0 max-w-full '>
          <div className=' prose-p:text-primarna-tamna  w-full xl:prose-p:text-text-base-l-xl lg:prose-p:text-text-base-l-desktop prose-p:text-text-base-l-mobiletablet prose-p:italic prose-p:my-12'>
            {parse(intro)}
          </div>
          <div className='w-full bg-almost-black/5 h-px my-8'></div>
          <div className='proza-custom-blog w-full xl:prose-p:text-text-base-base-xl lg:prose-p:text-text-base-base-desktop prose-p:text-text-base-base-mobiletablet  prose-blockquote:border-accent prose-blockquote:text-2xl prose-blockquote:font-medium prose-img:mb-0 prose-figcaption:mt-1 prose-figcaption:italic lg:prose-base prose-sm  prose-strong:font-semibold '>
            {parse(prepareContent[2])}
          </div>
        </div>
        <div className='w-full   mx-auto py-6'>
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
        <div className='w-full flex items-center justify-start max-w-sutraBlogTestMaxWidth mx-auto mt-4 mb-6 gap-1 text-base text-almost-black font-normal cursor-pointer '>
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
                  className='border rounded-sutraCardTagBorderRadius border-accent/50 px-2 py-1 text-accent-boja/70 cursor-pointer hover:text-accent-boja transition-all ease-in-out'
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
              className='flex items-center gap-1 rounded-sutraCardTagBorderRadius border border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black px-4 py-2 cursor-pointer'
              onClick={copyToClip}
            >
              <FileIcon /> <span>Copy link</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='rounded-sutraCardTagBorderRadius border cursor-pointer border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black flex items-center justify-center w-9 h-9'>
                <FacebookShareButton url={currentLocation} className=''>
                  <FacebookIcon />
                </FacebookShareButton>
              </div>
              <div className='rounded-sutraCardTagBorderRadius border cursor-pointer border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black flex items-center justify-center w-9 h-9'>
                <TwitterShareButton url={currentLocation}>
                  <TwitterIcon />
                </TwitterShareButton>
              </div>

              <div className='rounded-sutraCardTagBorderRadius border cursor-pointer border-almost-black/10 text-almost-black/40 hover:text-almost-black transition-all ease-in-out hover:border-almost-black flex items-center justify-center w-9 h-9'>
                <RedditShareButton url={currentLocation} className=''>
                  <RedditIcon />
                </RedditShareButton>
              </div>
            </div>
          </div>
        }
      </div>
      <SpeedDial handlePrint={handlePrint} />
    </article>
  );
};

export default PageContent;
