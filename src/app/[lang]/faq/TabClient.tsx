'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import parse from 'html-react-parser';

interface TabClient {
  data: any;
  currentLang: any;
}

export default function TabClient({ data, currentLang }: TabClient) {
  const l = getSuffixFromLang(currentLang);

  const tabz = data.map((d: any) => d.node.title);

  const [currentActiveTab, setCurrentActiveTab] = React.useState(tabz[0]);
  return (
    <section>
      <div className='container px-4 mx-auto flex items-center justify-center lg:gap-12 md:gap-8 gap-4 flex-wrap lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl relative after:absolute after:left-0 md:after:-bottom-3 after:-bottom-4  after:bg-heading-color-light-mode dark:after:bg-heading-color-dark-mode after:h-px after:w-full after:opacity-25'>
        {data.map((d: any) => (
          <h4
            key={d.node.title}
            onClick={() => setCurrentActiveTab(d.node.title)}
            className={`relative block cursor-pointer xl:text-h4-xl lg:text-h4-desktop md:text-h4-tablet text-h4-mobile motion-ease-spring-smooth motion-duration-500  after:absolute after:w-full after:h-1 after:bg-heading-color-light-mode dark:after:bg-heading-color-dark-mode after:left-0 after:bottom-0 after:origin-center after:transition-all after:ease-in-out after:duration-500 ${
              d.node.title === currentActiveTab
                ? ' motion-text-in-heading-color-light-mode dark:motion-text-in-heading-color-dark-mode after:scale-100'
                : 'text-heading-color-light-mode/35 dark:text-heading-color-dark-mode/35 after:scale-0 hover:text-heading-color-light-mode dark:hover:text-heading-color-dark-mode transition-all ease-in-out'
            }`}
          >
            {d.node.title}
          </h4>
        ))}
      </div>
      <div className='lg:-mt--desktop---4xl md:-mt--tablet---4xl -mt--mobile---4xl'>
        {data.map((ds: any) => {
          return (
            ds.node[`text${l}`]?.[`sadrzajText${l}`] && (
              <article
                className={`${
                  ds.node.title === currentActiveTab ? 'motion-preset-slide-up-sm motion-ease-spring-bouncy' : 'hidden'
                } max-w-prose mx-auto px-4 lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl`}
              >
                <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-light-mode dark:text-heading-color-dark-mode'>
                  {ds.node[`text${l}`]?.[`naslov${l}`] ?? 'Nema naslova'}
                </h1>
                <div className='lg:prose-lg prose text-text-light-mode dark:text-text-dark-mode prose-headings:text-heading-color-light-mode dark:prose-headings:text-hero-heading-color-dark-mode'>
                  {parse(ds.node[`text${l}`]?.[`sadrzajText${l}`])}
                </div>
              </article>
            )
          );
        })}
      </div>
    </section>
  );
}
