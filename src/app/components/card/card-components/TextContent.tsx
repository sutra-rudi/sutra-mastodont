import React from 'react';
import { PrimaryTagOutline } from '../../SutraTag';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { Poltawski_Nowy } from 'next/font/google';

const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });
interface TextContent {
  title: string | null;
  tagText: string | null;
  readTime: string | null;
  subTitle: string | null;
  textContent: string | null;
}
const TextContent = ({ title, subTitle, tagText, readTime, textContent }: TextContent) => {
  return (
    <div className='z-20  xl:px-xl-teksta-unutar-slike-lr lg:px-desktop-teksta-unutar-slike-lr md:px-tablet-teksta-unutar-slike-lr px-mobile-teksta-unutar-slike-lr flex flex-col justify-start items-start xl:gap-xl-tekst-naslov lg:gap-desktop-tekst-naslov md:gap-tablet-tekst-naslov gap-mobile-tekst-naslov'>
      <div className='flex flex-col items-start justify-start gap-1'>
        {tagText && <PrimaryTagOutline innerText={tagText} size='xl' isResponsive isInsideCard />}
        {subTitle && (
          <h3 className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-accent-boja'>
            {subTitle}
          </h3>
        )}

        {readTime && (
          <div className='flex items-center justify-start xl:gap-element-inside-btn-l lg:gap-element-inside-btn-m gap-element-inside-btn-s xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet text-heading-color-dark-mode'>
            <ClockIcon /> <span>{`${readTime} read time`}</span>
          </div>
        )}
      </div>

      <div className='w-full flex flex-col items-start justify-start xl:gap-xl-tekst-naslov lg:gap-desktop-naslov-nadnaslov md:gap-tablet-naslov-nadnaslov gap-mobile-naslov-nadnaslov '>
        {title && (
          <h4
            className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-dark-mode`}
          >
            {title}
          </h4>
        )}
        {textContent && (
          <p className='xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-dark-mode line-clamp-2 text-ellipsis'>
            {textContent}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextContent;
