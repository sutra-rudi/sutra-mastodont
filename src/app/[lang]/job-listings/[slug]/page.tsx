import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { generalTranslations } from '@/app/lib/generalTranslations';
import getSingleJobOpening from '@/app/queries/dynamicQueries/getSingleJobOpening';
import { fetchData } from '@/app/utils/callApi';
import dayjs from 'dayjs';
import parse from 'html-react-parser';

export default async function JobOpeningSingle({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const l = getSuffixFromLang(lang);

  const jData = await fetchData(getSingleJobOpening(slugId));

  const naslovOglasa = jData.data.oglasiZaPosao[`oglasiZaPosaoSadrzaj${l}`].naslov;
  const sadrzajOglasa = jData.data.oglasiZaPosao[`oglasiZaPosaoSadrzaj${l}`].opisPosla;
  const uvjetiPosla = jData.data.oglasiZaPosao[`oglasiZaPosaoSadrzaj${l}`].uvjeti;
  const kategorijaPosla = jData.data.oglasiZaPosao[`oglasiZaPosaoSadrzaj${l}`].kategorija;
  const mjestoPosla = jData.data.oglasiZaPosao.oglasiUvod.mjestoRada;
  const datumOd = jData.data.oglasiZaPosao.oglasiUvod.objavaNatjecaja;
  const datumDo = jData.data.oglasiZaPosao.oglasiUvod.trajanjeNatjecaja;
  const naslovnaSLika = jData.data.oglasiZaPosao.oglasiUvod.glavnaSlikaOglas.node;

  return (
    <main className='w-full h-full relative min-h-screen '>
      <picture>
        <img
          src={naslovnaSLika.sourceUrl}
          alt='Job opening image desctiption'
          className='w-full  object-cover object-center block aspect-auto max-h-[500px]'
        />
      </picture>
      <article className='max-w-prose mx-auto px-4'>
        <section className='lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj flex items-center justify-start gap-2 lg:flex-nowrap flex-wrap'>
          <span>{`${findGeneralTranslation('Kategorija posla', lang, generalTranslations)}: ${kategorijaPosla}`}</span>

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
    </main>
  );
}
