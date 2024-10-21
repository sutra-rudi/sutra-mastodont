'use client';
import { useEffect, useState } from 'react';
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
    </section>
  );
};

export default HeroSection;
