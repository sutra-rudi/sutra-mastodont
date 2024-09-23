import dynamic from 'next/dynamic';

const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });

const checkImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      next: { revalidate: 3600 },
    });
    return response.ok;
  } catch {
    return false;
  }
};

const filterImages = async (gallery: any[]) => {
  const filteredImages = await Promise.all(
    gallery.map(async (image) => {
      const isValid = await checkImageUrl(image.src);
      return isValid ? image : null;
    })
  );

  return filteredImages.filter((image) => image !== null);
};

export default async function GalleryPage() {
  const fetchMediaPaths = async () => {
    try {
      const response = await fetch(`${process.env.BASE_APP_URL}/api/mediaPaths`, {});

      if (!response.ok) {
        throw new Error('Neuspješno dohvaćanje putanja medija');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Greška prilikom dohvaćanja medija:', error);
      return { galleryImages: { gallery1: [], gallery2: [], gallery3: [], gallery4: [], gallery5: [], gallery6: [] } };
    }
  };

  const media = await fetchMediaPaths();

  const [filteredGallery1, filteredGallery2, filteredGallery3, filteredGallery4, filteredGallery5, filteredGallery6] =
    await Promise.all([
      filterImages(media.galleryImages.gallery1),
      filterImages(media.galleryImages.gallery2),
      filterImages(media.galleryImages.gallery3),
      filterImages(media.galleryImages.gallery4),
      filterImages(media.galleryImages.gallery5),
      filterImages(media.galleryImages.gallery6),
    ]);

  return (
    <main className='w-full min-h-screen bg-almost-white dark:bg-almost-black'>
      <LazyContent
        filteredGallery1={filteredGallery1}
        filteredGallery2={filteredGallery2}
        filteredGallery3={filteredGallery3}
        filteredGallery4={filteredGallery4}
        filteredGallery5={filteredGallery5}
        filteredGallery6={filteredGallery6}
      />
    </main>
  );
}
