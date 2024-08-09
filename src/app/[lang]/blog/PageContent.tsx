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
import { FaChevronLeft as PrevIcon, FaChevronRight as NextIcon } from 'react-icons/fa6';
interface BlogArchivePage {
  pageContent: any[];
  totalPosts: number;
  adminSetup: any;
  lang: any;
}

const PageContent = ({ pageContent, totalPosts, adminSetup, lang }: BlogArchivePage) => {
  const [currentPage, setCurrentPage] = React.useState(0);

  console.log('PAGE CONTENT FROM BLOGS', pageContent);
  console.log('TOTAL NUM', totalPosts);

  console.log('ADMIN SETUP', adminSetup);

  const postsPerPage = Number(adminSetup.archiveItemsNumberOnSinglePage[0]);
  const offset = currentPage * postsPerPage;
  const currentPosts = React.useMemo(
    () => pageContent.slice(offset, offset + postsPerPage),
    [offset, postsPerPage, pageContent]
  );

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  console.log('CURRENT', currentPosts);

  const l = getSuffixFromLang(lang);

  //   React.useEffect(() => {
  //     return setCurrentPage(1);
  //   }, []);

  console.log('CUURENT PAG', currentPage);

  return (
    <section>
      <div className='max-w-[1440px] mx-auto my-8 grid grid-cols-3 gap-4 place-items-center'>
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

      {pageContent && (
        <ReactPaginate
          previousLabel={<PrevIcon className='transition-all ease-in-out group-hover:text-accent' />}
          nextLabel={<NextIcon className='transition-all ease-in-out group-hover:text-accent' />}
          breakLabel={'...'}
          pageCount={Math.ceil(totalPosts / postsPerPage)}
          onPageChange={handlePageClick}
          //   pageCount={Math.ceil(totalPosts / postsPerPage)}
          //   marginPagesDisplayed={2}
          //   pageRangeDisplayed={3}
          //   onPageChange={handlePageClick}
          containerClassName={'flex justify-center space-x-2 mt-6'}
          pageClassName={'w-8 h-8 p-2  rounded-full flex items-center justify-center'}
          activeClassName={'bg-accent text-almost-white'}
          previousClassName={
            'w-8 h-8 p-2  rounded-full bg-almost-white flex items-center justify-center group cursor-pointer transition-all hover:bg-accent/10'
          }
          nextClassName={
            'w-8 h-8 p-2  rounded-full bg-almost-white flex items-center justify-center group cursor-pointer transition-all hover:bg-accent/10'
          }
          breakClassName={'px-4 py-2  rounded bg-gray-200'}
        />
      )}
    </section>
  );
};

export default PageContent;
