'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

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
    speed: 9000,
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
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

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
                    loading='lazy'
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
    </section>
  );
};

export default CarouselBase;
