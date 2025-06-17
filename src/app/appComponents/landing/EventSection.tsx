'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';
import React from 'react';
import slugify from 'slugify';

interface EventSection {
  dataset: any;
  currentLang: any;
}
export default function EventSection({ dataset, currentLang }: EventSection) {
  const l = getSuffixFromLang(currentLang);

  //   console.log('DATASET', dataset);

  const currentPath = usePathname();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  React.useEffect(() => {
    const hash = `#${slugify('events', slugifyOptions)}`;

    if (entry?.isIntersecting) {
      window.history.replaceState(null, '', `${currentPath}${hash}`);
    } else if (window.location.hash === hash) {
      window.history.replaceState(null, '', currentPath);
    }
  }, [entry, currentPath]);

  return (
    <section
      id='events'
      ref={ref}
      className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl relative w-full'
    >
      <h2 className='relative lg:-pt--desktop---3xl md:-pt--tablet---3xl -pt--mobile---3xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode block text-center text-balance lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst px-4'>
        Events
      </h2>
      <div className='container mx-auto flex items-center justify-start gap-6 px-4'>
        {dataset.map((ds: any) => {
          return (
            <a
              key={ds.node.databaseId}
              data-gtm={slugify(`event click ${ds.node[`event${l}`]?.[`event${l}`].nazivEventa}`, {
                ...slugifyOptions,
              })}
              href={`/${currentLang}/events/${slugify(
                ds.node[`event${l}`]?.[`event${l}`].nazivEventa + `-${ds.node.databaseId}`,
                {
                  ...slugifyOptions,
                }
              )}`}
              className='block max-w-[433px] bg-almost-white group rounded-lg shadow-md'
            >
              <article className='pb-6'>
                <div className='overflow-hidden rounded-t-lg'>
                  <picture>
                    <img
                      src={ds.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover.node.sourceUrl}
                      alt={ds.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover.node.altText}
                      aria-details={ds.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover.node.description}
                      className='object-cover object-center block aspect-auto w-full lg:h-[305px] md:h-[270px] h-[225px] transition-all ease-out duration-[7000ms] group-hover:scale-125'
                    />
                  </picture>
                </div>

                <div className='px-4 flex-col flex'>
                  <span className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode mt-3 block relative motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                    {dayjs(ds.node.eventUvod.pocetakEventaVrijemeDarumGrupa.datumEventaPocetak).format('DD/MM/YYYY')}
                  </span>

                  <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:-mt--desktop-h3-4---naslov-nadnaslov md:-mt--tablet-h3-4---naslov-nadnaslov -mt--mobile-h3-4---naslov-nadnaslov block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                    {ds.node[`event${l}`]?.[`event${l}`].nazivEventa ?? 'Nema naziva'}
                  </h4>

                  <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov line-clamp-2 text-balance text-ellipsis w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                    {ds.node[`event${l}`]?.[`event${l}`].sazetiOpis}
                  </p>

                  <div className='w-full flex items-center justify-end'>
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
                  </div>
                </div>
              </article>
            </a>
          );
        })}
      </div>
    </section>
  );
}
