import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { IoIosBeer as Bira } from 'react-icons/io';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
const data = dataset.data.allWhyUs.edges;

import parse from 'html-react-parser';

interface WhyUs {
  currentLang: any;
}

export default function WhyUsSection({ currentLang }: WhyUs) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl bg-almost-white lg:pb-24 md:pb-20 pb-16 dark:bg-sekundarna-tamna'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px] lg:pt-20 pt-[60px]'>
        Why us
      </h2>
      <div className='container mx-auto px-4 flex items-start justify-center lg:gap-5 md:gap-4 gap-3 flex-wrap '>
        {data.map((wu) => {
          return (
            <div
              key={wu.node.id}
              className='w-full bg-light-mode-bg dark:bg-dark-mode-bg max-w-[423px] flex flex-col items-center justify-center lg:p-6 md:p-5 p-4 lg:rounded-lg md:rounded-md rounded shadow-sm'
            >
              <div className='xl:text-brojcanik-xl lg:text-brojcanik-desktop md:text-brojcanik-tablet text-brojcanik-mobile text-text-light-mode dark:text-text-dark-mode leading-none'>
                {wu.node.uvodWhyUs.emoji ?? <Bira />}
              </div>
              <h4 className='lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode text-center xl:mt-xl-slika-sadrzaj lg:mt-desktop-slika-sadrzaj md:mt-tablet-slika-sadrzaj mt-mobile-slika-sadrzaj'>
                {
                  //@ts-ignore
                  wu.node[`text${l}`]?.[`naslov${l}`]
                }
              </h4>

              {
                //@ts-ignore
                wu.node[`text${l}`]?.[`sadrzajText${l}`] && (
                  <p className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode line-clamp-4 text-ellipsis lg:-mt--desktop-h3-4---naslov-tekst md:-mt--tablet-h3-4---naslov-tekst -mt--mobile-h3-4---naslov-tekst text-center'>
                    {
                      //@ts-ignore
                      wu.node[`text${l}`]?.[`sadrzajText${l}`].startsWith('<')
                        ? //@ts-ignore
                          parse(wu.node[`text${l}`]?.[`sadrzajText${l}`])
                        : //@ts-ignore
                          [`text${l}`]?.[`sadrzajText${l}`]
                    }
                  </p>
                )
              }
            </div>
          );
        })}
      </div>
    </section>
  );
}
