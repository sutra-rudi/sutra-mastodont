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
              const jTitle = og.node[`oglasZaPosao${l}`]?.[`naslov${l}`];
              const jDesc = og.node[`oglasZaPosao${l}`]?.[`kratkiUvod${l}`];
              const jPlace = og.node.oglasiUvod.mjestoRada;

              return (
                <a
                  key={og.node.databaseId}
                  href={`/${lang}/job-listings/${slugify(jTitle + `-${og.node.databaseId}`, {
                    ...slugifyOptions,
                  })}`}
                >
                  <article className='block max-w-[433px] bg-almost-white group rounded-lg shadow-md min-w-0 w-full shrink-0 py-4 px-4'>
                    <span className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode mt-3 block relative motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>{`${findGeneralTranslation(
                      'Mjesto rada',
                      lang,
                      generalTranslations
                    )}: ${jPlace}`}</span>
                    <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:-mt--desktop-h3-4---naslov-nadnaslov md:-mt--tablet-h3-4---naslov-nadnaslov -mt--mobile-h3-4---naslov-nadnaslov block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                      {jTitle}
                    </h4>
                    <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov line-clamp-3 text-balance text-ellipsis w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                      {jDesc}
                    </p>

                    <div className='w-full flex items-center justify-end'>
                      <button
                        role='button'
                        className='w-max max-w-[200px] lg:-mt--desktop-h1-2---sadrzaj-cta md:-mt--tablet-h1-2---sadrzaj-cta -mt--mobile-h1-2---sadrzaj-cta flex items-center justify-start bg-transparent text-primarna-tamna  lg:text-button-desktop md:text-button-tablet text-button-mobile md:px-7 md:py-3 px-6 py-[15px] md:rounded-[7px] rounded-[5px] md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:text-accent-boja active:text-almost-black'
                      >
                        <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                          {findGeneralTranslation('Pogledaj oglas', lang, generalTranslations)}
                        </span>

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='10'
                          height='12'
                          viewBox='0 0 10 12'
                          fill='none'
                          className='transition-all ease-in-out group-hover:translate-x-1'
                        >
                          <path
                            d='M0.333336 0.747747L0.333335 11.248C0.333685 11.3544 0.364457 11.4586 0.422337 11.5494C0.480216 11.6403 0.563013 11.7145 0.661814 11.7638C0.760617 11.8132 0.871683 11.836 0.983057 11.8297C1.09443 11.8234 1.20189 11.7883 1.29388 11.7281L9.25252 6.47799C9.58249 6.26041 9.58249 5.73656 9.25252 5.51838L1.29388 0.268233C1.20209 0.207463 1.09457 0.171825 0.983008 0.165193C0.871449 0.158561 0.760117 0.181188 0.661105 0.230615C0.562094 0.280042 0.479191 0.35438 0.421405 0.445551C0.36362 0.536721 0.33316 0.641239 0.333336 0.747747Z'
                            fill='currentColor'
                          />
                        </svg>
                      </button>
                    </div>
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
