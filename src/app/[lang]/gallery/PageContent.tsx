'use client';

import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Slider from 'react-slick';

import {
  carusel1Images,
  carusel2Images,
  carusel3Images,
  carusel4Images,
  carusel5Images,
} from '@/app/pathsUtils/mediaImportsDynamic';
import { defaultMultiple, infiScrollSettings, multipleRows } from '@/app/scriptSettings/slickOptions';

// Pripremamo slike za osnovni prikaz
const imageArray1 = Object.keys(carusel1Images).map((key) => {
  const imageUrl = carusel1Images[key as keyof typeof carusel1Images];
  return (
    <picture key={key} className='w-full h-auto'>
      <source srcSet={imageUrl} />
      <img src={imageUrl} alt={`carousel image ${key}`} className='w-full h-auto object-cover' />
    </picture>
  );
});

// Pripremamo slike za react-grid-gallery
const imageArray2 = Object.keys(carusel2Images).map((key) => {
  const imageUrl = carusel2Images[key as keyof typeof carusel2Images];
  return {
    src: imageUrl,
    thumbnail: imageUrl,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: `carousel image ${key}`,
    customOverlay: (
      <div className='custom-overlay__caption'>
        <span>{`karuzel slika ${key}`}</span>
      </div>
    ),
    width: 800,
    height: 650,
  };
});

// Pripremamo slike za lightbox
const slides = Object.keys(carusel3Images).map((key) => {
  const imageUrl = carusel3Images[key as keyof typeof carusel3Images];
  return {
    src: imageUrl,
    width: 800,
    height: 650,
  };
});

// Pripremamo slike za react-slick
const slickImages = Object.keys(carusel4Images).map((key) => {
  const imageUrl = carusel4Images[key as keyof typeof carusel4Images];
  return (
    <picture key={key} className='w-full h-auto'>
      <img src={imageUrl} alt={`carousel image ${key}`} className='w-full h-auto object-cover' />
    </picture>
  );
});

const slickImagesInfi = Object.keys(carusel5Images).map((key) => {
  const imageUrl = carusel5Images[key as keyof typeof carusel4Images];
  return (
    <picture key={key} className='w-full h-auto'>
      <img src={imageUrl} alt={`carousel image ${key}`} className='w-full h-auto object-cover' />
    </picture>
  );
});

// Slike za Masonry galeriju
const masonryImages = Object.keys(carusel3Images).map((key) => {
  const imageUrl = carusel3Images[key as keyof typeof carusel3Images];
  return {
    src: imageUrl,
    alt: `masonry image ${key}`,
  };
});

const PageContent = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);

  return (
    <div className='p-4'>
      {/* Osnovni prikaz slika */}
      <div className='flex flex-col gap-2 items-center justify-center'>
        <h2 className='font-bold mb-4 text-center text-4xl'>Basic galerija</h2>
        <p>Koristi slike iz carusel 1 mape</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>{imageArray1}</div>

      {/* React Grid Gallery bez Lightbox-a */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Grid galerija</h2>
          <p>Koristi slike iz carusel 2 mape</p>
        </div>
        <Gallery images={imageArray2} enableImageSelection={false} />
      </div>

      {/* React Grid Gallery s Lightbox funkcionalnošću */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Grid galerija sa lightboxom</h2>
          <p>Koristi slike iz carusel 2 mape</p>
        </div>
        <Gallery images={imageArray2} onClick={handleClick} enableImageSelection={false} />
        <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
      </div>

      {/* React Slick Carousel */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel</h2>
          <p>Koristi slike iz carusel 3 mape</p>
        </div>
        <Slider {...defaultMultiple}>{slickImages}</Slider>
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel u 2 reda</h2>
          <p>Koristi slike iz carusel 4 mape</p>
        </div>
        <Slider {...multipleRows}>{slickImages}</Slider>
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel autoplay</h2>
          <p>Koristi slike iz carusel 5 mape</p>
        </div>
        <Slider {...infiScrollSettings}>{slickImagesInfi}</Slider>
      </div>

      {/* Masonry Galerija */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Masonry galerija</h2>
          <p>Koristi slike iz carusel 3 mape</p>
        </div>
        <div
          style={{
            columnCount: 3, // Broj stupaca
            columnGap: '15px', // Razmak između stupaca
          }}
        >
          {masonryImages.map((image, index) => (
            <div
              key={index}
              style={{
                marginBottom: '15px', // Razmak između slika
                breakInside: 'avoid', // Sprečava da se slika razdvoji između stupaca
              }}
            >
              <picture>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: '8px', // Zaokruživanje rubova
                  }}
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
