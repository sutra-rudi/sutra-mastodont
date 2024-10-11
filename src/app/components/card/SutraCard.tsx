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
  hasTopLineInfo: boolean;
  hasBottomLineInfo: boolean;
  hasCardImage: boolean;
  hasBackgroundShadows: boolean;
  tagText: string | null;
  authorName: string | null;
  date: Date | null;
  readTime: string | null;
  subTitle: string | null;
}

const SutraCard = ({
  hasTopTextContent,
  hasTopLineInfo,
  hasBottomTextContent,
  hasBottomLineInfo,
  hasBackgroundShadows,
  hasCardImage,
  date,
  tagText,
  readTime,
  authorName,
  subTitle,
}: SutraCardInterface) => {
  return (
    <article className='w-[814px] h-[740px] border border-primarna-tamna rounded-xl-vanjski-okvir-total relative'>
      {hasTopLineInfo && (
        <TopLineInfo
          alignement='center'
          readTime={readTime}
          authorName={authorName}
          subTitle={subTitle}
          tagText={tagText}
          date={date}
        />
      )}
      {hasBottomLineInfo && <BottomLineInfo />}
      {hasTopTextContent && <TopTextContent />}
      {hasBottomTextContent && <BottomTextContent />}
      {hasBackgroundShadows && <BackgroundShadow />}
      {hasCardImage && <CardImage imageSource={cardDemoImage.src} isOverlay={true} />}
    </article>
  );
};

export default SutraCard;
