'use client';

interface ClientTestimonials {
  currentLang: string;
  dataset: any;
}
import parse from 'html-react-parser';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import useEmblaCarousel from 'embla-carousel-react';

export default function ClientTestimonials({ dataset, currentLang }: ClientTestimonials) {
  //   console.log('DATASET', dataset);
  const l = getSuffixFromLang(currentLang);
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl px-4'>
      <div ref={emblaRef} className='embla w-full'>
        <div className='embla__container flex items-start gap-6 w-full mx-auto max-w-[1440px]'>
          {dataset.map((item: any) => {
            return (
              <div
                key={item.node.id}
                className='w-full md:w-1/2 lg:w-1/3 hover:shadow-indigo-300 hover:shadow-lg rounded-lg border embla__slide_blog_gallery select-none'
              >
                <div className='flex justify-center items-start flex-col p-5 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='icon icon-tabler icon-tabler-quote rotate-180 text-sky-500'
                    viewBox='0 0 24 24'
                  >
                    <path stroke='none' d='M0 0h24v24H0z'></path>
                    <path d='M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5'></path>
                  </svg>

                  <div className='flex justify-center items-start flex-col text-left gap-5'>
                    {item.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`] ? (
                      <div className='italic text-sm md:text-base line-clamp-3 text-ellipsis'>
                        {/* {parse()} */}
                        {item.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`].includes('<')
                          ? parse(item.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`])
                          : ''}
                      </div>
                    ) : (
                      <p>Nema recenzije!</p>
                    )}
                    <div>
                      <h3 className='text-xl md:text-2xl font-semibold'>
                        {item.node.iskustvaklijenataUvod.imeKlijentaTestimonials}
                      </h3>
                      {item.node[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`] && (
                        <p className='md:text-text-base-small-desktop text-text-base-small-mobiletablet text-left text-almost-black'>
                          {item.node[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className='bg-sky-500 p-0.5 rounded-b-lg'></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
