'use client';

import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { Poltawski_Nowy } from 'next/font/google';
const POT = Poltawski_Nowy({ subsets: ['latin'], weight: ['700'] });
import CountUp from 'react-countup';

interface BrojcaniciSectionInterface {
  pageContent: any;
  lang: any;
}
const BrojcaniciSection = ({ pageContent, lang }: BrojcaniciSectionInterface) => {
  const l = getSuffixFromLang(lang);

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Brojcanici</h2>

      <div className='max-w-[1225px] mx-auto my-8'>
        <div className='flex items-start justify-center xl:-gap--xl---xl lg:-gap--desktop---xl md:-gap--tablet---xl -gap--mobile---xl'>
          {pageContent.map((brojcanik: any) => {
            const shortHand = brojcanik.node;
            const shortHandRender = shortHand.brojcanikCompanyInNumbersUvod.brojcaniciUvod;
            const textualContent = shortHand[`metrics${l}`]?.[`companyInNumbers${l}`];

            return (
              <div
                key={shortHand.id}
                className='grid grid-cols-1 items-start xl:-gap--xl---l lg:-gap--desktop---l md:-gap--tablet---l -gap--mobile---l max-w-[440px] bg-sekundarna-svijetla xl:p-10 lg:p-8 md:p-6 p-4 xl:rounded-xl-vanjski-okvir-total lg:rounded-desktop-vanjski-okvir-total md:rounded-tablet-vanjski-okvir-total rounded-mobile-vanjski-okvir-total'
              >
                <div className='flex items-center justify-start xl:text-brojcanik-xl lg:text-brojcanik-desktop md:text-brojcanik-tablet text-brojcanik-mobile xl:-gap--xl---xs lg:-gap--desktop---xs md:-gap--tablet---xs -gap--mobile---xs text-heading-color-light-mode'>
                  <CountUp
                    start={0}
                    end={shortHandRender.broj}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={500}
                    duration={5}
                    className=''
                  />
                  {textualContent.znakIliNatpisUzBroj ? (
                    <p className=''>{textualContent.znakIliNatpisUzBroj}</p>
                  ) : (
                    <p className=''>{shortHandRender.znakIliNatpisUzBroj}</p>
                  )}
                </div>

                {textualContent.tekstBrojcanikaGlavni && (
                  <div className='grid grid-cols-1 items-start xl:-gap--xl---s lg:-gap--desktop---s md:-gap--tablet---s -gap--mobile---s'>
                    {textualContent.tekstBrojcanikaGlavni && (
                      <h4
                        className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-accent-boja`}
                      >
                        {textualContent.tekstBrojcanikaGlavni}
                      </h4>
                    )}
                    {textualContent.tekstBrojcanikaSekundarniTekst && (
                      <p className='xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet text-accent-boja'>
                        {textualContent.tekstBrojcanikaSekundarniTekst}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrojcaniciSection;
