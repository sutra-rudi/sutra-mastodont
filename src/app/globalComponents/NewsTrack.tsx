'use client';

import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';
import { IoIosClose as CloseButton } from 'react-icons/io';
import dayjs from 'dayjs';
// import { metropolisFont } from '../ui/fonts';
import Marquee from 'react-fast-marquee';

interface ObavijestiNaStraniciInterface {
  pageContent: any;
  lang: any;
}

const NewsTrack = ({ pageContent, lang }: ObavijestiNaStraniciInterface) => {
  function filtrirajObavijesti(obavijesti: any) {
    const filtriraneObavijesti: any[] = [];

    // Proveravamo da li `pageContent` postoji kako bismo nastavili sa filtriranjem
    pageContent &&
      obavijesti.forEach((obavijest: any) => {
        const datumIVrijemeObjave = dayjs(obavijest.node.obavijestiInterventne.datumIVrijemeObjave); // Početni datum obavijesti
        const datumIVrijemeKrajaObjave = dayjs(obavijest.node.obavijestiInterventne.datumIVrijemeKrajaObjave); // Krajnji datum obavijesti

        // Uslov 1: Obavijest mora biti objavljena danas ili ranije
        if (datumIVrijemeObjave.isBefore(dayjs().endOf('day'))) {
          // Uslov 2: Obavijest ne sme biti istekla
          if (datumIVrijemeKrajaObjave.isAfter(dayjs().startOf('day'))) {
            if (filtriraneObavijesti.length === 0) {
              // Ako još nema obavijesti, dodajemo trenutnu
              filtriraneObavijesti.push(obavijest.node);
            } else {
              const zadnjaObavijest = filtriraneObavijesti[filtriraneObavijesti.length - 1];
              const zadnjaKraj = dayjs(zadnjaObavijest.obavijestiInterventne.datumIVrijemeKrajaObjave);

              // Proveravamo da li se obavijesti preklapaju
              const preklapaSe = datumIVrijemeObjave.isBefore(zadnjaKraj);

              if (preklapaSe) {
                // Ako se preklapaju, prikazujemo onu sa novijim krajnjim datumom
                if (datumIVrijemeKrajaObjave.isAfter(zadnjaKraj)) {
                  filtriraneObavijesti[filtriraneObavijesti.length - 1] = obavijest.node;
                }
              } else {
                // Ako se ne preklapaju, dodajemo novu obavijest
                filtriraneObavijesti.push(obavijest.node);
              }
            }
          }
        }
      });

    return filtriraneObavijesti;
  }

  const filtriraneObavijesti = filtrirajObavijesti(pageContent);

  const l = getSuffixFromLang(lang);

  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    isOpen && (
      <div
        className={`absolute hidden  max-w-full overflow-hidden left-0 right-0 top-[0] motion-preset-slide-down z-40 justify-center bg-accent-boja motion-ease-spring-smooth motion-delay-300 md:py-4 py-2`}
      >
        {filtriraneObavijesti.map((contentShorthand: any, index: number) => {
          const notificationToShow = contentShorthand.statusAtivacijePoJezicima[`aktivator${l}`];
          const currentTextContent = {
            naslov: contentShorthand[`text${l}`]?.[`naslov${l}`],
            sadrzaj: contentShorthand[`text${l}`]?.[`sadrzajText${l}`],
          };

          return (
            <div
              key={index}
              className={`${'metropolisFont.className'}  w-full max-w-[1300px] relative mx-auto lg:px-4 rounded-sutraObavijestTrakaRadius flex items-center justify-center ${
                !isOpen && 'hidden'
              } ${!notificationToShow && 'hidden'}`}
            >
              <div className='flex self-center items-center gap-6 '>
                <h2
                  className={`lg:block hidden xl:text-text-base-base-xl lg:text-text-base-base-desktop md:text-text-base-base-tablet text-text-base-base-mobile text-sekundarna-tamna/80 !font-bold`}
                >
                  {currentTextContent.naslov ?? ''}
                </h2>
                <div className='flex items-center gap-3'>
                  {currentTextContent.sadrzaj && (
                    <>
                      <div className='lg:block hidden line-clamp-1 xl:text-text-base-base-xl lg:text-text-base-base-desktop md:text-text-base-base-tablet text-text-base-base-mobile text-sekundarna-tamna/80'>
                        {parse(currentTextContent.sadrzaj)}
                      </div>

                      <div className='lg:hidden block'>
                        <Marquee className='flex self-center items-center gap-6'>
                          <h2
                            className={`xl:text-text-base-l-xl lg:text-text-base-l-desktop md:text-text-base-l-tablet text-text-base-l-mobile text-sekundarna-tamna/80 !font-bold pr-2`}
                          >
                            {currentTextContent.naslov ?? ''}
                          </h2>
                          <div className='line-clamp-1 xl:text-text-base-base-xl lg:text-text-base-base-desktop md:text-text-base-base-tablet text-text-base-base-mobile text-sekundarna-tamna/80'>
                            {parse(currentTextContent.sadrzaj)}
                          </div>
                        </Marquee>
                      </div>
                    </>
                  )}
                  {contentShorthand.obavijestiInterventne.linkNaKojiVodiObavijestOpcionalno && (
                    <div>
                      <a
                        href={contentShorthand.obavijestiInterventne.linkNaKojiVodiObavijestOpcionalno}
                        className='text-xs text-almost-white underline font-normal'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Saznaj više
                      </a>
                    </div>
                  )}
                </div>

                <div
                  className='md:absolute right-0 lg:block hidden px-5 cursor-pointer group hover:scale-110 transition-all ease-in '
                  onClick={() => setIsOpen(false)}
                >
                  <CloseButton className=' text-sekundarna-tamna text-4xl  group-hover:scale-110 transition-all ease-out ' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default NewsTrack;
