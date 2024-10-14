'use client';
import React from 'react';

import BackgroundShadow from './card-components/BackgroundShadow';
import CardImage from './card-components/CardImage';
import cardDemoImage from '../../imageMaterials/sutra-card-demo.png';
import LineInfo from './card-components/LineInfo';
import TextContent from './card-components/TextContent';

interface SutraCardInterface {
  textContentPos: 'top' | 'bottom' | 'hidden' | 'center';
  lineInfoPos: 'top' | 'bottom' | 'hidden' | 'center';
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
    if (lineInfoPos === 'hidden' && textContentPos === 'bottom') {
      return 'justify-end';
    }
    if (lineInfoPos === 'hidden' && textContentPos === 'top') {
      return 'justify-start xl:pt-xl-sadržaj-kartice lg:pt-desktop-sadržaj-kartice md:pt-tablet-sadržaj-kartice pt-mobile-sadržaj-kartice';
    }
    if (lineInfoPos === 'top' && textContentPos === 'hidden') {
      return 'justify-start xl:pt-xl-sadržaj-kartice lg:pt-desktop-sadržaj-kartice md:pt-tablet-sadržaj-kartice pt-mobile-sadržaj-kartice';
    }
    if (lineInfoPos === 'bottom' && textContentPos === 'hidden') {
      return 'justify-end';
    }
  };
  return (
    <article
      className={`xl:max-w-[75%] md:max-w-[65%] w-full xl:h-[540px] lg:h-[440px] md:min-h-[340px] min-h-[240px] border border-primarna-tamna rounded-xl-vanjski-okvir-total relative flex flex-col overflow-hidden ${generateClassName()}  xl:pb-xl-sadržaj-kartice lg:pb-desktop-sadržaj-kartice md:pb-tablet-sadržaj-kartice pb-mobile-sadržaj-kartice`}
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

      {hasBackgroundShadows && (
        <BackgroundShadow topRight={true} topLeft={false} bottomLeft={true} bottomRight={false} />
      )}

      {hasCardImage && <CardImage imageSource={cardDemoImage.src} isOverlay={true} />}
    </article>
  );
};

export default SutraCard;
