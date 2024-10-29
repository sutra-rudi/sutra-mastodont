import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { UserLanguage } from '../enums/LangEnum';
import Image from 'next/image';
import TL_SHADOW from '../imageMaterials/t-l-shadow.svg';
import { Poltawski_Nowy } from 'next/font/google';
import { ButtonOutlinePrimaryDark, PrimaryLightButton } from '../components/SutraButton';
import { FaArrowRight } from 'react-icons/fa6';
import { TbArrowsVertical as ArrowsIcon } from 'react-icons/tb';

const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });

interface AppHero {
  heroContent: any;
  lang: string;
}

export default async function AppHero({ heroContent, lang }: AppHero) {
  const fetchMediaPaths = async (): Promise<any | { error: boolean }> => {
    try {
      const response = await fetch(`${process.env.BASE_APP_URL}/api/mediaPaths`, {});

      if (!response.ok) {
        throw new Error('Neuspješno dohvaćanje putanja medija');
      }

      const data = await response.json();
      return Object.values(data.heroImagesHomePageMultiple);
    } catch (error) {
      console.error('Greška prilikom dohvaćanja medija:', error);
      return { error: true };
    }
  };

  const media = await fetchMediaPaths();

  const l = getSuffixFromLang(lang);
  const heroDataShorthand = heroContent.node[`tekstHero${l}`];

  const parseTextContent =
    lang === UserLanguage.hr ? heroDataShorthand.slide1Hero : heroDataShorthand[`slide1Hero${l}`];
  return (
    <div>
      <div className='w-full min-h-[calc(100vh-5rem)] relative'>
        <Image
          fill
          alt='hero image mastodont @sutra'
          src={media[3]}
          className='object-cover object-center block aspect-auto'
        />
        <div className='absolute w-full h-full inset-0 pointer-events-none select-none z-10 bg-overlay-dark/25 overflow-hidden'>
          <Image alt='shadow' src={TL_SHADOW} fill className='w-full h-full object-cover' />
        </div>
        <div className='w-full absolute left-0 top-1/3  z-20 xl:px-24 lg:px-20 md:px-12 px-4'>
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

        <div className='absolute z-20 w-full bg-red-400 h-[100px] bottom-0 flex items-center justify-center'>
          <div className='xl:w-[46px] lg:w-[40px] md:w-[36px] w-[32px] xl:h-[62px] lg:h-[58px] md:h-[54px] h-[50px] outline outline-2 outline-almost-white rounded-full flex items-center justify-center'>
            <ArrowsIcon className='animate-bounce xl:text-button-xl lg:text-button-l md:text-button-base text-button-small shrink-0 text-almost-white' />
          </div>
        </div>
      </div>
    </div>
  );
}
