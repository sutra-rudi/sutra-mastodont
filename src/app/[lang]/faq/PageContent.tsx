'use client';

import React from 'react';
interface OnePageFaqSectionInterface {
  pageContent: any;
  lang: any;
  singlePageCont: any;
}
import parse from 'html-react-parser';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
const PageContent = ({ pageContent, lang, singlePageCont }: OnePageFaqSectionInterface) => {
  const l = getSuffixFromLang(lang);

  const [openAccordionIndex, setOpenAccordionIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };
  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>FAQ One pager</h2>

      <div className='max-w-[1225px] mx-auto my-8 flex flex-wrap gap-4 place-items-center justify-center'>
        {pageContent.map((pagContent: any, index: number) => {
          const pageContentShorthand = pagContent.node[`text${l}`];

          return (
            <div className='prose' key={pagContent.id + index}>
              <h3 className='text-center text-4xl font-semibold'>{pageContentShorthand[`naslov${l}`]}</h3>
              {parse(pageContentShorthand?.[`sadrzajText${l}`])}
            </div>
          );
        })}
      </div>

      <div className='max-w-[1225px] mx-auto my-8 '>
        {singlePageCont.map((pageCont: any, index: number) => {
          const contentShorthand = pageCont.node[`faqPojedinacnoDodavanje${l}`];

          if (!contentShorthand) return null;

          const isAccordionOpen = openAccordionIndex === index;

          return (
            <div key={pageCont.node.id + index} id={`accordion-collapse-${index}`} data-accordion='collapse'>
              <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                  type='button'
                  className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isAccordionOpen ? 'true' : 'false'}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span>{contentShorthand[`pitanjeFaq${l}`] ?? 'Nema pitanja'}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 ${isAccordionOpen ? 'rotate-180' : ''}`}
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5 5 1 1 5'
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                className={`${
                  isAccordionOpen ? 'block' : 'hidden'
                } border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-5`}
                aria-labelledby={`accordion-collapse-heading-${index}`}
              >
                <p className='text-gray-500 dark:text-gray-400'>
                  {contentShorthand[`odgovorFaq${l}`] ?? 'Nema odgovora'}
                </p>
                {/* Dodajte dodatne HTML elemente ili tekst prema potrebi */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PageContent;
