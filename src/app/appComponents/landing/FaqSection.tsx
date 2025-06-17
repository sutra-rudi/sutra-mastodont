'use client';

import React, { useState, useRef } from 'react';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import faqDataset from '../../staticData/staticQueryData.json';
import parse from 'html-react-parser';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import Script from 'next/script';
import { generateFaqJsonLd } from '@/app/utils/generateFaqSchema';
import slugify from 'slugify';
import { slugifyOptions } from '@/app/pathsUtils/slugifyOptions';
import { usePathname } from 'next/navigation';
const findDataset = faqDataset.data.allFaq.edges;
const findIntro = faqDataset.data.allBazaTekstaPodstranice1Modul.edges.find(
  (item) => item.node.title === 'NASLOVNICA – Često postavljana pitanja (FAQ)  (uvod-intro)'
);

interface FaqSectionProps {
  currentLang: string;
  isSub: boolean;
}

function AccordionItem({
  header,
  text,
  index,
  isSeen,
  isRight,
}: {
  header: string;
  text: string;
  index: number;
  isSeen: boolean;
  isRight: boolean;
}) {
  const [active, setActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  return (
    <div
      onClick={toggle}
      style={{
        animationDelay: `${isRight ? index * 0.4 : index * 0.3}s`,
      }}
      className={`mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8 transition-all ease-in-out transform-gpu cursor-pointer hover:bg-primarna-svijetla/5 ${
        isSeen && 'motion-preset-slide-up motion-ease-spring-smooth'
      }`}
    >
      <button
        role='button'
        className='flex w-full text-left'
        data-gtm={slugify(`open ${header} accordion`, { ...slugifyOptions })}
        data-gtm-general={'open-accordion'}
      >
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg'>
          <svg
            className={`fill-primary stroke-primary duration-500 ease-in-out ${
              active ? 'rotate-180 stroke-accent-boja fill-accent-boja' : ''
            }`}
            width='17'
            height='10'
            viewBox='0 0 17 10'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
              stroke=''
            />
          </svg>
        </div>
        <div className='w-full'>
          <h4 className='mt-1 lg:text-h4-desktop md:text-h4-tablet text-h4-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode'>
            {header}
          </h4>
        </div>
      </button>

      <div
        ref={contentRef}
        className={`pl-[62px] overflow-hidden transition-all duration-500 ease-in-out transform-gpu ${
          active ? 'max-h-[500px] opacity-100 animate-fade-in-down' : 'max-h-0 opacity-0 animate-fade-out-up'
        }`}
      >
        <p className='py-3 md:text-text-base-base-desktop text-text-base-base-mobiletablet text-text-light-mode dark:text-text-dark-mode'>
          {text}
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-out-up {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-8px);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out forwards;
        }
        .animate-fade-out-up {
          animation: fade-out-up 0.5s ease-in forwards;
        }
      `}</style>
    </div>
  );
}

export default function FaqSection({ currentLang, isSub = false }: FaqSectionProps) {
  const faqJsonLd = generateFaqJsonLd(findDataset, currentLang);
  const l = getSuffixFromLang(currentLang);
  const middle = Math.floor(findDataset.length / 2);
  const left = findDataset.slice(0, middle);
  const right = findDataset.slice(middle);

  const currentPath = usePathname();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  //@ts-ignore
  const title = findIntro?.node[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`];
  //@ts-ignore
  const text = findIntro?.node[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`];

  React.useEffect(() => {
    const hash = `#${slugify(title, slugifyOptions)}`;

    if (entry?.isIntersecting) {
      window.history.replaceState(null, '', `${currentPath}${hash}`);
    } else if (window.location.hash === hash) {
      window.history.replaceState(null, '', currentPath);
    }
  }, [entry, currentPath, title]);

  return (
    <section
      id={slugify(title ? title : 'Nema naslova', { ...slugifyOptions })}
      ref={ref}
      className='relative z-20 overflow-hidden bg-white pb-12 lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl'
    >
      <div className='container mx-auto'>
        {!isSub && (
          <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode block text-center text-balance lg:-mb--desktop-h1-2---naslov-tekst md:-mb--tablet-h1-2---naslov-tekst -mb--mobile-h1-2---naslov-tekst px-4'>
            {title}
          </h2>
        )}
        {!isSub && typeof text !== 'undefined' && (
          <div className='text-center md:text-text-base-base-desktop text-text-base-base-mobiletablet max-w-prose text-balance mx-auto text-text-light-mode dark:text-text-dark-mode lg:-mb--desktop---3xl md:-mb--tablet---3xl -mb--mobile---3xl px-4 relative block'>
            {parse(text)}
          </div>
        )}

        <div className='flex flex-wrap px-4'>
          <div className='w-full lg:px-4 lg:w-1/2'>
            {left.map((item, i) => (
              <AccordionItem
                index={i}
                isRight={false}
                isSeen={entry?.isIntersecting!}
                key={item.node.id}
                //@ts-ignore
                header={item.node[`faqPojedinacnoDodavanje${l}`]?.[`pitanjeFaq${l}`]}
                //@ts-ignore
                text={item.node[`faqPojedinacnoDodavanje${l}`]?.[`odgovorFaq${l}`]}
              />
            ))}
          </div>
          <div className='w-full lg:px-4 lg:w-1/2'>
            {right.map((item, i) => (
              <AccordionItem
                isRight
                index={i}
                isSeen={entry?.isIntersecting!}
                key={item.node.id}
                //@ts-ignore
                header={item.node[`faqPojedinacnoDodavanje${l}`]?.[`pitanjeFaq${l}`]}
                //@ts-ignore
                text={item.node[`faqPojedinacnoDodavanje${l}`]?.[`odgovorFaq${l}`]}
              />
            ))}
          </div>
        </div>
      </div>

      <Script
        id='faq-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
