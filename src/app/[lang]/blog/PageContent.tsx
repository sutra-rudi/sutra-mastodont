'use client';

import { ArticleCardFullImage } from '@/app/components/ArticleCardAlt';
import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { readingTime } from 'reading-time-estimator';
import slugify from 'slugify';
import { FaChevronLeft as PrevIcon, FaChevronRight as NextIcon } from 'react-icons/fa6';
import { heroImagesArchiveBlog } from '@/app/pathsUtils/mediaImportsDynamic';
import Lottie from 'lottie-react';

interface BlogArchivePage {
  pageContent: any[];
  totalPosts: number;
  adminSetup: any;
  lang: any;
  catList: any[];
  lottieData: any;
}

const PageContent = ({ pageContent, totalPosts, adminSetup, lang, catList, lottieData }: BlogArchivePage) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAlphabetically, setSortAlphabetically] = useState<string>('');
  const [sortByDate, setSortByDate] = useState<string>('');

  const postsPerPage = Number(adminSetup.archiveItemsNumberOnSinglePage[0]);
  const offset = currentPage * postsPerPage;

  console.log('LOTTIE DATA', lottieData);
  const l = getSuffixFromLang(lang);

  // Filtriranje i sortiranje postova
  const processedPosts = useMemo(() => {
    let posts = [...pageContent];

    // Filtriranje prema pretrazi
    if (adminSetup.activateSearchBar && searchQuery) {
      posts = posts.filter((item: any) => {
        const title = item.node[blogLanguageFields[lang]]?.[`naslovSadrzaj${l}`] ?? '';
        const content = item.node[blogLanguageFields[lang]]?.[`sadrzajSadrzaj${l}`] ?? '';
        return (
          title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          content.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    // Filtriranje prema kategoriji
    if (adminSetup.activateCategoryFilter && selectedCategory) {
      posts = posts.filter((item: any) =>
        item.node.introBlog.kategorija.edges.some(
          (edge: any) => edge.node.informacijeKategorije[`imeKategorije${l}`] === selectedCategory
        )
      );
    }

    // Sortiranje postova
    if (adminSetup.sortByAZ && sortAlphabetically === 'az') {
      posts.sort((a, b) => {
        const titleA = a.node[blogLanguageFields[lang]]?.[`naslovSadrzaj${l}`]?.toLowerCase();
        const titleB = b.node[blogLanguageFields[lang]]?.[`naslovSadrzaj${l}`]?.toLowerCase();
        return titleA > titleB ? 1 : -1;
      });
    }

    if (adminSetup.sortByDate && sortByDate === 'date') {
      posts.sort((a, b) => {
        const dateA = dayjs(a.node.introBlog.datum);
        const dateB = dayjs(b.node.introBlog.datum);
        return dateB.diff(dateA);
      });
    }

    return posts;
  }, [searchQuery, selectedCategory, sortAlphabetically, sortByDate, pageContent, lang, l, adminSetup]);

  // Odabir trenutnih postova za prikaz na osnovu stranice
  const currentPosts = useMemo(
    () => processedPosts.slice(offset, offset + postsPerPage),
    [offset, postsPerPage, processedPosts]
  );

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const handleCategoryPick = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
    setCurrentPage(0);
  };

  // const [animationData, setAnimationData] = useState(null);

  // React.useEffect(() => {
  //   const fetchAnimation = async () => {
  //     try {
  //       const response = await fetch('https://cms.sutra.hr/cms_sutra/Lottie/hvar-lottie.json', {});

  //       console.log('RESPONS', response);
  //       if (response.ok) {
  //         const json = await response.json();
  //         // setAnimationData(json);
  //         console.log('RESPONSE', json);
  //       } else {
  //         console.error('Error fetching Lottie animation:', response);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching Lottie animation:', error);
  //     }
  //   };

  //   fetchAnimation();
  // }, []);

  const CategoryTaxonomy = () => {
    const categoryName = `imeKategorije${l}`;

    return (
      <div className='flex items-center justify-start gap-2 my-6'>
        {adminSetup.activateCategoryFilter &&
          catList.map((singleCat: any, index) => {
            const catShorthand = singleCat.node.informacijeKategorije;
            return (
              catShorthand[categoryName] && (
                <span
                  onClick={() => handleCategoryPick(catShorthand[categoryName])}
                  className={`border rounded-sm px-2 py-1 cursor-pointer transition-all ease-in-out ${
                    selectedCategory === catShorthand[categoryName]
                      ? 'border-accent bg-accent text-white'
                      : 'border-accent/10 hover:border-accent hover:bg-accent/10'
                  }`}
                  key={index}
                >
                  {catShorthand[categoryName]}
                </span>
              )
            );
          })}

        {adminSetup.activateCategoryFilter && (
          <span
            onClick={() => handleCategoryPick(null)}
            className={`border rounded-sm px-2 py-1 cursor-pointer transition-all ease-in-out ${
              !selectedCategory
                ? 'border-accent bg-accent text-white'
                : 'border-accent/10 hover:border-accent hover:bg-accent/10'
            }`}
          >
            {'sve'}
          </span>
        )}
      </div>
    );
  };

  return (
    <section>
      {/* <div className=''>{animationData && <Lottie animationData={animationData} />}</div> */}

      {lottieData && <Lottie animationData={lottieData} />}
      <div className='w-full'>
        <picture className='w-full'>
          <img
            src={heroImagesArchiveBlog.desktop}
            alt=''
            className='w-full h-48 object-cover object-center'
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/400.png';
              target.onerror = null;
            }}
          />
        </picture>
      </div>
      <div className='max-w-[1440px] mx-auto my-4'>
        <CategoryTaxonomy />
      </div>

      {/* Polje za unos pretrage */}
      {adminSetup.activateSearchBar && (
        <div className='max-w-[1440px] mx-auto my-4'>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(0);
            }}
            placeholder='Pretraži blogove...'
            className='w-full px-4 py-2 border border-accent/15 rounded max-w-lg transition-all ease-in-out focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none placeholder:text-secondary-light active:placeholder:text-secondary-dark focus:placeholder:text-secondary-dark'
          />
        </div>
      )}

      {/* Polje za sortiranje */}
      <div className='max-w-[1440px] mx-auto my-4 flex gap-4'>
        {adminSetup.sortByAZ && (
          <select
            value={sortAlphabetically}
            onChange={(e) => {
              setSortAlphabetically(e.target.value);
              setCurrentPage(0);
            }}
            className='px-4 py-2 border border-accent/15 rounded transition-all ease-in-out focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none'
          >
            <option value=''>Sortiraj abecedno...</option>
            <option value='az'>Abecedno (A-Z)</option>
          </select>
        )}

        {adminSetup.sortByDate && (
          <select
            value={sortByDate}
            onChange={(e) => {
              setSortByDate(e.target.value);
              setCurrentPage(0);
            }}
            className='px-4 py-2 border border-accent/15 rounded transition-all ease-in-out focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none'
          >
            <option value=''>Sortiraj po datumu...</option>
            <option value='date'>Po datumu</option>
          </select>
        )}
      </div>

      <div className='max-w-[1440px] mx-auto my-8 grid grid-cols-4 gap-4'>
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
            : contentCardShorthand.naslovnaSlika.node.sourceUrl;

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
              isArchive
            />
          );
        })}
      </div>

      {processedPosts.length > 0 && (
        <ReactPaginate
          previousLabel={<PrevIcon className='transition-all ease-in-out group-hover:text-accent' />}
          nextLabel={<NextIcon className='transition-all ease-in-out group-hover:text-accent' />}
          breakLabel={'...'}
          pageCount={Math.ceil(processedPosts.length / postsPerPage)}
          onPageChange={handlePageClick}
          forcePage={currentPage}
          containerClassName={'flex justify-center space-x-2 mt-6'}
          pageClassName={'w-8 h-8 p-2 rounded-full flex items-center justify-center'}
          activeClassName={'bg-accent text-almost-white'}
          previousClassName={
            'w-8 h-8 p-2 rounded-full bg-almost-white flex items-center justify-center group cursor-pointer transition-all hover:bg-accent/10'
          }
          nextClassName={
            'w-8 h-8 p-2 rounded-full bg-almost-white flex items-center justify-center group cursor-pointer transition-all hover:bg-accent/10'
          }
          breakClassName={'px-4 py-2 rounded bg-gray-200'}
        />
      )}
    </section>
  );
};

export default PageContent;
