import Image from 'next/image';
import React from 'react';

interface CarouselBase {
  imageArray: any;
}
const CarouselBase = ({ imageArray }: CarouselBase) => {
  const prepGallery = Object.values(imageArray.photoGallery16pcs);

  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Baza - Karuzel</h2>
        <div className='flex flex-wrap pt-4'>
          {prepGallery.map((gal: any, index: number) => {
            return (
              <div key={index} className='relative h-[250px] w-full max-w-80'>
                <Image
                  fill
                  src={gal.node.sourceUrl}
                  alt={gal.node.alt ?? 'Some image'}
                  className='object-cover object-center aspect-video block'
                  loading='lazy'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarouselBase;
