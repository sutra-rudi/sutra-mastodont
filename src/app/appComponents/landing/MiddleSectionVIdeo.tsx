'use client';

import { useIntersectionObserver } from '@uidotdev/usehooks';
import React from 'react';

interface MiddleSectionVideoProps {
  sourceUrl: {
    video?: string;
    poster?: string;
  };
}

export default function MiddleSectionVideo({ sourceUrl }: MiddleSectionVideoProps) {
  const [videoError, setVideoError] = React.useState<boolean>(false);
  const [seen, setSeen] = React.useState<boolean>(false);
  const [sectionRef, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  React.useEffect(() => {
    if (entry?.isIntersecting) {
      setSeen(true);
    }
  }, [entry]);

  const hasValidVideo = !sourceUrl?.video || !videoError;

  function VideoRender() {
    if (seen) {
      if (hasValidVideo) {
        return (
          <video
            data-gtm='play-middle-section-video'
            src={sourceUrl.video}
            autoPlay
            muted
            loop
            preload='auto'
            controls={false}
            poster={sourceUrl.poster}
            className='absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none'
            onError={() => setVideoError(true)}
          />
        );
      } else
        return (
          <div className='absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-lg'>
            <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-dark-mode text-center px-4'>{`Video trenutno nije dostupan. (PROVJERI FTP)`}</h1>
          </div>
        );
    }
  }

  return (
    <div
      ref={sectionRef}
      className='relative w-full md:h-[calc(100vh-5rem)] h-[500px] lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'
    >
      <VideoRender />
    </div>
  );
}
