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
      <article className='w-full max-w-[1650px] mx-auto grid md:grid-cols-2 grid-cols-1 items-stretch bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'>
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

      <article className='w-full max-w-[1650px] mx-auto grid md:grid-cols-2 grid-cols-1 items-stretch bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'>
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

      <article className='w-full max-w-[1650px] mx-auto grid md:grid-cols-2 grid-cols-1 items-stretch bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'>
        <div className='xl:-py--xl---3xl lg:-py--desktop---3xl md:-py--tablet---3xl py-0 xl:-pl--xl---3xl lg:-pl--desktop---3xl md:-pl--tablet---3xl pl-0'>
          <Image
            alt='article image'
            src={singleBlock.modulBazeTekstovaUvod.slika1.node.sourceUrl}
            width={825}
            height={930}
            className='object-cover object-center block w-full h-full'
          />
        </div>

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

      <article className='w-full max-w-[1650px] mx-auto grid grid-cols-1 place-items-center bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'>
        <div className='w-full xl:-py--xl---5xl lg:-py--desktop---5xl md:-py--tablet---5xl -py--mobile---5xl xl:-px--xl---3xl lg:-px--desktop---3xl md:-px--tablet---3xl -px--mobile---3xl text-center'>
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

          <div className='xl:-pt--xl-h1-2---sadrzaj-cta lg:-pt--desktop-h1-2---sadrzaj-cta md:-pt--tablet-h1-2---sadrzaj-cta -pt--mobile-h1-2---sadrzaj-cta flex items-center justify-center xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group'>
            <MainSutraButton innerText='Button text' isResponsive size='base' frontIcon={RightIcon} />
            <OutlineSutraButton innerText='Button text' isResponsive size='base' frontIcon={RightIcon} />
          </div>
        </div>
      </article>

      <article className='w-full max-w-[1650px] mx-auto grid grid-cols-1 place-items-center bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode'>
        <div className='w-full xl:-py--xl---5xl lg:-py--desktop---5xl md:-py--tablet---5xl -py--mobile---5xl xl:-px--xl---3xl lg:-px--desktop---3xl md:-px--tablet---3xl -px--mobile---3xl text-center'>
          <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov hidden'>
            {subTitle}
          </p>
          <h2
            className={`${POT.className} xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst text-heading-color-light-mode dark:text-heading-color-dark-mode hidden`}
          >
            {title}
          </h2>
          <h4
            className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-text-light-mode dark:text-text-dark-mode`}
          >
            {bodyTxt}
          </h4>

          <div className='xl:-pt--xl-h1-2---sadrzaj-cta lg:-pt--desktop-h1-2---sadrzaj-cta md:-pt--tablet-h1-2---sadrzaj-cta -pt--mobile-h1-2---sadrzaj-cta flex items-center justify-center xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group'>
            <MainSutraButton innerText='Button text' isResponsive size='base' frontIcon={RightIcon} />
            <OutlineSutraButton innerText='Button text' isResponsive size='base' frontIcon={RightIcon} />
          </div>
        </div>
      </article>

      <article className='w-full mx-auto border-2  relative -py--xl---5xl flex items-center justify-center'>
        <div className='absolute bg-accent-boja w-full h-1/2 z-10 top-0'></div>
        <div className='absolute bg-photo-bg-kartica w-full h-1/2 z-10 bottom-0 bg-cover bg-center bg-no-repeat block'></div>

        <div className='w-full max-w-[1650px] grid md:grid-cols-2 grid-cols-1 items-stretch relative bg-blog-pozadina-light-mode z-20 dark:bg-blog-pozadina-dark-mode md:rounded-[64px] rounded-[32px]'>
          <div className='xl:-py--xl---2xl lg:-py--desktop---2xl md:-py--tablet---2xl py-0 xl:-pl--xl---2xl lg:-pl--desktop---2xl md:-pl--tablet---2xl pl-0  '>
            <Image
              alt='article image'
              src={singleBlock.modulBazeTekstovaUvod.slika1.node.sourceUrl}
              width={825}
              height={930}
              className='object-cover object-center block w-full h-full md:rounded-[32px] rounded-[18px]'
            />
          </div>

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
        </div>
      </article>

      <article className='w-full max-w-[1650px] mx-auto grid grid-cols-1 place-items-center bg-photo-bg-kartica bg-center bg-cover bg-no-repeat relative after:absolute after:bg-overlay-dark after:w-full after:h-full after:z-0'>
        <div className='w-full z-10 xl:-py--xl---5xl lg:-py--desktop---5xl md:-py--tablet---5xl -py--mobile---5xl xl:-px--xl---3xl lg:-px--desktop---3xl md:-px--tablet---3xl -px--mobile---3xl text-center'>
          <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-dark-mode xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov bg-overlay-dark'>
            {subTitle}
          </p>
          <h2
            className={`${POT.className} xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst text-heading-color-dark-mode bg-overlay-dark`}
          >
            {title}
          </h2>
          <h4
            className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-text-light-mode dark:text-text-dark-mode hidden`}
          >
            {bodyTxt}
          </h4>

          <div className='xl:-pt--xl-h1-2---sadrzaj-cta lg:-pt--desktop-h1-2---sadrzaj-cta md:-pt--tablet-h1-2---sadrzaj-cta -pt--mobile-h1-2---sadrzaj-cta flex items-center justify-center xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group'>
            <MainSutraButton innerText='Button text' isResponsive size='base' frontIcon={RightIcon} isOnOverlayImage />
            <OutlineSutraButton
              innerText='Button text'
              isResponsive
              size='base'
              frontIcon={RightIcon}
              isOnOverlayImage
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PageContent;
