import parse from 'html-react-parser';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { GoArrowUpRight as ArrowIcon } from 'react-icons/go';
import { FaChevronRight as RightIcon } from 'react-icons/fa';
import { BrandClrButton } from './SutraButton';
import Image from 'next/image';

interface DefaultArticleCard {
  cta: string;
  url: string;
  title: string;
  date: string;
  imgSource: string;
  introContent: string;
  author: Record<any, any>;
  tags: any[];
  categories: any[];
  readTime: any;
  hoverImgSource: string;
  boolSwitches: {
    isWithTags: boolean;
    isWithAuthor: boolean;
    isWithTopBar: boolean;
    isWithImage: boolean;
  };
  isHorizontal: boolean; // Novi prop za prebacivanje između horizontalne i vertikalne kartice
}

const ArticleCard = ({
  cta,
  url,
  title,
  date,
  imgSource,
  introContent,
  author,
  tags,
  readTime,
  categories,
  hoverImgSource,
  boolSwitches,
  isHorizontal,
}: DefaultArticleCard) => {
  return (
    <article
      className={`w-full bg-white shadow dark:bg-almost-black dark:border-gray-700 rounded-sutraCardBorderRadiusBlog ${
        isHorizontal ? 'max-w-[824px] h-auto flex' : 'max-w-[408px] h-full'
      } group overflow-hidden`}
    >
      <div className={`${isHorizontal ? 'flex w-full place-content-stretch items-stretch h-full' : 'block'} group`}>
        {boolSwitches.isWithImage && (
          <a href={url} className={`${isHorizontal ? 'max-w-[408px] ' : 'flex-1'} shrink-0 w-full h-[365px] block`}>
            <div className={`overflow-hidden relative w-full flex-1 h-full`}>
              <div className='absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent to-black opacity-65 group-hover:translate-y-1/4 transition-all ease-out duration-300 z-40'></div>

              <div className='w-full h-full flex-1 shrink-0 relative group-hover:scale-125 transition-all ease-out duration-300'>
                <Image
                  className={`w-full object-cover object-center block ${
                    isHorizontal ? 'aspect-square h-full min-h-[356px]' : 'aspect-video min-h-[145px]'
                  } transition-all ease-out duration-300 group-hover:opacity-0`}
                  src={imgSource}
                  alt=''
                  fill
                />
              </div>

              <div className='w-full h-full flex-1 shrink-0 absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all ease-out duration-300'>
                <Image
                  className={`w-full object-cover object-center block ${
                    isHorizontal ? 'aspect-square h-full min-h-[356px]' : 'aspect-video min-h-[145px]'
                  }`}
                  src={hoverImgSource}
                  fill
                  alt=''
                />
              </div>
              {boolSwitches.isWithTopBar && (
                <div className='absolute top-0 w-full flex items-center gap-2 px-11 pt-7 flex-wrap transition-all ease-out group-hover:opacity-0'>
                  {date && (
                    <div className='text-xs bg-almost-black/75 rounded-sutraCardBorderRadius px-2 py-1  text-white'>
                      <span>{date}</span>
                    </div>
                  )}

                  {categories.length > 0 && (
                    <div className='text-xs bg-almost-black/75 rounded-sutraCardBorderRadius px-2 py-1  text-white text-nowrap'>
                      {categories.map((kata) => {
                        return <span key={kata.catName}>{kata.catName}</span>;
                      })}
                    </div>
                  )}

                  {readTime && (
                    <div className='text-xs bg-almost-black/75 rounded-sutraCardBorderRadius px-2 py-1  text-white flex items-center gap-1 text-nowrap'>
                      <ClockIcon />
                      <span>{readTime.text}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </a>
        )}

        <div
          className={`${
            isHorizontal
              ? 'w-2 bg-accent shrink-0 group-hover:translate-x-2 tranistion-all ease-out duration-300 group-hover:opacity-0'
              : 'overflow-hidden shrink-0'
          }`}
        >
          {!isHorizontal && (
            <div className='w-full bg-accent h-4 group-hover:translate-y-full transition-all ease-out'></div>
          )}
        </div>

        {boolSwitches.isWithTags && (
          <div className={`${isHorizontal ? 'px-6 pt-6' : 'px-11 pt-12'}`}>
            {tags.length > 0 && (
              <div className='flex items-center gap-1 text-xs flex-wrap font-medium mb-2'>
                {tags.map((singleTag) => (
                  <span
                    className='uppercase text-accent-boja border border-accent rounded-sutraCardTagBorderRadius px-2 py-px'
                    key={singleTag}
                  >
                    {singleTag}
                  </span>
                ))}
              </div>
            )}

            {categories.length > 0 && (
              <div className='py-[10px]'>
                {categories.map((kata) => {
                  return (
                    <span
                      className='uppercase text-accent-boja border border-accent rounded-sutraCardTagBorderRadius px-2 py-px text-xs font-medium'
                      key={kata.catName}
                    >
                      {kata.catName}
                    </span>
                  );
                })}
              </div>
            )}

            {categories.length > 0 && (
              <div className='text-sm font-semibold py-[10px]  text-sekundarna-tamna dark:text-sekundarna-svijetla uppercase text-nowrap'>
                {categories.map((kata) => {
                  return <span key={kata.catName}>{kata.catName}</span>;
                })}
              </div>
            )}
          </div>
        )}

        <div className={`${isHorizontal ? 'px-6 pt-6' : 'px-11 pt-12'}`}>
          <a href={url}>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-accent-boja leading-sutraCardTitleLineHeight flex items-start gap-2'>
              <span>{title}</span>
              <ArrowIcon
                className={`shrink-0 text-sekundarna-tamna dark:text-sekundarna-svijetla mt-1 ${'group-hover:rotate-45 origin-center transition-all duration-200 ease-out group-hover:translate-x-4'}`}
              />
            </h5>
          </a>

          {introContent && (
            <div
              className={`prose prose-p:text-sekundarna-tamna dark:prose-p:text-sekundarna-svijetla prose-p:text-base my-3 line-clamp-4 ${
                isHorizontal ? '' : 'prose-p:leading-[24px]'
              }`}
            >
              {parse(introContent)}
            </div>
          )}

          <div className='w-full bg-kartice-divider-light-mode h-px'></div>

          <div className='w-full flex items-center justify-end py-6'>
            <a href={url} className=''>
              <BrandClrButton size='base' innerText={cta} backIcon={RightIcon} />
            </a>
          </div>

          {boolSwitches.isWithAuthor && <div className='w-full bg-kartice-divider-light-mode h-px'></div>}

          {date && (
            <div className='text-xs text-primarna-svijetla font-medium py-6'>
              <span>{date}</span>
            </div>
          )}

          {/* {boolSwitches.isWithAuthor && (
              <div className='grid gap-6'>
                {author && (
                  <div className='flex gap-3 items-center'>
                    {author.avatar && (
                      <picture>
                        <img
                          src={author.avatar.url}
                          alt='profile pic of author'
                          className='w-10 h-10 object-cover object-center block aspect-square rounded-full'
                        />
                      </picture>
                    )}

                    <p className='text-xs font-medium text-sekundarna-tamna dark:text-sekundarna-svijetla'>{`${author.firstName} ${author.lastName}`}</p>
                  </div>
                )}

                {author && (
                  <div className='flex gap-3 items-center'>
                    <p className='text-xs font-medium text-primarna-tamna dark:text-sekundarna-svijetla'>{`${author.firstName} ${author.lastName}`}</p>
                    <div className='w-[3px] h-[3px] bg-sekundarna-tamna rounded-full'></div>
                    {date && (
                      <div className='text-xs text-sekundarna-tamna dark:text-sekundarna-svijetla font-medium'>
                        <span>{date}</span>
                      </div>
                    )}
                  </div>
                )}

                {author && (
                  <div className='flex gap-3 items-center'>
                    <p className='text-xs font-medium text-primarna-tamna dark:text-sekundarna-svijetla'>
                      Autor: {`${author.firstName} ${author.lastName}`}
                    </p>
                    <div className='w-[3px] h-[3px] bg-sekundarna-tamna rounded-full'></div>
                    {date && (
                      <div className='text-xs text-sekundarna-tamna font-medium dark:text-sekundarna-svijetla'>
                        <span>{date}</span>
                      </div>
                    )}
                  </div>
                )}

                {author && (
                  <div className='flex gap-4 items-center'>
                    {author.avatar && (
                      <picture>
                        <img
                          src={author.avatar.url}
                          alt='profile pic of author'
                          className='w-7 h-7 rounded-full object-cover object-center block aspect-square'
                        />
                      </picture>
                    )}

                    <p className='text-xs font-medium text-sekundarna-tamna dark:text-sekundarna-svijetla'>{`${author.firstName} ${author.lastName}`}</p>

                    {date && (
                      <div className='text-xs text-sekundarna-tamna dark:text-sekundarna-svijetla font-medium flex items-center gap-2'>
                        <CalendarIcon /> <span>{date}</span>
                      </div>
                    )}
                  </div>
                )}

                {readTime && (
                  <div className='text-xs text-sekundarna-tamna dark:text-sekundarna-svijetla flex items-center gap-1 text-nowrap font-medium pb-12'>
                    <ClockIcon />
                    <span>{readTime.text}</span>
                  </div>
                )}
              </div>
            )} */}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
