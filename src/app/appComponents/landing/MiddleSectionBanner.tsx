'use client';

import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

interface MiddleSectionBanner {
  img: any;
}

export default function MiddleSectionBanner({ img }: MiddleSectionBanner) {
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl relative w-full md:h-[calc(100vh-5rem)] h-[500px] overflow-hidden'>
      <ParallaxBanner
        layers={[
          {
            translateY: [0, 50],
            opacity: [0.85, 1],
            scale: [1.25, 1, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            expanded: true,
            children: (
              <picture>
                <img
                  src={img.desktopMiddle}
                  alt={`Image of parallax value`}
                  className='object-cover object-center md:block hidden aspect-auto w-full h-full'
                  decoding='async'
                  loading='lazy'
                />

                <img
                  src={img.mobileMiddle}
                  alt={`Image of parallax value`}
                  className='object-cover object-center md:hidden block aspect-auto w-full h-full'
                  decoding='async'
                  loading='lazy'
                />
              </picture>
            ),
          },
        ]}
        className='aspect-[2/1] h-full'
      />
    </section>
  );
}
