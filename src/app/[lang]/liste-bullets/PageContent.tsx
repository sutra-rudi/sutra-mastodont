'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';

interface ListePageContent {
  pageContent: any[];
  lang: string;
}

const PageContent = ({ pageContent, lang }: ListePageContent) => {
  console.log('LISTE PAGE CONTENT', pageContent);

  const l = getSuffixFromLang(lang);
  return (
    <section>
      <div className='w-full max-w-[1440px] mx-auto my-0 grid grid-cols-2 gap-4 place-items-start'>
        {pageContent &&
          pageContent.map((nodeCont: any) => {
            const contentFieldMaster = `lista${l}`;
            const contentField = nodeCont.node[contentFieldMaster][`listaSadrzaj${l}`];
            const listaContent = contentField.split('\r\n');

            const triageOfIcons = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];
            return (
              <div key={nodeCont.node.title}>
                <h2 className='text-2xl font-medium'>{nodeCont.node.title}</h2>

                {triageOfIcons !== 'Brojevi' ? (
                  <ul className='flex items-start flex-col gap-2 appearance-none'>
                    {listaContent.map((list: any, index: number) => {
                      const imgShorthand = nodeCont.node.ikona.svgListIcon
                        ? nodeCont.node.ikona.svgListIcon.node.sourceUrl
                        : null;

                      console.log('TRIJAZA', triageOfIcons);
                      return (
                        <li key={index} className='w-full flex items-center justify-start gap-3'>
                          {triageOfIcons === 'Dodaj svoju ikonu' && imgShorthand && (
                            <picture>
                              <img src={imgShorthand} alt='' className='w-6 h-6 object-cover object-center' />
                            </picture>
                          )}
                          <span className='text-base font-normal'>{list}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ol className='appearance-none flex items-start flex-col gap-2'>
                    {listaContent.map((list: any, index: number) => {
                      const clr = nodeCont.node.ikona.odabirBojeZaDefaultIkone;
                      console.log('KOLOR', clr);
                      return (
                        <li key={index} className='flex items-center justify-start gap-3'>
                          <span className={`${'bg-' + clr[0]} rounded-full w-6 h-6  flex items-center justify-center`}>
                            {index + 1}
                          </span>{' '}
                          {list}
                        </li>
                      );
                    })}
                  </ol>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default PageContent;