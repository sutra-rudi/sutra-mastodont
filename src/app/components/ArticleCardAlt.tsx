import parse from 'html-react-parser';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { GoArrowUpRight as ArrowIcon } from 'react-icons/go';
import { LuCalendarDays as CalendarIcon } from 'react-icons/lu';
import { FaChevronRight as RightIcon } from 'react-icons/fa';
import { SutraButtonBase } from './SutraButton';
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
  isArchive?: boolean;
}
export const ArticleCardHorizontal = ({
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
}: DefaultArticleCard) => {
  return (
    <article className='max-w-[624px] w-full h-auto bg-white shadow dark:bg-almost-black dark:border-gray-700 '>
      <div className='flex w-full place-content-stretch items-stretch h-full'>
        <a href={url} className='w-full h-full max-w-[408px] flex flex-col'>
          <div className='relative flex-1'>
            <picture className='w-full h-full '>
              <img className='w-full h-full object-cover object-center aspect-[9/16] block' src={imgSource} alt='' />
              <div className='absolute top-0 w-full flex items-center gap-2 px-11 pt-7 flex-wrap'>
                {date && (
                  <div className='text-xs bg-almost-black/75 rounded-sutraCardBorderRadius px-2 py-1 text-white'>
                    <span>{date}</span>
                  </div>
                )}
                {categories.length > 0 && (
                  <div className='text-xs bg-almost-black/75 rounded-sutraCardBorderRadius px-2 py-1 text-white text-nowrap'>
                    {categories.map((kata) => {
                      return <span key={kata.catName}>{kata.catName}</span>;
                    })}
                  </div>
                )}
                {readTime && (
                  <div className='text-xs bg-almost-black/75 rounded-sutraCardBorderRadius px-2 py-1 text-white flex items-center gap-1 text-nowrap'>
                    <ClockIcon />
                    <span>{readTime.text}</span>
                  </div>
                )}
              </div>
            </picture>
          </div>
        </a>

        <div className='w-2 bg-accent shrink-0'></div>

        <div className=''>
          <div className='px-11 pt-12'>
            {tags.length > 0 && (
              <div className='flex items-center gap-1 text-xs flex-wrap font-medium'>
                {tags.map((singleTag) => (
                  <span
                    className='uppercase text-accent border border-accent rounded-sutraCardTagBorderRadius px-2 py-px'
                    key={singleTag}
                  >
                    {singleTag}
                  </span>
                ))}
              </div>
            )}

            {categories.length > 0 && (
              <div className='text-sm font-semibold py-[10px]  text-secondary-dark dark:text-secondary-light uppercase text-nowrap'>
                {categories.map((kata) => {
                  return <span key={kata.catName}>{kata.catName}</span>;
                })}
              </div>
            )}
          </div>

          <div className='px-11'>
            <a href={url}>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-accent leading-sutraCardTitleLineHeight'>
                {title}
              </h5>
            </a>

            <a href={url}>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-accent leading-sutraCardTitleLineHeight  flex'>
                <span>{title}</span>
                <ArrowIcon className='shrink-0 text-secondary-dark dark:text-secondary-light' />
              </h5>
            </a>

            {introContent && (
              <div className='prose prose-p:text-secondary-dark dark:prose-p:text-secondary-light prose-p:text-base  my-3 line-clamp-4'>
                {parse(introContent)}
              </div>
            )}

            <div className='w-full bg-sutraCardDivider h-px'></div>

            <div className='w-full flex items-center justify-end py-6'>
              <a href={url} className=''>
                <SutraButtonBase backIcon={RightIcon} innerText={cta} size='normal' />
              </a>
            </div>

            <div className='w-full bg-sutraCardDivider h-px'></div>

            {date && (
              <div className='text-xs  text-primary-light font-medium py-6'>
                <span>{date}</span>
              </div>
            )}

            <div className='grid gap-6'>
              {author && (
                <div className='flex gap-3 items-center '>
                  {author.avatar && (
                    <Image
                      src={author.avatar.url}
                      alt='profile pic of author'
                      width={40}
                      height={40}
                      className='object-cover object-center block aspect-square'
                    />
                  )}

                  <p className='text-xs font-medium text-secondary-dark dark:text-secondary-light'>{`${author.firstName} ${author.lastName}`}</p>
                </div>
              )}

              {author && (
                <div className='flex gap-3 items-center'>
                  <p className='text-xs font-medium text-primary-dark dark:text-secondary-light'>{`${author.firstName} ${author.lastName}`}</p>
                  <div className='w-[3px] h-[3px] bg-secondary-dark rounded-full'></div>
                  {date && (
                    <div className='text-xs  text-secondary-dark dark:text-secondary-light font-medium'>
                      <span>{date}</span>
                    </div>
                  )}
                </div>
              )}

              {author && (
                <div className='flex gap-3 items-center'>
                  <p className='text-xs font-medium text-primary-dark dark:text-secondary-light'>
                    Autor: {`${author.firstName} ${author.lastName}`}
                  </p>
                  <div className='w-[3px] h-[3px] bg-secondary-dark rounded-full'></div>
                  {date && (
                    <div className='text-xs  text-secondary-dark font-medium dark:text-secondary-light'>
                      <span>{date}</span>
                    </div>
                  )}
                </div>
              )}

              {author && (
                <div className='flex gap-3 items-center'>
                  {author.avatar && (
                    <picture>
                      <img
                        src={author.avatar.url}
                        alt='profile pic of author'
                        className='w-7 h-7 rounded-full object-cover object-center block aspect-square'
                      />
                    </picture>
                  )}

                  <p className='text-xs font-medium text-secondary-dark dark:text-secondary-light'>{`${author.firstName} ${author.lastName}`}</p>

                  {date && (
                    <div className='text-xs  text-secondary-dark dark:text-secondary-light font-medium flex items-center gap-2 '>
                      <CalendarIcon /> <span>{date}</span>
                    </div>
                  )}
                </div>
              )}

              {readTime && (
                <div className='text-xs text-secondary-dark dark:text-secondary-light flex items-center gap-1 text-nowrap font-medium pb-12'>
                  <ClockIcon />
                  <span>{readTime.text}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ArticleCardFullImage = ({
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
  isArchive,
}: DefaultArticleCard) => {
  return (
    <article className='relative min-h-[400px] flex place-items-stretch'>
      <a href={url} className='min-w-[288px] w-full'>
        <div className='relative flex-1 w-full h-full'>
          <Image
            fill
            className={`block object-cover object-center ${!isArchive && 'max-w-[288px]'} w-full h-full`}
            src={imgSource}
            alt='article card'
          />
        </div>
      </a>

      <div className='absolute top-0 right-0 flex flex-col items-end justify-end'>
        {categories.length > 0 && (
          <div className='text-xs font-medium py-1 px-2 text-secondary-light bg-almost-black/70   text-nowrap'>
            {categories.map((kata) => {
              return <span key={kata.catName}>{kata.catName}</span>;
            })}
          </div>
        )}

        {readTime && (
          <div className='text-xs bg-almost-black/70 font-medium py-1 px-2   text-almost-white flex items-center gap-1 text-nowrap'>
            <ClockIcon />
            <span>{readTime.text}</span>
          </div>
        )}

        {author && (
          <div className='flex flex-col justify-start items-start py-1 px-2 bg-almost-black/70'>
            <p className='text-xs font-medium text-almost-white'>{`${author.firstName} ${author.lastName}`}</p>
          </div>
        )}

        {date && (
          <div className='text-xs  text-almost-white font-medium flex items-center gap-2 py-1 px-2 bg-almost-black/70'>
            <span>{date}</span>
          </div>
        )}
      </div>

      <div className='absolute w-full h-3/4 left-0 bottom-0 bg-gradient-to-b from-black/0 to-black/90 flex flex-col  justify-end'>
        <div className='px-3 pb-3'>
          {readTime && (
            <div className='text-xs   text-almost-white flex items-center gap-1 text-nowrap'>
              <ClockIcon />
              <span>{readTime.text}</span>
            </div>
          )}

          {author && (
            <div className='flex flex-col justify-start items-start'>
              <p className='text-xs font-medium text-almost-white'>{`${author.firstName} ${author.lastName}`}</p>

              {date && (
                <div className='text-xs  text-almost-white font-medium flex items-center gap-2 '>
                  <span>{date}</span>
                </div>
              )}
            </div>
          )}

          <a href={url}>
            <h5 className='mb-3 text-3xl font-semibold tracking-tight text-almost-white leading-sutraCardTitleLineHeight flex items-end justify-between'>
              <span>{title}</span> <ArrowIcon fontSize={24} className='shrink-0' />
            </h5>
          </a>
        </div>
      </div>
    </article>
  );
};

//<ArrowIcon fontSize={24} className='shrink-0' />

export const ArticleCardTextCard = ({
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
}: DefaultArticleCard) => {
  return (
    <article>
      <div className='bg-white max-w-[408px] w-full relative'>
        <div className='absolute top-0 w-full h-4 bg-accent'></div>
        <div className='px-11 py-8 w-full'>
          {date && (
            <div className='text-xs  font-medium flex items-center gap-2 text-primary-light'>
              <span>{date}</span>
            </div>
          )}

          {categories.length > 0 && (
            <div className='text-xs font-medium text-accent border w-max uppercase border-accent rounded-sutraCardTagBorderRadius px-2 py-px mt-6 text-nowrap'>
              {categories.map((kata) => {
                return <span key={kata.catName}>{kata.catName}</span>;
              })}
            </div>
          )}

          <a href={url}>
            <h5 className='mb-2 mt-2 text-2xl font-bold tracking-tight text-accent leading-sutraCardTitleLineHeight'>
              <span>{title}</span>
            </h5>
          </a>

          {introContent && (
            <div className='prose prose-p:text-secondary-dark  prose-p:text-base line-clamp-4 mt-2'>
              {parse(introContent)}
            </div>
          )}

          <div className='w-full h-px bg-sutraCardDivider my-6 shrink-0'></div>

          <div className='w-full flex items-center justify-end'>
            <a href={url} className='flex items-center gap-1 text-secondary-dark text-base'>
              <span>{cta}</span> <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ArticleCardMiniCard = ({
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
}: DefaultArticleCard) => {
  return (
    <article>
      <div className='bg-white max-w-[190px] w-full relative rounded-lg'>
        <div className='relative flex-1 w-full h-[106px]'>
          <Image
            fill
            className={`max-w-full w-full object-cover object-center block aspect-video rounded-t-lg`}
            src={imgSource}
            alt='article card'
          />
        </div>

        <div className='p-4 relative'>
          {categories.length > 0 && (
            <div className='w-full leading-none'>
              {categories.map((kata) => {
                return (
                  <span className='text-accent text-xs font-semibold uppercase leading-none' key={kata.catName}>
                    {kata.catName}
                  </span>
                );
              })}
            </div>
          )}

          <a href={url}>
            <h5 className='mb-2 mt-2 text-sm font-semibold tracking-tight text-primary-dark leading-[20px]'>
              <span>{title}</span>
            </h5>
          </a>

          {readTime && (
            <div className='text-xs text-primary-light flex items-center gap-1 text-nowrap font-medium '>
              <ClockIcon />
              <span>{readTime.text}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
