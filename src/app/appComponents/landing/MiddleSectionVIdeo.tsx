'use client';

import { useState } from 'react';

interface MiddleSectionVideoProps {
  sourceUrl: {
    video?: string;
    poster?: string;
  };
}

export default function MiddleSectionVideo({ sourceUrl }: MiddleSectionVideoProps) {
  const [videoError, setVideoError] = useState(false);

  const hasValidVideo = !!sourceUrl?.video && !videoError;

  return (
    <div className='relative w-full md:h-[calc(100vh-5rem)] h-[300px] lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      {hasValidVideo ? (
        <video
          src={sourceUrl.video}
          autoPlay
          muted
          loop
          preload='auto'
          poster={sourceUrl.poster}
          className='absolute top-0 left-0 w-full h-full object-cover'
          onError={() => setVideoError(true)}
        />
      ) : (
        <div className='absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-lg'>
          <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-dark-mode text-center px-4'>{`Video trenutno nije dostupan. (PROVJERI FTP)`}</h1>
        </div>
      )}
    </div>
  );
}
