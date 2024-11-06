'use client';

import React from 'react';
import { SutraCardTag } from '../../SutraTag';
import Image from 'next/image';
import { FiClock as ClockIcon } from 'react-icons/fi';

interface LineInfo {
  alignement: 'left' | 'right' | 'center';
  tagText: any;
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
  date: string | any;
  readTime: string | null;
  subTitle: string | null;
}

const LineInfo = ({ alignement, tagText, subTitle, readTime, date, authorName }: LineInfo) => {
  const ContentDivider = () => (
    <div className='xl:w-divider-xl lg:w-divider-desktop md:w-divider-tablet w-divider-mobile xl:h-divider-xl lg:h-divider-desktop md:h-divider-tablet h-divider-mobile bg-kartice-divider-light-mode rounded-full lg:block hidden'></div>
  );

  return (
    <div
      className={`z-10 relative w-full flex flex-wrap ${
        alignement === 'left' ? 'justify-start' : alignement === 'center' ? 'justify-center' : 'justify-end'
      } items-center xl:gap-xl-unutarnji-elementi-slike lg:gap-desktop-unutarnji-elementi-slike md:gap-tablet-unutarnji-elementi-slike gap-mobile-unutarnji-elementi-slike xl:px-xl-teksta-unutar-slike-lr lg:px-desktop-teksta-unutar-slike-lr md:px-tablet-teksta-unutar-slike-lr px-mobile-teksta-unutar-slike-lr xl:py-xl-teksta-unutar-slike-tb lg:py-desktop-teksta-unutar-slike-tb md:py-tablet-teksta-unutar-slike-tb py-mobile-teksta-unutar-slike-tb text-primarna-svijetla z-20`}
    >
      {tagText &&
        tagText.map((t: any, index: number) => <SutraCardTag key={index} innerText={t} isResponsive size='desktop' />)}
      {subTitle && (
        <>
          <h3 className='xl:text-nadnaslov-xl lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile'>
            {subTitle}
          </h3>
          <ContentDivider />
        </>
      )}

      {date && (
        <>
          <span className='xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet'>
            {date}
          </span>
          <ContentDivider />
        </>
      )}

      {authorName && (
        <>
          <div className='flex items-start justify-start xl:gap-element-inside-btn-l lg:gap-element-inside-btn-m gap-element-inside-btn-s'>
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
          <ContentDivider />
        </>
      )}
      {readTime && (
        <>
          <div className='flex items-center justify-start xl:gap-element-inside-btn-l lg:gap-element-inside-btn-m gap-element-inside-btn-s xl:text-text-base-small-xl lg:text-text-base-small-desktop text-text-base-small-mobiletablet'>
            <ClockIcon /> <span>{readTime}</span>
          </div>
          <ContentDivider />
        </>
      )}
    </div>
  );
};

export default LineInfo;
