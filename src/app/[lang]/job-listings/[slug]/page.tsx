import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { generalTranslations } from '@/app/lib/generalTranslations';
import getSingleJobOpening from '@/app/queries/dynamicQueries/getSingleJobOpening';
import { fetchData } from '@/app/utils/callApi';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { htmlToText } from 'html-to-text';
import { Suspense } from 'react';

export async function generateMetadata({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const l = getSuffixFromLang(lang);

  const jData = await fetchData(getSingleJobOpening(slugId));

  const naslovOglasa = jData.data.oglasiZaPosao[`oglasiZaPosao${l}`]?.[`naslov${l}`];
  const sadrzajOglasa = jData.data.oglasiZaPosao[`oglasiZaPosao${l}`]?.[`opisPosla${l}`];
  // const uvjetiPosla = jData.data.oglasiZaPosao[`oglasiZaPosaoSadrzaj${l}`].uvjeti;
  // const kategorijaPosla = jData.data.oglasiZaPosao[`oglasiZaPosaoSadrzaj${l}`].kategorija;
  const kratkiUvod = jData.data.oglasiZaPosao[`oglasiZaPosao${l}`]?.[`kratkiUvod${l}`];
  // const mjestoPosla = jData.data.oglasiZaPosao.oglasiUvod.mjestoRada;
  const datumOd = jData.data.oglasiZaPosao.oglasiUvod.objavaNatjecaja;
  // const datumDo = jData.data.oglasiZaPosao.oglasiUvod.trajanjeNatjecaja;
  const naslovnaSLika = jData.data.oglasiZaPosao.oglasiUvod.glavnaSlikaOglas.node;

  const plainIntroText = htmlToText(sadrzajOglasa, {
    wordwrap: false,
  });

  return {
    title: naslovOglasa,
    description: kratkiUvod ? kratkiUvod : plainIntroText.slice(0, 155) + '...',
    // keywords: seoTagPrep,
    openGraph: {
      title: naslovOglasa,
      //  keywords: 'seoTagPrep',
      description: kratkiUvod ? kratkiUvod : plainIntroText.slice(0, 155) + '...',
      // url: `https://yourwebsite.com/blog/${id}`,
      type: 'article',
      images: [
        {
          url: naslovnaSLika.sourceUrl,
          width: 1200,
          height: 630,
          alt: 'descriptive image of article',
          type: 'image/jpeg',
          secure_url: naslovnaSLika.sourceUrl,
        },
      ],
      locale: lang,

      article: {
        published_time: datumOd,
        // modified_time: prepareDataForClient.blog.modifiedDate,
        // expiration_time: prepareDataForClient.blog.expirationDate,
        section: 'Job Listing',
        // tag: tagsField,
        //  author: author.node.firstName,
      },
    },
    twitter: {
      card: 'summary_large_image',
      // site: '@YourTwitterHandle',
      //  creator: author,
      title: naslovOglasa,
      // keywords: 'seoTagPrep',
      description: kratkiUvod ? kratkiUvod : plainIntroText.slice(0, 155) + '...',
      image: naslovnaSLika.sourceUrl,
      alt: 'descriptive image of article',
    },
  };
}

export default async function JobOpeningSingle({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const l = getSuffixFromLang(lang);

  const jData = await fetchData(getSingleJobOpening(slugId));

  const naslovOglasa = jData.data.oglasiZaPosao[`oglasZaPosao${l}`]?.[`naslov${l}`];
  const sadrzajOglasa = jData.data.oglasiZaPosao[`oglasZaPosao${l}`]?.[`opisPosla${l}`];
  const uvjetiPosla = jData.data.oglasiZaPosao[`oglasZaPosao${l}`]?.[`uvjeti${l}`];
  const kategorijaPosla = jData.data.oglasiZaPosao[`oglasZaPosao${l}`]?.[`kategorija${l}`];
  const mjestoPosla = jData.data.oglasiZaPosao.oglasiUvod.mjestoRada;
  const datumOd = jData.data.oglasiZaPosao.oglasiUvod.objavaNatjecaja;
  const datumDo = jData.data.oglasiZaPosao.oglasiUvod.trajanjeNatjecaja;
  const naslovnaSLika = jData.data.oglasiZaPosao.oglasiUvod.glavnaSlikaOglas.node;

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen bg-white z-40 -mt--desktop---4xl'>
      <Suspense>
        <picture>
          <img
            src={naslovnaSLika.sourceUrl}
            alt='Job opening image desctiption'
            className='w-full  object-cover object-center block aspect-auto lg:h-[500px] md:h-[400px] h-[250px]'
          />
        </picture>

        <div className='container mx-auto px-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          <Breadcrumbs />
        </div>
        <article className='max-w-prose mx-auto px-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          <section className='lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj flex items-center justify-start gap-2 lg:flex-nowrap flex-wrap'>
            <span>{`${findGeneralTranslation(
              'Kategorija posla',
              lang,
              generalTranslations
            )}: ${kategorijaPosla}`}</span>

            <span>|</span>

            <span>{`${findGeneralTranslation('Mjesto rada', lang, generalTranslations)}: ${mjestoPosla}`}</span>

            <span>|</span>

            <span>{`${dayjs(datumOd).format('DD.MM.YYYY')} - ${dayjs(datumDo).format('DD.MM.YYYY')}`}</span>
          </section>
          <h1 className='lg:mt-desktop-naslov-nadnaslov md:mt-tablet-naslov-nadnaslov mt-mobile-naslov-nadnaslov lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov w-full relative'>
            {naslovOglasa}
          </h1>

          <section className='lg:prose-lg prose w-full'>{parse(sadrzajOglasa)}</section>

          <section className='lg:prose-lg prose w-full lg:mt-desktop-blok-teksta-donjidio md:mt-tablet-blok-teksta-donjidio mt-mobile-blok-teksta-donjidio'>
            {parse(uvjetiPosla)}
          </section>
        </article>
      </Suspense>
    </main>
  );
}
