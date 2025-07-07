'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dataset from '../../staticData/staticQueryData.json';
import { UserLanguage } from '@/app/enums/LangEnum';
import parse from 'html-react-parser';

const allData = dataset.data.allPortfolioCaseStudyAgency.edges;
const findData = dataset.data.allPortfolioCaseStudyAgency.edges.find((item) => item.node.title === 'test svih polja');

interface PCS {
  currentLang: any;
}

export default function PortfolioAgency({ currentLang }: PCS) {
  // console.log('FIND', findData);

  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl relative'>
      <h2 className='relative lg:-pt--desktop---3xl md:-pt--tablet---3xl -pt--mobile---3xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode block text-center text-balance px-4'>
        Portfolio case study agency
      </h2>
      <div className='container mx-auto px-4 lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
        {allData.map((pcsItem) => {
          return (
            <article key={pcsItem.node.databaseId} className='mt-12 rounded-lg shadow-md min-w-0 shrink-0 px-4 py-2'>
              <div className='flex items-start flex-wrap gap-12'>
                <div className=''>
                  <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode  block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200'>
                    {pcsItem.node.caseStudyUvod.imeKlijentaCaseStudy}
                  </h2>

                  <div className='mt-8'>{`Godina: ${pcsItem.node.caseStudyUvod.godinaCaseStudy}`}</div>

                  <div className='flex items-start justify-start gap-1'>
                    <p className='font-bold'>Kategorija/e:</p>
                    <div className='flex items-start justify-start gap-1'>
                      {pcsItem.node.caseStudyUvod.izbornikKategorijeCheckbox.edges.map((c) => {
                        return (
                          <span
                            key={
                              //@ts-ignore
                              c.node.informacijeKategorije.prijevodi[`imeKategorije${l}`]
                            }
                          >
                            {
                              //@ts-ignore
                              c.node.informacijeKategorije.prijevodi[`imeKategorije${l}`]
                            }
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className='flex items-start justify-start gap-1 flex-wrap'>
                    <p className='font-bold'>Oznaka/e:</p>
                    <div className='flex items-start justify-start gap-1 flex-wrap'>
                      {pcsItem.node.caseStudyUvod.izbornikOznakaCheckbox.edges.map((o) => {
                        return (
                          <span
                            key={
                              currentLang === UserLanguage.hr
                                ? o.node.tags.prijevodiTagova.hrvatskiPrijevod
                                : currentLang === UserLanguage.eng
                                ? o.node.tags.prijevodiTagova.engleskiPrijevod
                                : currentLang === UserLanguage.ger
                                ? o.node.tags.prijevodiTagova.njemackiPrijevod
                                : currentLang === UserLanguage.ita
                                ? o.node.tags.prijevodiTagova.talijanskiPrijevod
                                : currentLang === UserLanguage.fra
                                ? o.node.tags.prijevodiTagova.francuskiPrijevod
                                : o.node.name
                            }
                          >
                            #
                            {currentLang === UserLanguage.hr
                              ? o.node.tags.prijevodiTagova.hrvatskiPrijevod
                              : currentLang === UserLanguage.eng
                              ? o.node.tags.prijevodiTagova.engleskiPrijevod
                              : currentLang === UserLanguage.ger
                              ? o.node.tags.prijevodiTagova.njemackiPrijevod
                              : currentLang === UserLanguage.ita
                              ? o.node.tags.prijevodiTagova.talijanskiPrijevod
                              : currentLang === UserLanguage.fra
                              ? o.node.tags.prijevodiTagova.francuskiPrijevod
                              : o.node.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className=''>
                  <picture>
                    <img
                      src={pcsItem.node.caseStudyUvod.slikaThumbnailCaseStudy.node.sourceUrl}
                      alt='Slika'
                      width={400}
                      height={400}
                    />
                  </picture>
                </div>
              </div>

              <div className='w-full lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
                <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov'>
                  {
                    //@ts-ignore
                    pcsItem.node[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].oKlijentu.oKlijentuNaslov
                  }
                </h4>
                <div className='lg:prose-lg prose'>
                  {
                    //@ts-ignore
                    parse(pcsItem.node[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].oKlijentu.oKlijentuSadrzaj)
                  }
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
