'use client';

import React from 'react';
import { PrimaryTagOutline } from '../../SutraTag';
interface TopLineInfo {
  alignement: 'left' | 'right' | 'center';
  tagText: string | null;
  authorName: string | null;
  date: Date | null;
  readTime: string | null;
  subTitle: string | null;
}

const TopLineInfo = ({ alignement, tagText, subTitle, readTime, date, authorName }: TopLineInfo) => {
  return (
    <div
      className={`z-10 relative w-full flex ${
        alignement === 'left' ? 'justify-start' : alignement === 'center' ? 'justify-center' : 'justify-end'
      } items-center gap-xl-unutarnji-elementi-slike`}
    >
      {tagText && (
        <>
          <PrimaryTagOutline innerText={`#${tagText}`} isResponsive size='xl' />
          <div className='w-divider-xl h-divider-xl bg-kartice-divider-dark-mode rounded-full'></div>
        </>
      )}
      {subTitle && (
        <>
          <h3 className='text-nadnaslov-xl'>{subTitle}</h3>
          <div className='w-divider-xl h-divider-xl bg-kartice-divider-dark-mode rounded-full'></div>
        </>
      )}
    </div>
  );
};

export default TopLineInfo;
