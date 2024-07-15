'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { LayoutGrid } from '../aceternityComponents/LayoutGrid';

interface CarouselBase {
  imageArray: any;
}
const CarouselBase = ({ imageArray }: CarouselBase) => {
  const prepGallery = Object.values(imageArray.photoGallery16pcs);

  const infiScrollSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };

  const defaultMultiple = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const multipleRows = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };

  const prepAceternityGal = prepGallery.map((galItem: any, index: number) => {
    const generateClassName = () => {
      if (index + 1 !== 1) {
        console.log('ALO');
        return 'col-span-1';
      }

      if (index + 1 !== prepGallery.length - 2) {
        return 'col-span-1';
      } else return 'md:col-span-2';
    };
    const card: { id: number; content: JSX.Element | React.ReactNode | string; className: string; thumbnail: string } =
      {
        id: index + 1,
        content: 'Ciao',
        className: generateClassName(),
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
                    // loading='lazy'
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

      <div className='h-screen py-20 w-full'>
        <LayoutGrid cards={prepAceternityGal} />
      </div>
    </section>
  );
};

export default CarouselBase;
