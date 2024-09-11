'use client';

import Image from 'next/image';
import parse from 'html-react-parser';
import Link from 'next/link';

interface LegalInfoInterface {
  intro: any;
  pageContent: any;
}

const PageContent = ({ intro, pageContent }: LegalInfoInterface) => {
  const imgSource = intro.slikaLegal.node ? intro.slikaLegal.node.sourceUrl : 'https://placehold.co/800.png';

  const downloadFile = async (url: any, fileName: any) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error('Error while downloading file:', error);
    }
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

      <div className='proza-custom-blog prose-blockquote:border-accent prose-blockquote:text-2xl prose-blockquote:font-medium prose-img:mb-0 prose-figcaption:mt-1 prose-figcaption:italic lg:prose-base prose-sm  prose-strong:font-semibold'>
        {pageContent.content ? parse(pageContent.content) : <h2>No content</h2>}
      </div>

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
