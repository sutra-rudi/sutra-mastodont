'use client';

import React from 'react';
import parse from 'html-react-parser';
import useEmblaCarousel from 'embla-carousel-react';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';

interface ClientTestimonialsProps {
  currentLang: string;
  dataset: any[];
  arrows: {
    kruznaLeftLight: string;
    kruznaRightLight: string;
  };
}

export default function ClientTestimonials({ dataset, currentLang, arrows }: ClientTestimonialsProps) {
  const l = getSuffixFromLang(currentLang);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  // Stanja za modal
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalItem, setModalItem] = React.useState<any>(null);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
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

  // Otvaranje/zatvaranje modala
  const openModal = (item: any) => {
    setModalItem(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalItem(null);
  };

  React.useEffect(() => {
    isModalOpen
      ? document.documentElement.classList.add('overflow-hidden')
      : document.documentElement.classList.remove('overflow-hidden');
  }, [isModalOpen]);
  console.log('DATA', modalItem);
  return (
    <>
      <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl px-4'>
        <div className='container mx-auto'>
          {/* Strelice za desktop */}
          <div className='w-full relative md:flex hidden gap-4 items-center justify-end lg:-mb--desktop---l md:-mb--tablet---l -mb--mobile---l'>
            <button onClick={scrollPrev} aria-label='Previous'>
              <picture>
                <img src={arrows.kruznaLeftLight} alt='Previous' />
              </picture>
            </button>
            <button onClick={scrollNext} aria-label='Next'>
              <picture>
                <img src={arrows.kruznaRightLight} alt='Next' />
              </picture>
            </button>
          </div>

          {/* Carousel */}
          <div ref={emblaRef} className='embla w-full'>
            <div className='embla__container flex items-start w-full mx-auto max-w-[1440px]'>
              {dataset.map((item) => (
                <div
                  key={item.node.id}
                  onClick={() => openModal(item.node)}
                  className='cursor-pointer md:w-1/2 lg:w-1/3 rounded-lg border select-none min-w-0 w-full shrink-0 lg:mx-6 md:mx-5 mx-4 hover:shadow-lg transition-shadow'
                >
                  <div className='flex justify-center items-start flex-col p-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='30'
                      height='30'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='icon icon-tabler icon-tabler-quote rotate-180 text-primarna-svijetla'
                      viewBox='0 0 24 24'
                    >
                      <path stroke='none' d='M0 0h24v24H0z'></path>
                      <path d='M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5'></path>
                    </svg>

                    <div className='flex justify-center items-start flex-col text-left text-text-light-mode'>
                      {item.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`] ? (
                        <div className='italic text-sm md:text-base line-clamp-3 text-ellipsis'>
                          {item.node[`testimonials${l}`][`tekstTestimoniala${l}`].includes('<')
                            ? parse(item.node[`testimonials${l}`][`tekstTestimoniala${l}`])
                            : item.node[`testimonials${l}`][`tekstTestimoniala${l}`]}
                        </div>
                      ) : (
                        <p>Nema recenzije!</p>
                      )}
                      <div>
                        <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:-mt--desktop-h3-4---naslov-tekst md:-mt--tablet-h3-4---naslov-tekst -mt--mobile-h3-4---naslov-tekst text-heading-color-light-mode'>
                          {item.node.iskustvaklijenataUvod.imeKlijentaTestimonials}
                        </h4>
                        {item.node[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`] && (
                          <p className='md:text-text-base-small-desktop text-text-base-small-mobiletablet text-left text-text-light-mode mt-1'>
                            {item.node[`testimonials${l}`][`pozicijaUkolikoPostoji${l}`]}
                          </p>
                        )}
                      </div>

                      {item.node.iskustvaklijenataUvod.vanjskaPoveznicaTestimonials && (
                        <div className='mt-2'>
                          <a
                            href={item.node.iskustvaklijenataUvod.vanjskaPoveznicaTestimonials}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-text-light-mode transition-all ease-in-out hover:text-accent-boja text-text-base-small-desktop'
                          >
                            {`${findGeneralTranslation('Izvor', currentLang, generalTranslations)}: ${
                              item.node.iskustvaklijenataUvod.vanjskaPoveznicaTestimonials
                            }`}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='bg-primarna-svijetla p-0.5 rounded-b-lg'></div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots (pagination) sa sliding window pristupom */}
          {(() => {
            const maxDots = 5;
            const total = scrollSnaps.length;
            let dotIndices: number[] = [];
            if (total <= maxDots) {
              dotIndices = scrollSnaps.map((_, index) => index);
            } else {
              const half = Math.floor(maxDots / 2);
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

      {/* Modal overlay */}
      {isModalOpen && modalItem && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center motion-preset-fade motion-ease-spring-smooth backdrop-blur-sm'
          onClick={closeModal}
        >
          {/* Tamna, bluranna pozadina */}
          <div className='absolute inset-0 bg-black bg-opacity-50' />

          {/* Modal sadržaj */}
          <div
            className='relative bg-white max-w-3xl w-full mx-4 p-6 rounded-lg shadow-xl overflow-auto max-h-[90vh] motion-preset-slide-down motion-ease-spring-smooth'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-gray-600 hover:text-gray-800'
              aria-label='Close'
            >
              ✕
            </button>

            <div className='flex flex-col space-y-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='icon icon-tabler icon-tabler-quote rotate-180 text-primarna-svijetla'
                viewBox='0 0 24 24'
              >
                <path stroke='none' d='M0 0h24v24H0z'></path>
                <path d='M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5'></path>
              </svg>

              <div className='prose max-w-full'>
                {modalItem[`testimonials${l}`]?.[`tekstTestimoniala${l}`]?.includes('<') ? (
                  parse(modalItem[`testimonials${l}`][`tekstTestimoniala${l}`])
                ) : (
                  <p>{modalItem[`testimonials${l}`][`tekstTestimoniala${l}`]}</p>
                )}
              </div>

              <h3 className='text-xl font-semibold'>{modalItem.iskustvaklijenataUvod.imeKlijentaTestimonials}</h3>

              {modalItem[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`] && (
                <p className='text-sm text-gray-500'>{modalItem[`testimonials${l}`][`pozicijaUkolikoPostoji${l}`]}</p>
              )}

              {modalItem.iskustvaklijenataUvod.vanjskaPoveznicaTestimonials && (
                <a
                  href={modalItem.iskustvaklijenataUvod.vanjskaPoveznicaTestimonials}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  {`${findGeneralTranslation('Poveznica', currentLang, generalTranslations)}: ${
                    modalItem.iskustvaklijenataUvod.vanjskaPoveznicaTestimonials
                  }`}
                </a>
              )}

              {modalItem.iskustvaklijenataUvod.kategorijaNaKojuSeOdnosiTestimonial && (
                <div>
                  {`Kategorija/e: ${modalItem.iskustvaklijenataUvod.kategorijaNaKojuSeOdnosiTestimonial.edges.map(
                    (e: any) => e.node.name
                  )}`}
                </div>
              )}

              {modalItem.iskustvaklijenataUvod.izvorRecenzije && (
                <p>{`${findGeneralTranslation('Izvor', currentLang, generalTranslations)}: ${
                  modalItem.iskustvaklijenataUvod.izvorRecenzije
                }`}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
