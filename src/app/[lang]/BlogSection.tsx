'use client';
import dayjs from 'dayjs';
import React from 'react';
import { blogLanguageFields } from '../pathsUtils/blogLanguageFields';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import { UserLanguage } from '../enums/LangEnum';
import ArticleCard from '../components/ArticleCard';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

interface BlogSection {
  pageContent: any;
  lang: any;
}

const BlogSection = ({ pageContent, lang }: BlogSection) => {
  console.log('PAGI CONTENT', pageContent);
  const l = getSuffixFromLang(lang);

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Blogovi</h2>

      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4'>
        {pageContent.map((blogContent: any, index: number) => {
          const contentShorthand = blogContent.node;
          const contentCardShorthand = contentShorthand.introBlog;
          const languageField = blogLanguageFields[lang];
          const introField = contentShorthand[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`];

          const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;

          const imgSource = contentCardShorthand.thumbnail
            ? contentCardShorthand.thumbnail.node.sourceUrl
            : 'https://placehold.co/400.png';
          return (
            <ArticleCard
              title={contentShorthand[languageField]?.[las]}
              url={`/${lang}/blog/${
                slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
              }`}
              date={dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}
              cta='Read more'
              imgSource={imgSource}
              introContent={introField}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogSection;
