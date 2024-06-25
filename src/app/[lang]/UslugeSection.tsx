'use client';

import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import Image from 'next/image';

interface UslugeSectionInterface {
  pageContent: any;
  lang: any;
}

const UslugeSection = ({ pageContent, lang }: UslugeSectionInterface) => {
  console.log('PAGI CONTENT USLUGE', pageContent);

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Usluge</h2>

      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4 place-items-center justify-center'>
        {pageContent.map((content: any) => {
          const contentShorthand = content.node;

          const atributesShorthandObj =
            contentShorthand[`atributi${getSuffixFromLang(lang)}`]?.[`atributi${getSuffixFromLang(lang)}`];

          const thumbImageShorthandObj = contentShorthand.modulBazeTekstovaUvod.slikaDva.node;

          const titleShorthandObj =
            contentShorthand[`modulBazeTekstova2Kolumne${getSuffixFromLang(lang)}`]?.[
              `naslovNadnaslov2KolumneTeksta${getSuffixFromLang(lang)}`
            ].naslovIPodnaslovDvaPolja;

          return (
            <article key={contentShorthand.id} className='outline outline-1 outline-blue-300'>
              <div className='relative w-full h-32'>
                <Image
                  src={thumbImageShorthandObj.sourceUrl}
                  alt='service image'
                  fill
                  className='object-center object-cover aspect-video block'
                />
              </div>
              <div className='py-2 grid grid-cols-1 gap-2 px-4'>
                <h3 className='text-3xl font-medium'>{titleShorthandObj.naslovBazaTekstova}</h3>
                <p className='max-w-[25ch] text-balance line-clamp-5'>
                  {titleShorthandObj.nadnaslovPodnaslovBazaTekstova}
                </p>
              </div>

              <div className='grid grid-cols-1 items-start gap-1 py-2 px-4 '>
                <p>Naziv atributa: {atributesShorthandObj.nazivAtributa ?? 'Nema unosa'}</p>
                <p>atribut 1: {atributesShorthandObj.vrijednostAtributa1 ?? 'Nema unosa'}</p>
                <p>atribut 2: {atributesShorthandObj.vrijednostAtributa2 ?? 'Nema unosa'}</p>
                <p>atribut 3: {atributesShorthandObj.vrijednostAtributa3 ?? 'Nema unosa'}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default UslugeSection;
