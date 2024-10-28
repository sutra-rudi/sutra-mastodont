'use client';
import dayjs from 'dayjs';
import React from 'react';
import { blogLanguageFields } from '../pathsUtils/blogLanguageFields';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import { UserLanguage } from '../enums/LangEnum';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { readingTime } from 'reading-time-estimator';
import SutraCard from '../components/card/SutraCard';

interface BlogSection {
  pageContent: any;
  lang: any;
  categoriesList: any[];
  tagsList: any[];
  blogCtaKey: string;
  blogTableKey: string;
}

const BlogSection = ({ pageContent, lang }: BlogSection) => {
  const [mediaPaths, setMediaPaths] = React.useState<any>(null);
  const l = getSuffixFromLang(lang);
  React.useEffect(() => {
    const fetchMediaPaths = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/mediaPaths`);
        const data = await response.json();

        setMediaPaths(data);
      } catch (error) {
        console.error('Error fetching media paths:', error);
      }
    };

    fetchMediaPaths();
  }, []);

  return (
    <section className=''>
      <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla'>
        Blogovi
      </h2>

      <div className='max-w-[1740px] mx-auto my-8 flex flex-wrap gap-4 items-start justify-center min-h-dvh'>
        {pageContent &&
          mediaPaths &&
          pageContent.map((blogContent: any, index: number) => {
            const contentShorthand = blogContent.node;
            const contentCardShorthand = contentShorthand.introBlog;
            const languageField = blogLanguageFields[lang];
            const introField = contentShorthand[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`];

            const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;

            const authorField = contentShorthand.author.node;
            // const tags = contentShorthand[`tags${l}`]?.[`tagText${l}`];

            // const tagsField = tags ? tags.split(', ') : [];

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
              : mediaPaths.heroImagesArchiveBlog.desktop;

            const readTime = readingTime(contentField);

            return (
              contentCardShorthand.istaknutoNaNaslovnici &&
              contentCardShorthand.statusBloga && (
                <a
                  href={`/${lang}/blog/${
                    slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
                  }`}
                  className='w-full max-w-[702px]'
                >
                  <SutraCard
                    title={contentShorthand[languageField]?.[las]}
                    date={dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}
                    cardImageSource={imgSource}
                    hasCardImage
                    hasBackgroundShadows={true}
                    isBaseCard={true}
                    key={index}
                    tagText={categoryField.filter((c: any) => c.catName !== null).map((c: any) => c.catName)}
                    lineInfoPos='top'
                    textContentPos='top'
                    subTitle={null}
                    textContent={introField}
                    readTime={readTime.text}
                    authorName={authorField}
                  />
                </a>
              )
            );
          })}
      </div>
    </section>
  );
};

export default BlogSection;
