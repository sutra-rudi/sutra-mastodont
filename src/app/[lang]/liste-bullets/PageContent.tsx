'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import Image from 'next/image';
import React from 'react';
import slugify from 'slugify';

interface ListePageContent {
  pageContent: any[];
  lang: string;
  baseURL: string;
  adminLists: any[];
}

const PageContent = ({ pageContent, lang, baseURL, adminLists }: ListePageContent) => {
  const l = getSuffixFromLang(lang);

  const basePath = React.useMemo(() => `${baseURL}icons-list/`, [baseURL]);

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(() => checkDarkMode());

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className='w-full px-12 py-16'>
      <h2 className='w-full text-3xl font-medium text-center py-8 text-primarna-tamna dark:text-primarna-svijetla'>
        Admin liste
      </h2>
      <div className='w-full max-w-[1440px] mx-auto my-0 grid grid-cols-2 gap-4 gap-y-8 place-items-start'>
        {adminLists &&
          adminLists.map((nodeCont: any) => {
            const contentFieldMaster = `lista${l}`;
            const contentField = nodeCont.node[contentFieldMaster][`listaSadrzaj${l}`];
            const listaContent = contentField.split('\r\n');

            const triageOfIcons = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];

            const introField = nodeCont.node[contentFieldMaster][`listaUvod${l}`];
            return (
              <div key={nodeCont.node.title}>
                {/* <h2 className='text-2xl font-medium py-4 dark:text-primarna-svijetla'>{nodeCont.node.title}</h2> */}
                {introField.naslov && (
                  <div className='pt-4'>
                    <h3 className='text-2xl font-medium  dark:text-primarna-svijetla'>{introField.naslov}</h3>
                  </div>
                )}
                {introField.nadnaslovpodnaslovOpcionalno && (
                  <div className='pt-1'>
                    <h5 className='text-lg font-medium  dark:text-primarna-svijetla'>
                      {introField.nadnaslovpodnaslovOpcionalno}
                    </h5>
                  </div>
                )}

                {introField.uvodnaRecenica && (
                  <div className='pt-1'>
                    <p className='text-base font-medium  dark:text-primarna-svijetla'>{introField.uvodnaRecenica}</p>
                  </div>
                )}
                {triageOfIcons !== 'Brojevi' ? (
                  <ul className='flex items-start flex-col gap-2 appearance-none'>
                    {listaContent.map((list: any, index: number) => {
                      const imgShorthand = nodeCont.node.ikona.svgListIcon
                        ? nodeCont.node.ikona.svgListIcon.node.sourceUrl
                        : null;

                      const cmsImgPath = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];
                      const cmsClrPath = nodeCont.node.ikona.odabirBojeZaDefaultIkone[0];
                      const slugCrl =
                        isDarkMode && cmsClrPath === 'Primarna tamna'
                          ? slugify('Primarna svijetla', { lower: true })
                          : slugify(cmsClrPath, { lower: true });

                      const checkIfNumber = cmsImgPath.split('-')[0];

                      const fullURL = `${basePath}${cmsImgPath}-${slugCrl}.svg`;

                      return (
                        <li key={index} className='w-full flex items-center justify-start gap-3'>
                          {triageOfIcons === 'Dodaj svoju ikonu' && imgShorthand ? (
                            <picture>
                              <img
                                src={imgShorthand}
                                alt='image for list item'
                                className='w-6 h-6 object-cover object-center'
                              />
                            </picture>
                          ) : checkIfNumber === 'Broj' ? (
                            <div className='relative'>
                              <span className='absolute left-1/2 -translate-x-1/2 text-primarna-tamna dark:text-primarna-svijetla z-20'>
                                {index + 1}
                              </span>

                              <Image
                                src={fullURL}
                                width={24}
                                height={24}
                                className='object-cover object-center'
                                alt='list custom tag'
                              />
                            </div>
                          ) : (
                            <Image
                              src={fullURL}
                              width={24}
                              height={24}
                              className='object-cover object-center'
                              alt='list custom tag'
                            />
                          )}
                          <span className='text-base font-normal dark:text-primarna-svijetla'>{list}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ol className='appearance-none flex items-start flex-col gap-2'>
                    {listaContent.map((list: any, index: number) => {
                      const clr = nodeCont.node.ikona.odabirBojeZaDefaultIkone[0];

                      const clrPathDict = () => {
                        if (isDarkMode) {
                          return 'accent';
                        } else {
                          if (clr === 'Akcentna') {
                            return 'accent';
                          }
                          if (clr === 'Primarna tamna') {
                            return 'primarna-tamna';
                          }
                          if (clr === 'Primarna svijetla') {
                            return 'primarna-svijetla';
                          }
                        }
                      };

                      return (
                        <li key={index} className='flex items-center justify-start gap-3 dark:text-primarna-svijetla'>
                          <span
                            className={`bg-${clrPathDict()} rounded-full w-6 h-6  flex items-center justify-center ${
                              clrPathDict() === 'primarna-tamna' && 'text-primarna-svijetla dark:text-primarna-tamna'
                            }`}
                          >
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
      <h2 className='w-full text-3xl font-medium text-center py-8 text-primarna-tamna dark:text-primarna-svijetla'>
        Ostale liste
      </h2>
      <div className='w-full max-w-[1440px] mx-auto my-0 grid grid-cols-2 gap-4 gap-y-8 place-items-start'>
        {pageContent &&
          pageContent.map((nodeCont: any) => {
            const contentFieldMaster = `lista${l}`;
            const contentField = nodeCont.node[contentFieldMaster][`listaSadrzaj${l}`];
            const listaContent = contentField.split('\r\n');

            const triageOfIcons = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];

            const introField = nodeCont.node[contentFieldMaster][`listaUvod${l}`];
            return (
              <div key={nodeCont.node.title}>
                {/* <h2 className='text-2xl font-medium py-4 dark:text-primarna-svijetla'>{nodeCont.node.title}</h2> */}
                {introField.naslov && (
                  <div className='pt-4'>
                    <h3 className='text-2xl font-medium  dark:text-primarna-svijetla'>{introField.naslov}</h3>
                  </div>
                )}
                {introField.nadnaslovpodnaslovOpcionalno && (
                  <div className='pt-1'>
                    <h5 className='text-lg font-medium  dark:text-primarna-svijetla'>
                      {introField.nadnaslovpodnaslovOpcionalno}
                    </h5>
                  </div>
                )}

                {introField.uvodnaRecenica && (
                  <div className='pt-1'>
                    <p className='text-base font-medium  dark:text-primarna-svijetla'>{introField.uvodnaRecenica}</p>
                  </div>
                )}
                {triageOfIcons !== 'Brojevi' ? (
                  <ul className='flex items-start flex-col gap-2 appearance-none'>
                    {listaContent.map((list: any, index: number) => {
                      const imgShorthand = nodeCont.node.ikona.svgListIcon
                        ? nodeCont.node.ikona.svgListIcon.node.sourceUrl
                        : null;

                      const cmsImgPath = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];
                      const cmsClrPath = nodeCont.node.ikona.odabirBojeZaDefaultIkone[0];
                      const slugCrl =
                        isDarkMode && cmsClrPath === 'Primarna tamna'
                          ? slugify('Primarna svijetla', { lower: true })
                          : slugify(cmsClrPath, { lower: true });

                      const checkIfNumber = cmsImgPath.split('-')[0];

                      const fullURL = `${basePath}${cmsImgPath}-${slugCrl}.svg`;

                      return (
                        <li key={index} className='w-full flex items-center justify-start gap-3'>
                          {triageOfIcons === 'Dodaj svoju ikonu' && imgShorthand ? (
                            <picture>
                              <img
                                src={imgShorthand}
                                alt='image for list item'
                                className='w-6 h-6 object-cover object-center'
                              />
                            </picture>
                          ) : checkIfNumber === 'Broj' ? (
                            <div className='relative'>
                              <span className='absolute left-1/2 -translate-x-1/2 text-primarna-tamna dark:text-primarna-svijetla z-20'>
                                {index + 1}
                              </span>
                              <picture>
                                <img src={fullURL} className='w-6 h-6 object-cover object-center' alt='' />
                              </picture>
                            </div>
                          ) : (
                            <picture>
                              <img
                                src={fullURL}
                                alt='image for list item'
                                className='w-6 h-6 object-cover object-center'
                              />
                            </picture>
                          )}
                          <span className='text-base font-normal dark:text-primarna-svijetla'>{list}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ol className='appearance-none flex items-start flex-col gap-2'>
                    {listaContent.map((list: any, index: number) => {
                      const clr = nodeCont.node.ikona.odabirBojeZaDefaultIkone[0];

                      const clrPathDict = () => {
                        if (isDarkMode) {
                          return 'accent';
                        } else {
                          if (clr === 'Akcentna') {
                            return 'accent';
                          }
                          if (clr === 'Primarna tamna') {
                            return 'primarna-tamna';
                          }
                          if (clr === 'Primarna svijetla') {
                            return 'primarna-svijetla';
                          }
                        }
                      };

                      return (
                        <li key={index} className='flex items-center justify-start gap-3 dark:text-primarna-svijetla'>
                          <span
                            className={`bg-${clrPathDict()} rounded-full w-6 h-6  flex items-center justify-center ${
                              clrPathDict() === 'primarna-tamna' && 'text-primarna-svijetla dark:text-primarna-tamna'
                            }`}
                          >
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
