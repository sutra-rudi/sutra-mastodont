'use client';

import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import React from 'react';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';

interface PhotoGalleryComponent {
  gallery: any[];
  currentLang: string;
}

export default function PhotoGalleryComponent({ gallery, currentLang }: PhotoGalleryComponent) {
  const [index, setIndex] = React.useState(-1);

  const handleClick = (index: number) => setIndex(index);

  //   console.log('GALLERY', gallery);

  return (
    <div className='max-w-[1140px] mx-auto px-4'>
      <h3
        className={`${'playfairDisplayFont.className'} lg:text-h3-desktop md:text-h3-tablet text-h3-mobile text-heading-color-light-mode lg:-mb--desktop---2xl md:-mb--tablet---2xl -mb--mobile---2xl`}
      >
        {findGeneralTranslation('Fotogalerija', currentLang, generalTranslations)}
      </h3>

      <div
        className='grid gap-2 md:gap-4 
  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px]'
      >
        {gallery.slice(0, 6).map((g: any, index: number) => {
          return (
            <div
              onClick={() => handleClick(index)}
              key={g.node.id}
              className={`relative w-full h-full overflow-hidden rounded-lg group cursor-pointer ${
                index % 3 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <picture>
                <img
                  src={g.node.sourceUrl}
                  alt={`gallery image-${g.node.id}`}
                  className='w-full h-full object-cover object-center block aspect-auto'
                  loading='lazy'
                  decoding='async'
                />
              </picture>

              <div
                className={`absolute w-full h-full inset-0 bg-overlay-dark opacity-0 group-hover:opacity-100 flex items-center justify-center text-accent-boja  transition-all ease-in-out duration-300`}
              >
                <h4
                  className={`${'playfairDisplayFont.className'} max-w-[190px] lg:text-h4-desktop md:text-h4-tablet text-h4-mobile`}
                >
                  {findGeneralTranslation('Pogledaj cijelu fotogaleriju', currentLang, generalTranslations)}
                  {': '}
                  {`+${gallery.length - 6} ${findGeneralTranslation(
                    'Slike',
                    currentLang,
                    generalTranslations
                  ).toLocaleLowerCase()}`}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox
        slides={gallery.map((g: any) => ({ src: g.node.sourceUrl }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}
