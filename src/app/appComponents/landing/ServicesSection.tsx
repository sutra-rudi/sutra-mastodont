'use client';

import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import slugify from 'slugify';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import { usePathname } from 'next/navigation';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import useEmblaCarousel from 'embla-carousel-react';

const allUsluge = dataset.data.allPortfolioUsluga.edges;

interface Usluge {
  currentLang: any;
  arrows: any;
}

export default function ServicesSection({ currentLang, arrows }: Usluge) {
  const l = getSuffixFromLang(currentLang);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const t = slugify(findGeneralTranslation('Usluge', currentLang, generalTranslations), { ...slugifyOptions });
  const currentPath = usePathname();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    // @ts-ignore
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  React.useEffect(() => {
    const hash = `#${slugify(t, slugifyOptions)}`;

    if (entry?.isIntersecting) {
      window.history.replaceState(null, '', `${currentPath}${hash}`);
    } else if (window.location.hash === hash) {
      window.history.replaceState(null, '', currentPath);
    }
  }, [entry, currentPath, t]);

  return (
    <section id={t} ref={ref} className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl relative w-full'>
      <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode text-center'>
        {findGeneralTranslation('Usluge', currentLang, generalTranslations)}
      </h2>
      <div className='container mx-auto px-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
        <div className='w-full relative md:flex hidden gap-4 items-center justify-end lg:-mb--desktop---l md:-mb--tablet---l -mb--mobile---l'>
          <button onClick={scrollPrev} className='' aria-label='Previous'>
            <picture>
              <img src={arrows.kruznaLeftLight} alt='' />
            </picture>
          </button>
          <button onClick={scrollNext} className='' aria-label='Next'>
            <picture>
              <img src={arrows.kruznaRightLight} alt='' />
            </picture>
          </button>
        </div>

        <div ref={emblaRef} className='embla'>
          <div className='flex items-start justify-start embla__container select-none'>
            {allUsluge.map((us) => {
              return (
                <a
                  key={us.node.databaseId}
                  data-gtm={slugify(
                    `kartica click ${findGeneralTranslation('Usluge', currentLang, generalTranslations)}`,
                    {
                      ...slugifyOptions,
                    }
                  )}
                  href={`/${currentLang}/services/${slugify(
                    us.node.uslugeSadrzajHr.sadrzajGrupeUslugaHr.nazivUsluge + `-${us.node.databaseId}`,
                    {
                      ...slugifyOptions,
                    }
                  )}`}
                  className='block lg:max-w-[30%] md:max-w-[45%] min-w-0 w-full shrink-0 lg:mx-6 md:mx-5 mx-4'
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
                          onError={() =>
                            "this.src = 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'"
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
        </div>

        {/* Dots (pagination) sa sliding window pristupom */}
        {(() => {
          const maxDots = 5; // željeni maksimalni broj dots na ekranu
          const total = scrollSnaps.length;
          let dotIndices: number[] = [];
          if (total <= maxDots) {
            dotIndices = scrollSnaps.map((_, index) => index);
          } else {
            const half = Math.floor(maxDots / 2);
            // Pokušaj centrirati trenutno odabranu točku
            let start = selectedIndex - half;
            if (start < 0) start = 0;
            let end = start + maxDots - 1;
            if (end >= total) {
              end = total - 1;
              start = end - maxDots + 1;
            }
            for (let i = start; i <= end; i++) {
              dotIndices.push(i);
            }
          }

          return (
            <div className='embla__dots md:hidden block lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl mx-auto w-max'>
              {dotIndices.map((dotIndex) => (
                <button
                  key={dotIndex}
                  className={`embla__dot ${selectedIndex === dotIndex ? 'is-selected' : ''}`}
                  onClick={() => scrollTo(dotIndex)}
                />
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
}
