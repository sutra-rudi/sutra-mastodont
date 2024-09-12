'use client';

import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Slider from 'react-slick';
import Image from 'next/image';

import { galleryImages } from '@/app/pathsUtils/mediaImportsDynamic';
import { defaultMultiple, infiScrollSettings, multipleRows } from '@/app/scriptSettings/slickOptions';

interface ImageData {
  src: string;
  class?: string;
}

interface GalleryImages {
  gallery1: ImageData[];
  gallery2: ImageData[];
  gallery4: ImageData[];
  gallery5: ImageData[];
  gallery6: ImageData[];
}

// Funkcija za provjeru ispravnosti URL-a
const checkImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

const PageContent = () => {
  const [index, setIndex] = useState(-1);
  const [filteredGallery1, setFilteredGallery1] = useState<ImageData[]>([]);
  const [filteredGallery2, setFilteredGallery2] = useState<ImageData[]>([]);
  const [filteredGallery4, setFilteredGallery4] = useState<ImageData[]>([]);
  const [filteredGallery5, setFilteredGallery5] = useState<ImageData[]>([]);
  const [filteredGallery6, setFilteredGallery6] = useState<ImageData[]>([]);

  const handleClick = (index: number) => setIndex(index);

  // Funkcija koja filtrira slike
  const filterImages = async (gallery: any[]) => {
    const validImages = [];
    for (let image of gallery) {
      const isValid = await checkImageUrl(image.src);
      if (isValid) validImages.push(image);
    }
    return validImages;
  };

  // useEffect za filtriranje slika
  useEffect(() => {
    const filterAllGalleries = async () => {
      setFilteredGallery1(await filterImages(galleryImages.gallery1));
      setFilteredGallery2(await filterImages(galleryImages.gallery2));
      setFilteredGallery4(await filterImages(galleryImages.gallery4));
      setFilteredGallery5(await filterImages(galleryImages.gallery5));
      setFilteredGallery6(await filterImages(galleryImages.gallery6));
    };

    filterAllGalleries();
  }, []);

  // Priprema za prikaz galerija nakon filtriranja
  const imageArray1 = filteredGallery1.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={300}
      height={350}
      alt='ciao'
      src={image.src}
      onError={(img) => img.currentTarget.classList.add('display-none')}
    />
  ));

  const imageArray2 = filteredGallery2.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={300}
      height={350}
      alt='ciao'
      src={image.src}
      onError={(img) => img.currentTarget.classList.add('display-none')}
      onClick={() => handleClick(index)}
    />
  ));

  const slides = filteredGallery2.map((image, index) => ({
    src: image.src,
    width: 800,
    height: 650,
    key: `${index}-${image.src}`,
  }));

  const slickImages = filteredGallery4.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={300}
      height={350}
      src={image.src}
      alt={`gallery 4 image ${index}`}
      className='w-full h-auto object-cover'
      onError={(img) => img.currentTarget.classList.add('display-none')}
    />
  ));

  const slickImagesInfi = filteredGallery5.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={300}
      height={350}
      src={image.src}
      alt={`gallery 5 image ${index}`}
      className='w-full h-auto object-cover'
      onError={(img) => img.currentTarget.classList.add('display-none')}
    />
  ));

  const masonryImages = filteredGallery6.map((image, index) => ({
    src: image.src,
    alt: `gallery 6 image ${index}`,
    key: `${index}-${image.src}`,
  }));

  return (
    <div className='p-4'>
      {/* Osnovni prikaz slika */}
      <div className='flex flex-col gap-2 items-center justify-center'>
        <h2 className='font-bold mb-4 text-center text-4xl'>Basic galerija</h2>
        <p>Koristi slike iz gallery 1 mape</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>{imageArray1}</div>

      {/* React Grid Gallery s Lightbox funkcionalnošću */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija sa lightboxom</h2>
          <p>Koristi slike iz gallery 2 mape</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>{imageArray2}</div>
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
              <Image
                width={300}
                height={350}
                onError={(img) => img.currentTarget.classList.add('display-none')}
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '8px', // Zaokruživanje rubova
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
