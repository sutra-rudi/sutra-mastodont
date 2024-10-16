import BackgroundShadow from './card-components/BackgroundShadow';
import CardImage from './card-components/CardImage';
import LineInfo from './card-components/LineInfo';
import TextContent from './card-components/TextContent';
import ferlaufTop from '../../imageMaterials/card-ferlauf-top.svg';
import Image from 'next/image';
interface SutraCardInterface {
  textContentPos: 'top' | 'bottom' | 'hidden' | 'center';
  lineInfoPos: 'top' | 'bottom' | 'hidden' | 'center';
  hasCardImage: boolean;
  hasBackgroundShadows: boolean;
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
  };
  date: string | null;
  readTime: string | null;
  subTitle: string | null;
  title: string | null;
  textContent: string | null;
  isBaseCard: boolean;
  cardImageSource?: string;
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
  cardImageSource,
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
      <article className='xl:p-xl-sadržaj-kartice lg:p-desktop-sadržaj-kartice md:p-tablet-sadržaj-kartice p-mobile-sadržaj-kartice flex justify-start items-stretch max-w-[702px] w-full bg-primarna-svijetla dark:bg-primarna-tamna md:flex-nowrap flex-wrap xl:gap-xl-slika-sadržaj lg:gap-desktop-slika-sadržaj md:gap-tablet-slika-sadržaj gap-mobile-slika-sadržaj xl:rounded-t-xl-vanjski-okvir-top lg:rounded-t-desktop-vanjski-okvir-top md:rounded-t-tablet-vanjski-okvir-top rounded-t-mobile-vanjski-okvir-top rounded-b-xl-vanjski-okvir-bottom md:pb-0 pb-12'>
        <div className='w-full shrink-0 grow md:max-w-[380px] h-auto md:min-h-[384px] min-h-[297px]'>
          <div className='relative  w-full h-full  flex flex-col items-start overflow-hidden rounded-tr-xl-unutarnja-slika-tl rounded-tl-xl-unutarnja-slika-tl'>
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
                imageSource={cardImageSource!}
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
        <div className=' md:max-w-[290px]'>
          {textContentPos !== 'hidden' && (
            <TextContent
              isOnBaseCard
              subTitle={subTitle}
              tagText={null}
              title={title}
              readTime={readTime}
              textContent={textContent}
              aligment={'default'}
              authorName={authorName}
            />
          )}
        </div>
      </article>
    );
  };

  if (isBaseCard) return <CardAlt />;

  return (
    <article
      className={`max-w-[702px] w-full xl:h-[540px] lg:h-[440px] md:min-h-[340px] min-h-[240px] border border-primarna-tamna rounded-xl-vanjski-okvir-total relative flex flex-col overflow-hidden ${generateClassName()}  xl:pb-xl-sadržaj-kartice lg:pb-desktop-sadržaj-kartice md:pb-tablet-sadržaj-kartice pb-mobile-sadržaj-kartice`}
    >
      {lineInfoPos !== 'hidden' && (
        <LineInfo
          alignement={lineInfoPos === 'center' ? 'center' : textContentPos === 'center' ? 'center' : 'left'}
          tagText={tagText}
          date={date}
          readTime={null}
          authorName={null}
          subTitle={null}
        />
      )}

      {textContentPos !== 'hidden' && (
        <TextContent
          subTitle={subTitle}
          tagText={tagText}
          title={title}
          readTime={readTime}
          textContent={textContent}
          authorName={null}
          aligment={lineInfoPos === 'center' ? 'center' : textContentPos === 'center' ? 'center' : 'default'}
        />
      )}

      {hasBackgroundShadows && (
        <BackgroundShadow topRight={true} topLeft={false} bottomLeft={true} bottomRight={false} />
      )}

      {hasCardImage && <CardImage imageSource={cardImageSource!} isOverlay={true} />}
    </article>
  );
};

export default SutraCard;
