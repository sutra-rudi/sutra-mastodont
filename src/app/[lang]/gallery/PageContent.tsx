'use client';

import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { carusel1Images, carusel2Images, carusel3Images } from '@/app/pathsUtils/mediaImportsDynamic';

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
        {/* <div>Boats (Jeshu John - designerspics.com)</div> */}
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

const PageContent = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);

  return (
    <div className='p-4'>
      {/* Osnovni prikaz slika */}
      <h2 className='text-2xl font-bold mb-4'>Basic galerija</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>{imageArray1}</div>

      {/* React Grid Gallery bez Lightbox-a */}
      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Grid galerija</h2>
        <Gallery images={imageArray2} enableImageSelection={false} />
      </div>

      {/* React Grid Gallery s Lightbox funkcionalnošću */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Grid galerija sa lightboxom</h2>
        <Gallery images={imageArray2} onClick={handleClick} enableImageSelection={false} />
        <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
      </div>
    </div>
  );
};

export default PageContent;
