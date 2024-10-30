'use client';

import Image from 'next/image';
import React from 'react';

interface HeroVersion {
  pathsToMasks: Record<string, string>;
  pathsToHeroBg: Record<string, string>;
}

export const HeroVersionOne = ({ pathsToMasks, pathsToHeroBg }: HeroVersion) => {
  console.log('PATHS TO HERO', pathsToHeroBg);
  return (
    <section>
      <div className='relative w-full h-full min-h-[calc(100vh-5rem)]'>
        <Image
          src={pathsToMasks['1680v1']}
          alt='background svg'
          fill
          className='w-full h-full block object-cover object-center z-20'
        />
        <Image
          src={pathsToMasks['1280v1']}
          alt='background svg'
          fill
          className='w-full h-full block object-cover object-center z-20'
        />
        <Image
          src={pathsToMasks['mobilev1']}
          alt='background svg'
          fill
          className='w-full h-full block object-cover object-center z-20'
        />

        <Image
          src={pathsToHeroBg.img1}
          alt='background image hero'
          fill
          className='w-full h-full block object-cover object-center z-10'
        />
      </div>
    </section>
  );
};

export const HeroVersionTwo = ({ pathsToMasks, pathsToHeroBg }: HeroVersion) => {
  return (
    <section>
      <div className='relative w-full h-full min-h-[calc(100vh-5rem)]'>
        <Image
          src={pathsToMasks['1280v2']}
          alt='background svg'
          fill
          className='w-full h-full block object-cover object-center z-20'
        />

        <Image
          src={pathsToHeroBg.img2}
          alt='background image hero'
          fill
          className='w-full h-full block object-cover object-center z-10'
        />
      </div>
    </section>
  );
};
