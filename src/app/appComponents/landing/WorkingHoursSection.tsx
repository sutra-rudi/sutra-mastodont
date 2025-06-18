'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import { usePathname } from 'next/navigation';
import { useIntersectionObserver } from '@uidotdev/usehooks';
interface WHS {
  sezonsko: any;
  bazno: any;
  currentLang: any;
}
export default function WorkingHoursSection({ sezonsko, bazno, currentLang }: WHS) {
  const l = getSuffixFromLang(currentLang);

  const t = slugify(findGeneralTranslation('Radno vrijeme', currentLang, generalTranslations), { ...slugifyOptions });

  const currentPath = usePathname();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  React.useEffect(() => {
    const hash = `#${slugify(t, slugifyOptions)}`;

    if (entry?.isIntersecting) {
      window.history.replaceState(null, '', `${currentPath}${hash}`);
    } else if (window.location.hash === hash) {
      window.history.replaceState(null, '', currentPath);
    }
  }, [entry, currentPath, t]);

  return (
    <section id={t} ref={ref} className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
      <section className='container mx-auto px-4 lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode'>
          {findGeneralTranslation('Sezonsko radno vrijeme', currentLang, generalTranslations)}
        </h2>

        {sezonsko && (
          <p className='lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-light-mode italic lg:mt-desktop-naslov-nadnaslov md:mt-tablet-naslov-nadnaslov mt-mobile-naslov-nadnaslov'>{`${findGeneralTranslation(
            'Vrijedi od',
            currentLang,
            generalTranslations
          )} ${dayjs(sezonsko[0].node.sezonskoRadnoVrijemeAktivatorDatuma.vrijediOdSezonskoRadnoVrijeme).format(
            'DD.MM.YYYY'
          )} do ${dayjs(sezonsko[0].node.sezonskoRadnoVrijemeAktivatorDatuma.vrijediDoSezonskoRadnoVrijeme).format(
            'DD.MM.YYYY'
          )}`}</p>
        )}
        {sezonsko && (
          <div className='prose lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst'>
            {sezonsko[0].node[`radnoVrijeme${l}`]?.[`textBox${l}`] ?? 'NEMA UPISA U BAZI: UPIŠI VRIME'}
          </div>
        )}
      </section>

      <section className='container mx-auto px-4 lg:-mt--desktop---2xl md:-mt--tablet---2xl -mt--mobile---2xl'>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode'>
          {findGeneralTranslation('Radno vrijeme', currentLang, generalTranslations)}
        </h2>

        {bazno && bazno[0].node[`radnoVrijeme${l}`]?.[`textBox${l}`] ? (
          <div className='prose lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst'>
            {parse(bazno[0].node[`radnoVrijeme${l}`]?.[`textBox${l}`])}
          </div>
        ) : (
          <div className='prose lg:-mt--desktop-h1-2---naslov-tekst md:-mt--tablet-h1-2---naslov-tekst -mt--mobile-h1-2---naslov-tekst'>
            NEMA UPISA U BAZI: UPIŠI VRIME
          </div>
        )}
      </section>
    </section>
  );
}
