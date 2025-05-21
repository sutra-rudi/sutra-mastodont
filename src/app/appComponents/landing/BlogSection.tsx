'use client';

import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import parse from 'html-react-parser';
import slugify from 'slugify';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

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

  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='max-w-[1440px] px-4 mx-auto'>
        <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
          Blog
        </h2>
        <div className='lg:flex hidden flex-wrap items-start justify-center gap-4'>
          {blogList.map((blog) => {
            const isEngMistake = currentLang === UserLanguage.eng;
            return (
              blog.node.introBlog.istaknutoNaNaslovnici &&
              blog.node.introBlog.statusBloga && (
                <a
                  key={blog.node.databaseId}
                  href={`/${currentLang}/blog/${slugify(
                    blog.node.sadrzajHrFields.naslovSadrzajHr + `-${blog.node.databaseId}`,
                    {
                      ...slugifyOptions,
                    }
                  )}`}
                >
                  <article className='p-4 max-w-[350px]'>
                    <div className='h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden'>
                      <picture>
                        <img
                          className='lg:h-[230px] md:h-[215px] h-[200px] w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 aspect-auto'
                          src={
                            blog.node.introBlog.naslovnaSlika
                              ? blog.node.introBlog.naslovnaSlika.node.sourceUrl
                              : 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                          }
                          alt='blog'
                        />
                      </picture>
                      <div className='p-6'>
                        <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                          {blog.node.introBlog.kategorija.edges[0].node.informacijeKategorije.prijevodi[
                            `imeKategorije${l}`
                          ] ?? blog.node.introBlog.kategorija.edges[0].node.name}
                        </h2>
                        <h1 className='title-font text-lg font-medium text-gray-600 mb-3'>
                          {
                            blog.node[`sadrzaj${l}Fields`]?.[
                              isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`
                            ]
                          }
                        </h1>

                        {blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`] ? (
                          <div className='line-clamp-4 leading-relaxed mb-3'>
                            {parse(blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`])}
                          </div>
                        ) : (
                          <div className='line-clamp-4 leading-relaxed mb-3'>
                            Nema introa
                            {/* {parse(blog.node[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`])} */}
                          </div>
                        )}
                        <div className='flex items-center flex-wrap'>
                          <button className='bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg'>
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              )
            );
          })}
        </div>

        <div ref={emblaRef} className='embla lg:hidden w-full mx-auto'>
          <div className='embla__container w-full flex items-start gap-4'>
            {blogList.map((blog) => {
              const isEngMistake = currentLang === UserLanguage.eng;
              return (
                blog.node.introBlog.istaknutoNaNaslovnici &&
                blog.node.introBlog.statusBloga && (
                  <a
                    className='embla__slide_blog_gallery'
                    key={blog.node.databaseId}
                    href={`/${currentLang}/blog/${slugify(
                      blog.node.sadrzajHrFields.naslovSadrzajHr + `-${blog.node.databaseId}`,
                      {
                        ...slugifyOptions,
                      }
                    )}`}
                  >
                    <article className='p-4 text-left'>
                      <div className='h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden'>
                        <picture>
                          <img
                            className='lg:h-[230px] md:h-[215px] h-[200px] w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 aspect-auto'
                            src={
                              blog.node.introBlog.naslovnaSlika
                                ? blog.node.introBlog.naslovnaSlika.node.sourceUrl
                                : 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                            }
                            alt='blog'
                          />
                        </picture>
                        <div className='p-6'>
                          <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                            {
                              blog.node.introBlog.kategorija.edges[0].node.informacijeKategorije.prijevodi[
                                `imeKategorije${l}`
                              ]
                            }
                          </h2>
                          <h1 className='title-font text-lg font-medium text-gray-600 mb-3'>
                            {
                              blog.node[`sadrzaj${l}Fields`]?.[
                                isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`
                              ]
                            }
                          </h1>

                          {blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`] ? (
                            <div className='line-clamp-4 leading-relaxed mb-3'>
                              {parse(blog.node[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`])}
                            </div>
                          ) : (
                            <div className='line-clamp-4 leading-relaxed mb-3'>
                              {/* {parse(blog.node[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`])} */}
                              Nema introa
                            </div>
                          )}
                          <div className='flex items-center flex-wrap'>
                            <button className='bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg'>
                              Learn more
                            </button>
                          </div>
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
