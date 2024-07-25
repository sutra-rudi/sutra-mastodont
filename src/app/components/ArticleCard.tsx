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
  hoverImgSource: string;
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
}: DefaultArticleCard) => {
  return (
    <article className='max-w-[408px] w-full bg-white shadow dark:bg-almost-black dark:border-gray-700 group overflow-hidden'>
      <a href={url}>
        <div className='relative'>
          <picture>
            <img
              className='w-full object-cover object-center block aspect-video min-h-[245px] group-hover:scale-125 transition-all ease-out opacity-0 group-hover:opacity-100 absolute inset-0'
              src={hoverImgSource}
              alt=''
            />
          </picture>
          <picture>
            <img
              className='w-full object-cover object-center block aspect-video min-h-[245px] group-hover:scale-125 transition-all ease-out group-hover:opacity-0'
              src={imgSource}
              alt=''
            />

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
          </picture>
        </div>
      </a>

      <div className='overflow-hidden'>
        <div className='w-full bg-accent h-4 group-hover:translate-y-full transition-all ease-out'></div>
      </div>

      <div className='px-11 pt-12'>
        {tags.length > 0 && (
          <div className='flex items-center gap-1 text-xs flex-wrap font-medium mb-2'>
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
          <div className='py-[10px]'>
            {categories.map((kata) => {
              return (
                <span
                  className='uppercase text-accent border border-accent rounded-sutraCardTagBorderRadius px-2 py-px text-xs font-medium'
                  key={kata.catName}
                >
                  {kata.catName}
                </span>
              );
            })}
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
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-accent leading-sutraCardTitleLineHeight  flex items-start gap-2'>
            <span>{title}</span>
            <ArrowIcon className='shrink-0 text-secondary-dark dark:text-secondary-light mt-1 group-hover:rotate-45 origin-center transition-all duration-200 ease-out group-hover:translate-x-4' />
          </h5>
        </a>

        {introContent && (
          <div className='prose prose-p:text-secondary-dark dark:prose-p:text-secondary-light prose-p:text-base  my-3 line-clamp-4 prose-p:leading-[24px]'>
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
    </article>
  );
};

export default ArticleCard;
