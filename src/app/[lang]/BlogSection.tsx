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
import { FaTag as TagIcon } from 'react-icons/fa6';
import {
  ArticleCardFullImage,
  ArticleCardHorizontal,
  ArticleCardMiniCard,
  ArticleCardTextCard,
} from '../components/ArticleCardAlt';
import { getRecords } from '../lib/airtable';

interface BlogSection {
  pageContent: any;
  lang: any;
  categoriesList: any[];
  tagsList: any[];
  blogCtaKey: string;
  blogTableKey: string;
}

const BlogSection = ({ pageContent, lang, categoriesList, tagsList, blogCtaKey, blogTableKey }: BlogSection) => {
  // console.log('TAGOVI', tagsList);

  const [blogCta, setBlogCta] = React.useState<string>('');

  console.log('CTA KLJUCE', blogCtaKey);

  const l = getSuffixFromLang(lang);

  React.useEffect(() => {
    const getRecordsDemo = async () => {
      const callApi = await getRecords(lang, blogCtaKey, blogTableKey);

      console.log('LANG', lang);

      // const parseData = await callApi.json();

      console.log('DATA', callApi);

      setBlogCta(callApi.parseTranslation);
    };

    getRecordsDemo();
  }, [lang, blogCtaKey, blogTableKey]);

  const [clientDisplayData, setClientDisplayData] = React.useState<any[]>(pageContent);

  const CategoryTaxonomy = () => {
    const categoryName = `imeKategorije${l}`;

    const handleCategoryPick = (categoryName: string) => {
      console.log('cat name', categoryName);

      const tax = pageContent.filter(
        (item: any) =>
          item.node.introBlog.kategorija.edges[0].node.informacijeKategorije[`imeKategorije${l}`] === categoryName
      );

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

  const TagsTaxonomy = () => {
    return (
      <div className='flex items-center justify-center gap-2 my-6'>
        {tagsList.map((tag: any, index) => {
          const tagShortHand = tag.node;

          return (
            <div
              key={tagShortHand.name}
              className='flex outline outline-accent rounded-sm px-2 py-1 cursor-pointer gap-1 items-center'
            >
              <TagIcon />
              <span>{tagShortHand.name}</span>
            </div>
          );
        })}
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
        <div className='max-w-[1440px] mx-auto my-2'>
          <TagsTaxonomy />
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

              const hoverImgSource = contentCardShorthand.naslovnaSlika
                ? contentCardShorthand.naslovnaSlika.node.sourceUrl
                : 'https://placehold.co/400.png';

              const readTime = readingTime(contentField);

              const isActivatedOnLang: boolean = contentShorthand.statusAtivacijePoJezicima[`aktivator${l}`];

              return (
                isActivatedOnLang && (
                  <ArticleCard
                    title={contentShorthand[languageField]?.[las]}
                    url={`/${lang}/blog/${
                      slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
                    }`}
                    date={dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}
                    cta={blogCta}
                    imgSource={imgSource}
                    introContent={introField}
                    author={authorField}
                    key={index}
                    tags={tagsField}
                    readTime={readTime}
                    categories={categoryField}
                    hoverImgSource={hoverImgSource}
                  />
                )
              );
            })}
        </div>
      </div>

      <div className=''>
        <h2 className='w-full text-center text-4xl font-semibold pt-8'>Swiss knife cards alt</h2>
        <div className='max-w-[1440px] mx-auto my-8 flex flex-wrap  justify-center gap-4'>
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
