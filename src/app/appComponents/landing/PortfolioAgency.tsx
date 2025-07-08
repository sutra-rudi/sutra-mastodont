'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dataset from '../../staticData/staticQueryData.json';
import { UserLanguage } from '@/app/enums/LangEnum';
import parse from 'html-react-parser';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';

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
            <a
              href={`/${currentLang}/portfolio/${slugify(pcsItem.node.caseStudyUvod.imeKlijentaCaseStudy, {
                ...slugifyOptions,
              })}`}
              key={pcsItem.node.databaseId}
              className='block mt-12 rounded-lg shadow-md min-w-0 max-w-max shrink-0'
            >
              <article className=' px-4 py-2'>
                <div className=''>
                  <picture>
                    <img
                      src={pcsItem.node.caseStudyUvod.slikaThumbnailCaseStudy.node.sourceUrl}
                      alt='Slika'
                      width={400}
                      height={400}
                      decoding='async'
                      className='w-full max-h-[350px] h-full aspect-auto block object-cover object-center'
                    />
                  </picture>
                </div>

                <div className=''>
                  <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode  block relative w-full motion-ease-spring-bouncy group-hover:motion-preset-slide-up motion-delay-200 xl:mt-xl-slika-sadrzaj lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj'>
                    {pcsItem.node.caseStudyUvod.imeKlijentaCaseStudy}
                  </h2>

                  <div className='xl:-mt--xl-h1-2---naslov-nadnaslov lg:-mt--desktop-h1-2---naslov-nadnaslov md:-mt--tablet-h1-2---naslov-nadnaslov -mt--mobile-h1-2---naslov-nadnaslov flex items-start justify-start gap-1 '>
                    <p className='font-bold text-heading-color-light-mode'>Godina:</p>
                    <span className='text-text-light-mode'>{pcsItem.node.caseStudyUvod.godinaCaseStudy}</span>
                  </div>

                  <div className='flex items-start justify-start gap-1 '>
                    <p className='font-bold text-heading-color-light-mode'>Kategorija/e:</p>
                    <div className='flex items-start justify-start gap-1 text-text-light-mode'>
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

                  <div className='flex items-start justify-start gap-1 flex-wrap '>
                    <p className='font-bold text-heading-color-light-mode'>Oznaka/e:</p>
                    <div className='flex items-start justify-start gap-1 flex-wrap text-text-light-mode'>
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

                <div className='w-full xl:-mt--xl-h1-2---naslov-tekst lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst'>
                  <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile lg:mb-desktop-tekst-naslov md:mb-tablet-tekst-naslov mb-mobile-tekst-naslov text-heading-color-light-mode'>
                    {
                      //@ts-ignore
                      pcsItem.node[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].oKlijentu.oKlijentuNaslov
                    }
                  </h4>
                  <div className='lg:prose-lg prose text-text-light-mode'>
                    {
                      //@ts-ignore
                      parse(pcsItem.node[`agencijaSadrzaj${l}`]?.[`sadrzaj${l}`].oKlijentu.oKlijentuSadrzaj)
                    }
                  </div>
                </div>
              </article>
            </a>
          );
        })}
      </div>
    </section>
  );
}
