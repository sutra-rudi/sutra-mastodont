'use client';

import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import parse from 'html-react-parser';
import faqDataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
const findIntro = faqDataset.data.allBazaTekstaPodstranice1Modul.edges.find(
  (item) => item.node.title === 'NASLOVNICA – Često postavljana pitanja (FAQ)'
);

interface ClientProps {
  imgSrc: {
    desktop: string;
    mobile: string;
  };
  lang: any;
}

export default function Client({ lang, imgSrc }: ClientProps) {
  const l = getSuffixFromLang(lang);
  //@ts-ignore
  const title = findIntro?.node[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`];
  //@ts-ignore
  const text = findIntro?.node[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`];
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
              <div className='flex items-center justify-center flex-col h-full absolute inset-0'>
                <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-dark-mode dark:text-heading-color-dark-mode block text-center text-balance lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst px-4'>
                  {title}
                </h2>

                <div className='text-center md:text-text-base-base-desktop text-text-base-base-mobiletablet max-w-prose text-balance mx-auto text-text-dark-mode dark:text-text-dark-mode lg:-mb--desktop---3xl md:-mb--tablet---3xl -mb--mobile---3xl px-4 relative block'>
                  {parse(text)}
                </div>
              </div>
            ),
          },
        ]}
        className='aspect-auto w-full lg:h-[500px] md:h-[400px] h-[250px]'
      />
    </div>
  );
}
