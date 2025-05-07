'use client';

import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
interface Hero {
  heroImagesContactUs: any;
}

export default function Hero({ heroImagesContactUs }: Hero) {
  return (
    <div className='relative w-full h-[500px] block overflow-hidden z-30'>
      <ParallaxBanner
        layers={[{ image: heroImagesContactUs.desktop, speed: -25 }]}
        className='w-full h-full absolute inset-0'
      />
    </div>
  );
}
