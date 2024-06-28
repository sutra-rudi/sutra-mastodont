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

      <div className='flex gap-4 place-items-start justify-center py-4'>
        {prepareData.map((singleExp: any, index: number) => {
          const shorthand = singleExp.introContent;
          return (
            <article key={index} className='border border-blue-500 w-full max-w-[500px]'>
              <div className='flex place-items-center'>
                <div className='py-2'>
                  <h3>{singleExp.introContent.imeKlijentaTestimonials ?? 'Nema imena'}</h3>
                  <h5>{singleExp.introContent.imeTvrtkeZemljaTestimonials ?? 'Nema tvrtke'}</h5>
                  <p>Pozicija: {singleExp.mainContent.clientPosition ?? 'Nema pozicije'}</p>
                  <div className=''>
                    <span>Ocjena: {shorthand.ocijenaIliBrojZvjezdicaTestimonials ?? 'Nema ocjene'}</span>
                  </div>
                  <div className=''>
                    <h4>LOGO</h4>
                    <div className='relative  w-[50px] h-[50px]'>
                      <Image
                        src={shorthand.logotipTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                        alt='ciaos'
                        fill
                      />
                    </div>
                  </div>
                </div>

                <div className='relative w-full h-[200px] rounded-full max-w-[200px]'>
                  <Image
                    src={shorthand.prilozenaSlikaTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                    alt='slika'
                    fill
                    className='object-center object-cover block aspect-square rounded-full'
                  />
                </div>
              </div>

              <div className='py-2'>
                {singleExp.mainContent.clientContent ? parse(singleExp.mainContent.clientContent) : 'Nema sadržaja'}
              </div>

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

              <div className='flex justify-between py-2'>
                {shorthand.vanjskaPoveznicaTestimonials && (
                  <a href={shorthand.vanjskaPoveznicaTestimonials}>Vanjski link</a>
                )}
                {shorthand.vanjskiLinkNaVideoYoutube && <a href={shorthand.vanjskiLinkNaVideoYoutube}>Youtube link</a>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
