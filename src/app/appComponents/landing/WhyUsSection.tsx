'use client';

import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { IoIosBeer as Bira } from 'react-icons/io';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
const data = dataset.data.allWhyUs.edges;

const introT = dataset.data.allBazaTekstaPodstranice1Modul.edges.find(
  (item) => item.node.title === 'NASLOVNICA – WHY US (uvod-intro)'
);

import parse from 'html-react-parser';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import { usePathname } from 'next/navigation';
import { useIntersectionObserver } from '@uidotdev/usehooks';

interface WhyUs {
  currentLang: any;
}

export default function WhyUsSection({ currentLang }: WhyUs) {
  const l = getSuffixFromLang(currentLang);

  const currentPath = usePathname();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  //@ts-ignore
  const title = introT?.node[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`] ?? 'NEMA NASLOVA NA OVI JEZIK';

  const t = slugify(title, slugifyOptions);
  React.useEffect(() => {
    const hash = `#${t}`;

    if (entry?.isIntersecting) {
      window.history.replaceState(null, '', `${currentPath}${hash}`);
    } else if (window.location.hash === hash) {
      window.history.replaceState(null, '', currentPath);
    }
  }, [entry, currentPath, t]);
  return (
    <section
      id={t}
      ref={ref}
      className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl bg-almost-white lg:pb-24 md:pb-20 pb-16 dark:bg-sekundarna-tamna'
    >
      <h2 className='relative lg:-pt--desktop---3xl md:-pt--tablet---3xl -pt--mobile---3xl lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode block text-center text-balance lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst px-4'>
        {title}
      </h2>
      <div className='container mx-auto px-4 flex items-start justify-center lg:gap-5 md:gap-4 gap-3 flex-wrap '>
        {data.map((wu) => {
          return (
            <div
              key={wu.node.id}
              className='w-full bg-light-mode-bg dark:bg-dark-mode-bg max-w-[423px] flex flex-col items-center justify-center lg:p-6 md:p-5 px-4 py-6 lg:rounded-lg md:rounded-md rounded shadow-sm'
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
                  <div className='md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode  lg:-mt--desktop-h3-4---naslov-tekst md:-mt--tablet-h3-4---naslov-tekst -mt--mobile-h3-4---naslov-tekst text-center'>
                    {
                      //@ts-ignore
                      wu.node[`text${l}`]?.[`sadrzajText${l}`].startsWith('<') ? (
                        //@ts-ignore
                        parse(wu.node[`text${l}`]?.[`sadrzajText${l}`])
                      ) : (
                        //@ts-ignore
                        <p>{[`text${l}`]?.[`sadrzajText${l}`]}</p>
                      )
                    }
                  </div>
                )
              }
            </div>
          );
        })}
      </div>
    </section>
  );
}
