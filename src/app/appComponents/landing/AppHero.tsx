import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { UserLanguage } from '@/app/enums/LangEnum';
interface AppHero {
  currentLang: string;
}
const findDataset = dataset.data.allHeroSekcija.edges[0].node;
export default async function AppHero({ currentLang }: AppHero) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='min-h-[50vh] flex justify-center items-center -mt--desktop---5xl'>
      <div className='text-center max-w-6xl mx-10'>
        <p className='my-3 text-sm tracking-widest text-dark from-blue-600-500 uppercase'>
          {currentLang === UserLanguage.hr
            ? //@ts-ignore
              findDataset[`tekstHero${l}`].slide1Hero.nadnaslov
            : //@ts-ignore
              findDataset[`tekstHero${l}`]?.[`slide1Hero${l}`].nadnaslov}
        </p>
        <h1 className='my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100'>
          {currentLang === UserLanguage.hr
            ? //@ts-ignore
              findDataset[`tekstHero${l}`].slide1Hero.naslov
            : //@ts-ignore
              findDataset[`tekstHero${l}`]?.[`slide1Hero${l}`].naslov}
        </h1>

        <div className='flex flex-col items-center justify-center gap-5 mt-6 md:flex-row'>
          <a
            className='inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px '
            href=''
          >
            Schedule A Consultation
          </a>
          <a
            className='inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px'
            href=''
          >
            See Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
