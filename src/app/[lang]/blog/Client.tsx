'use client';

import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import parse from 'html-react-parser';
import slugify from 'slugify';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { MdOutlineClose as CloseIcon } from 'react-icons/md';

import categories from '../../staticData/postCategories.json';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import { usePathname, useRouter } from 'next/navigation';
import Loading from './loading';

interface Client {
  blogList: any;
  currentLang: any;
  param: string | string[] | null;
}

export default function Client({ blogList, currentLang, param }: Client) {
  const l = getSuffixFromLang(currentLang);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const [catName, setCatName] = React.useState<string>('Sve kategorije');
  const [renderBlogs, setRenderBlogs] = React.useState<any[]>([]);
  const [hasParam, setHasParam] = React.useState<string | string[] | null>(param);

  const r = useRouter();
  const pName = usePathname();
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

  function filterBlogsByCat(cat: any) {
    const arr = blogList.filter((blog: any) => {
      return blog.node.introBlog.kategorija.edges[0].node.name === cat;
    });

    setRenderBlogs(arr);
  }

  React.useEffect(() => {
    if (!hasParam) {
      setRenderBlogs(blogList);
      return;
    }

    const filtered = blogList.filter((blog: any) => {
      const edges = blog.node.introBlog.oznaka?.edges;
      if (!edges || edges.length === 0) return false;

      // Provjeri postoji li barem jedan edge koji se slaže s param
      return edges.some((edge: any) => {
        const name = edge.node.name.toLowerCase().replace('#', '');
        return name === param;
      });
    });

    if (filtered.length > 0) {
      setRenderBlogs(filtered);
    } else {
      setRenderBlogs(blogList);
    }
  }, [hasParam, param, blogList]);

  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='max-w-[1440px] px-4 mx-auto'>
        {hasParam && (
          <div
            title='Click to close'
            className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile font-bold text-text-light-mode dark:text-text-dark-mode w-full text-center mb-desktop-naslov-nadnaslov border max-w-max mx-auto border-text-light-mode flex items-center justify-start gap-2 py-1 px-2 rounded-lg transition-all ease-in-out duration-300 cursor-pointer hover:bg-text-light-mode hover:text-text-dark-mode'
          >
            <span className='block relative'>#{param}</span>
            <CloseIcon
              onClick={() => {
                setHasParam(null);
                r.replace(pName);
              }}
              className='text-inherit lg:text-h4-desktop md:text-h4-tablet text-h4-mobile cursor-pointer'
            />
          </div>
        )}
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-bold text-dark dark:text-white  w-full text-center '>
          {catName !== 'Sve kategorije'
            ? `Blog - ${
                //@ts-ignore
                categories.data.categories.edges.find((c) => c.node.name === catName)?.node.informacijeKategorije[
                  `imeKategorije${l}`
                ]
              }`
            : 'Blog'}
        </h2>

        <div
          className={`container mx-auto flex items-center justify-center gap-4 flex-wrap lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl ${
            hasParam && 'opacity-20 cursor-not-allowed pointer-events-none select-none'
          }`}
        >
          <button
            className={`${
              catName === 'Sve kategorije' ? 'bg-accent-boja' : 'bg-sekundarna-tamna'
            } text-almost-white block py-4 lg:text-button-desktop md:text-button-tablet text-button-mobile cursor-pointer transition-all ease-in-out relative group
                    
                    before:absolute before:inset-0 before:bg-primarna-svijetla before:w-full before:h-full before:transition-all before:ease-in-out before:translate-y-full hover:before:translate-y-0 before:duration-300 before:cursor-pointer
                    
                    after:absolute after:inset-0 after:bg-accent-boja after:w-full after:h-full after:transition-all after:ease-in-out after:translate-y-full hover:after:translate-y-0 after:delay-[200ms] after:duration-300
                    after:cursor-pointer
                    overflow-hidden px-4`}
            onClick={() => {
              setCatName('Sve kategorije');
              setRenderBlogs(blogList);
            }}
            disabled={hasParam !== null}
          >
            <span className='relative z-20 group-hover:motion-preset-slide-up motion-ease-spring-bouncy'>
              {findGeneralTranslation('Sve kategorije', currentLang, generalTranslations)}
            </span>
          </button>
          {categories.data.categories.edges
            .filter((ct) => ct.node.informacijeKategorije.imeKategorijeHr)
            .map((ct) => {
              return (
                <button
                  className={`${
                    catName === ct.node.name ? 'bg-accent-boja' : 'bg-sekundarna-tamna'
                  } text-almost-white block py-4 lg:text-button-desktop md:text-button-tablet text-button-mobile cursor-pointer transition-all ease-in-out relative group
                    
                    before:absolute before:inset-0 before:bg-primarna-svijetla before:w-full before:h-full before:transition-all before:ease-in-out before:translate-y-full hover:before:translate-y-0 before:duration-300 before:cursor-pointer
                    
                    after:absolute after:inset-0 after:bg-accent-boja after:w-full after:h-full after:transition-all after:ease-in-out after:translate-y-full hover:after:translate-y-0 after:delay-[200ms] after:duration-300
                  after:cursor-pointer                    
                    overflow-hidden px-4`}
                  onClick={() => {
                    setCatName(ct.node.name);
                    filterBlogsByCat(ct.node.name);
                  }}
                  key={ct.node.name}
                  disabled={hasParam !== null}
                >
                  <span className='relative z-20 group-hover:motion-preset-slide-up motion-ease-spring-bouncy cursor-pointer'>
                    {/* @ts-ignore */}
                    {ct.node.informacijeKategorije[`imeKategorije${l}`]}
                  </span>
                </button>
              );
            })}
        </div>
        <div className='lg:flex hidden flex-wrap items-start justify-center gap-4 lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl relative'>
          {renderBlogs.length > 0 ? (
            renderBlogs.map((blog: any, i) => {
              const isEngMistake = currentLang === UserLanguage.eng;

              return (
                // blog.node.introBlog.istaknutoNaNaslovnici &&
                blog.node.introBlog.statusBloga && (
                  <a
                    style={{
                      animationDelay: `${i * 0.15}s`,
                    }}
                    key={blog.node.databaseId}
                    href={`/${currentLang}/blog/${slugify(
                      blog.node.sadrzajHrFields.naslovSadrzajHr + `-${blog.node.databaseId}`,
                      {
                        ...slugifyOptions,
                      }
                    )}`}
                    className='block max-w-[433px] bg-almost-white group rounded-lg shadow-md motion-preset-slide-down-sm motion-ease-spring-smooth'
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
                            {/* {parse(blog.node[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`])} */}
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
            })
          ) : (
            <Loading />
          )}
        </div>

        <div
          ref={emblaRef}
          className='embla lg:hidden w-full mx-auto lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl relative'
        >
          <div className='embla__container w-full flex items-start gap-4'>
            {blogList.map((blog: any, i: number) => {
              const isEngMistake = currentLang === UserLanguage.eng;
              return (
                blog.node.introBlog.istaknutoNaNaslovnici &&
                blog.node.introBlog.statusBloga && (
                  <a
                    className='embla__slide_blog_gallery block max-w-[433px] bg-almost-white group rounded-lg shadow-md'
                    key={blog.node.databaseId}
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
