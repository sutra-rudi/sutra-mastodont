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

      <div className='flex gap-4 place-items-start justify-center py-4 '>
        {prepareData.map((singleExp: any, index: number) => {
          const shorthand = singleExp.introContent;
          return (
            <article key={singleExp.id}>
              <figure className='flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700 '>
                <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 prose'>
                  <span>Ocjena: {shorthand.ocijenaIliBrojZvjezdicaTestimonials ?? 'Nema ocjene'}</span>
                  {singleExp.mainContent.clientContent ? parse(singleExp.mainContent.clientContent) : 'Nema sadržaja'}
                </blockquote>
                <figcaption className='flex justify-center items-center space-x-3'>
                  <picture>
                    <img
                      className='w-9 h-9 rounded-full'
                      src={shorthand.prilozenaSlikaTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                      alt='profile picture'
                    />
                  </picture>
                  <div className='space-y-0.5 font-medium dark:text-white text-left'>
                    <h3>{singleExp.introContent.imeKlijentaTestimonials ?? 'Nema imena'}</h3>
                    <h5>{singleExp.introContent.imeTvrtkeZemljaTestimonials ?? 'Nema tvrtke'}</h5>
                    <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
                      <p>Pozicija: {singleExp.mainContent.clientPosition ?? 'Nema pozicije'}</p>
                    </div>
                    <div className='relative  w-[50px] h-[50px]'>
                      <Image
                        src={shorthand.logotipTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                        alt='ciaos'
                        fill
                      />
                    </div>
                  </div>
                </figcaption>

                <div className='py-2'>
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

                <div className='flex justify-between py-2 prose prose-emerald'>
                  {shorthand.vanjskaPoveznicaTestimonials && (
                    <a href={shorthand.vanjskaPoveznicaTestimonials}>Vanjski link</a>
                  )}
                  {shorthand.vanjskiLinkNaVideoYoutube && (
                    <a href={shorthand.vanjskiLinkNaVideoYoutube}>Youtube link</a>
                  )}
                </div>
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
