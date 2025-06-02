import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { UserLanguage } from '@/app/enums/LangEnum';
interface AppHero {
  currentLang: string;
  imgs: any;
}
const findDataset = dataset.data.allHeroSekcija.edges[0].node;
export default async function AppHero({ currentLang, imgs }: AppHero) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:min-h-[50vh] min-h-[80vh] flex justify-center items-center -mt--desktop---4xl relative'>
      <style>
        {`
      @keyframes rise {
        from {
          transform: translateY(75%);
          opacity: 0;
        }
        to {
          transform: translateY(0%);
          opacity: 1;
        }
      }
    `}
      </style>
      <picture>
        <img
          src={imgs.mobile}
          alt={`Page hero image - ${imgs.mobile}`}
          className='absolute inset-0 w-full h-full object-cover object-center md:hidden block aspect-auto pointer-events-none select-none z-10 brightness-75'
        />
        <img
          src={imgs.desktop}
          alt={`Page hero image - ${imgs.desktop}`}
          className='absolute inset-0 w-full h-full object-cover object-center md:block hidden aspect-auto pointer-events-none select-none z-10 brightness-75'
        />
      </picture>
      <div className='text-center z-20 px-4  max-w-prose'>
        <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-dark-mode dark:text-nadnaslov-color-light-mode uppercase lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov'>
          {currentLang === UserLanguage.hr
            ? //@ts-ignore
              findDataset[`tekstHero${l}`].slide1Hero.nadnaslov
            : //@ts-ignore
              findDataset[`tekstHero${l}`]?.[`slide1Hero${l}`].nadnaslov}
        </p>

        <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-dark-mode flex gap-2 max-w-prose flex-wrap text-balance items-center justify-center'>
          {currentLang === UserLanguage.hr
            ? //@ts-ignore
              findDataset[`tekstHero${l}`].slide1Hero.naslov.split(' ').map((l, i) => (
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
    </section>
  );
}
