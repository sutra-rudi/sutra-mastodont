import PhotoGalleryComponent from '@/app/appComponents/global/PhotoGallery';
import React from 'react';
import dataset from '../../staticData/staticQueryData.json';
import { findGeneralTranslation } from '@/app/langUtils/findGeneralTranslation';
import { generalTranslations } from '@/app/lib/generalTranslations';
export default function page({ params: { lang } }: { params: { lang: string } }) {
  const findKaruselDataBase = dataset.data.allSlikeGalerijaKarusel.edges.find(
    (list) => list.node.title === 'Naslovnica – Karusel slika'
  );

  const filterImagesBase = Object.values(findKaruselDataBase?.node.photoGallery30pcs!).filter((val) => val);

  return (
    <main className='relative w-full min-h-screen -mt--desktop---5xl'>
      <div className='container mx-auto'>
        <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile text-heading-color-light-mode dark:text-heading-color-dark-mode text-center lg:-mb--desktop---3xl md:-mb--tablet---3xl -mb--mobile---3xl'>
          {findGeneralTranslation('Galerija', lang, generalTranslations)}
        </h2>
        <PhotoGalleryComponent gallery={filterImagesBase} currentLang={lang} />
      </div>
    </main>
  );
}
