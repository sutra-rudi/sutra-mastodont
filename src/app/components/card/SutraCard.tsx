import BackgroundShadow from './card-components/BackgroundShadow';
import CardImage from './card-components/CardImage';
import cardDemoImage from '../../imageMaterials/sutra-card-demo.png';
import LineInfo from './card-components/LineInfo';
import TextContent from './card-components/TextContent';
import ferlaufTop from '../../imageMaterials/card-ferlauf-top.svg';
import Image from 'next/image';
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
  isBaseCard: boolean;
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
  isBaseCard,
}: SutraCardInterface) => {
  const generateClassName = () => {
    if (lineInfoPos === 'center' || textContentPos === 'center') {
      return 'justify-center';
    }
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

  const CardAlt = () => {
    return (
      <article className='flex justify-start items-start max-w-[702px] w-full bg-primarna-svijetla dark:bg-primarna-tamna md:flex-nowrap flex-wrap xl:rounded-t-xl-vanjski-okvir-top lg:rounded-t-desktop-vanjski-okvir-top md:rounded-t-tablet-vanjski-okvir-top rounded-t-mobile-vanjski-okvir-top rounded-b-xl-vanjski-okvir-bottom md:pb-0 pb-12'>
        <div className='w-full p-xl-sadržaj-kartice shrink-0 md:max-w-[380px]'>
          <div className='relative  w-full md:h-[384px] h-[297px] flex flex-col items-start overflow-hidden rounded-tr-xl-unutarnja-slika-tl rounded-tl-xl-unutarnja-slika-tl'>
            <Image
              src={ferlaufTop}
              width={1100}
              height={123}
              alt='shadow top'
              className='object-cover object-center absolute top-0 left-0 w-full h-1/3'
            />
            {lineInfoPos !== 'hidden' && (
              <div className='w-full'>
                <LineInfo
                  alignement='right'
                  readTime={null}
                  authorName={null}
                  subTitle={null}
                  tagText={tagText}
                  date={null}
                />
              </div>
            )}
            {hasCardImage && (
              <CardImage
                imageSource={cardDemoImage.src}
                isOverlay={true}
                //     roundedTl='rounded-tl-xl-unutarnja-slika-tl'
                //     roundedTr='rounded-tr-xl-unutarnja-slika-tl'
              />
            )}
            {hasBackgroundShadows && (
              <BackgroundShadow topRight={false} topLeft={false} bottomLeft={false} bottomRight={false} />
            )}
          </div>
        </div>
        <div className='md:py-xl-sadržaj-kartice md:px-0 px-xl-sadržaj-kartice md:max-w-[290px]'>
          {textContentPos !== 'hidden' && (
            <TextContent
              isOnBaseCard
              subTitle={subTitle}
              tagText={tagText}
              title={title}
              readTime={readTime}
              textContent={textContent}
              aligment={'default'}
            />
          )}
        </div>
      </article>
    );
  };

  if (isBaseCard) return <CardAlt />;

  return (
    <article
      className={`xl:max-w-[75%] md:max-w-[65%] w-full xl:h-[540px] lg:h-[440px] md:min-h-[340px] min-h-[240px] border border-primarna-tamna rounded-xl-vanjski-okvir-total relative flex flex-col overflow-hidden ${generateClassName()}  xl:pb-xl-sadržaj-kartice lg:pb-desktop-sadržaj-kartice md:pb-tablet-sadržaj-kartice pb-mobile-sadržaj-kartice`}
    >
      {lineInfoPos !== 'hidden' && (
        <LineInfo
          alignement={lineInfoPos === 'center' ? 'center' : textContentPos === 'center' ? 'center' : 'left'}
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
          aligment={lineInfoPos === 'center' ? 'center' : textContentPos === 'center' ? 'center' : 'default'}
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
