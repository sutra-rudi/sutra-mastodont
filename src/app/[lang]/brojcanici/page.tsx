import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getAllBrojcaniciQuery } from '@/app/queries/getAllBrojcaniciQuery';
import { fetchData } from '@/app/utils/callApi';

import { Poltawski_Nowy } from 'next/font/google';
const POT = Poltawski_Nowy({ subsets: ['latin'], weight: ['700'] });

export default async function BrojcaniciPage({ params: { lang } }: { params: { lang: string } }) {
  const pageContentData = await fetchData(getAllBrojcaniciQuery(lang));

  const pageData = pageContentData.error ? null : pageContentData?.data?.allBrojcanici?.edges;
  const l = getSuffixFromLang(lang);
  return (
    <main>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla py-8'>
          Verzija jedan
        </h2>
        <div className='flex items-start justify-center xl:-gap--xl---xl lg:-gap--desktop---xl md:-gap--tablet---xl -gap--mobile---xl'>
          {pageData &&
            pageData.map((brojcanik: any) => {
              const shortHand = brojcanik.node;
              const shortHandRender = shortHand.brojcanikCompanyInNumbersUvod.brojcaniciUvod;
              const textualContent = shortHand[`metrics${l}`]?.[`companyInNumbers${l}`];

              return (
                <div
                  key={shortHand.id}
                  className='grid grid-cols-1 items-start xl:-gap--xl---l lg:-gap--desktop---l md:-gap--tablet---l -gap--mobile---l max-w-[440px] bg-sekundarna-svijetla xl:p-10 lg:p-8 md:p-6 p-4 xl:rounded-xl-vanjski-okvir-total lg:rounded-desktop-vanjski-okvir-total md:rounded-tablet-vanjski-okvir-total rounded-mobile-vanjski-okvir-total'
                >
                  <div className='flex items-center justify-start xl:text-brojcanik-xl lg:text-brojcanik-desktop md:text-brojcanik-tablet text-brojcanik-mobile xl:-gap--xl---xs lg:-gap--desktop---xs md:-gap--tablet---xs -gap--mobile---xs text-heading-color-light-mode'>
                    {/* <CountUp
                     start={0}
                     end={shortHandRender.broj}
                     enableScrollSpy
                     scrollSpyOnce
                     scrollSpyDelay={500}
                     duration={5}
                     className=''
                   /> */}
                    <p>{shortHandRender.broj}</p>
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

        <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla py-8'>
          Verzija dva
        </h2>

        <div className='flex items-start justify-center xl:-gap--xl---xl lg:-gap--desktop---xl md:-gap--tablet---xl -gap--mobile---xl'>
          {pageData &&
            pageData.map((brojcanik: any) => {
              const shortHand = brojcanik.node;
              const shortHandRender = shortHand.brojcanikCompanyInNumbersUvod.brojcaniciUvod;
              const textualContent = shortHand[`metrics${l}`]?.[`companyInNumbers${l}`];

              return (
                <div
                  key={shortHand.id}
                  className='grid grid-cols-1 items-center  max-w-[440px] bg-sekundarna-svijetla xl:p-10 lg:p-8 md:p-6 p-4 xl:rounded-xl-vanjski-okvir-total lg:rounded-desktop-vanjski-okvir-total md:rounded-tablet-vanjski-okvir-total rounded-mobile-vanjski-okvir-total'
                >
                  {textualContent.tekstBrojcanikaGlavni && (
                    <div className='grid grid-cols-1 items-center xl:-gap--xl---s lg:-gap--desktop---s md:-gap--tablet---s -gap--mobile---s xl:-pb--xl---xl lg:-pb--desktop---xl md:-pb--tablet---xl -pb--mobile---xl'>
                      {textualContent.tekstBrojcanikaGlavni && (
                        <h4
                          className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-accent-boja text-center xl:-pt--xl---l lg:-pt--desktop---l md:-pt--tablet---l -pt--mobile---l`}
                        >
                          {textualContent.tekstBrojcanikaGlavni}
                        </h4>
                      )}
                      {textualContent.tekstBrojcanikaSekundarniTekst && (
                        <p className='xl:text-text-base-base-xl lg:text-text-base-base-desktop text-text-base-base-mobiletablet text-accent-boja text-center'>
                          {textualContent.tekstBrojcanikaSekundarniTekst}
                        </p>
                      )}
                    </div>
                  )}

                  <div className='flex items-center justify-center xl:text-brojcanik-xl lg:text-brojcanik-desktop md:text-brojcanik-tablet text-brojcanik-mobile xl:-gap--xl---xs lg:-gap--desktop---xs md:-gap--tablet---xs -gap--mobile---xs text-heading-color-light-mode'>
                    {/* <CountUp
                     start={0}
                     end={shortHandRender.broj}
                     enableScrollSpy
                     scrollSpyOnce
                     scrollSpyDelay={500}
                     duration={5}
                     className=''
                   /> */}
                    <p>{shortHandRender.broj}</p>
                    {textualContent.znakIliNatpisUzBroj ? (
                      <p className=''>{textualContent.znakIliNatpisUzBroj}</p>
                    ) : (
                      <p className=''>{shortHandRender.znakIliNatpisUzBroj}</p>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        <h2 className='w-full text-center xl:text-h2-xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile font-semibold pt-8 text-primarna-tamna dark:text-primarna-svijetla py-8'>
          Verzija tri
        </h2>

        <div className='grid grid-cols-1 w-full '>
          {pageData &&
            pageData.map((brojcanik: any) => {
              const shortHand = brojcanik.node;
              const shortHandRender = shortHand.brojcanikCompanyInNumbersUvod.brojcaniciUvod;
              const textualContent = shortHand[`metrics${l}`]?.[`companyInNumbers${l}`];

              return (
                <div
                  key={shortHand.id}
                  className='flex mx-auto w-full items-center justify-between  max-w-[656px] border-b border-divider-lightmode dark:border-divider-darkmode xl:-py--xl---m lg:-py--desktop---m md:-py--tablet---m -py--mobile---m'
                >
                  <div className='flex items-center xl:text-brojcanik-xl lg:text-brojcanik-desktop md:text-brojcanik-tablet text-brojcanik-mobile xl:-gap--xl---xs lg:-gap--desktop---xs md:-gap--tablet---xs -gap--mobile---xs text-heading-color-light-mode '>
                    {/* <CountUp
                     start={0}
                     end={shortHandRender.broj}
                     enableScrollSpy
                     scrollSpyOnce
                     scrollSpyDelay={500}
                     duration={5}
                     className=''
                   /> */}
                    <p>{shortHandRender.broj}</p>
                    {textualContent.znakIliNatpisUzBroj ? (
                      <p className=''>{textualContent.znakIliNatpisUzBroj}</p>
                    ) : (
                      <p className=''>{shortHandRender.znakIliNatpisUzBroj}</p>
                    )}
                  </div>

                  {textualContent.tekstBrojcanikaGlavni && (
                    <div className='grid grid-cols-1 xl:-gap--xl---s lg:-gap--desktop---s md:-gap--tablet---s -gap--mobile---s max-w-[404px]'>
                      {textualContent.tekstBrojcanikaGlavni && (
                        <h4
                          className={`${POT.className} xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-accent-boja  `}
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
    </main>
  );
}
