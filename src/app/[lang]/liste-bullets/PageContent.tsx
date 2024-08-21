'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import slugify from 'slugify';

interface ListePageContent {
  pageContent: any[];
  lang: string;
  baseURL: string;
}

const PageContent = ({ pageContent, lang, baseURL }: ListePageContent) => {
  const l = getSuffixFromLang(lang);

  const basePath = React.useMemo(() => `${baseURL}icons-list/`, [baseURL]);

  return (
    <section className='w-full px-12 py-16'>
      <div className='w-full max-w-[1440px] mx-auto my-0 grid grid-cols-2 gap-4 gap-y-8 place-items-start'>
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

                      const cmsImgPath = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];
                      const cmsClrPath = nodeCont.node.ikona.odabirBojeZaDefaultIkone[0];
                      const slugCrl = slugify(cmsClrPath, { lower: true });

                      const fullURL = `${basePath}${cmsImgPath}-${slugCrl}.svg`;

                      return (
                        <li key={index} className='w-full flex items-center justify-start gap-3'>
                          {triageOfIcons === 'Dodaj svoju ikonu' && imgShorthand ? (
                            <picture>
                              <img src={imgShorthand} alt='' className='w-6 h-6 object-cover object-center' />
                            </picture>
                          ) : (
                            <picture>
                              <img src={fullURL} alt='' className='w-6 h-6 object-cover object-center' />
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

                      const clrPath = `!bg-${clr[0]}`;

                      return (
                        <li key={index} className='flex items-center justify-start gap-3'>
                          <span className={`${clrPath} rounded-full w-6 h-6  flex items-center justify-center`}>
                            {index + 1}
                          </span>
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
