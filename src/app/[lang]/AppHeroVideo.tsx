import React from 'react';

interface AppHeroVideoProps {
  videoUrl: string;
  videoPoster: string;
}

export default function AppHeroVideo({ videoUrl, videoPoster }: AppHeroVideoProps) {
  return (
    <div className='relative w-full min-h-[calc(100vh-5rem)]'>
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        preload='auto'
        poster={videoPoster}
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
    </div>
  );
}
