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
  author: any;
  intro: any;
  category: any[];
}
const PageContent = ({ content, global, gallery, files, tags, author, intro, category }: BlogPageContent) => {
  console.log('GGG', category);
  const prepareContent: any[] = Object.values(content);

  const prepareGallery = Object.values(gallery);

  const prepareTags =
    tags &&
    tags.split(', ').map((singleTag: string) => {
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
    <article className='mx-auto my-0 py-8'>
      <div className='w-full max-w-[1140px] mx-auto my-0 text-center'>
        <p className='text-base text-accent font-medium flex items-center justify-center gap-1'>
          <span>{author.node.name}</span>
          <span className='w-1 h-1 bg-accent rounded-full block'></span>
          <span>{dayjs(global.datum).format('DD.MM.YYYY')}</span>
        </p>
      </div>

      <h2 className='text-5xl font-bold max-w-sutraBlogTestMaxWidth mx-auto my-0 text-almost-black text-balance text-center'>
        {prepareContent[1]}
      </h2>

      <div className='prose prose-p:text-xl prose-p:text-secondary-dark line-clamp-1 w-full max-w-[40%] mx-auto  text-center my-4'>
        {parse(intro)}
      </div>

      <div className='w-full max-w-[1140px] mx-auto my-0 text-center pt-6 pb-12'>
        {category.map((cat) => {
          return (
            <span className=' bg-accent/10 text-accent px-3 py-1 rounded-[36px]' key={cat.catName}>
              {cat.catName}
            </span>
          );
        })}
      </div>

      <div className='w-full h-[250px] max-w-[1140px] mx-auto my-0 min-h-[640px] relative'>
        <Image
          src={global.naslovnaSlika.node.sourceUrl}
          alt='blog banner image'
          className='block object-cover object-center aspect-video'
          fill
        />
      </div>

      <div className='mt-4 prose max-w-sutraBlogTestMaxWidth mx-auto my-0'>
        <div className='text-primary-dark/50 line-clamp-4 w-full mx-auto  my-4'>{parse(intro)}</div>
        <div className='w-full bg-almost-black/5 h-px'></div>
        {parse(prepareContent[2])}
      </div>

      <div className='flex flex-wrap w-full gap-2'>
        {prepareGallery.map((galImage: any) => {
          return (
            galImage && (
              <div key={galImage.node.sourceUrl} className='h-[250px] w-[350px] relative'>
                <Image
                  src={galImage.node.sourceUrl ?? 'https://placehold.co/400.png'}
                  alt='gallery image'
                  fill
                  className='object-cover object-center aspect-auto block'
                />
              </div>
            )
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
        {prepareTags &&
          prepareTags.map((singTag: string) => {
            return <span key={singTag}>{singTag}</span>;
          })}
      </div>
    </article>
  );
};

export default PageContent;
