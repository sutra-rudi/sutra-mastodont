import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import React, { Suspense } from 'react';
import Client from './Client';
import { fetchData } from '@/app/utils/callApi';
import getAllUslugeQuery from '@/app/queries/dynamicQueries/getAllUsluge';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import slugify from 'slugify';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

export default async function ServicesPage({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const MP = await fetchMediaPaths();

  const { heroImagesArchiveProductsOrServices } = MP;

  const getUsluge = await fetchData(getAllUslugeQuery());

  const allUsluge = !getUsluge.error ? getUsluge.data.allPortfolioUsluga?.edges : null;

  const l = getSuffixFromLang(lang);

  return (
    <main className='w-full relative block min-h-screen -mt--desktop---4xl'>
      <Suspense>
        <Client hero={heroImagesArchiveProductsOrServices} currentLang={lang} />

        <div className='container mx-auto px-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          <Breadcrumbs />
        </div>

        <div className='container mx-auto flex gap-8 flex-wrap items-start md:justify-start justify-center px-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          {allUsluge.map((us: any) => {
            return (
              <a
                key={us.node.databaseId}
                href={`/${lang}/services/${slugify(
                  us.node.uslugeSadrzajHr.sadrzajGrupeUslugaHr.nazivUsluge + `-${us.node.databaseId}`,
                  {
                    ...slugifyOptions,
                  }
                )}`}
                className='block lg:max-w-[30%] md:max-w-[45%] w-full'
              >
                <article className='w-full shadow bg-white cursor-pointer transition-all ease-in-out duration-300 group hover:shadow-primarna-tamna rounded-lg lg:pb-10 md:pb-8 pb-6'>
                  <div className='overflow-hidden'>
                    <picture className=''>
                      <img
                        src={
                          us.node.uslugeIntro.slikaThumbnailSlikaNaKartici
                            ? us.node.uslugeIntro.slikaThumbnailSlikaNaKartici?.node.sourceUrl
                            : 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'
                        }
                        alt={`Image of service - ${
                          //@ts-ignore
                          us.node[`uslugeSadrzaj${l}`]?.[`sadrzajGrupeUsluga${l}`].nazivUsluge ?? 'Nema naslova'
                        }`}
                        className='object-cover object-center block aspect-auto w-full lg:h-[270px] md:h-[220px] h-[200px] transition-all ease-out duration-[7000ms] group-hover:scale-125'
                      />
                    </picture>
                  </div>

                  <div className='w-full'>
                    <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj md:px-4 px-2 motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                      {
                        //@ts-ignore
                        us.node[`uslugeSadrzaj${l}`]?.[`sadrzajGrupeUsluga${l}`].nazivUsluge ?? 'Nema naslova'
                      }
                    </h4>

                    <span className='lg:mt-desktop-naslov-nadnaslov md:mt-tablet-naslov-nadnaslov mt-mobile-naslov-nadnaslov lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode line-clamp-1 text-ellipsis md:px-4 px-2 motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                      {
                        //@ts-ignore
                        us.node[`uslugeSadrzaj${l}`]?.[`sadrzajGrupeUsluga${l}`].podnaslovIliUvodnik ??
                          'Nema podnaslova'
                      }
                    </span>

                    <p className='lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode md:px-4 px-2 motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                      {
                        //@ts-ignore
                        us.node[`uslugeSadrzaj${l}`]?.[`sadrzajGrupeUsluga${l}`].kratakOpisUsluge ?? 'Nema opisa'
                      }
                    </p>
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      </Suspense>
    </main>
  );
}
