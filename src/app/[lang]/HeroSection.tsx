'use client';
import { useEffect, useState } from 'react';
import {
  BrandClrButton,
  ButtonOutlineAlmostBlack,
  SutraButtonOutlined,
  SutraButtonWithIcon,
} from '../components/SutraButton';
import { BsArrowRightShort as RightIcon } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { videoResources } from '../pathsUtils/mediaImportsDynamic';

const ReactPlayerDy = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => (
    <Image
      src={videoResources.homePage.placeholder}
      width={1600}
      height={1200}
      alt='poster for video'
      className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
      priority
    />
  ),
});

const checkImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      next: { revalidate: 3600 },
    });
    return response.ok;
  } catch (error) {
    console.error('Error checking image URL:', error);
    return false;
  }
};

const HeroSection = () => {
  const [videoSource, setVideoSource] = useState<any>(null);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setIsVideoLoading(true);
    const validateVideo = async () => {
      const videoRes = await checkImageUrl(videoResources.homePage.video);

      if (videoRes) {
        setVideoSource({
          source: videoResources.homePage.video,
          placeholder: videoResources.homePage.placeholder,
        });
        setIsVideoLoading(false);
        setIsVideoReady(true);
      }
    };

    validateVideo();
  }, []);

  useEffect(() => {
    if (isVideoReady) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVideoReady]);

  return (
    <section className='bg-white dark:bg-gray-900 min-h-screen w-full'>
      <div className='relative w-full h-full'>
        {isVideoReady && videoSource && !isVideoLoading ? (
          <ReactPlayerDy
            url={videoSource.source}
            playsinline
            pip
            muted
            loop
            volume={0}
            width='100%'
            height='100%'
            playing={isPlaying}
            fallback={
              <Image
                src={videoSource.placeholder}
                alt='hero image'
                width={1600}
                height={1200}
                className='object-cover object-center block aspect-video'
                priority
              />
            }
            config={{
              file: {
                attributes: {
                  preload: 'none', // Ensure video doesn't load until play
                  poster: videoSource.placeholder, // Proper use of poster attribute
                },
              },
            }}
          />
        ) : (
          <Image
            src={videoResources.homePage.placeholder}
            width={1600}
            height={1200}
            alt='poster for video'
            className='object-cover object-center block aspect-video w-full h-full mx-auto my-0'
            priority
          />
        )}
      </div>

      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 w-full h-full'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-h1-xl  dark:text-white'>Studio Sutra Mastodont</h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            One repository to rule them all
          </p>
          <div className='w-full flex items-center justify-start gap-4'>
            <BrandClrButton innerText='Call to action prvi' size='base' backIcon={RightIcon} />
            <ButtonOutlineAlmostBlack size='base' innerText='Call to action drugi' />
          </div>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <Image
            src='https://cms.sutra.hr/wp-content/uploads/2024/06/Sutra-profilna-slika-1.jpg'
            alt='mockup'
            width={1000}
            height={1000}
            className='object-cover object-center block aspect-square'
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
