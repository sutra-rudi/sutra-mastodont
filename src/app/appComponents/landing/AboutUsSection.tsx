'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
import { usePathname } from 'next/navigation';
import { useIntersectionObserver } from '@uidotdev/usehooks';

import React from 'react';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
const findAboutData = dataset.data.allONama.edges[0].node;
interface AboutUsSection {
  currentLang: string;
}

export default function AboutUsSection({ currentLang }: AboutUsSection) {
  const l = getSuffixFromLang(currentLang);
  const abd = //@ts-ignore
    findAboutData[`oNamaSadrzaj${l}`]?.[`skraceneVerzijeTekstaTekstaONama${l}`]
      ?.oNamaSkraceniTekstZaNaslovnicuIliFooter;

  const imgThumb = findAboutData.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover;

  //@ts-ignore
  const t = findAboutData[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaNaslovHeroSekcija;

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
    <section id={t} ref={ref} className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl w-full h-full'>
      <div className='mx-auto container w-full px-4 flex items-start justify-center lg:gap-desktop-slika-sadrzaj md:gap-tablet-slika-sadrzaj gap-mobile-slika-sadrzaj lg:flex-nowrap flex-wrap'>
        <div className='w-full'>
          <h2 className='text-left lg:text-h2-desktop md:text-h2-tablet text-h2-mobile lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst text-heading-color-light-mode dark:text-heading-color-dark-mode'>
            {t}
          </h2>

          <p className='italic lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode dark:text-nadnaslov-color-dark-mode'>
            {/* @ts-ignore */}
            {findAboutData[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaHeroSekcijaTekstIspodNaslova}
          </p>
          {abd && (
            <div className='lg:mt-desktop-tekst-naslov md:mt-tablet-tekst-naslov mt-mobile-tekst-naslov lg:prose-lg prose w-full prose-headings:text-heading-color-light-mode dark:prose-headings:text-heading-color-dark-mode prose-p:text-text-light-mode dark:prose-p:text-text-dark-mode'>
              {parse(abd)}
            </div>
          )}
        </div>

        <div className='max-w-prose relative'>
          <picture>
            <img
              src={imgThumb.node.sourceUrl}
              alt={`About us image - ${imgThumb.node.sourceUrl}`}
              className='object-cover object-center block aspect-auto w-full h-full'
              decoding='async'
              loading='lazy'
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
