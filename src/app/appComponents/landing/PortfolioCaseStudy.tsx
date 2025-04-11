'use client';

import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { generalTranslations } from '@/app/lib/generalTranslations';
// import parse from 'html-react-parser';
interface PortfolioCaseStudy {
  dataset: any[];
  currentLang: string;
}

export default function PortfolioCaseStudy({ dataset, currentLang }: PortfolioCaseStudy) {
  //   console.log('DATASET', dataset);

  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
        {findGeneralTranslation('Portfolio', currentLang, generalTranslations)}
      </h2>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto max-w-[1440px]'>
        {dataset.map((item: any) => {
          const titleField = item.node[`caseStudySadrzaj${l}`]?.[`naslovCaseStudy${l}`];
          //   const contentField = item.node[`caseStudySadrzaj${l}`]?.[`nadnaslovPodnaslovNaslovCaseStudyHr${l}`];
          return (
            <article className='mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3'>
              <img src={'image'} alt='' className='w-full' />
              <div className='p-8 text-center md:p-7 xl:p-9'>
                <h3 className='mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'>
                  {titleField}
                </h3>
                <div className='mb-7 text-base leading-relaxed text-body-color dark:text-dark-6'>
                  {/* {contentField} */}
                  content
                </div>

                <a
                  href={'btnHref' ? 'btnHref' : '#'}
                  className='inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6'
                >
                  {'Button'}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
