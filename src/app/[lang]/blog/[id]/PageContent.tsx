'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';

interface BlogPageContent {
  content: any;
  global: any;
  gallery: any;
  files: any;
  tags: any;
}
const PageContent = ({ content, global, gallery, files, tags }: BlogPageContent) => {
  const prepareContent: any[] = Object.values(content);
  const prepareGallery = Object.values(gallery);
  console.log('FAJLOVI', global);
  const prepareTags = tags.split(',').map((singleTag: string) => {
    return `#${singleTag.trim()}`;
  });

  const downloadFile = (url: string, fileName: string) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error while downloading file:', error));
  };

  return (
    <article className='mx-auto my-0 max-w-[1024px] py-8'>
      <div className='w-full h-[250px] relative'>
        <Image
          src={global.naslovnaSlika.node.sourceUrl}
          alt='blog banner image'
          className='block object-cover object-center aspect-video'
          fill
        />
      </div>

      <h4 className='text-4xl font-bold'>{dayjs(global.datum).format('DD.MM.YYYY')}</h4>
      <h4>Kategorija: {global.kategorija.edges[0].node.name}</h4>
      <h2 className='text-6xl font-bold'>{prepareContent[1]}</h2>
      <div className='mt-4 grid grid-cols-1 gap-2'>{parse(prepareContent[2])}</div>

      <div className='flex flex-wrap w-full gap-2'>
        {prepareGallery.map((galImage: any) => {
          return (
            <div key={galImage.node.sourceUrl} className='h-[250px] w-[350px] relative'>
              <Image
                src={galImage.node.sourceUrl}
                alt='gallery image'
                fill
                className='object-cover object-center aspect-auto block'
              />
            </div>
          );
        })}
      </div>

      <div className=''>
        <h4>Dokumenti</h4>
        <button onClick={() => downloadFile(files.file.node.mediaItemUrl, files.fileName)}>
          Preuzmi {files.fileName}
        </button>
      </div>

      <div className='flex gap-1'>
        {prepareTags.map((singTag: string) => {
          return <span key={singTag}>{singTag}</span>;
        })}
      </div>
    </article>
  );
};

export default PageContent;
