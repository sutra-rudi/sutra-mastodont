'use client';

import React, { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Slider from 'react-slick';
import Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@devnomic/marquee/dist/index.css';
import Loading from '@/app/loading';
import { infiScrollSettings, multipleRows } from '@/app/scriptSettings/slickOptions';
import { Marquee } from '@devnomic/marquee';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImageData {
  src: string;
  class?: string;
}

interface GalleryMediaList {
  filteredGallery1: ImageData[];
  filteredGallery2: ImageData[];
  filteredGallery3: ImageData[];
  filteredGallery4: ImageData[];
  filteredGallery5: ImageData[];
  filteredGallery6: ImageData[];
}

const PageContent = ({
  filteredGallery1,
  filteredGallery2,
  filteredGallery3,
  filteredGallery4,
  filteredGallery5,
  filteredGallery6,
}: GalleryMediaList) => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);
  const containerRefScroll = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRefScroll,
    offset: ['start end', 'end start'],
  });

  const yTransform1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yTransform2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const yTransform3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const imageArrayMasonry = filteredGallery3.map((image, index) => (
    <img
      key={`${index}-${image.src}`}
      className={`w-full object-cover object-center break-inside`}
      alt='ciao'
      src={image.src}
      style={{ height: `${Math.floor(Math.random() * 150) + 250}px` }}
      onError={(img) => img.currentTarget.classList.add('display-none')}
    />
  ));

  const imageArray1 = filteredGallery1.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={350}
      height={300}
      className='w-full h-auto object-cover object-center aspect-video'
      alt='ciao'
      src={image.src}
      onError={(img) => img.currentTarget.classList.add('display-none')}
    />
  ));

  const imageArray2 = filteredGallery2.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={350}
      height={300}
      className='w-full h-auto object-cover object-center aspect-video'
      alt='ciao'
      src={image.src}
      onError={(img) => img.currentTarget.classList.add('display-none')}
      onClick={() => handleClick(index)}
    />
  ));

  const slides = filteredGallery2.map((image, index) => ({
    src: image.src,
    width: 1600,
    height: 800,
    key: `${index}-${image.src}`,
  }));

  const slickImages = filteredGallery4.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={300}
      height={350}
      src={image.src}
      alt={`gallery 4 image ${index}`}
      className='w-full h-auto object-cover object-center aspect-video'
      onError={(img) => img.currentTarget.classList.add('display-none')}
    />
  ));

  const slickImagesInfi = filteredGallery5.map((image, index) => (
    <Image
      key={`${index}-${image.src}`}
      width={350}
      height={300}
      src={image.src}
      alt={`gallery 5 image ${index}`}
      className='w-full h-auto object-cover object-center aspect-video'
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
      {filteredGallery1.length > 0 && (
        <div className='flex overflow-hidden max-h-screen items-start justify-center gap-12 lg:flex-nowrap flex-wrap mb-8'>
          <h4 className='lg:text-text-base-l-xl md:text-text-base-l-desktop text-text-base-l-mobiletablet'>
            Ja se automatski krećem
          </h4>

          <div className='w-full flex max-w-[840px] gap-4'>
            <Marquee direction='up'>{imageArray1}</Marquee>
            <Marquee reverse direction='up'>
              {imageArray2}
            </Marquee>
            <Marquee direction='up'>{slickImagesInfi}</Marquee>
          </div>
        </div>
      )}

      <div className='flex justify-center gap-12 lg:flex-nowrap flex-wrap mb-8'>
        <h4 className='lg:text-text-base-l-xl md:text-text-base-l-desktop text-text-base-l-mobiletablet'>
          Ja reagiram na scroll
        </h4>
        <div ref={containerRefScroll} className='flex overflow-hidden max-h-[600px] gap-4'>
          <motion.div style={{ y: yTransform1 }} transition={{ ease: 'linear' }} className='flex flex-col gap-4'>
            {imageArray1}
          </motion.div>

          <motion.div
            style={{ y: yTransform2 }}
            transition={{ delay: 100, ease: 'linear' }}
            className='flex flex-col gap-4'
          >
            {imageArray2}
          </motion.div>

          <motion.div
            style={{ y: yTransform3 }}
            transition={{ delay: 150, ease: 'linear' }}
            className='flex flex-col gap-4'
          >
            {slickImagesInfi}
          </motion.div>
        </div>
      </div>

      <div className='flex justify-center gap-12 lg:flex-nowrap flex-wrap mb-8'>
        <h4 className='lg:text-text-base-l-xl md:text-text-base-l-desktop text-text-base-l-mobiletablet'>
          Ja sam masonry layout bez librarija :D
        </h4>
        <div className='columns-2 md:columns-4 gap-4 space-y-4 max-w-[840px]'>{imageArrayMasonry}</div>
      </div>

      <div className='flex flex-col gap-2 items-center justify-center'>
        <h2 className='font-bold mb-4 text-center text-4xl text-primarna-tamna dark:text-primarna-svijetla'>
          Basic galerija
        </h2>
        <p className='text-primarna-tamna dark:text-primarna-svijetla'>Koristi slike iz gallery 1 mape</p>
      </div>
      {filteredGallery1.length > 0 ? (
        <div className='grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>{imageArray1}</div>
      ) : (
        <div className='w-full h-full min-h-56 relative'>
          <Loading />
        </div>
      )}

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl text-primarna-tamna dark:text-primarna-svijetla'>
            Galerija sa lightboxom
          </h2>
          <p className='text-primarna-tamna dark:text-primarna-svijetla'>Koristi slike iz gallery 2 mape</p>
        </div>
        {imageArray2.length > 0 ? (
          <>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>{imageArray2}</div>

            <Lightbox
              slides={slides}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              controller={{ closeOnBackdropClick: true }}
            />
          </>
        ) : (
          <div className='w-full h-full min-h-56 relative'>
            <Loading />
          </div>
        )}
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl text-primarna-tamna dark:text-primarna-svijetla'>
            Galerija karuzel
          </h2>
          <p className='text-primarna-tamna dark:text-primarna-svijetla'>Koristi slike iz gallery 4 mape</p>
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
          <h2 className='font-bold mb-4 text-center text-4xl text-primarna-tamna dark:text-primarna-svijetla'>
            Galerija karuzel autoplay
          </h2>
          <p className='text-primarna-tamna dark:text-primarna-svijetla'>Koristi slike iz gallery 5 mape</p>
        </div>
        {filteredGallery5.length > 0 ? (
          <Slider {...infiScrollSettings}>{slickImagesInfi}</Slider>
        ) : (
          <div className='w-full h-full min-h-56 relative'>
            <Loading />
          </div>
        )}
      </div>

      <div className='mb-8'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='font-bold mb-4 text-center text-4xl text-primarna-tamna dark:text-primarna-svijetla'>
            Masonry galerija
          </h2>
          <p className='text-primarna-tamna dark:text-primarna-svijetla'>Koristi slike iz gallery 6 mape</p>
        </div>
        {filteredGallery6.length > 0 ? (
          <div
            style={{
              columnCount: 3,
              columnGap: '15px',
            }}
          >
            {masonryImages.map((image, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '15px',
                  breakInside: 'avoid',
                }}
              >
                <Image
                  width={350}
                  height={300}
                  onError={(img) => img.currentTarget.classList.add('display-none')}
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: '8px',
                  }}
                  className='w-full h-auto object-cover object-center aspect-video'
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
    </div>
  );
};

export default PageContent;
