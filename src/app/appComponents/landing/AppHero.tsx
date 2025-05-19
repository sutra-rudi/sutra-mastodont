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
    <section className='lg:min-h-[50vh] min-h-[70vh] flex justify-center items-center -mt--desktop---5xl relative'>
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
      <div className='text-center z-20 px-4'>
        <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-dark-mode dark:text-nadnaslov-color-light-mode uppercase lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov'>
          {currentLang === UserLanguage.hr
            ? //@ts-ignore
              findDataset[`tekstHero${l}`].slide1Hero.nadnaslov
            : //@ts-ignore
              findDataset[`tekstHero${l}`]?.[`slide1Hero${l}`].nadnaslov}
        </p>
        <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-dark-mode '>
          {currentLang === UserLanguage.hr
            ? //@ts-ignore
              findDataset[`tekstHero${l}`].slide1Hero.naslov
            : //@ts-ignore
              findDataset[`tekstHero${l}`]?.[`slide1Hero${l}`].naslov}
        </h1>
      </div>
    </section>
  );
}
