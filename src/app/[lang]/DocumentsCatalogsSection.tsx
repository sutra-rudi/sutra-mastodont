'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';

interface DokumentiKataloziInterface {
  pageContent: any;
  lang: any;
}
const DocumentsCatalogsSection = ({ pageContent, lang }: DokumentiKataloziInterface) => {
  const l = getSuffixFromLang(lang);
  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>DokumentiKatalozi</h2>

        <div className='py-4 flex items-center gap-8'>
          {pageContent.map((cont: any) => {
            const sh = cont.node[`docsUpload${l}`];

            return (
              <div
                key={cont.node.id}
                className='w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              >
                <button
                  type='button'
                  className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'
                >
                  <svg
                    className='w-3 h-3 me-2.5'
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
                      d='M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25'
                    />
                  </svg>
                  {sh?.[`nazivDokumenta${l}`] ? sh?.[`nazivDokumenta${l}`] : 'nema naziva fajla'}
                </button>

                <button
                  type='button'
                  className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'
                >
                  <svg
                    className='w-3 h-3 me-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z' />
                    <path d='M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' />
                  </svg>
                  Download
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentsCatalogsSection;

{
  /* <a
  key={cont.node.id}
  className='block'
  href={sh?.[l.toLowerCase()] ? sh?.[l.toLowerCase()].node.mediaItemUrl : 'nema linka na fajl'}
>
  {sh?.[`nazivDokumenta${l}`] ? sh?.[`nazivDokumenta${l}`] : 'nema naziva fajla'}
</a>; */
}
