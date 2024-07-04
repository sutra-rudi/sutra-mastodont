'use client';

import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import Image from 'next/image';
import parse from 'html-react-parser';
// import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
interface ClientTestimonials {
  pageContent: any;
  lang: any;
}

const TestimonialsSection = ({ pageContent, lang }: ClientTestimonials) => {
  const l = getSuffixFromLang(lang);
  const prepareData = pageContent.map((cont: any) => {
    return {
      introContent: { ...cont.node.iskustvaklijenataUvod },
      mainContent: {
        clientPosition: cont.node[`testimonials${l}`]?.[`pozicijaUkolikoPostoji${l}`],
        clientContent: cont.node[`testimonials${l}`]?.[`tekstTestimoniala${l}`],
      },
    };
  });

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Iskustva klijenata</h2>

      <div className='max-w-[1225px] mx-auto my-8 grid grid-cols-1 gap-6'>
        {prepareData.map((singleExp: any, index: number) => {
          const shorthand = singleExp.introContent;

          return (
            <article
              key={index}
              className='md:gap-8 md:grid md:grid-cols-2 py-2 px-4 bg-almost-white dark:bg-almost-black items-start place-items-center'
            >
              <div className='col-span-1 max-w-[400px]'>
                <div className='flex items-center justify-start gap-8 mb-6'>
                  <div className='font-medium text-almost-black dark:text-almost-white flex place-items-center gap-4'>
                    <picture>
                      <img
                        className='w-10 h-10 rounded-full'
                        src={shorthand.prilozenaSlikaTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                        alt=''
                      />
                    </picture>
                    <p className='text-almost-black dark:text-almost-white'>
                      {singleExp.introContent.imeKlijentaTestimonials ?? 'Nema imena'}
                    </p>
                  </div>
                  <p className='bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded'>
                    {shorthand.ocijenaIliBrojZvjezdicaTestimonials ?? 'Nema ocjene'}
                  </p>
                </div>
                <ul className='space-y-4 text-sm text-almost-black dark:text-almost-white'>
                  <li className='flex items-center'>
                    <svg
                      className='w-3 h-3 me-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M4 15V9m4 6V9m4 6V9m4 6V9M2 16h16M1 19h18M2 7v1h16V7l-8-6-8 6Z'
                      />
                    </svg>
                    <p className='text-almost-black dark:text-almost-white'>
                      {singleExp.introContent.imeTvrtkeZemljaTestimonials ?? 'Nema tvrtke'}
                    </p>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='w-3 h-3 me-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 19'
                    >
                      <path d='M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z' />
                      <path d='M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z' />
                    </svg>
                    <p className='text-almost-black dark:text-almost-white'>
                      {singleExp.mainContent.clientPosition ?? 'Nema pozicije'}
                    </p>
                  </li>
                  <li className='flex items-center'>
                    <picture>
                      <img
                        src={shorthand.logotipTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                        alt=''
                        className='w-1/3 h-1/3 rounded-full object-cover object-center aspect-square block'
                      />
                    </picture>
                  </li>
                </ul>
              </div>
              <div className='col-span-1 w-full mt-6 md:mt-0'>
                <div className='flex items-start mb-5'>
                  <div className='pe-4'>
                    <footer>
                      <p className='mb-2 text-sm text-almost-black dark:text-almost-white'>
                        Reviewed: <time className='2022-01-20 19:00'>January 20, 2022</time>
                      </p>
                    </footer>
                  </div>
                </div>
                <div className='mb-2 text-almost-black dark:text-almost-white prose'>
                  {singleExp.mainContent.clientContent ? parse(singleExp.mainContent.clientContent) : 'Nema sadržaja'}
                </div>

                <aside className='flex items-center mt-3'>
                  {shorthand.vanjskaPoveznicaTestimonials && (
                    <a
                      className='inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
                      href={shorthand.vanjskaPoveznicaTestimonials}
                    >
                      Vanjski link
                    </a>
                  )}

                  {shorthand.vanjskiLinkNaVideoYoutube && (
                    <a
                      className='inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5'
                      href={shorthand.vanjskiLinkNaVideoYoutube}
                    >
                      Youtube link
                    </a>
                  )}
                </aside>
              </div>
              <div className='col-span-2'>
                {shorthand.uploadVideo && (
                  <ReactPlayer
                    url={shorthand.uploadVideo.node.mediaItemUrl}
                    width={'100%'}
                    height={'100%'}
                    playsinline
                    controls
                  />
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
