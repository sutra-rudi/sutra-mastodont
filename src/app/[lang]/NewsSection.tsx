import React from 'react';
import { blogLanguageFields } from '../pathsUtils/blogLanguageFields';
import { UserLanguage } from '../enums/LangEnum';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import dayjs from 'dayjs';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import ArticleCard from '../components/ArticleCard';

interface NewsSectionInterface {
  pageContent: any;
  lang: any;
}

const NewsSection = ({ pageContent, lang }: NewsSectionInterface) => {
  const l = getSuffixFromLang(lang);

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Novosti</h2>

      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4'>
        {pageContent.map((blogContent: any) => {
          const contentShorthand = blogContent.node;
          const contentCardShorthand = contentShorthand.introNews;
          const languageField = blogLanguageFields[lang];

          const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;

          const imgSource = contentCardShorthand.thumbnail
            ? contentCardShorthand.thumbnail.node.sourceUrl
            : 'https://placehold.co/400.png';

          const introField = contentShorthand[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`];

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
              key={contentShorthand.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewsSection;
