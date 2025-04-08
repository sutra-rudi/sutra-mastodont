import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { htmlToText } from 'html-to-text';
import { UserLanguage } from '@/app/enums/LangEnum';
import { fetchData } from '@/app/utils/callApi';
import getSingleBlog from '@/app/queries/dynamicQueries/getSingleBlog';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';

import updateLocale from 'dayjs/plugin/updateLocale';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { generateArticleSchema } from '@/app/utils/generateArticleSchema';
import Script from 'next/script';
import Head from 'next/head';

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

  const bData = await fetchData(getSingleBlog(slugId));

  const MP = await fetchMediaPaths();

  const { heroImagesDefault } = MP;

  const naslovna = bData.data.blog.introBlog.naslovnaSlika
    ? bData.data.blog.introBlog.naslovnaSlika.node.sourceUrl
    : heroImagesDefault.desktop;
  const naslovBloga =
    bData.data.blog[`sadrzaj${l}Fields`]?.[isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`];
  // const sadrzajBloga = bData.data.blog[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`];
  const introBloga = bData.data.blog[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`];
  const author = bData.data.blog.author;

  const datum = bData.data.blog.introBlog.datum;

  // const kategorija = bData.data.blog.introBlog.kategorija.edges[0].node.informacijeKategorije[`imeKategorije${l}`];

  // const galleryBlog = Object.values(bData.data.blog.photoGallery.fotogalerija).filter(
  //   (galItem: any) => galItem !== null
  // );

  const plainIntroText = htmlToText(introBloga, {
    wordwrap: 130,
  });

  return {
    title: naslovBloga,
    description: plainIntroText,
    // keywords: seoTagPrep,
    openGraph: {
      title: naslovBloga,
      keywords: 'seoTagPrep',
      description: plainIntroText,
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
        section: 'Blog',
        // tag: tagsField,
        author: author.node.firstName,
      },
    },
    twitter: {
      card: 'summary_large_image',
      // site: '@YourTwitterHandle',
      creator: author,
      title: naslovBloga,
      keywords: 'seoTagPrep',
      description: plainIntroText,
      image: naslovna,
      alt: 'descriptive image of article',
    },
  };
}

export default async function SingleBlogPage({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const l = getSuffixFromLang(lang);
  const isEngMistake = lang === UserLanguage.eng;
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const bData = await fetchData(getSingleBlog(slugId));

  const MP = await fetchMediaPaths();

  const { heroImagesDefault } = MP;

  const naslovna = bData.data.blog.introBlog.naslovnaSlika
    ? bData.data.blog.introBlog.naslovnaSlika.node.sourceUrl
    : heroImagesDefault.desktop;
  const naslovBloga =
    bData.data.blog[`sadrzaj${l}Fields`]?.[isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`];
  const sadrzajBloga = bData.data.blog[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`];
  const introBloga = bData.data.blog[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`];
  const author = bData.data.blog.author;

  const datum = bData.data.blog.introBlog.datum;

  const kategorija = bData.data.blog.introBlog.kategorija.edges[0].node.informacijeKategorije[`imeKategorije${l}`];

  const galleryBlog = Object.values(bData.data.blog.photoGallery.fotogalerija).filter(
    (galItem: any) => galItem !== null
  );

  const fileList = {
    fHr: bData.data.blog.docsUploadHr,
    fEng: bData.data.blog.docsUploadEng,
    fIta: bData.data.blog.docsUploadIta,
    fGer: bData.data.blog.docsUploadGer,
  };

  // Kreiranje schema objekta pomoću generateArticleSchema funkcije.
  // Obrati pozornost da su imena polja usklađena s onima koje očekuje naša funkcija.
  const schemaObj = generateArticleSchema({
    headline: naslovBloga,
    description: htmlToText(introBloga, { wordwrap: 130 }),
    datePublished: datum,
    // Ako imaš datum izmjene, možeš ga dodati:
    // dateModified: dayjs(bData.data.blog.introBlog.modifiedDate).toISOString(),
    image: naslovna,
    author: {
      firstName: author.node.firstName,
      lastName: author.node.lastName,
      image: author.node.avatar.url,
    },
    articleSection: kategorija,
    // Ako želiš dodati puni tekst članka:
    articleBody: sadrzajBloga,
    // Opcionalno, ako imaš podatke o izdavaču:
    // publisher: {
    //   name: 'Naziv Izdavača',
    //   logoUrl: 'https://link.do/logo.png',
    // },
    // Ako želiš dodati ključne riječi:
    // keywords: 'ključna, riječ',
    // Ako želiš postaviti glavnu entitetu stranice:
    // mainEntityOfPage: `https://tvoja-web-stranica/blog/${slugId}`,
    // Ako želiš dodati URL članka:
    // url: `https://tvoja-web-stranica/blog/${slugId}`,
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
          {naslovBloga}
        </h2>

        <div className='text-ellipsis line-clamp-1 max-w-prose mx-auto text-center relative lg:-mt--desktop-h1-2---naslov-nadnaslov md:-mt--tablet-h1-2---naslov-nadnaslov -mt--mobile-h1-2---naslov-nadnaslov lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile px-4'>
          {parse(introBloga)}
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
        <picture className='block relative lg:mt-10 md:mt-7 mt-4'>
          <img
            src={naslovna}
            alt={`Blog image, source: ${naslovna}`}
            width={1920}
            height={800}
            className='object-cover object-center block aspect-auto lg:h-[500px] md:h-[400px] h-[250px]'
          />
        </picture>
        <div className='lg:prose-lg prose max-w-[750px] w-full mx-auto lg:mt-xl-slika-sadrzaj md:mt-desktop-slika-sadrzaj mt-tablet-slika-sadrzaj px-4'>
          {parse(sadrzajBloga)}
        </div>

        <ClientContent gallery={galleryBlog} files={fileList} currentLang={lang} />
      </Suspense>

      <Script
        id='schema-org-article'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
      />
    </main>
  );
}
