'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';

interface ScheduleInterface {
  content: any;
  lang: any;
}

const PageContent = ({ content, lang }: ScheduleInterface) => {
  const fieldDays: any[] = [
    { hr: 'ponedjeljak', eng: 'Monday', ger: 'Montag', ita: 'lunedì' },
    { hr: 'utorak', eng: 'Tuesday', ger: 'Dienstag', ita: 'martedì' },
    { hr: 'srijeda', eng: 'Wednesday', ger: 'Mittwoch', ita: 'mercoledì' },
    { hr: 'cetvrtak', eng: 'Thursday', ger: 'Donnerstag', ita: 'giovedì' },
    { hr: 'petak', eng: 'Friday', ger: 'Freitag', ita: 'venerdì' },
    { hr: 'subota', eng: 'Saturday', ger: 'Samstag', ita: 'sabato' },
    { hr: 'nedjelja', eng: 'Sunday', ger: 'Sonntag', ita: 'domenica' },
  ];

  // console.log('PAGI CONT', content);

  const l = getSuffixFromLang(lang);
  const contShorthand = content[`tjedniRaspored${l}`]?.[`tjedniRaspored${l}`];

  return (
    <article className='mx-auto my-0 max-w-[1024px] py-4'>
      <h2 className='w-full text-center text-7xl font-semibold pt-8 pb-8'>Raspored</h2>

      <div className='grid items-start gap-8 w-full'>
        <section className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                {fieldDays.map((day) => (
                  <th scope='col' key={day[lang]} className='px-6 py-3'>
                    {day[lang]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                {fieldDays.map((day) => {
                  return (
                    <td key={day.hr} className='px-6 py-4'>
                      {contShorthand[day.hr]}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </article>
  );
};

export default PageContent;
