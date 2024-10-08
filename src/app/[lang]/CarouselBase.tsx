'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { LayoutGrid } from '../aceternityComponents/LayoutGrid';
import { defaultMultiple, infiScrollSettings, multipleRows } from '../scriptSettings/slickOptions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface CarouselBase {
  imageArray: any;
}
const CarouselBase = ({ imageArray }: CarouselBase) => {
  const prepGallery = Object.values(imageArray.photoGallery16pcs);

  const generateClassName = (index: number) => {
    if (index % 3 === 1) {
      return 'md:col-span-2';
    }
    return 'col-span-1';
  };

  const prepAceternityGal = prepGallery.map((galItem: any, index: number) => {
    const ind = index + 1;
    const className = generateClassName(ind);

    const card = {
      id: ind,
      content: 'Ciao',
      className: className,
      thumbnail: galItem.node.sourceUrl,
    };

    return card;
  });

  return (
    <section>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='w-full text-center text-7xl font-semibold pt-8'>Baza - Karuzel</h2>
        <div className='slider-container my-16'>
          <Slider {...infiScrollSettings}>
            {prepGallery.map((gal: any, index: number) => {
              return (
                <div key={index} className='relative h-[250px] w-full max-w-80'>
                  <Image
                    fill
                    src={gal.node.sourceUrl}
                    alt={gal.node.alt ?? 'Some image'}
                    className='object-cover object-center aspect-video block'
                  />
                </div>
              );
            })}
          </Slider>
        </div>

        <div className='slider-container my-16'>
          <Slider {...defaultMultiple}>
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
          </Slider>
        </div>

        <div className='slider-container my-16'>
          <Slider {...multipleRows}>
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
          </Slider>
        </div>
      </div>

      <div className='min-h-[1800px] h-screen py-20 w-full'>
        <LayoutGrid cards={prepAceternityGal} />
      </div>
    </section>
  );
};

export default CarouselBase;
