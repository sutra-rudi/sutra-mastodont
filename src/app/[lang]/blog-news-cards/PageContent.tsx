import { ArticleCardFullImage, ArticleCardMiniCard, ArticleCardTextCard } from '@/app/components/ArticleCardAlt';
import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import dayjs from 'dayjs';

import React from 'react';
import { readingTime } from 'reading-time-estimator';
import slugify from 'slugify';
interface BlogSection {
  pageContent: any;
  lang: any;
}
const PageContent = ({ pageContent, lang }: BlogSection) => {
  const l = getSuffixFromLang(lang);

  return (
    <div>
      <div className=''>
        <h2 className='w-full text-center text-4xl font-semibold pt-8'>Card full image</h2>
        <div className='max-w-[1440px] mx-auto my-8 flex flex-wrap gap-4 items-start justify-center'>
          {pageContent &&
            pageContent.map((blogContent: any, index: number) => {
              const contentShorthand = blogContent.node;
              const contentCardShorthand = contentShorthand.introBlog;
              const languageField = blogLanguageFields[lang];
              const introField = contentShorthand[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`];

              const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;

              const authorField = contentShorthand.author.node;
              const tags = contentShorthand[`tags${l}`]?.[`tagText${l}`];

              const tagsField = tags ? tags.split(', ') : [];

              const contentField = contentShorthand[languageField]?.[`sadrzajSadrzaj${l}`];

              const categoryField = contentCardShorthand.kategorija.edges.map((noda: any) => {
                return {
                  catName: noda.node.informacijeKategorije
                    ? noda.node.informacijeKategorije[`imeKategorije${l}`]
                    : 'No category',
                  catDesc: noda.node.informacijeKategorije
                    ? noda.node.informacijeKategorije[`opisKategorije${l}`]
                    : 'No category',
                  catColor: noda.node.informacijeKategorije
                    ? noda.node.informacijeKategorije.bojaKategorije
                    : 'No color',
                };
              });

              // console.log('KARTICE', contentCardShorthand);

              const imgSource = contentCardShorthand.thumbnail
                ? contentCardShorthand.thumbnail.node.sourceUrl
                : contentCardShorthand.naslovnaSlika
                ? contentCardShorthand.naslovnaSlika.node.sourceUrl
                : 'https://placehold.co/400.png';

              const readTime = readingTime(contentField);
              const isActivatedOnLang: boolean = contentShorthand.statusAtivacijePoJezicima[`aktivator${l}`];

              return (
                contentCardShorthand.statusBloga &&
                isActivatedOnLang && (
                  <ArticleCardFullImage
                    title={contentShorthand[languageField]?.[las]}
                    url={`/${lang}/blog/${
                      slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
                    }`}
                    date={dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}
                    cta='Read more'
                    imgSource={imgSource}
                    introContent={introField}
                    author={authorField}
                    key={index}
                    tags={tagsField}
                    readTime={readTime}
                    categories={categoryField}
                  />
                )
              );
            })}
        </div>
      </div>
      <div className='bg-slate-800 py-10'>
        <h2 className='w-full text-center text-4xl font-semibold pt-8 text-almost-white'>Text cards</h2>
        <div className='max-w-[1440px] mx-auto my-8 flex flex-wrap gap-4'>
          {pageContent.map((blogContent: any, index: number) => {
            const contentShorthand = blogContent.node;
            const contentCardShorthand = contentShorthand.introBlog;
            const languageField = blogLanguageFields[lang];
            const introField = contentShorthand[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`];

            const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;

            const authorField = contentShorthand.author.node;
            const tags = contentShorthand[`tags${l}`]?.[`tagText${l}`];

            const tagsField = tags ? tags.split(', ') : [];

            const contentField = contentShorthand[languageField]?.[`sadrzajSadrzaj${l}`];

            const categoryField = contentCardShorthand.kategorija.edges.map((noda: any) => {
              return {
                catName: noda.node.informacijeKategorije
                  ? noda.node.informacijeKategorije[`imeKategorije${l}`]
                  : 'No category',
                catDesc: noda.node.informacijeKategorije
                  ? noda.node.informacijeKategorije[`opisKategorije${l}`]
                  : 'No category',
                catColor: noda.node.informacijeKategorije ? noda.node.informacijeKategorije.bojaKategorije : 'No color',
              };
            });

            const imgSource = contentCardShorthand.thumbnail
              ? contentCardShorthand.thumbnail.node.sourceUrl
              : 'https://placehold.co/400.png';

            const readTime = readingTime(contentField);
            const isActivatedOnLang: boolean = contentShorthand.statusAtivacijePoJezicima[`aktivator${l}`];

            return (
              contentCardShorthand.statusBloga &&
              isActivatedOnLang && (
                <ArticleCardTextCard
                  title={contentShorthand[languageField]?.[las]}
                  url={`/${lang}/blog/${
                    slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
                  }`}
                  date={dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}
                  cta='Read more'
                  imgSource={imgSource}
                  introContent={introField}
                  author={authorField}
                  key={index}
                  tags={tagsField}
                  readTime={readTime}
                  categories={categoryField}
                />
              )
            );
          })}
        </div>
      </div>
      <div className='bg-slate-800 py-10'>
        <h2 className='w-full text-center text-4xl font-semibold pt-8 text-almost-white'>Text cards minimal</h2>
        <div className='max-w-[1440px] mx-auto my-8 flex flex-wrap gap-4'>
          {pageContent.map((blogContent: any, index: number) => {
            const contentShorthand = blogContent.node;
            const contentCardShorthand = contentShorthand.introBlog;
            const languageField = blogLanguageFields[lang];
            const introField = contentShorthand[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`];

            const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;

            const authorField = contentShorthand.author.node;
            const tags = contentShorthand[`tags${l}`]?.[`tagText${l}`];

            const tagsField = tags ? tags.split(', ') : [];

            const contentField = contentShorthand[languageField]?.[`sadrzajSadrzaj${l}`];

            const categoryField = contentCardShorthand.kategorija.edges.map((noda: any) => {
              return {
                catName: noda.node.informacijeKategorije
                  ? noda.node.informacijeKategorije[`imeKategorije${l}`]
                  : 'No category',
                catDesc: noda.node.informacijeKategorije
                  ? noda.node.informacijeKategorije[`opisKategorije${l}`]
                  : 'No category',
                catColor: noda.node.informacijeKategorije ? noda.node.informacijeKategorije.bojaKategorije : 'No color',
              };
            });
            const imgSource = contentCardShorthand.thumbnail
              ? contentCardShorthand.thumbnail.node.sourceUrl
              : contentCardShorthand.naslovnaSlika
              ? contentCardShorthand.naslovnaSlika.node.sourceUrl
              : 'https://placehold.co/400.png';

            const readTime = readingTime(contentField);
            const isActivatedOnLang: boolean = contentShorthand.statusAtivacijePoJezicima[`aktivator${l}`];

            return (
              contentCardShorthand.statusBloga &&
              isActivatedOnLang && (
                <ArticleCardMiniCard
                  title={contentShorthand[languageField]?.[las]}
                  url={`/${lang}/blog/${
                    slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
                  }`}
                  date={dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}
                  cta='Read more'
                  imgSource={imgSource}
                  introContent={introField}
                  author={authorField}
                  key={index}
                  tags={tagsField}
                  readTime={readTime}
                  categories={categoryField}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
