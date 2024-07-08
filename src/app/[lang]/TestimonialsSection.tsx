'use client';

import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

import parse from 'html-react-parser';

import dynamic from 'next/dynamic';
import { IoIosStarOutline as StarIcon } from 'react-icons/io';
import {
  BsFillBuildingsFill as CompanyIcon,
  BsPersonFillGear as RoleIcon,
  BsFillPersonVcardFill as UserIcon,
} from 'react-icons/bs';
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

  console.log('PAGI CONT', pageContent);

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Iskustva klijenata</h2>

      <div className='max-w-[1225px] mx-auto my-8 grid grid-cols-1 gap-6'>
        {prepareData.map((singleExp: any, index: number) => {
          const shorthand = singleExp.introContent;

          console.log('single', singleExp);

          return (
            <article key={index}>
              <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                <svg aria-hidden='true' width='105' height='78' className='absolute top-16 left-6 fill-slate-100'>
                  <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z'></path>
                </svg>
                <blockquote className='relative flex items-center gap-4'>
                  <p className='text-lg tracking-tight text-slate-900 prose line-clamp-6'>
                    {singleExp.mainContent.clientContent ? parse(singleExp.mainContent.clientContent) : 'Nema sadržaja'}
                  </p>
                  {singleExp.introContent.uploadVideo && (
                    <ReactPlayer url={singleExp.introContent.uploadVideo.node.mediaItemUrl} controls playsinline pip />
                  )}
                </blockquote>
                <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                  <div className='flex gap-4 items-center'>
                    <div className='overflow-hidden rounded-full bg-slate-50'>
                      <picture>
                        <img
                          className='h-24 w-24 object-cover rounded-full'
                          src={shorthand.prilozenaSlikaTestimonials.node.sourceUrl ?? 'https://placehold.co/400.png'}
                          alt=''
                        />
                      </picture>
                    </div>

                    <div className='grid grid-cols-1 gap-2'>
                      <div className='flex items-center gap-2 text-base text-slate-900'>
                        <h2 className='flex items-center gap-2'>
                          <UserIcon /> {singleExp.introContent.imeKlijentaTestimonials ?? 'Nema imena'}
                        </h2>
                      </div>
                      <div className='grid grid-cols-1 text-sm gap-2 text-slate-500'>
                        <p className='flex items-center gap-2'>
                          <RoleIcon /> {singleExp.mainContent.clientPosition ?? 'Nema pozicije'}
                        </p>
                        <p className='flex items-center gap-2'>
                          <CompanyIcon /> {singleExp.introContent.imeTvrtkeZemljaTestimonials ?? 'Nema imena tvrtke'}
                        </p>
                      </div>

                      <div className='flex items-center gap-2'>
                        <StarIcon /> <span>{singleExp.introContent.ocijenaIliBrojZvjezdicaTestimonials}</span>
                      </div>
                    </div>
                  </div>

                  <div className='flex prose gap-4'>
                    <a href={singleExp.introContent.vanjskaPoveznicaTestimonials}>Procitaj punu recenziju</a>
                    <a href={singleExp.introContent.vanjskiLinkNaVideoYoutube}>Video link</a>
                  </div>
                </figcaption>
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
