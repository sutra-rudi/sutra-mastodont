import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';

interface WhatToVisitInterface {
  content: any;
  lang: any;
}

const PageContent = ({ content, lang }: WhatToVisitInterface) => {
  return (
    <section>
      <div className='mx-auto my-0 max-w-[1024px] py-8'>
        {content.map((cont: any) => {
          const sh = cont.node[`modulBazeTekstova${lang}`];

          const galShorthand = Object.values(cont.node.photoGallery.fotogalerija);

          return (
            <article key={cont.node.id}>
              <h2>{sh[`naslovBazaTekstova${lang}`]}</h2>
              <h3>{sh[`nadnaslovPodnaslovBazaTekstova${lang}`]}</h3>

              <div className='prose'>
                {sh[`tekstBazaTekstova${lang}`] ? parse(sh[`tekstBazaTekstova${lang}`]) : 'No content'}
              </div>

              <div className=''>
                <h2>gallery</h2>

                <div className='flex flex-wrap'>
                  {galShorthand.map((galItem: any, index) => {
                    return (
                      <div className='relative w-full max-w-[200px] h-[200px]' key={index}>
                        <Image fill src={galItem.node.sourceUrl ?? 'https://placehold.co/800.png'} alt='som img' />
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PageContent;
