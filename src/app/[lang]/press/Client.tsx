'use client';

import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

interface Client {
  imgSrc: any;
  lang: any;
}

export default function Client({ imgSrc, lang }: Client) {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: imgSrc.desktop,
            speed: -20,
            className: 'hidden md:block brightness-50 object-cover object-center',
          },
          {
            image: imgSrc.mobile,
            speed: -20,
            className: 'block md:hidden brightness-50 object-cover object-center',
          },
          {
            speed: -10,
            children: (
              <div className='flex items-center justify-center h-full absolute inset-0'>
                <h1 className='block z-10 text-white text-center uppercase text-balance lg:text-h1-xl md:text-h1-tablet text-h1-mobile35'>
                  {findGeneralTranslation('Press', lang, generalTranslations)}
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
