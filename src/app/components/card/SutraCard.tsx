'use client';
import React from 'react';
import TopLineInfo from './card-components/TopLineInfo';
import BottomLineInfo from './card-components/BottomLineInfo';
import TopTextContent from './card-components/TopTextContent';
import BottomTextContent from './card-components/BottomTextContent';
import BackgroundShadow from './card-components/BackgroundShadow';
import CardImage from './card-components/CardImage';
import cardDemoImage from '../../imageMaterials/sutra-card-demo.png';

interface SutraCardInterface {
  hasTopTextContent: boolean;
  hasBottomTextContent: boolean;
  lineInfo: 'top' | 'bottom';
  hasCardImage: boolean;
  hasBackgroundShadows: boolean;
  tagText: string | null;
  authorName: string | null;
  date: string | any;
  readTime: string | null;
  subTitle: string | null;
}

const SutraCard = ({
  hasTopTextContent,
  lineInfo,
  hasBottomTextContent,
  hasBackgroundShadows,
  hasCardImage,
  date,
  tagText,
  readTime,
  authorName,
  subTitle,
}: SutraCardInterface) => {
  return (
    <article className='xl:max-w-[65%] md:max-w-[55%] w-full xl:h-[540px] lg:h-[440px] md:min-h-[340px] min-h-[240px] border border-primarna-tamna rounded-xl-vanjski-okvir-total relative flex flex-col justify-between after:absolute after:w-full after:h-full after:inset-0 after:bg-black/50'>
      {lineInfo === 'top' && (
        <TopLineInfo
          alignement='left'
          readTime={readTime}
          authorName={authorName}
          subTitle={subTitle}
          tagText={tagText}
          date={date}
        />
      )}

      {hasTopTextContent && <TopTextContent />}
      {hasBottomTextContent && <BottomTextContent />}
      {hasBackgroundShadows && <BackgroundShadow />}
      {lineInfo === 'bottom' && (
        <BottomLineInfo
          alignement='right'
          readTime={readTime}
          authorName={authorName}
          subTitle={subTitle}
          tagText={tagText}
          date={date}
        />
      )}
      {hasCardImage && <CardImage imageSource={cardDemoImage.src} isOverlay={true} />}
    </article>
  );
};

export default SutraCard;
