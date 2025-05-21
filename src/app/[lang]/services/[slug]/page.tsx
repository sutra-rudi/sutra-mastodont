import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import getSingleUsluge from '@/app/queries/dynamicQueries/getSingleUsluge';
import { fetchData } from '@/app/utils/callApi';
import parse from 'html-react-parser';
import React from 'react';

export default async function SingleServicePage({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const l = getSuffixFromLang(lang);

  const slugId = getIdFromSlug(slug);
  const uData = await fetchData(getSingleUsluge(slugId));

  const hero = uData.data.portfolioUsluga.uslugeIntro.glavnaSlika.node.sourceUrl;

  //   const hero = uData.data.portfolioUsluga.uslugeIntro.dodatneOpcijeUsluga.sliderSlikeHeroSekcije1 ?? null;
  //   const hero2 = uData.data.portfolioUsluga.uslugeIntro.dodatneOpcijeUsluga.sliderSlikeHeroSekcije2 ?? null;
  //   const hero3 = uData.data.portfolioUsluga.uslugeIntro.dodatneOpcijeUsluga.sliderSlikeHeroSekcije3 ?? null;
  //   const hero4 = uData.data.portfolioUsluga.uslugeIntro.dodatneOpcijeUsluga.sliderSlikeHeroSekcije4 ?? null;

  const content = uData.data.portfolioUsluga[`uslugeSadrzaj${l}`]?.[`sadrzajGrupeUsluga${l}`].sadrzaj;

  return (
    <main className='relative w-full min-h-screen -mt--desktop---4xl'>
      <picture>
        <img
          src={hero ? hero : 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'}
          alt={`Hero image for service - ${uData[`uslugeSadrzaj${l}`]?.[`sadrzajGrupeUsluga${l}`].nazivUsluge}`}
          className='w-full  object-cover object-center block aspect-auto lg:h-[500px] md:h-[400px] h-[250px]'
        />
      </picture>

      <div className='max-w-prose mx-auto px-4'>
        <div className='lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj'>
          <Breadcrumbs />
        </div>

        <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 w-full relative  lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov block text-heading-color-light-mode dark:text-heading-color-dark-mode'>
          {uData.data.portfolioUsluga[`uslugeSadrzaj${l}`]?.[`sadrzajGrupeUsluga${l}`].nazivUsluge}
        </h1>

        {content.sadrzajPasusa && (
          <div className='lg:prose-lg prose prose-figure:max-w-full mx-auto text-text-light-mode dark:text-text-dark-mode'>
            {parse(content.sadrzajPasusa)}
          </div>
        )}
        {content.sadrzajPasusa2 && (
          <div className='lg:prose-lg prose prose-figure:max-w-full mx-auto'>{parse(content.sadrzajPasusa2)}</div>
        )}
        {content.sadrzajPasusa3 && (
          <div className='lg:prose-lg prose prose-figure:max-w-full mx-auto'>{parse(content.sadrzajPasusa3)}</div>
        )}
        {content.sadrzajPasusa4 && (
          <div className='lg:prose-lg prose prose-figure:max-w-full mx-auto'>{parse(content.sadrzajPasusa4)}</div>
        )}
      </div>
    </main>
  );
}
