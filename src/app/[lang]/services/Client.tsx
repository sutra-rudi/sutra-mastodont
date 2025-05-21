'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
interface Client {
  hero: any;

  currentLang: any;
}
export default function Client({ hero, currentLang }: Client) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className=''>
      <div className='relative w-full'>
        <ParallaxBanner
          layers={[
            {
              //   image: imgSrc.desktop,
              image: 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg',
              speed: -20,
              className: 'block brightness-50',
            },
            // {
            //   image: imgSrc.mobile,
            //   speed: -20,
            //   className: 'block md:hidden brightness-50',
            // },
            {
              speed: -10,
              children: (
                <div className='flex items-center justify-center h-full absolute inset-0'>
                  <h1 className='block z-10 text-white text-center uppercase text-balance lg:text-h1-xl md:text-h1-tablet text-h1-mobile35'>
                    {/* {findGeneralTranslation('Oglasi za posao', lang, generalTranslations)} */}
                    Usluge
                  </h1>
                </div>
              ),
            },
          ]}
          className='aspect-auto w-full lg:h-[500px] md:h-[400px] h-[250px]'
        />
      </div>
      {/* <picture>
        <img
          //     src={hero.desktop}
          src='https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'
          alt='Hero image for services'
          loading='eager'
          className='flec items-center justify-center'
          aria-placeholder='NEMA SLIKE'
          onError={() => "this.src = 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'"}
        />
      </picture> */}
    </section>
  );
}
