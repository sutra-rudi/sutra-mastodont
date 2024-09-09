'use client';

import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Slider from 'react-slick';

import { galleryImages } from '@/app/pathsUtils/mediaImportsDynamic'; // Pretpostavljam da si dodao galleryImages u pathsUtils
import { defaultMultiple, infiScrollSettings, multipleRows } from '@/app/scriptSettings/slickOptions';

// Pripremamo slike za osnovni prikaz
const imageArray1 = galleryImages.gallery1.map((image, index) => (
  <picture key={index} className='w-full h-auto'>
    <source srcSet={image.src} />
    <img src={image.src} alt={`gallery 1 image ${index}`} className='w-full h-auto object-cover' />
  </picture>
));

// Pripremamo slike za react-grid-gallery
const imageArray2 = galleryImages.gallery2.map((image, index) => ({
  src: image.src,
  thumbnail: image.src,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  caption: `gallery 2 image ${index}`,
  customOverlay: (
    <div className='custom-overlay__caption'>
      <span>{`gallery 2 image ${index}`}</span>
    </div>
  ),
  width: 800,
  height: 650,
}));

// Pripremamo slike za lightbox
const slides = galleryImages.gallery3.map((image, index) => ({
  src: image.src,
  width: 800,
  height: 650,
}));

// Pripremamo slike za react-slick
const slickImages = galleryImages.gallery4.map((image, index) => (
  <picture key={index} className='w-full h-auto'>
    <img src={image.src} alt={`gallery 4 image ${index}`} className='w-full h-auto object-cover' />
  </picture>
));

const slickImagesInfi = galleryImages.gallery5.map((image, index) => (
  <picture key={index} className='w-full h-auto'>
    <img src={image.src} alt={`gallery 5 image ${index}`} className='w-full h-auto object-cover' />
  </picture>
));

// Slike za Masonry galeriju
const masonryImages = galleryImages.gallery6.map((image, index) => ({
  src: image.src,
  alt: `gallery 6 image ${index}`,
}));

const PageContent = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);

  return (
    <div className='p-4'>
      {/* Osnovni prikaz slika */}
      <div className='flex flex-col gap-2 items-center justify-center'>
        <h2 className='font-bold mb-4 text-center text-4xl'>Basic galerija</h2>
        <p>Koristi slike iz gallery 1 mape</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>{imageArray1}</div>

      {/* React Grid Gallery bez Lightbox-a */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Grid galerija</h2>
          <p>Koristi slike iz gallery 2 mape</p>
        </div>
        <Gallery images={imageArray2} enableImageSelection={false} />
      </div>

      {/* React Grid Gallery s Lightbox funkcionalnošću */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Grid galerija sa lightboxom</h2>
          <p>Koristi slike iz gallery 2 mape</p>
        </div>
        <Gallery images={imageArray2} onClick={handleClick} enableImageSelection={false} />
        <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
      </div>

      {/* React Slick Carousel */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel</h2>
          <p>Koristi slike iz gallery 4 mape</p>
        </div>
        <Slider {...defaultMultiple}>{slickImages}</Slider>
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel u 2 reda</h2>
          <p>Koristi slike iz gallery 4 mape</p>
        </div>
        <Slider {...multipleRows}>{slickImages}</Slider>
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel autoplay</h2>
          <p>Koristi slike iz gallery 5 mape</p>
        </div>
        <Slider {...infiScrollSettings}>{slickImagesInfi}</Slider>
      </div>

      {/* Masonry Galerija */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Masonry galerija</h2>
          <p>Koristi slike iz gallery 6 mape</p>
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

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Flowbite Masonry galerija</h2>
          <p>Koristi slike iz gallery 6 mape</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {/* Mapiranje slika umjesto ručnog renderiranja */}
          {masonryImages.map((image, index) => (
            <div className='grid gap-4' key={index}>
              <div>
                <img className='h-auto max-w-full rounded-lg' src={image.src} alt={`masonry image ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Tailwindblocks Masonry galerija</h2>
          <p>Koristi slike iz gallery 5 mape</p>
        </div>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='flex w-full mb-20 flex-wrap'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4'>
              Master Cleanse Reliac Heirloom
            </h1>
            <p className='lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className='flex flex-wrap md:-m-2 -m-1'>
            <div className='flex flex-wrap w-1/2'>
              {galleryImages.gallery5.slice(0, 3).map((image, index) => (
                <div className={`md:p-2 p-1 ${index < 2 ? 'w-1/2' : 'w-full'}`} key={index}>
                  <img
                    alt={`gallery ${index}`}
                    className='w-full object-cover h-full object-center block'
                    src={image.src}
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-wrap w-1/2'>
              {galleryImages.gallery5.slice(3, 6).map((image, index) => (
                <div className={`md:p-2 p-1 ${index === 0 ? 'w-full' : 'w-1/2'}`} key={index + 3}>
                  <img
                    alt={`gallery ${index + 3}`}
                    className='w-full object-cover h-full object-center block'
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
