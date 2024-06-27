'use client';

import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';

interface LegalInfoInterface {
  intro: any;
  pageContent: any;
}

const PageContent = ({ intro, pageContent }: LegalInfoInterface) => {
  const imgSource = intro.slikaLegal.node ? intro.slikaLegal.node.sourceUrl : 'https://placehold.co/800.png';

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
    <article className='mx-auto my-0 max-w-[1024px] py-4'>
      <div className='w-full h-[300px] relative'>
        <Image src={imgSource} alt='legal-info-image' fill />
      </div>

      <div className='py-4'>
        <h2 className='font-bold'>{pageContent.title}</h2>
        <h3 className='font-semibold'>{pageContent.subtitle}</h3>
      </div>

      <div className=''>{pageContent.content ? parse(pageContent.content) : <h2>No content</h2>}</div>

      <div className='py-4'>
        <h3 className='font-semibold'>Dokumenti</h3>

        <div className='flex justify-between'>
          <button
            onClick={() => downloadFile(intro.dokumentLegal.node.mediaItemUrl, intro.dokumentLegal.node.title)}
            className=''
          >
            <p>Preuzmi {intro.dokumentLegal.node.title}</p>
          </button>

          <Link href={intro.vanjskaPoveznicaLegal}>{`Visit us at: ${intro.vanjskaPoveznicaLegal}`}</Link>
        </div>
      </div>
    </article>
  );
};

export default PageContent;
