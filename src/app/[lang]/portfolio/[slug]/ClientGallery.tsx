'use client';

import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface PhotoGalleryComponent {
  gallery: any[];
  currentLang: string;
}
export default function ClientGallery({ gallery, currentLang }: PhotoGalleryComponent) {
  const [index, setIndex] = React.useState(-1);

  console.log('c', gallery);

  const handleClick = (index: number) => setIndex(index);
  return (
    <div>
      <div className='grid grid-cols-4 gap-2 lg:auto-rows-[350px] md:auto-rows-[280px] auto-rows-[200px]'>
        {gallery &&
          gallery.map((g: any, index: number) => {
            const cycleIndex = index % 3;

            let spanClass = '';
            if (cycleIndex === 0) {
              // velika slika: 4 kolone, 2 reda visine (dvostruko veća)
              spanClass = 'col-span-4 row-span-2';
            } else {
              // male slike: 2 kolone, 1 redak visine (normalno)
              spanClass = 'col-span-2 row-span-1';
            }

            return (
              <div
                key={g.node.id}
                onClick={() => handleClick(index)}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${spanClass}`}
              >
                <picture>
                  <img
                    src={g.node.sourceUrl}
                    alt={`gallery image-${g.node.id}`}
                    className='w-full h-full object-cover object-center transition-all ease-out duration-[7000ms] group-hover:scale-125'
                    loading='lazy'
                    decoding='async'
                  />
                </picture>
                <div className='absolute w-full h-full inset-0 bg-overlay-dark opacity-0 group-hover:opacity-100 flex items-center justify-center text-accent-boja  transition-all ease-in-out duration-[3000ms]'>
                  <h4
                    className={`${'playfairDisplayFont.className'} max-w-[190px] lg:text-h4-desktop md:text-h4-tablet text-h4-mobile`}
                  >
                    {findGeneralTranslation('Pogledaj cijelu fotogaleriju', currentLang, generalTranslations)}
                    {gallery.length > 0 &&
                      ` (${gallery.length} ${findGeneralTranslation('Slika', currentLang, generalTranslations)})`}
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
