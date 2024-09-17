'use client';
import React from 'react';
import { SutraButtonOutlined, SutraButtonWithIcon } from '../components/SutraButton';
import { BsArrowRightShort as RightIcon } from 'react-icons/bs';
import ReactPlayer from 'react-player';
import { heroImagesHomePage, videoResources } from '../pathsUtils/mediaImportsDynamic';
import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import Loading from '../loading';
import dynamic from 'next/dynamic';

// import { getCookies } from 'cookies-next';

const ReactPlayerDy = dynamic(() => import('react-player'), { ssr: false });

const HeroSection = () => {
  const clientSize = useWindowSize();

  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);
  const [videoSource, setVideoSource] = React.useState<any>(null);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      // const timeToStart = 7 * 60 + 12.6;
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  React.useEffect(() => {
    if (videoResources.homePage.video) {
      setVideoSource(videoResources.homePage.video);
    }
  }, []);

  return (
    <section
      className='bg-white dark:bg-gray-900 min-h-screen w-full
    '
    >
      <div className='relative w-full h-screen'>
        {videoSource ? (
          <ReactPlayerDy
            url={videoSource}
            playsinline
            pip
            muted
            loop={isReady}
            volume={0}
            width={'100%'}
            height={'100%'}
            playing={isReady}
            onReady={onReady}
            fallback={<Loading />}
            config={{
              file: {
                attributes: {
                  poster: (
                    <Image
                      src={videoResources.homePage.placeholder}
                      width={1600}
                      height={1200}
                      alt='poster for video'
                      className='object-cover object-center block aspect-video'
                    />
                  ),
                },
              },
            }}
          />
        ) : (
          <Image
            src={
              clientSize.width! > 1536
                ? heroImagesHomePage.desktop
                : clientSize.width! > 1024
                ? heroImagesHomePage.desktopMiddle
                : heroImagesHomePage.mobile
            }
            alt='hero image'
            fill
            className='w-full h-full object-cover object-center block'
          />
        )}
      </div>

      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            Studio Sutra Mastodont
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            One repository to rule them all
          </p>
          <div className='w-full flex items-center justify-start gap-4'>
            <SutraButtonWithIcon innerText='Call to action prvi' size='normal' backIcon={RightIcon} />
            <SutraButtonOutlined size='normal' innerText='Call to action drugi' />
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
