'use client';

import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Slider from 'react-slick';
import Image from 'next/image';

import { galleryImages } from '@/app/pathsUtils/mediaImportsDynamic';
import { defaultMultiple, infiScrollSettings, multipleRows } from '@/app/scriptSettings/slickOptions';
import Loading from '@/app/loading';

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
    const response = await fetch(url, { method: 'HEAD', cache: 'force-cache' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

const PageContent = () => {
  const [index, setIndex] = useState(-1);
  const [filteredGallery1, setFilteredGallery1] = useState<ImageData[]>([]);
  const [filteredGallery2, setFilteredGallery2] = useState<ImageData[]>([]);
  const [filteredGallery3, setFilteredGallery3] = useState<ImageData[]>([]);
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
      setFilteredGallery3(await filterImages(galleryImages.gallery3));
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
        {imageArray2.length > 0 ? (
          <>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>
              {imageArray2}
            </div>
            <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
          </>
        ) : (
          <div className='w-full h-full min-h-56 relative'>
            <Loading />
          </div>
        )}
      </div>

      {/* React Slick Carousel */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel</h2>
          <p>Koristi slike iz gallery 4 mape</p>
        </div>
        {filteredGallery4.length > 0 ? (
          <Slider {...multipleRows}>{slickImages}</Slider>
        ) : (
          <div className='w-full h-full min-h-56 relative'>
            <Loading />
          </div>
        )}
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Galerija karuzel autoplay</h2>
          <p>Koristi slike iz gallery 5 mape</p>
        </div>
        {filteredGallery5.length > 0 ? (
          <Slider {...infiScrollSettings}>{slickImagesInfi}</Slider>
        ) : (
          <div className='w-full h-full min-h-56 relative'>
            <Loading />
          </div>
        )}
      </div>

      {/* Masonry Galerija */}
      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Masonry galerija</h2>
          <p>Koristi slike iz gallery 6 mape</p>
        </div>
        {filteredGallery6.length > 0 ? (
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
        ) : (
          <div className='w-full h-full min-h-56 relative'>
            <Loading />
          </div>
        )}
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl'>Tailwindblocks Masonry galerija</h2>
          <p>Koristi slike iz gallery 5 mape i iz gallery 3 mape</p>
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
          {filteredGallery5.length > 0 && filteredGallery3.length > 0 ? (
            <div className='flex flex-wrap md:-m-2 -m-1'>
              <div className='flex flex-wrap w-1/2'>
                {galleryImages.gallery5.slice(0, 3).map((image, index) => (
                  <div className={`md:p-2 p-1 ${index < 2 ? 'w-1/2' : 'w-full'}`} key={index}>
                    <picture>
                      <img
                        alt={`gallery ${index}`}
                        className='w-full object-cover h-full object-center block'
                        src={image.src}
                      />
                    </picture>
                  </div>
                ))}
              </div>
              <div className='flex flex-wrap w-1/2'>
                {galleryImages.gallery3.slice(3, 6).map((image, index) => (
                  <div className={`md:p-2 p-1 ${index === 0 ? 'w-full' : 'w-1/2'}`} key={index + 3}>
                    <picture>
                      <img
                        alt={`gallery ${index + 3}`}
                        className='w-full object-cover h-full object-center block'
                        src={image.src}
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className='w-full h-full min-h-56 relative'>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
