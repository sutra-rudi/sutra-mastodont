'use client';

import React from 'react';
import parse from 'html-react-parser';
import { AppButtonDefault } from './AppButton';

interface DefaultArticleCard {
  cta: string;
  url: string;
  title: string;
  date: string;
  imgSource: string;
  introContent: string;
}

const ArticleCard = ({ cta, url, title, date, imgSource, introContent }: DefaultArticleCard) => {
  return (
    <article className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href={url}>
        <picture>
          <img className='rounded-t-lg' src={imgSource} alt='' />
        </picture>
      </a>
      <div className='p-5'>
        <a href={url}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{date}</p>

        {introContent && (
          <div className='prose prose-stone text-gray-700 dark:text-gray-400 my-3 line-clamp-4'>
            {parse(introContent)}
          </div>
        )}
        <a href={url} className=''>
          <AppButtonDefault buttonText={cta} action={() => null} />
        </a>
      </div>
    </article>
  );
};

export default ArticleCard;
