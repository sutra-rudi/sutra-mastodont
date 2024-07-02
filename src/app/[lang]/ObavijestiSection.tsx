import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';

interface ObavijestiNaStraniciInterface {
  pageContent: any;
  lang: any;
}
const ObavijestiSection = ({ pageContent, lang }: ObavijestiNaStraniciInterface) => {
  const l = getSuffixFromLang(lang);
  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Obavijesti</h2>

        <div className='py-4'>
          {pageContent.map((cont: any) => {
            const sh = cont.node.obavijestiInterventne;

            const sht = cont.node[`text${l}`];
            return (
              <div className='' key={cont.node.id}>
                <h2>{sht[`naslov${l}`] ?? 'Nema naslova'}</h2>

                <div className='prose'>{sht[`sadrzajText${l}`] ? parse(sht[`sadrzajText${l}`]) : 'Nema sadržaja'}</div>

                <span>
                  {dayjs(sh.datumIVrijemeObjave).format('DD.MM.YYYY') +
                    '-' +
                    dayjs(sh.datumIVrijemeKrajaObjave).format('DD.MM.YYYY')}
                </span>

                <p
                  className={``}
                  style={{
                    color: sh.odabirAkcijskeBoje,
                  }}
                >
                  BOJA
                </p>

                <Image
                  src={sh.obavijestiPngSlikaIliIkona.node.sourceUrl ?? 'https://placehold.co/400.png'}
                  width={300}
                  height={300}
                  alt='some imag'
                />

                <a href={sh.linkNaKojiVodiObavijestOpcionalno ?? '/'}>
                  {sh.linkNaKojiVodiObavijestOpcionalno ?? 'Nema linka'}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObavijestiSection;
