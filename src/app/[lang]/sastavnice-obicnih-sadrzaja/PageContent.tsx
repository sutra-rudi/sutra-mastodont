'use client';

import React from 'react';
import parse from 'html-react-parser';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Image from 'next/image';
import { Poltawski_Nowy } from 'next/font/google';
import { MainSutraButton, OutlineSutraButton } from '@/app/components/SutraButton';
import { FaArrowRight as RightIcon } from 'react-icons/fa6';

const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });
interface AdminBazeTekstova {
  content: any[];
  lang: string;
}

const PageContent = ({ content, lang }: AdminBazeTekstova) => {
  console.log('CONTENT', content);

  const l = getSuffixFromLang(lang);

  const singleBlock = content[0].node;

  const textContentShort = singleBlock[`modulBazeTekstova${l}`];

  const title = textContentShort[`naslovBazaTekstova${l}`];
  const subTitle = textContentShort[`nadnaslovPodnaslovBazaTekstova${l}`];
  const bodyTxt = parse(textContentShort[`tekstBazaTekstova${l}`]);
  return (
    <div className='w-full grid grid-cols-1 gap-12'>
      <article className='w-full max-w-[1650px] mx-auto grid lg:grid-cols-2 grid-cols-1 items-stretch bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'>
        <Image
          alt='article image'
          src={singleBlock.modulBazeTekstovaUvod.slika1.node.sourceUrl}
          width={825}
          height={930}
          className='object-cover object-center block'
        />

        <div className='w-full xl:-py--xl---5xl lg:-py--desktop---5xl md:-py--tablet---5xl -py--mobile---5xl xl:-px--xl---3xl lg:-px--desktop---3xl md:-px--tablet---3xl -px--mobile---3xl'>
          <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov'>
            {subTitle}
          </p>
          <h2
            className={`${POT.className} xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst text-heading-color-light-mode dark:text-heading-color-dark-mode`}
          >
            {title}
          </h2>
          <h4
            className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-text-light-mode dark:text-text-dark-mode`}
          >
            {bodyTxt}
          </h4>
        </div>
      </article>

      <article className='w-full max-w-[1650px] mx-auto grid lg:grid-cols-2 grid-cols-1 items-stretch bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'>
        <Image
          alt='article image'
          src={singleBlock.modulBazeTekstovaUvod.slika1.node.sourceUrl}
          width={825}
          height={930}
          className='object-cover object-center block'
        />

        <div className='w-full xl:-py--xl---5xl lg:-py--desktop---5xl md:-py--tablet---5xl -py--mobile---5xl xl:-px--xl---3xl lg:-px--desktop---3xl md:-px--tablet---3xl -px--mobile---3xl'>
          <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov'>
            {subTitle}
          </p>
          <h2
            className={`${POT.className} xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst text-heading-color-light-mode dark:text-heading-color-dark-mode`}
          >
            {title}
          </h2>
          <h4
            className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-text-light-mode dark:text-text-dark-mode`}
          >
            {bodyTxt}
          </h4>

          <div className='xl:-pt--xl-h1-2---sadrzaj-cta lg:-pt--desktop-h1-2---sadrzaj-cta md:-pt--tablet-h1-2---sadrzaj-cta -pt--mobile-h1-2---sadrzaj-cta flex items-center xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group'>
            <MainSutraButton innerText='Button text' isResponsive size='base' frontIcon={RightIcon} />
            <OutlineSutraButton innerText='Button text' isResponsive size='base' frontIcon={RightIcon} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PageContent;
