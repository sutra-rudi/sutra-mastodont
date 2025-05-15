'use client';

import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

interface ClientProps {
  imgSrc: any;
  lang: any;
  title: any;
  subTitle: any;
}

export default function Client({ lang, imgSrc, title, subTitle }: ClientProps) {
  return (
    <div className='relative w-full'>
      <ParallaxBanner
        layers={[
          {
            image: imgSrc,
            speed: -20,
            className: 'hidden md:block brightness-50',
          },
          {
            image: imgSrc,
            speed: -20,
            className: 'block md:hidden brightness-50',
          },
          {
            speed: -10,
            children: (
              <div className='absolute inset-0 w-full h-full flex flex-col items-center justify-center text-almost-white'>
                <h1 className='mx-auto text-balance max-w-prose lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-center px-4'>
                  {title}
                </h1>

                <h4 className='mx-auto text-balance max-w-prose lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mt-desktop-naslov-nadnaslov md:mt-tablet-naslov-nadnaslov mt-mobile-naslov-nadnaslov text-center px-4 md:line-clamp-none line-clamp-1 text-ellipsis'>
                  {subTitle}
                </h4>
              </div>
            ),
          },
        ]}
        className='aspect-auto w-full lg:h-[500px] md:h-[400px] h-[250px]'
      />
    </div>
  );
}
