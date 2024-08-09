'use client';

import { ArticleCardFullImage } from '@/app/components/ArticleCardAlt';
import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import dayjs from 'dayjs';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { readingTime } from 'reading-time-estimator';
import slugify from 'slugify';
interface BlogArchivePage {
  pageContent: any[];
  totalPosts: number;
  adminSetup: any;
  lang: any;
}

const PageContent = ({ pageContent, totalPosts, adminSetup, lang }: BlogArchivePage) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  console.log('PAGE CONTENT FROM BLOGS', pageContent);
  console.log('TOTAL NUM', totalPosts);

  console.log('ADMIN SETUP', adminSetup);

  const postsPerPage = Number(adminSetup.archiveItemsNumberOnSinglePage[0] ?? 12);
  const offset = currentPage * postsPerPage;
  const currentPosts = pageContent.slice(offset, offset + postsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  console.log('CURRENT', currentPosts);

  const l = getSuffixFromLang(lang);

  return (
    <div>
      <div className='max-w-[1440px] mx-auto my-8 flex flex-wrap gap-4 items-start justify-center'>
        {currentPosts.map((blogContent: any, index: number) => {
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

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(totalPosts / postsPerPage)}
        onPageChange={handlePageClick}
        //   pageCount={Math.ceil(totalPosts / postsPerPage)}
        //   marginPagesDisplayed={2}
        //   pageRangeDisplayed={3}
        //   onPageChange={handlePageClick}
        containerClassName={'flex justify-center space-x-2 mt-6'}
        pageClassName={'px-4 py-2 border rounded'}
        activeClassName={'bg-blue-500 text-white'}
        previousClassName={'px-4 py-2 border rounded bg-gray-200'}
        nextClassName={'px-4 py-2 border rounded bg-gray-200'}
        breakClassName={'px-4 py-2 border rounded bg-gray-200'}
      />
    </div>
  );
};

export default PageContent;
