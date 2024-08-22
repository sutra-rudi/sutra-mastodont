'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dayjs from 'dayjs';
import React from 'react';
import parse from 'html-react-parser';
interface RadnaVremenaPageContent {
  pageContent: any;
  defaultRadno: any;
  lang: string;
}

const PageContent = ({ pageContent, lang, defaultRadno }: RadnaVremenaPageContent) => {
  const l = getSuffixFromLang(lang);
  const masterField = `radnoVrijeme${l}`;

  const displayField = pageContent[masterField][`textBox${l}`];
  const displayFieldDefault = defaultRadno[masterField][`textBox${l}`];
  const vrijediOdSez = pageContent.sezonskoRadnoVrijemeAktivatorDatuma.vrijediOdSezonskoRadnoVrijeme;
  const vrijediDoSez = pageContent.sezonskoRadnoVrijemeAktivatorDatuma.vrijediDoSezonskoRadnoVrijeme;

  console.log('DEFAULT RADNO', displayFieldDefault);

  return (
    <section className='w-full min-h-dvh px-4'>
      <div className='w-full max-w-[1440px] mx-auto my-0'>
        <div className='w-full mx-auto flex flex-col place-items-center gap-4 py-6'>
          <h1 className='text-3xl font-bold'>Radna vremena prijatelju moj</h1>
          <p className='italic text-xl'>...Đavo ih odnio...</p>
        </div>
        <div className='w-full grid grid-cols-1 place-items-center gap-4 my-12'>
          <h2 className='max-w-prose text-2xl font-semibold'>{displayField ?? 'Nema polja'}</h2>

          <div className=''>
            <p className='underline'>
              Vrijedi od: <span>{dayjs(vrijediOdSez).format('DD.MM.YYYY')}</span> do:{' '}
              {dayjs(vrijediDoSez).format('DD.MM.YYYY')}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full max-w-[1440px] mx-auto my-0'>
        <div className='w-full mx-auto flex flex-col place-items-center gap-4 py-6'>
          <h1 className='text-3xl font-bold'>Radna vremena default prijatelju moj</h1>
          <p className='italic text-xl'>...Đavo ih donio...</p>
        </div>
        <div className='w-full grid grid-cols-1 place-items-center gap-4 my-12'>
          <h2 className='max-w-prose text-2xl font-semibold'>{parse(displayFieldDefault) ?? 'Nema polja'}</h2>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
