'use client';

import React from 'react';

import parse from 'html-react-parser';
import { AppButtonDefault } from './AppButton';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { GoArrowUpRight as ArrowIcon } from 'react-icons/go';
import { LuCalendarDays as CalendarIcon } from 'react-icons/lu';
import { FaChevronRight as RightIcon } from 'react-icons/fa';
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
    <article className='max-w-[824px] w-full h-auto bg-white shadow dark:bg-almost-black dark:border-gray-700 '>
      <div className='flex w-full place-content-stretch items-stretch h-full'>
        <a href={url} className='w-full h-full max-w-[408px] flex flex-col'>
          <div className='relative flex-1'>
            <picture className='w-full h-full '>
              <img className='w-full h-full object-cover object-center aspect-[9/16] block' src={imgSource} alt='' />
              <div className='absolute top-0 w-full flex items-center gap-2 px-11 pt-7'>
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
            {tags.length > 0 ? (
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
            ) : (
              <span className='uppercase text-accent border border-accent rounded-sutraCardTagBorderRadius px-2 py-px text-xs'>
                No tags
              </span>
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
                <AppButtonDefault buttonText={cta} action={() => null} icon={<RightIcon />} />
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
                    <picture>
                      <img
                        src={author.avatar.url}
                        alt='profile pic of author'
                        className='w-10 h-10 object-cover object-center block aspect-square'
                      />
                    </picture>
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

                  <p className='text-sm font-medium text-secondary-dark dark:text-secondary-light'>{`${author.firstName} ${author.lastName}`}</p>

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
}: DefaultArticleCard) => {
  return (
    <article className='relative min-h-[400px] flex place-items-stretch'>
      <a href={url}>
        <picture className='flex-1 w-full h-full'>
          <img
            className=' block object-cover object-center max-w-[288px] w-full h-full '
            src={imgSource}
            alt='article card'
          />
        </picture>
      </a>

      <div className='absolute top-0 right-0 bg-almost-black/70'>
        {categories.length > 0 && (
          <div className='text-sm font-semibold py-1 px-2 text-secondary-light  text-nowrap'>
            {categories.map((kata) => {
              return <span key={kata.catName}>{kata.catName}</span>;
            })}
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
              <p className='text-sm font-medium text-almost-white'>{`${author.firstName} ${author.lastName}`}</p>

              {date && (
                <div className='text-xs  text-almost-white font-medium flex items-center gap-2 '>
                  <span>{date}</span>
                </div>
              )}
            </div>
          )}

          <a href={url}>
            <h5 className='mb-2 text-3xl font-semibold tracking-tight text-almost-white leading-sutraCardTitleLineHeight flex items-end justify-between'>
              <span>{title}</span> <ArrowIcon fontSize={24} className='shrink-0' />
            </h5>
          </a>
        </div>
      </div>
    </article>
  );
};

export const ArticleCardTextCard = () => {};

export const ArticleCardMiniCard = () => {};
