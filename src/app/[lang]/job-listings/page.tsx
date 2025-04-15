import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { generalTranslations } from '@/app/lib/generalTranslations';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import getJobOpenings from '@/app/queries/dynamicQueries/getAllJobOpenings';
import { fetchData } from '@/app/utils/callApi';
import slugify from 'slugify';

export default async function JobListings({ params: { lang } }: { params: { lang: string } }) {
  const l = getSuffixFromLang(lang);
  const getJo = await fetchData(getJobOpenings());
  const jOData = !getJo.error ? getJo.data.allOglasiZaPosao?.edges : null;

  return (
    <main className='w-full h-full min-h-screen relative'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
        {findGeneralTranslation('Oglasi za posao', lang, generalTranslations)}
      </h2>
      <section className='max-w-[1440px] mx-auto px-4'>
        <div className='flex items-center justify-center gap-4 flex-wrap w-full'>
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
    </main>
  );
}
