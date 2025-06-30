import getAllPressMediaQuery from '@/app/queries/dynamicQueries/getAllPressMedia';
import { fetchData } from '@/app/utils/callApi';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import React from 'react';
import Client from './Client';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
// import dayjs from 'dayjs';
import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import parse from 'html-react-parser';

export default async function PressMediaPage({ params: { lang } }: { params: { lang: string } }) {
  const l = getSuffixFromLang(lang);
  const call = await fetchData(getAllPressMediaQuery());

  const dataset = !call.error && typeof call.data !== 'undefined' ? call.data.allPressMediaSekcija.edges : null;

  const hero = await fetchMediaPaths();

  const { heroImagesPressMedia } = hero;

  return (
    <main className='w-full h-full relative -mt--desktop---4xl'>
      <Client imgSrc={heroImagesPressMedia} lang={lang} />

      <div className='container px-4 mx-auto flex items-center justify-start -mt--desktop---3xl'>
        <Breadcrumbs />
      </div>

      <section className='lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
        <div className='container mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          {dataset.map((ds: any) => {
            const tt = ds.node[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`];
            const dsc = ds.node[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`];
            const stt = ds.node[`modulBazeTekstova${l}`]?.[`nadnaslovPodnaslovBazaTekstova${l}`];
            const img = ds.node.pressMediaSekcijaUvod.slikaPressObjave
              ? ds.node.pressMediaSekcijaUvod.slikaPressObjave
              : 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg';

            // const dtm = ds.node.pressMediaSekcijaUvod.datumPress;

            return (
              <article
                key={ds.node.databaseId}
                className='pb-6 block max-w-[433px] bg-almost-white group rounded-lg shadow-md min-w-0 w-full shrink-0'
              >
                <div className='overflow-hidden rounded-t-lg'>
                  <picture>
                    <img
                      src={img}
                      alt='Press media article image'
                      className='object-cover object-center block aspect-auto w-full lg:h-[305px] md:h-[270px] h-[225px] transition-all ease-out duration-[7000ms] group-hover:scale-125'
                    />
                  </picture>
                </div>
                <div className='px-4 flex-col flex'>
                  {/* <span className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode mt-3 block relative motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                    {dayjs(dtm).format('DD/MM/YYYY')}
                  </span> */}

                  <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode mt-3 block relative motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                    {stt}
                  </p>

                  <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:-mt--desktop-h3-4---naslov-nadnaslov md:-mt--tablet-h3-4---naslov-nadnaslov -mt--mobile-h3-4---naslov-nadnaslov block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                    {tt ?? 'Upiši jebeni title'}
                  </h4>

                  <div className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov line-clamp-2 text-balance text-ellipsis w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                    {parse(dsc)}
                  </div>

                  <a href={`/${lang}/press/${ds.node.databaseId}`} className='w-full flex items-center justify-end'>
                    <button className='w-max max-w-[180px] lg:-mt--desktop-h3-4---sadrzaj-cta md:-mt--tablet-h3-4---sadrzaj-cta -mt--mobile-h3-4---sadrzaj-cta flex items-center justify-end bg-transparent text-primarna-tamna  lg:text-button-desktop md:text-button-tablet text-button-mobile md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:text-accent-boja group-hover:text-accent-boja active:text-almost-black'>
                      <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>Button text</span>

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
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
