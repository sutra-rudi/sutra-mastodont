'use client';

import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { generalTranslations } from '@/app/lib/generalTranslations';
import React from 'react';

interface JobOpeningSection {
  currentLang: string;
  dataset: any[];
}

export default function JobOpeningSection({ currentLang, dataset }: JobOpeningSection) {
  console.log('DATASET', dataset);

  const l = getSuffixFromLang(currentLang);

  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
          {findGeneralTranslation('Oglasi za posao', currentLang, generalTranslations)}
        </h2>

        {dataset.map((og: any) => {
          const jTitle = og.node[`oglasiZaPosaoSadrzaj${l}`]?.naslov;
          const jDesc = og.node[`oglasiZaPosaoSadrzaj${l}`]?.kratkiUvod;
          const jPlace = og.node.oglasiUvod.mjestoRada;
          return (
            <article key={og.node.id} className='bg-accent-boja/5 max-w-[350px] p-4 cursor-pointer'>
              <span className='block lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile lg:mb-desktop-naslov-nadnaslov md:mb-tablet-naslov-nadnaslov mb-mobile-naslov-nadnaslov'>{`${findGeneralTranslation(
                'Mjesto rada',
                currentLang,
                generalTranslations
              )}: ${jPlace}`}</span>
              <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
                {jTitle}
              </h4>
              <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet'>{jDesc}</p>

              <button
                role='button'
                className='rounded border border-almost-black lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl py-2 px-4'
              >
                {findGeneralTranslation('Pogledaj oglas', currentLang, generalTranslations)}
              </button>
            </article>
          );
        })}

        <div className='mt-12 hidden gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-bold text-gray-800'>Frontend Developer</h3>
            <p className='mt-2 text-gray-600'>Location: Remote</p>
            <p className='mt-2 text-gray-600'>
              We're looking for a skilled frontend developer with expertise in React.js and Tailwind CSS.
            </p>
            <button className='mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
              Apply Now
            </button>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-bold text-gray-800'>UI/UX Designer</h3>
            <p className='mt-2 text-gray-600'>Location: New York, NY</p>
            <p className='mt-2 text-gray-600'>
              Join our team as a creative UI/UX designer to build intuitive user experiences.
            </p>
            <button className='mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
              Apply Now
            </button>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h3 className='text-xl font-bold text-gray-800'>Marketing Specialist</h3>
            <p className='mt-2 text-gray-600'>Location: London, UK</p>
            <p className='mt-2 text-gray-600'>
              We need a dynamic marketing specialist to manage campaigns and grow our brand.
            </p>
            <button className='mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
