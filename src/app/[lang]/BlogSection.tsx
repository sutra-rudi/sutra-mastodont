'use client';
import dayjs from 'dayjs';
import React from 'react';
import { blogLanguageFields } from '../pathsUtils/blogLanguageFields';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import { UserLanguage } from '../enums/LangEnum';
import ArticleCard from '../components/ArticleCard';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { readingTime } from 'reading-time-estimator';
import {
  ArticleCardFullImage,
  ArticleCardHorizontal,
  ArticleCardMiniCard,
  ArticleCardTextCard,
} from '../components/ArticleCardAlt';

interface BlogSection {
  pageContent: any;
  lang: any;
  categoriesList: any[];
}

const BlogSection = ({ pageContent, lang, categoriesList }: BlogSection) => {
  console.log('PAGI CONTENT', pageContent);
  const l = getSuffixFromLang(lang);

  const [clientDisplayData, setClientDisplayData] = React.useState<any[]>(pageContent);

  const CategoryTaxonomy = () => {
    const categoryName = `imeKategorije${l}`;

    const handleCategoryPick = (categoryName: string) => {
      console.log('cat name', categoryName);

      const tax = pageContent.filter(
        (item: any) =>
          item.node.introBlog.kategorija.edges[0].node.informacijeKategorije[`imeKategorije${l}`] === categoryName
      );

      console.log('TAXLK', tax);

      setClientDisplayData(tax);
    };

    return (
      <div className='flex items-center justify-center gap-2 my-6'>
        {categoriesList.map((singleCat: any, index) => {
          const catShorthand = singleCat.node.informacijeKategorije;
          return (
            catShorthand[categoryName] && (
              <span
                onClick={() => handleCategoryPick(catShorthand[categoryName])}
                className='outline outline-accent rounded-sm px-2 py-1 cursor-pointer'
                key={index}
              >
                {catShorthand[categoryName]}
              </span>
            )
          );
        })}

        <span
          onClick={() => setClientDisplayData(pageContent)}
          className='outline outline-accent rounded-sm px-2 py-1 cursor-pointer'
        >
          {'sve'}
        </span>
      </div>
    );
  };

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Blogovi</h2>

      <div className=''>
        <h2 className='w-full text-center text-4xl font-semibold pt-8'>Swiss knife cards</h2>
        <div className='max-w-[1440px] mx-auto'>
          <CategoryTaxonomy />
        </div>
        <div className='max-w-[1440px] mx-auto my-8 flex flex-wrap gap-4 items-start justify-center'>
          {pageContent &&
            clientDisplayData.map((blogContent: any, index: number) => {
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

              const imgSource = contentCardShorthand.thumbnail
                ? contentCardShorthand.thumbnail.node.sourceUrl
                : 'https://placehold.co/400.png';

              const readTime = readingTime(contentField);

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
                  author={authorField}
                  key={index}
                  tags={tagsField}
                  readTime={readTime}
                  categories={categoryField}
                />
              );
            })}
        </div>
      </div>

      <div className=''>
        <h2 className='w-full text-center text-4xl font-semibold pt-8'>Swiss knife cards alt</h2>
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

            return (
              <ArticleCardHorizontal
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
            );
          })}
        </div>
      </div>

      <div className=''>
        <h2 className='w-full text-center text-4xl font-semibold pt-8'>Card full image</h2>
        <div className='max-w-[1440px] mx-auto my-8 flex flex-wrap gap-4 items-start justify-center'>
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

            return (
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

            return (
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
              : 'https://placehold.co/400.png';

            const readTime = readingTime(contentField);

            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
