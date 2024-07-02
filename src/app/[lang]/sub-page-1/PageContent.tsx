import parse from 'html-react-parser';
import Image from 'next/image';
import React from 'react';

interface SubPageOneInterface {
  content: any;
}

const PageContent = ({ content }: SubPageOneInterface) => {
  const galleryShort = content.intro;
  const imgSource1 = galleryShort.slika1 ? galleryShort.slika1.node.sourceUrl : 'https://placehold.co/400.png';
  const imgSource2 = galleryShort.slika2 ? galleryShort.slika2.node.sourceUrl : 'https://placehold.co/400.png';

  const prepareGallery = Object.values(content.gallery);

  return (
    <article className='mx-auto my-0 max-w-[1024px] py-8'>
      <div className='py-4 flex '>
        <div className='relative h-[250px] w-full'>
          <Image src={imgSource1} alt='first img' fill />
        </div>
        <div className='relative h-[250px] w-full'>
          <Image src={imgSource2} alt='second img' fill />
        </div>
      </div>

      <div className='py-4'>
        <h2 className='font-bold text-3xl'>{content.pageCont.title}</h2>
        <h4 className='font-semibold text-2xl'>{content.pageCont.subtitle}</h4>
      </div>

      <div className='py-4 prose'>{content.pageCont.pageContent && parse(content.pageCont.pageContent)}</div>

      <div className='py-4'>
        <div className='flex flex-wrap gap-2 '>
          {prepareGallery.map((galItem: any, index: number) => {
            return (
              galItem && (
                <div className='w-full h-[200px] max-w-[250px] relative' key={index}>
                  <Image
                    src={galItem.node.sourceUrl}
                    alt='gal image'
                    fill
                    className='object-cover object-center aspect-square block'
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default PageContent;
