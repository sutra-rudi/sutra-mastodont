'use client';

import Image from 'next/image';
import React from 'react';
import { blogLanguageFields } from '../pathsUtils/blogLanguageFields';
import { UserLanguage } from '../enums/LangEnum';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

interface NewsSectionInterface {
  pageContent: any;
  lang: any;
}

const NewsSection = ({ pageContent, lang }: NewsSectionInterface) => {
  const router = useRouter();

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Novosti</h2>

      <div className='max-w-[1225px] mx-auto my-0 flex flex-wrap gap-4'>
        {pageContent.map((blogContent: any) => {
          const contentShorthand = blogContent.node;
          const contentCardShorthand = contentShorthand.introNews;
          const languageField = blogLanguageFields[lang];

          const las = `naslovSadrzaj${
            lang === UserLanguage.eng
              ? `Sadrzaj${lang[0].toUpperCase() + lang.slice(1).toLowerCase()}`
              : `${lang[0].toUpperCase() + lang.slice(1).toLowerCase()}`
          }`;

          const imgSource = contentCardShorthand.thumbnail
            ? contentCardShorthand.thumbnail.node.sourceUrl
            : 'https://placehold.co/400.png';
          return (
            <article
              key={contentShorthand.id}
              className=' grid grid-cols-1 p-4 items-start'
              onClick={() =>
                router.push(
                  `/${lang}/news/${
                    slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
                  }`
                )
              }
            >
              <div className='w-[450px] relative h-[250px]'>
                <Image src={imgSource} fill alt='ciao' className='object-cover aspect-video block object-center' />
              </div>

              <div className=''>
                <p>{dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}</p>
              </div>
              <div className=''>
                <h3>{contentShorthand[languageField]?.[las]}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default NewsSection;
