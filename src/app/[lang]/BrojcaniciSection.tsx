import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';

interface BrojcaniciSectionInterface {
  pageContent: any;
  lang: any;
}
const BrojcaniciSection = ({ pageContent, lang }: BrojcaniciSectionInterface) => {
  const l = `${lang[0].toUpperCase() + lang.slice(1).toLowerCase()}`;

  const constructKey = `tekstBox${l}`;

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Brojcanici</h2>

      <div className='max-w-[1225px] mx-auto my-0'>
        <div className='flex items-center gap-4 justify-center'>
          {pageContent.map((brojcanik: any) => {
            const shortHand = brojcanik.node;

            const imgSource =
              shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG &&
              shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG.sourceUrl
                ? shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG.node.sourceUrl
                : 'https://placehold.co/400.png';

            return (
              <div className='grid grid-cols-1 gap-3' key={brojcanik.id}>
                <div className='relative w-24 h-24'>
                  <Image fill src={imgSource} alt='some company img' />
                </div>
                <h2 className='text-red-400'>{shortHand.brojcanikCompanyInNumbersUvod.broj}</h2>
                <h3 className=' max-w-[15ch]'>{parse(shortHand[constructKey]?.[constructKey] ?? 'no value')}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrojcaniciSection;
