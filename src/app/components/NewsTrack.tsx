'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';
import { IoIosClose as CloseButton } from 'react-icons/io';
import dayjs from 'dayjs';

interface ObavijestiNaStraniciInterface {
  pageContent: any;
  lang: any;
}

const NewsTrack = ({ pageContent, lang }: ObavijestiNaStraniciInterface) => {
  function filtrirajObavijesti(obavijesti: any) {
    const filtriraneObavijesti: any[] = [];

    pageContent &&
      obavijesti.forEach((obavijest: any) => {
        if (filtriraneObavijesti.length === 0) {
          filtriraneObavijesti.push(obavijest.node);
        } else {
          const zadnjaObavijest = filtriraneObavijesti[filtriraneObavijesti.length - 1];

          // Provjeri preklapanje
          const preklapaSe = dayjs(obavijest.node.obavijestiInterventne.datumIVrijemeObjave).isBefore(
            dayjs(zadnjaObavijest.obavijestiInterventne.datumIVrijemeKrajaObjave)
          );

          if (preklapaSe) {
            // Ako se preklapaju, zadrži onu koja završava ranije
            if (
              dayjs(obavijest.node.obavijestiInterventne.datumIVrijemeKrajaObjave).isBefore(
                dayjs(zadnjaObavijest.obavijestiInterventne.datumIVrijemeKrajaObjave)
              )
            ) {
              filtriraneObavijesti[filtriraneObavijesti.length - 1] = obavijest.node;
            }
          } else {
            filtriraneObavijesti.push(obavijest.node);
          }
        }
      });

    return filtriraneObavijesti;
  }

  const filtriraneObavijesti = filtrirajObavijesti(pageContent);

  const l = getSuffixFromLang(lang);

  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <div className='fixed bottom-4 left-0 right-0 z-40 w-full justify-center hidden'>
      <div className='w-full max-w-screen-lg px-4'>
        {filtriraneObavijesti.map((contentShorthand: any, index: number) => {
          const notificationToShow = contentShorthand.statusAtivacijePoJezicima[`aktivator${l}`];
          const currentTextContent = {
            naslov: contentShorthand[`text${l}`]?.[`naslov${l}`],
            sadrzaj: contentShorthand[`text${l}`]?.[`sadrzajText${l}`],
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }} // Početni stil
              animate={{ opacity: 1, y: 0 }} // Stil kad se animira
              transition={{ duration: 0.5, ease: 'easeInOut' }} // Trajanje i vrsta animacije
              style={{ background: contentShorthand.obavijestiInterventne.odabirAkcijskeBoje }}
              className={`w-full mx-auto px-4 py-2 rounded-sutraObavijestTrakaRadius flex items-center justify-between ${
                !isOpen && 'hidden'
              } ${!notificationToShow && 'hidden'}`}
            >
              <div className='flex self-center items-center gap-6 w-full'>
                <h2 className='text-sm font-semibold text-almost-white'>{currentTextContent.naslov ?? 'ciaos'}</h2>
                <div className='flex items-center gap-3'>
                  {currentTextContent.sadrzaj && (
                    <div className='line-clamp-1 text-xs max-w-[60ch] w-full'>{parse(currentTextContent.sadrzaj)}</div>
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
              </div>

              <div
                className='justify-self-end px-5 cursor-pointer group hover:scale-110 transition-all ease-in'
                onClick={() => setIsOpen(false)}
              >
                <CloseButton className=' text-almost-white text-xl group-hover:scale-110 transition-all ease-out' />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsTrack;
