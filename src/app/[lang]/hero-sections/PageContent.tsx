'use client';

import { ButtonOutlinePrimaryDark, PrimaryLightButton } from '@/app/components/SutraButton';
import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { Poltawski_Nowy } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });

interface HeroVersion {
  pathsToMasks: Record<string, string>;
  pathsToHeroBg: Record<string, string>;
  lang: string;
  heroContent: any;
}

export const HeroVersionOne = ({ pathsToMasks, pathsToHeroBg, heroContent, lang }: HeroVersion) => {
  console.log('PATHS TO HERO', pathsToHeroBg);

  const l = getSuffixFromLang(lang);
  const heroDataShorthand = heroContent.node[`tekstHero${l}`];

  const parseTextContent =
    lang === UserLanguage.hr ? heroDataShorthand.slide1Hero : heroDataShorthand[`slide1Hero${l}`];
  return (
    <section>
      <div className='relative w-full h-full min-h-[calc(100vh-5rem)]'>
        <div className='w-full absolute left-0 md:top-1/3 bottom-12  z-30 xl:px-24 lg:px-20 md:px-12 px-4'>
          <div className='max-w-[758px]'>
            <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-accent-boja xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov'>
              {parseTextContent.nadnaslov}
            </p>
            <h1
              className={`${POT.className} xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-sekundarna-svijetla xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst`}
            >
              {parseTextContent.naslov}
            </h1>
            <h4
              className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-almost-white`}
            >
              {parseTextContent.tekst}
            </h4>

            <div className='flex items-center justify-start xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group xl:-pt--xl-h1-2---cta-udaljenost lg:-pt--desktop-h1-2---cta-udaljenost md:-pt--tablet-h1-2---cta-udaljenost -pt--mobile-h1-2---cta-udaljenost'>
              <PrimaryLightButton isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />

              <ButtonOutlinePrimaryDark isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />
            </div>
          </div>
        </div>
        <Image
          src={pathsToMasks['1680v1']}
          alt='background svg'
          fill
          className='w-full h-full object-cover object-center z-20 hidden lg:block'
        />

        <Image
          src={pathsToMasks['1280v1']}
          alt='background svg'
          fill
          className='w-full h-full object-cover object-center z-20 hidden md:block lg:hidden'
        />

        <Image
          src={pathsToMasks['mobilev1']}
          alt='background svg'
          fill
          className='w-full h-full object-cover object-center z-20 block md:hidden'
        />

        <Image
          src={pathsToHeroBg.img1}
          alt='background image hero'
          fill
          className='w-full h-full block object-cover object-center z-10'
        />
      </div>
    </section>
  );
};

export const HeroVersionTwo = ({ pathsToMasks, pathsToHeroBg, heroContent, lang }: HeroVersion) => {
  const l = getSuffixFromLang(lang);
  const heroDataShorthand = heroContent.node[`tekstHero${l}`];

  const parseTextContent =
    lang === UserLanguage.hr ? heroDataShorthand.slide1Hero : heroDataShorthand[`slide1Hero${l}`];
  return (
    <section>
      <div className='relative w-full h-full min-h-[calc(100vh-5rem)]'>
        <div className='w-full absolute left-0 top-1/3  z-30 xl:px-[70px] lg:px-[60px] md:px-12 px-4'>
          <div className='max-w-[758px]'>
            <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-accent-boja xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov'>
              {parseTextContent.nadnaslov}
            </p>
            <h1
              className={`${POT.className} xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-sekundarna-svijetla xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst`}
            >
              {parseTextContent.naslov}
            </h1>
            <h4
              className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-almost-white`}
            >
              {parseTextContent.tekst}
            </h4>

            <div className='flex items-center justify-start xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group xl:-pt--xl-h1-2---cta-udaljenost lg:-pt--desktop-h1-2---cta-udaljenost md:-pt--tablet-h1-2---cta-udaljenost -pt--mobile-h1-2---cta-udaljenost'>
              <PrimaryLightButton isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />

              <ButtonOutlinePrimaryDark isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />
            </div>
          </div>
        </div>
        <Image
          src={pathsToMasks['1680v2']}
          alt='background svg'
          fill
          className='w-full h-full object-cover object-center z-20 hidden lg:block aspect-auto'
        />

        <Image
          src={pathsToMasks['1280v2']}
          alt='background svg'
          fill
          className='w-full h-full object-cover object-center z-20 hidden md:block lg:hidden aspect-auto'
        />

        <Image
          src={pathsToMasks['mobilev2']}
          alt='background svg'
          fill
          className='w-full h-full object-cover object-center z-20 block md:hidden aspect-auto'
        />

        <Image
          src={pathsToHeroBg.img2}
          alt='background image hero'
          fill
          className='w-full h-full block object-cover object-center z-10'
        />
      </div>
    </section>
  );
};

export const HeroVersionThree = ({ pathsToHeroBg, heroContent, lang }: HeroVersion) => {
  const l = getSuffixFromLang(lang);
  const heroDataShorthand = heroContent.node[`tekstHero${l}`];

  const parseTextContent =
    lang === UserLanguage.hr ? heroDataShorthand.slide1Hero : heroDataShorthand[`slide1Hero${l}`];
  return (
    <section>
      <div className='relative w-full h-full min-h-[calc(100vh-5rem)]'>
        <div className='w-full absolute left-0 top-1/3  z-30 xl:px-[70px] lg:px-[60px] md:px-12 px-4'>
          <div className='max-w-[758px]'>
            <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-accent-boja xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov'>
              {parseTextContent.nadnaslov}
            </p>
            <h1
              className={`${POT.className} xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-sekundarna-svijetla xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst`}
            >
              {parseTextContent.naslov}
            </h1>
            <h4
              className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-almost-white`}
            >
              {parseTextContent.tekst}
            </h4>

            <div className='flex items-center justify-start xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group xl:-pt--xl-h1-2---cta-udaljenost lg:-pt--desktop-h1-2---cta-udaljenost md:-pt--tablet-h1-2---cta-udaljenost -pt--mobile-h1-2---cta-udaljenost'>
              <PrimaryLightButton isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />

              <ButtonOutlinePrimaryDark isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />
            </div>
          </div>
        </div>

        <Image
          src={pathsToHeroBg.img2}
          alt='background image hero'
          fill
          className='w-full h-full block object-cover object-center z-10'
        />
      </div>
    </section>
  );
};

export const HeroVersionFour = ({ pathsToHeroBg, heroContent, lang }: HeroVersion) => {
  const l = getSuffixFromLang(lang);
  const heroDataShorthand = heroContent.node[`tekstHero${l}`];

  const parseTextContent =
    lang === UserLanguage.hr ? heroDataShorthand.slide1Hero : heroDataShorthand[`slide1Hero${l}`];
  return (
    <section>
      <div className='relative w-full h-auto bg-almost-white'>
        <div className='w-full h-full  left-0 top-1/3  z-30 xl:px-[50px] lg:px-[40px] md:px-8 px-4 flex   items-center justify-stretch md:flex-nowrap flex-wrap-reverse'>
          <div className='md:max-w-[758px] w-full'>
            <p className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-accent-boja xl:-pb--xl-h1-2---naslov-nadnaslov lg:-pb--desktop-h1-2---naslov-nadnaslov md:-pb--tablet-h1-2---naslov-nadnaslov -pb--mobile-h1-2---naslov-nadnaslov'>
              {parseTextContent.nadnaslov}
            </p>
            <h1
              className={`${POT.className} xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-almost-black xl:-pb--xl-h1-2---naslov-tekst lg:-pb--desktop-h1-2---naslov-tekst md:-pb--tablet-h1-2---naslov-tekst -pb--mobile-h1-2---naslov-tekst`}
            >
              {parseTextContent.naslov}
            </h1>
            <h4
              className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-almost-black`}
            >
              {parseTextContent.tekst}
            </h4>

            <div className='flex items-center justify-start xl:-gap--xl-cta-group lg:-gap--desktop-cta-group md:-gap--tablet-cta-group -gap--mobile-cta-group xl:-pt--xl-h1-2---cta-udaljenost lg:-pt--desktop-h1-2---cta-udaljenost md:-pt--tablet-h1-2---cta-udaljenost -pt--mobile-h1-2---cta-udaljenost'>
              <PrimaryLightButton isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />

              <ButtonOutlinePrimaryDark isResponsive innerText='Button text' size='base' frontIcon={FaArrowRight} />
            </div>
          </div>

          <div className='flex flex-col items-stretch w-full'>
            <Image
              src={pathsToHeroBg.img2}
              alt='background image hero'
              width={604}
              height={238}
              className='w-full max-h-[238px] block object-cover object-center z-10 rounded-[22px]'
            />

            <Image
              src={pathsToHeroBg.img3}
              alt='background image hero'
              width={604}
              height={238}
              className='w-full max-h-[238px] block object-cover object-center z-10 rounded-[22px]'
            />

            <Image
              src={pathsToHeroBg.img4}
              alt='background image hero'
              width={604}
              height={238}
              className='w-full max-h-[238px] block object-cover object-center z-10 rounded-[22px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
