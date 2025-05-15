'use client';

import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';

interface ClientProps {
  imgSrc: {
    desktop: string;
    mobile: string;
  };
  lang: any;
}

export default function Client({ lang, imgSrc }: ClientProps) {
  return (
    <div className='relative w-full'>
      <ParallaxBanner
        layers={[
          {
            image: imgSrc.desktop,
            speed: -20,
            className: 'hidden md:block brightness-50',
          },
          {
            image: imgSrc.mobile,
            speed: -20,
            className: 'block md:hidden brightness-50',
          },
          {
            speed: -10,
            children: (
              <div className='flex items-center justify-center h-full absolute inset-0'>
                <h1 className='block z-10 text-white text-center uppercase text-balance lg:text-h1-xl md:text-h1-tablet text-h1-mobile35'>
                  {findGeneralTranslation('Oglasi za posao', lang, generalTranslations)}
                </h1>
              </div>
            ),
          },
        ]}
        className='aspect-auto w-full lg:h-[500px] md:h-[400px] h-[250px]'
      />
    </div>
  );
}
