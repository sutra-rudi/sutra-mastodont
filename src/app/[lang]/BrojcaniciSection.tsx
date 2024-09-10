'use client';

import parse from 'html-react-parser';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

import CountUp from 'react-countup';
import Image from 'next/image';

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
          {pageContent.map((brojcanik: any, index: number) => {
            const shortHand = brojcanik.node;

            const imgSource =
              shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG &&
              shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG.sourceUrl
                ? shortHand.brojcanikCompanyInNumbersUvod.slikaPNGSVG.node.sourceUrl
                : 'https://placehold.co/400.png';

            return (
              shortHand.brojcanikCompanyInNumbersUvod.broj && (
                <div
                  className='grid grid-cols-1 gap-3 py-4 border border-dashed rounded-lg border-slate-400'
                  key={`${brojcanik.id}+${index}`}
                >
                  <Image width={96} height={96} src={imgSource} alt='some company img' />

                  <h3 className=' max-w-[15ch] prose relative mb-0 text-transparent z-1 bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500'>
                    {parse(shortHand[constructKey]?.[constructKey] ?? 'Default naziv')}
                  </h3>
                  <h2 className='text-red-400 font-bold dark:text-white'>
                    {shortHand.brojcanikCompanyInNumbersUvod.broj && (
                      <CountUp
                        start={0}
                        end={Number(shortHand.brojcanikCompanyInNumbersUvod.broj)}
                        enableScrollSpy
                        scrollSpyDelay={250}
                        duration={3}
                        scrollSpyOnce
                      />
                    )}
                  </h2>
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrojcaniciSection;
