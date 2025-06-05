'use client';

import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { UserLanguage } from '@/app/enums/LangEnum';
import { ParallaxBanner } from 'react-scroll-parallax';
interface AppHero {
  currentLang: string;
  imgs: any;
}
const findDataset = dataset.data.allHeroSekcija.edges[0].node;
export default function AppHero({ currentLang, imgs }: AppHero) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='relative w-full -mt--desktop---4xl overflow-hidden'>
      <ParallaxBanner
        className='aspect-auto w-full lg:h-[70vh] h-[80vh]'
        layers={[
          {
            image: imgs.desktop,
            translateY: [0, 50],
            opacity: [1, 0.8],
            scale: [1.05, 1, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            className:
              'md:block hidden brightness-75 motion-preset-shrink motion-ease-spring-smooth motion-duration-2000',
          },
          {
            image: imgs.mobile,
            translateY: [0, 50],
            opacity: [1, 0.8],
            scale: [1.05, 1, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            className:
              'md:hidden block brightness-75 motion-preset-shrink motion-ease-spring-smooth motion-duration-2000',
          },
          {
            translateY: [0, 30],
            scale: [1, 1.15, 'easeOutCubic'],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
            children: (
              <div className='text-center origin-center z-20 px-4   absolute inset-0 flex items-center justify-center flex-col'>
                <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-dark-mode dark:text-nadnaslov-color-light-mode uppercase lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov flex items-center justify-center gap-1 text-balance'>
                  {currentLang === UserLanguage.hr
                    ? //@ts-ignore
                      findDataset[`tekstHero${l}`].slide1Hero.nadnaslov.split(' ').map((t, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0 animate-fallAnima'
                          style={{
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          {t}
                        </span>
                      ))
                    : //@ts-ignore
                      findDataset[`tekstHero${l}`]?.[`slide1Hero${l}`].nadnaslov}
                </p>

                <h1 className='xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-dark-mode flex gap-2 !max-w-prose flex-wrap text-balance items-center justify-center'>
                  {currentLang === UserLanguage.hr
                    ? //@ts-ignore
                      findDataset[`tekstHero${l}`].slide1Hero.naslov.split(' ').map((l, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0 animate-riseAnima'
                          style={{
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          {l}
                        </span>
                      ))
                    : //@ts-ignore
                      findDataset[`tekstHero${l}`]?.[`slide1Hero${l}`].naslov.split(' ').map((l, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0'
                          style={{
                            animation: `rise 1s ease-out forwards`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          {l}
                        </span>
                      ))}
                </h1>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
}
