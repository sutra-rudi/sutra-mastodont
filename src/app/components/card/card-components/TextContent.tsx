import React from 'react';
import { SutraCardTag } from '../../SutraTag';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { Poltawski_Nowy } from 'next/font/google';
import parse from 'html-react-parser';
import Image from 'next/image';
const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });
interface TextContent {
  title: string | null;
  tagText: any;
  readTime: string | null;
  subTitle: string | null;
  textContent: string | null;
  aligment: 'default' | 'center';
  isOnBaseCard?: boolean;
  showTag?: boolean;
  authorName: {
    avatar: {
      url: string | null;
    };
    firstName: string | null;
    lastName: string | null;
    name: string | null;
    nicename: string | null;
    nickname: string | null;
    username: string | null;
  } | null;
}
const TextContent = ({
  title,
  subTitle,
  tagText,
  readTime,
  textContent,
  aligment,
  isOnBaseCard,
  authorName,
}: TextContent) => {
  // console.log('TTT', tagText);
  return (
    <div
      className={`z-20 ${
        isOnBaseCard
          ? ''
          : ' xl:px-xl-teksta-unutar-slike-lr lg:px-desktop-teksta-unutar-slike-lr md:px-tablet-teksta-unutar-slike-lr px-mobile-teksta-unutar-slike-lr'
      } flex flex-col ${
        aligment === 'center' ? 'justify-center' : 'justify-start'
      } items-start xl:gap-xl-tekst-naslov lg:gap-desktop-tekst-naslov md:gap-tablet-tekst-naslov gap-mobile-tekst-naslov`}
    >
      <div
        className={`flex flex-col  ${
          aligment === 'center' ? 'justify-center items-center text-center' : 'justify-start items-start'
        } gap-1 w-full`}
      >
        {tagText &&
          isOnBaseCard &&
          tagText.map((t: any, index: number) => <SutraCardTag key={index} innerText={t} size='mobile' isOnCard />)}
        {tagText &&
          !isOnBaseCard &&
          tagText.map((t: any, index: number) => <SutraCardTag key={index} innerText={t} size='xl' isResponsive />)}

        {authorName && (
          <div className='flex items-center justify-start xl:gap-element-inside-btn-l lg:gap-element-inside-btn-m gap-element-inside-btn-s'>
            <div className='relative xl:w-veličina-kruga-avatar-xl xl:h-veličina-kruga-avatar-xl lg:w-veličina-kruga-avatar-desktop lg:h-veličina-kruga-avatar-desktop md:w-veličina-kruga-avatar-tablet md:h-veličina-kruga-avatar-tablet w-veličina-kruga-avatar-mobile h-veličina-kruga-avatar-mobile rounded-full shrink-0'>
              <Image
                alt='Picture of article author'
                fill
                src={authorName.avatar.url!}
                className='object-cover object-center block w-full h-full rounded-full'
              />
            </div>
            <span className='xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet'>
              {authorName.firstName} {authorName.lastName}
            </span>
          </div>
        )}

        {subTitle && (
          <h3 className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-accent-boja'>
            {subTitle}
          </h3>
        )}

        {readTime && (
          <div
            className={`flex items-center justify-start xl:gap-element-inside-btn-l lg:gap-element-inside-btn-m gap-element-inside-btn-s xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet ${
              isOnBaseCard ? 'text-text-light-mode dark:text-text-dark-mode' : 'text-heading-color-dark-mode'
            }`}
          >
            <ClockIcon /> <span>{readTime}</span>
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
          <div
            className={`${
              isOnBaseCard
                ? 'xl:text-text-base-l-xl md:text-text-base-l-desktop text-text-base-l-mobiletablet text-text-light-mode dark:text-text-dark-mode'
                : 'xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-dark-mode line-clamp-2 text-ellipsis'
            }`}
          >
            {parse(textContent)}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextContent;
