import React from 'react';
import { SutraCardTag } from '../../SutraTag';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { Poltawski_Nowy } from 'next/font/google';

const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });
interface TextContent {
  title: string | null;
  tagText: string | null;
  readTime: string | null;
  subTitle: string | null;
  textContent: string | null;
  aligment: 'default' | 'center';
  isOnBaseCard?: boolean;
}
const TextContent = ({ title, subTitle, tagText, readTime, textContent, aligment, isOnBaseCard }: TextContent) => {
  return (
    <div
      className={`z-20  xl:px-xl-teksta-unutar-slike-lr lg:px-desktop-teksta-unutar-slike-lr md:px-tablet-teksta-unutar-slike-lr px-mobile-teksta-unutar-slike-lr flex flex-col ${
        aligment === 'center' ? 'justify-center' : 'justify-start'
      } items-start xl:gap-xl-tekst-naslov lg:gap-desktop-tekst-naslov md:gap-tablet-tekst-naslov gap-mobile-tekst-naslov`}
    >
      <div
        className={`flex flex-col  ${
          aligment === 'center' ? 'justify-center items-center text-center' : 'justify-start items-start'
        } gap-1 w-full`}
      >
        {tagText && <SutraCardTag innerText={tagText} size='xl' isResponsive />}
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

      <div
        className={`w-full flex flex-col  ${
          aligment === 'center' ? 'justify-center items-center text-center' : 'justify-start items-start'
        } xl:gap-xl-tekst-naslov lg:gap-desktop-naslov-nadnaslov md:gap-tablet-naslov-nadnaslov gap-mobile-naslov-nadnaslov`}
      >
        {title && (
          <h4
            className={`${POT.className} ${
              isOnBaseCard
                ? 'xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode line-clamp-3 text-ellipsis'
                : 'xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-dark-mode line-clamp-2 text-ellipsis'
            }`}
          >
            {title}
          </h4>
        )}
        {textContent && (
          <p
            className={`${
              isOnBaseCard
                ? 'xl:text-text-base-l-xl md:text-text-base-l-desktop text-text-base-l-mobiletablet text-text-light-mode dark:text-text-dark-mode'
                : 'xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-dark-mode line-clamp-2 text-ellipsis'
            }`}
          >
            {textContent}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextContent;
