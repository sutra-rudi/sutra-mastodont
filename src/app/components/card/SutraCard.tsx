'use client';
import React from 'react';

import BackgroundShadow from './card-components/BackgroundShadow';
import CardImage from './card-components/CardImage';
import cardDemoImage from '../../imageMaterials/sutra-card-demo.png';
import LineInfo from './card-components/LineInfo';
import TextContent from './card-components/TextContent';

interface SutraCardInterface {
  textContentPos: 'top' | 'bottom' | 'hidden';
  lineInfoPos: 'top' | 'bottom' | 'hidden';
  hasCardImage: boolean;
  hasBackgroundShadows: boolean;
  tagText: string | null;
  authorName: string | null;
  date: string | null;
  readTime: string | null;
  subTitle: string | null;
  title: string | null;
  textContent: string | null;
}

const SutraCard = ({
  lineInfoPos,
  textContentPos,
  hasBackgroundShadows,
  hasCardImage,
  date,
  tagText,
  readTime,
  authorName,
  subTitle,
  title,
  textContent,
}: SutraCardInterface) => {
  const generateClassName = () => {
    if (lineInfoPos === 'top' && textContentPos === 'bottom') {
      return 'justify-between';
    }
    if (lineInfoPos === 'bottom' && textContentPos === 'top') {
      return 'justify-between';
    }
    if (lineInfoPos === 'top' && textContentPos === 'top') {
      return 'justify-start';
    }
    if (lineInfoPos === 'bottom' && textContentPos === 'bottom') {
      return 'justify-end';
    }
  };
  return (
    <article
      className={`xl:max-w-[75%] md:max-w-[65%] w-full xl:h-[540px] lg:h-[440px] md:min-h-[340px] min-h-[240px] border border-primarna-tamna rounded-xl-vanjski-okvir-total relative flex flex-col overflow-hidden ${generateClassName()} pb-xl-opticki`}
    >
      {lineInfoPos !== 'hidden' && (
        <LineInfo
          alignement='left'
          readTime={readTime}
          authorName={authorName}
          subTitle={subTitle}
          tagText={tagText}
          date={date}
        />
      )}

      {textContentPos !== 'hidden' && (
        <TextContent
          subTitle={subTitle}
          tagText={tagText}
          title={title}
          readTime={readTime}
          textContent={textContent}
        />
      )}

      {hasBackgroundShadows && <BackgroundShadow />}

      {hasCardImage && <CardImage imageSource={cardDemoImage.src} isOverlay={true} />}
    </article>
  );
};

export default SutraCard;
