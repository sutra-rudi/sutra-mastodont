'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
import { FaPhoneSquareAlt as Telefon } from 'react-icons/fa';
import { FaLocationDot as Misto } from 'react-icons/fa6';
// import { BsPersonSquare as Osoba } from 'react-icons/bs';
import { FaEnvelope as Mejl } from 'react-icons/fa';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import { generateStoreJsonLd } from '@/app/utils/generateLocationsSchema';
import Script from 'next/script';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { usePathname } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';

const locationsData = dataset.data.allKontaktiLokacije.edges;
interface ContactLocations {
  currentLang: any;
  arrows: any;
}

export default function ContactLocations({ currentLang, arrows }: ContactLocations) {
  const l = getSuffixFromLang(currentLang);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const jsonLdArr = locationsData.map((ld) => generateStoreJsonLd(ld.node));

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

  const t = slugify(findGeneralTranslation('Kontakt lokacije', currentLang, generalTranslations), {
    ...slugifyOptions,
  });

  const currentPath = usePathname();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  React.useEffect(() => {
    const hash = `#${slugify(t, slugifyOptions)}`;

    if (entry?.isIntersecting) {
      window.history.replaceState(null, '', `${currentPath}${hash}`);
    } else if (window.location.hash === hash) {
      window.history.replaceState(null, '', currentPath);
    }
  }, [entry, currentPath, t]);

  return (
    <section id={t} ref={ref} className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='container mx-auto px-4'>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode text-center'>
          {findGeneralTranslation('Kontakt lokacije', currentLang, generalTranslations)}
        </h2>

        <div className='lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl relative'>
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
        </div>

        <div ref={emblaRef} className='embla select-none'>
          <div className='flex items-start justify-start embla__container'>
            {locationsData.map((ld) => {
              return (
                <a
                  key={ld.node.id}
                  data-gtm={slugify(`kartica click ${t}`, { ...slugifyOptions })}
                  href={`/${currentLang}/locations#${slugify(ld.node.title, { ...slugifyOptions })}`}
                  className='relative block w-full shrink-0 lg:mx-6 md:mx-5 mx-4 max-w-[500px]'
                >
                  <article className='flex md:items-stretch items-start bg-almost-white shadow lg:flex-nowrap flex-wrap group cursor-pointer w-full'>
                    <div className='overflow-hidden relative block w-full max-w-[45%] shrink-0'>
                      <picture>
                        <img
                          src={ld.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover.node.sourceUrl}
                          alt={`Contact location image - ${ld.node.title}`}
                          decoding='async'
                          loading='lazy'
                          className='object-cover object-center block aspect-auto w-full h-full transition-all ease-out duration-[3000ms] group-hover:scale-125 group-hover:opacity-0 absolute inset-0'
                        />

                        <img
                          src={ld.node.naslovnaSlika.glavnaSlikaNaslovnaSlika.node.sourceUrl}
                          alt={`Contact location image - ${ld.node.title}`}
                          decoding='async'
                          loading='lazy'
                          className='object-cover object-center block aspect-auto w-full h-full transition-all ease-out duration-[3000ms] group-hover:scale-125 opacity-0 group-hover:opacity-100 absolute inset-0'
                        />
                      </picture>
                    </div>
                    <div className='max-w-prose pt-2 lg:px-8 md:px-6 px-4 pb-4'>
                      <h3 className='lg:text-h3-desktop md:text-h3-tablet text-h3-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode motion-ease-spring-bouncy group-hover:motion-preset-slide-up lg:mt-0 mt-mobile-slika-sadrzaj'>
                        {ld.node.radnaVremenaLokacijaOsnovneInformacije.nazivLokacije}
                      </h3>

                      <ul className='flex flex-col lg:-gap--desktop-liste-udaljenost-u-listama-small md:-gap--tablet-liste-udaljenost-u-listama-small -gap--mobile-liste-udaljenost-u-listama-small lg:-mt--desktop-h3-4---naslov-tekst md:-mt--tablet-h3-4---naslov-tekst -mt--mobile-h3-4---naslov-tekst text-text-light-mode dark:text-text-dark-mode'>
                        <li className='flex items-start justify-start lg:gap-3 md:gap-2 gap-1 motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                          <Misto className='md:text-text-base-base-desktop text-text-base-base-mobiletablet' />

                          <div className=' text-text-light-mode dark:text-text-dark-mode align-top'>
                            {parse(ld.node.radnaVremenaLokacijaOsnovneInformacije.adresaLokacije)}
                          </div>
                        </li>
                        <li className='flex items-center justify-start lg:gap-3 md:gap-2 gap-1 md:text-text-base-base-desktop text-text-base-base-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-300'>
                          <Mejl /> <p>{ld.node.radnaVremenaLokacijaOsnovneInformacije.emailLokacije}</p>
                        </li>
                        {/* <li className='flex items-center justify-start lg:gap-3 md:gap-2 gap-1 md:text-text-base-base-desktop text-text-base-base-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-[400ms]'>
                        <Osoba /> {ld.node.radnaVremenaLokacijaOsnovneInformacije.imeOdgovorneOsobe}
                      </li> */}
                        <li className='flex items-center justify-start lg:gap-3 md:gap-2 gap-1 md:text-text-base-base-desktop text-text-base-base-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-500'>
                          <Telefon /> {ld.node.radnaVremenaLokacijaOsnovneInformacije.kontaktTelefonLokacije}
                        </li>
                      </ul>

                      <p className='max-w-prose lg:-mt--desktop-h3-4---sadrzaj-cta md:-mt--tablet-h3-4---sadrzaj-cta -mt--mobile-h3-4---sadrzaj-cta md:text-text-base-base-desktop text-text-base-base-mobiletablet motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-[600ms] hidden'>
                        {
                          //@ts-ignore
                          ld.node[`radnoVrijeme${l}`]?.[`textBox${l}`] ?? 'Nema unosa na odabranom jeziku'
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
      {jsonLdArr.map((ar, i) => (
        <Script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ar) }}
          id={locationsData[i].node.title}
        />
      ))}
    </section>
  );
}
