import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { generalTranslations } from '@/app/lib/generalTranslations';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import getJobOpenings from '@/app/queries/dynamicQueries/getAllJobOpenings';
import { fetchData } from '@/app/utils/callApi';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import slugify from 'slugify';
import Client from './Client';
import { Suspense } from 'react';

export default async function JobListings({ params: { lang } }: { params: { lang: string } }) {
  const l = getSuffixFromLang(lang);
  const getJo = await fetchData(getJobOpenings());
  const jOData = !getJo.error ? getJo.data.allOglasiZaPosao?.edges : null;

  const MP = await fetchMediaPaths();

  const { heroImagesCareer } = MP;

  return (
    <main className='w-full h-full min-h-screen relative -mt--desktop---4xl'>
      <Suspense>
        <Client imgSrc={heroImagesCareer} lang={lang} />
        <section className='container mx-auto px-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          <Breadcrumbs />
          <div className='flex items-center justify-center gap-4 flex-wrap w-full lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
            {jOData.map((og: any) => {
              const jTitle = og.node[`oglasiZaPosaoSadrzaj${l}`]?.naslov;
              const jDesc = og.node[`oglasiZaPosaoSadrzaj${l}`]?.kratkiUvod;
              const jPlace = og.node.oglasiUvod.mjestoRada;

              return (
                <a
                  key={og.node.databaseId}
                  href={`/${lang}/job-listings/${slugify(jTitle + `-${og.node.databaseId}`, {
                    ...slugifyOptions,
                  })}`}
                >
                  <article className='bg-accent-boja/5 max-w-[350px] p-4 cursor-pointer'>
                    <span className='block lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov'>{`${findGeneralTranslation(
                      'Mjesto rada',
                      lang,
                      generalTranslations
                    )}: ${jPlace}`}</span>
                    <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
                      {jTitle}
                    </h4>
                    <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'>{jDesc}</p>

                    <button
                      role='button'
                      className='rounded border border-almost-black lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl py-2 px-4'
                    >
                      {findGeneralTranslation('Pogledaj oglas', lang, generalTranslations)}
                    </button>
                  </article>
                </a>
              );
            })}
          </div>
        </section>
      </Suspense>
    </main>
  );
}
