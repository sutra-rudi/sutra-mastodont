import React from 'react';
import parse from 'html-react-parser';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

interface BrojcaniciSectionInterface {
  pageContent: any;
  lang: any;
}
const BrojcaniciSection = ({ pageContent, lang }: BrojcaniciSectionInterface) => {
  const l = getSuffixFromLang(lang);

  const constructKey = `tekstBox${l}`;

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Brojcanici</h2>

      <div className='max-w-[1225px] mx-auto my-8'>
        <div className='flex items-center gap-4 justify-center'>
          {pageContent.map((brojcanik: any) => {
            const shortHand = brojcanik.node;

            const imgSource =
              shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG &&
              shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG.sourceUrl
                ? shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG.node.sourceUrl
                : 'https://placehold.co/400.png';

            return (
              <div
                className='grid grid-cols-1 gap-3 py-4 border border-dashed rounded-lg border-slate-400'
                key={brojcanik.id}
              >
                <div className='relative w-24 h-24'>
                  <picture>
                    <img src={imgSource} alt='some company img' />
                  </picture>
                </div>
                <h3 className=' max-w-[15ch] prose relative mb-0 text-transparent z-1 bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500'>
                  {parse(shortHand[constructKey]?.[constructKey] ?? 'no value')}
                </h3>
                <h2 className='text-red-400 font-bold dark:text-white'>
                  {shortHand.brojcanikCompanyInNumbersUvod.broj}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrojcaniciSection;
