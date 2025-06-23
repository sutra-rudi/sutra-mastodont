'use client';

import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import parse from 'html-react-parser';
import slugify from 'slugify';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import { usePathname } from 'next/navigation';
import { useIntersectionObserver } from '@uidotdev/usehooks';

interface BlogSection {
  currentLang: string;
  blogList: any[];
}

export default function BlogSection({ currentLang, blogList }: BlogSection) {
  const l = getSuffixFromLang(currentLang);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

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

  const t = slugify(findGeneralTranslation('Blog', currentLang, generalTranslations), { ...slugifyOptions });
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
    <section id='blog' ref={ref} className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='max-w-[1440px] px-4 mx-auto'>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode text-center'>
          {findGeneralTranslation('Blog', currentLang, generalTranslations)}
        </h2>

        <div className='lg:flex hidden flex-wrap items-start justify-center gap-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
          {blogList.map((blog) => {
            const isEngMistake = currentLang === UserLanguage.eng;
            return (
              blog.node.introBlog.istaknutoNaNaslovnici &&
              blog.node.introBlog.statusBloga && (
                <a
                  key={blog.node.databaseId}
                  data-gtm={slugify(`kartica click blog`, {
                    ...slugifyOptions,
                  })}
                  href={`/${currentLang}/blog/${slugify(
                    blog.node.sadrzajHrFields.naslovSadrzajHr + `-${blog.node.databaseId}`,
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
                          className='object-cover object-center block aspect-auto w-full lg:h-[305px] md:h-[270px] h-[225px] transition-all ease-out duration-[7000ms] group-hover:scale-125'
                          src={
                            blog.node.introBlog.naslovnaSlika
                              ? blog.node.introBlog.naslovnaSlika.node.sourceUrl
                              : 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                          }
                          alt='blog'
                        />
                      </picture>
                    </div>

                    <div className='px-4 flex-col flex'>
                      <h2 className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode mt-3 block relative motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                        {blog.node.introBlog.kategorija.edges[0].node.informacijeKategorije.prijevodi[
                          `imeKategorije${l}`
                        ] ?? blog.node.introBlog.kategorija.edges[0].node.name}
                      </h2>
                      <h1 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:-mt--desktop-h3-4---naslov-nadnaslov md:-mt--tablet-h3-4---naslov-nadnaslov -mt--mobile-h3-4---naslov-nadnaslov block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                        {
                          blog.node[`sadrzaj${l}Fields`]?.[
                            isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`
                          ]
                        }
                      </h1>

                      {blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`] ? (
                        <div className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov line-clamp-2 text-balance text-ellipsis w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                          {parse(blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`])}
                        </div>
                      ) : (
                        <div className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov line-clamp-2 text-balance text-ellipsis w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                          Nema introa
                        </div>
                      )}

                      <div className='w-full flex items-center justify-end'>
                        <button className='w-max max-w-[180px] lg:-mt--desktop-h3-4---sadrzaj-cta md:-mt--tablet-h3-4---sadrzaj-cta -mt--mobile-h3-4---sadrzaj-cta flex items-center justify-end bg-transparent text-primarna-tamna  lg:text-button-desktop md:text-button-tablet text-button-mobile md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:text-accent-boja group-hover:text-accent-boja active:text-almost-black'>
                          <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                            Button text
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
                    </div>
                  </article>
                </a>
              )
            );
          })}
        </div>

        <div
          ref={emblaRef}
          className='embla lg:hidden w-full mx-auto lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'
        >
          <div className='embla__container w-full flex items-start gap-4'>
            {blogList.map((blog) => {
              const isEngMistake = currentLang === UserLanguage.eng;
              return (
                blog.node.introBlog.istaknutoNaNaslovnici &&
                blog.node.introBlog.statusBloga && (
                  <a
                    className='embla__slide_blog_gallery block max-w-[433px] bg-almost-white group rounded-lg shadow-md'
                    key={blog.node.databaseId}
                    data-gtm={slugify(`kartica click blog`, {
                      ...slugifyOptions,
                    })}
                    href={`/${currentLang}/blog/${slugify(
                      blog.node.sadrzajHrFields.naslovSadrzajHr + `-${blog.node.databaseId}`,
                      {
                        ...slugifyOptions,
                      }
                    )}`}
                  >
                    <article className='pb-6'>
                      <div className='overflow-hidden rounded-t-lg'>
                        <picture>
                          <img
                            className='object-cover object-center block aspect-auto w-full lg:h-[305px] md:h-[270px] h-[225px] transition-all ease-out duration-[7000ms] group-hover:scale-125'
                            src={
                              blog.node.introBlog.naslovnaSlika
                                ? blog.node.introBlog.naslovnaSlika.node.sourceUrl
                                : 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                            }
                            alt='blog'
                          />
                        </picture>
                      </div>
                      <div className='px-4 flex-col flex text-left'>
                        <h2 className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode mt-3 block relative motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                          {
                            blog.node.introBlog.kategorija.edges[0].node.informacijeKategorije.prijevodi[
                              `imeKategorije${l}`
                            ]
                          }
                        </h2>
                        <h1 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:-mt--desktop-h3-4---naslov-nadnaslov md:-mt--tablet-h3-4---naslov-nadnaslov -mt--mobile-h3-4---naslov-nadnaslov block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                          {
                            blog.node[`sadrzaj${l}Fields`]?.[
                              isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`
                            ]
                          }
                        </h1>

                        {blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`] ? (
                          <div className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov line-clamp-2 text-balance text-ellipsis w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                            {parse(blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`])}
                          </div>
                        ) : (
                          <div className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov line-clamp-2 text-balance text-ellipsis w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up-sm motion-delay-500'>
                            Nema introa
                          </div>
                        )}
                        <div className='w-full flex items-center justify-end'>
                          <button className='w-max max-w-[180px] lg:-mt--desktop-h3-4---sadrzaj-cta md:-mt--tablet-h3-4---sadrzaj-cta -mt--mobile-h3-4---sadrzaj-cta flex items-center justify-end bg-transparent text-primarna-tamna  lg:text-button-desktop md:text-button-tablet text-button-mobile md:gap-[13.3px] gap-[11.6px] transition-all ease-in-out duration-300 group hover:text-accent-boja group-hover:text-accent-boja active:text-almost-black'>
                            <span className='motion-ease-spring-bouncy group-hover:motion-preset-slide-up'>
                              Button text
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
                      </div>
                    </article>
                  </a>
                )
              );
            })}
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
              <div className='embla__dots lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl mx-auto w-max'>
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
      </div>
    </section>
  );
}
