import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
const data = dataset.data.allListeFeatures.edges;
interface FeatureListSection {
  currentLang: any;
}

export default function FeatureListSection({ currentLang }: FeatureListSection) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl bg-almost-white lg:pb-24 md:pb-20 pb-16 dark:bg-sekundarna-tamna'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px] lg:pt-20 pt-[60px]'>
        Featured liste
      </h2>
      <div className='container mx-auto px-4 grid grid-cols-1'>
        {data.map((lf, i) => {
          //@ts-ignore
          const brojStavki = parseInt(lf.node[`featuresLista${l}`]?.[`sadrzaj${l}`].uvod.brojStavki[0], 10);

          const stavke = Array.from(
            { length: brojStavki },
            //@ts-ignore
            (_, i) => lf.node[`featuresLista${l}`]?.[`sadrzaj${l}`][`stavka${i + 1}`]
          );

          return (
            <article key={lf.node.id} className=''>
              <section className='flex flex-col items-center justify-center'>
                <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode'>
                  {
                    //@ts-ignore
                    lf.node[`featuresLista${l}`]?.[`sadrzaj${l}`].uvod.nadnaslov
                  }
                </p>
                <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-light-mode dark:text-hero-heading-color-dark-mode lg:-mt--desktop-h1-2---naslov-nadnaslov md:-mt--tablet-h1-2---naslov-nadnaslov -mt--mobile-h1-2---naslov-nadnaslov '>
                  {
                    //@ts-ignore
                    lf.node[`featuresLista${l}`]?.[`sadrzaj${l}`].uvod.naslov
                  }
                </h1>
                <div className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst '>
                  {
                    //@ts-ignore
                    parse(lf.node[`featuresLista${l}`]?.[`sadrzaj${l}`].uvod.sadrzaj)
                  }
                </div>
              </section>

              <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl flex items-start justify-center lg:gap-5 md:gap-4 gap-3 flex-wrap mx-auto '>
                {stavke.map((s) => {
                  console.log('SS', s);
                  return (
                    s.sadrzaj && (
                      <div
                        key={s.naslov}
                        className='max-w-[423px] w-full bg-light-mode-bg dark:bg-dark-mode-bg lg:p-6 md:p-5 px-4 py-6 lg:rounded-lg md:rounded-md rounded shadow-sm'
                      >
                        <section>
                          <h3 className='lg:text-h3-desktop md:text-h3-tablet text-h3-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode'>
                            {s.naslov}
                          </h3>
                          <div className='md:text-text-base-base-desktop text-text-base-base-mobiletablet lg:-mt--desktop-h3-4---naslov-tekst md:-mt--tablet-h3-4---naslov-tekst -mt--mobile-h3-4---naslov-tekst text-text-light-mode dark:text-text-dark-mode !max-w-full text-balance whitespace-pre-wrap relative block prose prose-p:text-balance prose-p:max-w-full prose-p:whitespace-pre-wrap overflow-hidden'>
                            {parse(s.sadrzaj)}
                          </div>
                        </section>

                        <section className='lg:-mt--desktop---xl md:-mt--tablet---xl -mt--mobile---xl flex items-start justify-start lg:gap-6 md:gap-4 gap-2'>
                          <picture>
                            <img
                              src={s.dodatneOpcije.slikaIliIkona ? s.dodatneOpcije.slikaIliIkona.node.sourceUrl : ''}
                              alt='Additional info about offer'
                              className='object-cover object-center block aspect-auto lg:h-[225px] md:h-[175px] h-[150px] w-full'
                            />
                          </picture>
                          <div className=''>
                            <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile'>
                              {s.dodatneOpcije.nadnaslovIliEmoji}
                            </p>
                            <div className='lg:-mt--desktop-h3-4---naslov-tekst md:-mt--tablet-h3-4---naslov-tekst -mt--mobile-h3-4---naslov-tekst flex items-start justify-start gap-1'>
                              <span>Link:</span>
                              <a href={s.dodatneOpcije.link} target='_blank' rel='noopener noreferrer'>
                                {s.dodatneOpcije.link}
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                    )
                  );
                })}
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
}
