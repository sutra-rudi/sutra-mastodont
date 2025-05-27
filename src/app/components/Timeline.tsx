//@ts-nocheck

import React from 'react';
import dataset from '../staticData/staticQueryData.json';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
const findData = dataset.data.allTimeline.edges;

interface Timeline {
  currentLang: any;
}
export default function Timeline({ currentLang }: Timeline) {
  const l = getSuffixFromLang(currentLang);
  return (
    <section className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl w-full h-full'>
      <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] w-full text-center lg:mb-20 mb-[60px]'>
        Timeline
      </h2>
      <div className='container px-4 mx-auto'>
        <ol className='relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-primarna-tamna/5'>
          {findData
            .sort(
              (a, b) =>
                dayjs(a.node.uvodTimeline.uvodTimeline.datum).unix() -
                dayjs(b.node.uvodTimeline.uvodTimeline.datum).unix()
            )
            .map((d) => {
              return (
                <li key={d.node.id} className='group relative grid grid-cols-2 odd:-me-3 even:-ms-3'>
                  <div className='relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last'>
                    <span className='size-3 shrink-0 rounded-full bg-primarna-tamna'></span>
                    <div className='-mt-2'>
                      <time
                        dateTime={d.node.uvodTimeline.uvodTimeline.datum}
                        className='font-medium lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile text-nadnaslov-color-light-mode'
                      >
                        {dayjs(d.node.uvodTimeline.uvodTimeline.datum).format('DD/MM/YYYY')}
                      </time>

                      <h3 className='font-bold lg:text-h3-desktop md:text-h3-tablet text-h3-mobile text-heading-color-light-mode'>
                        {d.node[`timeline${l}`]?.[`timelineSadrzaj${l}`].naslov}
                      </h3>

                      {d.node[`timeline${l}`]?.[`timelineSadrzaj${l}`].sadrzaj && (
                        <div className='lg:prose prose-sm mt-0.5 prose-p:text-text-light-mode prose-headings:text-heading-color-light-mode'>
                          {parse(d.node[`timeline${l}`]?.[`timelineSadrzaj${l}`].sadrzaj)}
                        </div>
                      )}

                      <picture>
                        <img
                          src={
                            d.node.uvodTimeline.uvodTimeline.slika
                              ? d.node.uvodTimeline.uvodTimeline.slika.node.sourceUrl
                              : 'https://mastodont-2.sutra-cms.com/Sutra-ftp/other/CMS_Image_Placeholder.jpg'
                          }
                          alt={`Timeline picture - ${d.node[`timeline${l}`]?.[`timelineSadrzaj${l}`].naslov}`}
                          className='max-h-[400px] w-full object-cover object-center block aspect-auto'
                        />
                      </picture>
                    </div>
                  </div>
                  <div aria-hidden='true'></div>
                </li>
              );
            })}
        </ol>
      </div>
    </section>
  );
}
