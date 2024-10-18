'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { heroImagesHomePage } from '@/app/pathsUtils/mediaImportsDynamic';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Poltawski_Nowy } from 'next/font/google';
const POT = Poltawski_Nowy({ subsets: ['latin'], weight: '700' });
interface PageHero {
  global: any;
  content: any;
  category: any[];
  author: any;
}

const PageHero = ({ global, content, category, author }: PageHero) => {
  const prepareContent: any[] = Object.values(content);
  return (
    <div className='xl:-pt--xl---3xl lg:-pt--desktop---3xl md:-pt--tablet---3xl -pt--mobile---3xl'>
      <div className='w-full max-w-[1080px] mx-auto  xl:-pb--xl---s lg:-pb--desktop---s md:-pb--tablet---s -pb--mobile---s xl:px-0 md:px-4 px-2 '>
        {category.map((cat) => {
          return (
            <span
              className='xl:text-captions-xl lg:text-captions-desktop md:text-captions-tablet text-captions-mobile font-light italic uppercase text-heading-color-light-mode dark:text-heading-color-dark-mode'
              key={cat.catName}
            >
              {cat.catName}
            </span>
          );
        })}
      </div>
      <div className='w-full mx-auto max-w-[1080px] xl:px-0 md:px-4 px-2 '>
        <h1
          className={`${POT.className} xl:text-h1-xl lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 font-bold  mx-auto text-heading-color-light-mode dark:text-heading-color-dark-mode xl:-pb--xl---m lg:-pb--desktop---m md:-pb--tablet---m -pb--mobile---m`}
        >
          {prepareContent[1]}
        </h1>
        <div className='w-full  mx-auto xl:-pb--xl---2xl lg:-pb--desktop---2xl md:-pb--tablet---2xl -pb--mobile---2xl'>
          <div className='flex items-center justify-start gap-2'>
            <div className='flex items-center justify-start gap-2'>
              {author.node.avatar ? (
                <Image
                  src={author.node.avatar.url}
                  width={27}
                  height={27}
                  alt='Blog author image'
                  className='rounded-full object-cover object-center block'
                />
              ) : (
                <div></div>
              )}
              <p className='flex items-center justify-start gap-1 xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet text-heading-color-light-mode dark:text-heading-color-dark-mode'>
                <span>{author.node.firstName}</span>
                <span>{author.node.lastName}</span>
              </p>
            </div>
            <span className='text-blog-datum'>/</span>
            <p className='xl:text-captions-xl lg:text-captions-desktop md:text-captions-tablet text-captions-mobile text-blog-datum'>
              {dayjs(global.datum).format('DD.MM.YYYY')}
            </p>
          </div>
        </div>
      </div>

      <ParallaxBanner
        layers={[
          {
            image: global.naslovnaSlika ? global.naslovnaSlika.node.sourceUrl : heroImagesHomePage.desktop,
            speed: -15,
            // scale: [1, 1.25],
          },
        ]}
        className='block object-cover object-center aspect-video h-[250px] w-full mx-auto xl:min-h-[650px] lg:min-h-[580px] md:min-h-[460px] min-h-[300px]'
      />
    </div>
  );
};

export default PageHero;
