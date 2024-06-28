'use client';
import React from 'react';
import parse from 'html-react-parser';

interface CompanyInfoInterface {
  content: any;
}

const PageContent = ({ content }: CompanyInfoInterface) => {
  return (
    <article className='mx-auto my-0 max-w-[1024px] py-4'>
      <div className='py-4 grid grid-cols-1 gap-2'>
        <h2 className='font-bold text-3xl text-center'>
          {content[0].content.naslovTekstaSDvijeKolumne ?? 'Nema naslova'}
        </h2>

        <div className='flex justify-between gap-8 py-8'>
          <p>
            {content[0].content.sadrzajTextLijevaKolumna
              ? parse(content[0].content.sadrzajTextLijevaKolumna)
              : 'No content'}
          </p>
          <p>
            {content[0].content.sadrzajTextDesnaKolumna
              ? parse(content[0].content.sadrzajTextDesnaKolumna)
              : 'No content'}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PageContent;
