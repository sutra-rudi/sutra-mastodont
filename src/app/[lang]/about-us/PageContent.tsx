'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';

interface AboutUsPageContent {
  content: any;
  title: any;
  hero: any;
  gallery: any;
}
const PageContent = ({ content, title, gallery, hero }: AboutUsPageContent) => {
  return (
    <article className='mx-auto my-0 max-w-[1024px] py-4'>
      <div className='w-full h-[250px] relative'>
        <Image
          src={hero.glavnaSlikaNaslovnaSlika ? hero.glavnaSlikaNaslovnaSlika : 'https://placehold.co/800.png'}
          alt='blog banner image'
          className='block object-cover object-center aspect-video'
          fill
        />
      </div>

      <h2 className='text-6xl font-bold'>{title.oNamaNaslovHeroSekcija}</h2>
      <h4 className='text-3xl font-bold'>{title.oNamaHeroSekcijaTekstIspodNaslova}</h4>

      <div className='py-8'>
        <h4 className='font-bold'>{content.oNamaNaslov1Pasus}</h4>
        <h4 className='font-semibold'>{content.oNamaNadnaslovPodnaslov1}</h4>
        <div className='py-4'>{parse(content.sadrzaj1)}</div>
      </div>

      <div className='py-8'>
        <h4 className='font-bold'>{content.oNamaNaslov2Pasus}</h4>
        <h4 className='font-semibold'>{content.oNamaNadnaslovPodnaslov2}</h4>
        <div className='py-4'> {content.oNamaSadrzaj2 ? parse(content.oNamaSadrzaj2) : <p>Nema sadrzaja</p>}</div>
      </div>

      <div className='py-8'>
        <h4 className='font-bold'>{content.oNamaNaslov3Pasus}</h4>
        <h4 className='font-semibold'>{content.oNamaNadnaslovPodnaslov3}</h4>
        <div className='py-4'>{content.oNamaSadrzaj3 ? parse(content.oNamaSadrzaj3) : <p>Nema sadrzaja</p>}</div>
      </div>

      <h3>Gallery</h3>
      <div className='flex flex-wrap w-full gap-2'>
        {gallery.map((galImage: any) => {
          return (
            galImage && (
              <div key={galImage.node.sourceUrl} className='h-[250px] w-[350px] relative'>
                <Image
                  src={galImage.node.sourceUrl}
                  alt='gallery image'
                  fill
                  className='object-cover object-center aspect-auto block'
                />
              </div>
            )
          );
        })}
      </div>

      {/* <div className=''>
        <h4>Dokumenti</h4>
        <button onClick={() => downloadFile(files.file.node.mediaItemUrl, files.fileName)}>
          Preuzmi {files.fileName}
        </button>
      </div>

      <div className='flex gap-1'>
        {prepareTags &&
          prepareTags.map((singTag: string) => {
            return <span key={singTag}>{singTag}</span>;
          })}
      </div> */}
    </article>
  );
};

export default PageContent;
