'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import parse from 'html-react-parser';

interface DokumentiKataloziInterface {
  pageContent: any;
  lang: any;
}
const DocumentsCatalogsSection = ({ pageContent, lang }: DokumentiKataloziInterface) => {
  console.log('PAG', pageContent);

  const l = getSuffixFromLang(lang);
  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>DokumentiKatalozi</h2>

        <div className='py-4'>
          {pageContent.map((cont: any) => {
            const sh = cont.node[`docsUpload${l}`];

            console.log(sh?.[l.toLowerCase()], 'a');

            return (
              <a
                key={cont.node.id}
                className='block'
                href={sh?.[l.toLowerCase()] ? sh?.[l.toLowerCase()].node.mediaItemUrl : 'nema linka na fajl'}
              >
                {sh?.[`nazivDokumenta${l}`] ? sh?.[`nazivDokumenta${l}`] : 'nema naziva fajla'}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentsCatalogsSection;
