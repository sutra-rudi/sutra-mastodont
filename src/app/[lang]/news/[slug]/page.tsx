import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { htmlToText } from 'html-to-text';
import { UserLanguage } from '@/app/enums/LangEnum';
import { fetchData } from '@/app/utils/callApi';

import parse from 'html-react-parser';
import dayjs from 'dayjs';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import getSingleNews from '@/app/queries/dynamicQueries/getSingleNews';
import updateLocale from 'dayjs/plugin/updateLocale';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { generateArticleSchema } from '@/app/utils/generateArticleSchema';
import Script from 'next/script';
const ClientContent = dynamic(() => import('./ClientContent'), { ssr: false });

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
});

export async function generateMetadata({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const l = getSuffixFromLang(lang);
  const isEngMistake = lang === UserLanguage.eng;
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const bData = await fetchData(getSingleNews(slugId));

  const MP = await fetchMediaPaths();

  const { heroImagesDefault } = MP;

  const naslovna = bData.data.novosti.introNews.naslovnaSlika
    ? bData.data.novosti.introNews.naslovnaSlika.node.sourceUrl
    : heroImagesDefault.desktop;
  const naslovNovosti =
    bData.data.novosti[`sadrzaj${l}Fields`]?.[isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`];
  // const sadrzajNovosti = bData.data.novosti[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`];
  const seoOpisStranice = bData.data.novosti[`seo${l}`]?.[`seo${l}`].seoOpisStranice;
  const introNovosti = bData.data.novosti[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`];
  const author = bData.data.novosti.author;

  const datum = bData.data.novosti.introNews.datum;

  // const kategorija = bData.data.novosti.introNews.kategorija.edges[0].node.informacijeKategorije[`imeKategorije${l}`];

  // const galleryNovosti = Object.values(bData.data.novosti.photoGallery.fotogalerija).filter(
  //   (galItem: any) => galItem !== null
  // );

  const plainIntroText = htmlToText(introNovosti, {
    wordwrap: false,
  });

  return {
    title: naslovNovosti,
    description: seoOpisStranice ? seoOpisStranice : plainIntroText.slice(0, 155) + '...',
    // keywords: seoTagPrep,
    openGraph: {
      title: naslovNovosti,
      // keywords: 'seoTagPrep',
      description: seoOpisStranice ? seoOpisStranice : plainIntroText.slice(0, 155) + '...',
      // url: `https://yourwebsite.com/blog/${id}`,
      type: 'article',
      images: [
        {
          url: naslovna,
          width: 1200,
          height: 630,
          alt: 'descriptive image of article',
          type: 'image/jpeg',
          secure_url: naslovna,
        },
      ],
      locale: lang,

      article: {
        published_time: datum,
        // modified_time: prepareDataForClient.blog.modifiedDate,
        // expiration_time: prepareDataForClient.blog.expirationDate,
        section: 'News',
        // tag: tagsField,
        author: author.node.firstName,
      },
    },
    twitter: {
      card: 'summary_large_image',
      // site: '@YourTwitterHandle',
      creator: author,
      title: naslovNovosti,
      // keywords: 'seoTagPrep',
      description: seoOpisStranice ? seoOpisStranice : plainIntroText.slice(0, 155) + '...',
      image: naslovna,
      alt: 'descriptive image of article',
    },
  };
}

export default async function SingleNewsPage({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const l = getSuffixFromLang(lang);
  const isEngMistake = lang === UserLanguage.eng;
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const bData = await fetchData(getSingleNews(slugId));

  const MP = await fetchMediaPaths();

  const { heroImagesDefault } = MP;

  const naslovna = bData.data.novosti.introNews.naslovnaSlika
    ? bData.data.novosti.introNews.naslovnaSlika.node.sourceUrl
    : heroImagesDefault.desktop;
  const naslovNovosti =
    bData.data.novosti[`sadrzaj${l}Fields`]?.[isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`];
  const sadrzajNovosti = bData.data.novosti[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`];
  const introNovosti = bData.data.novosti[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`];
  const author = bData.data.novosti.author;

  const datum = bData.data.novosti.introNews.datum;

  const kategorija = bData.data.novosti.introNews.kategorija.edges[0].node.informacijeKategorije[`imeKategorije${l}`];

  const galleryNovosti = Object.values(bData.data.novosti.photoGallery.fotogalerija).filter(
    (galItem: any) => galItem !== null
  );

  const fileList = {
    fHr: bData.data.novosti.docsUploadHr,
    fEng: bData.data.novosti.docsUploadEng,
    fIta: bData.data.novosti.docsUploadIta,
    fGer: bData.data.novosti.docsUploadGer,
  };

  const schemaObj = generateArticleSchema({
    headline: naslovNovosti,
    description: htmlToText(introNovosti, { wordwrap: false }),
    datePublished: datum,
    image: naslovna,
    author: {
      firstName: author.node.firstName,
      lastName: author.node.lastName,
      image: author.node.avatar.url,
    },
    articleSection: kategorija,
    articleBody: sadrzajNovosti,
    // Opcionalno: publisher, keywords, mainEntityOfPage, url, itd.
  });

  return (
    <main className='w-full xl:-pb--xl---5xl lg:-pb--desktop---5xl md:-pb--tablet---5xl -pb--mobile---5xl min-h-screen'>
      <Suspense>
        <div className='bg-accent-boja/35 text-accent-boja block max-w-max rounded-[36px] text-sm uppercase py-1 px-3 lg:-mt--desktop---3xl md:-mt--tablet---5xl -mt--mobile---5xl mx-auto'>
          {kategorija}
        </div>
        <p className='relative max-w-max flex items-center gap-2 text-accent-boja mx-auto lg:-mt--desktop---l md:-mt--tablet---l -mt--mobile---l px-4'>
          <span>{`${author.node.firstName} ${author.node.lastName}`}</span>
          <span className='block size-1 rounded-full bg-accent-boja'></span>
          <span>{dayjs(datum).format('DD.MM.YYYY')}</span>
        </p>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile max-w-max block text-center mx-auto relative px-4'>
          {naslovNovosti}
        </h2>

        <div className='text-ellipsis line-clamp-1 max-w-prose mx-auto text-center relative lg:-mt--desktop-h1-2---naslov-nadnaslov md:-mt--tablet-h1-2---naslov-nadnaslov -mt--mobile-h1-2---naslov-nadnaslov lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile px-4'>
          {parse(introNovosti)}
        </div>

        <div className='flex items-center relative mx-auto lg:mt-10 md:mt-7 mt-4 max-w-max gap-4'>
          <picture>
            <img
              src={author.node.avatar.url}
              alt='author-avatar'
              width={64}
              height={64}
              className='object-cover object-center aspect-auto block rounded-full'
            />
          </picture>

          <div className='lg:text-text-base-l-mobiletablet text-text-base-base-mobiletablet'>
            <p className='font-bold'>{`${author.node.firstName} ${author.node.lastName}`}</p>
            <p className='font-normal'>{dayjs(datum).format('D MMMM YYYY')}</p>
          </div>
        </div>
        <picture className='block relative lg:mt-10 md:mt-7 mt-4 mx-auto max-w-[1920px]'>
          <img
            src={naslovna}
            alt={`Blog image, source: ${naslovna}`}
            width={1920}
            height={800}
            className='object-cover object-center block aspect-auto lg:h-[500px] md:h-[400px] h-[250px]'
          />
        </picture>
        <div className='lg:prose-lg prose max-w-[750px] w-full mx-auto lg:mt-xl-slika-sadrzaj md:mt-desktop-slika-sadrzaj mt-tablet-slika-sadrzaj px-4'>
          {parse(sadrzajNovosti)}
        </div>

        <ClientContent gallery={galleryNovosti} files={fileList} currentLang={lang} />
      </Suspense>

      <Script
        id='schema-org-article'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
      />
    </main>
  );
}
