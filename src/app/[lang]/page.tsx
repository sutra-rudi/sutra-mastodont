export const maxDuration = 60;

import AppHero from '../appComponents/landing/AppHero';
import BaseCaruselSection from '../appComponents/landing/BaseCaruselSection';
import BlogSection from '../appComponents/landing/BlogSection';
import ContactSection from '../appComponents/landing/ContactSection';
import ContentSectionFirst from '../appComponents/landing/ContentSectionFirst';
import FaqSection from '../appComponents/landing/FaqSection';
import MapSection from '../appComponents/landing/MapSection';
import getAllBlogs from '../queries/dynamicQueries/getAllBlogs';
import { fetchData } from '../utils/callApi';

//
import dataset from '../staticData/staticQueryData.json';

const findKaruselDataBase = dataset.data.allSlikeGalerijaKarusel.edges.find(
  (list) => list.node.title === 'Naslovnica – Karusel slika'
);

const findKaruselDataMiddle = dataset.data.allSlikeGalerijaKarusel.edges.find(
  (list) => list.node.title === 'Fotogalerija – Obilazak jezera Mir i Klifova Telascice'
);
const filterImagesBase = Object.values(findKaruselDataBase?.node.photoGallery30pcs!).filter((val) => val);
const filterImagesMiddle = Object.values(findKaruselDataMiddle?.node.photoGallery30pcs!).filter((val) => val);

//
export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const getBlogs = await fetchData(getAllBlogs());
  const blogsData = !getBlogs.error ? getBlogs.data.allBlog?.edges : null;

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen'>
      <AppHero currentLang={lang} />
      <ContentSectionFirst />
      <BaseCaruselSection dataset={filterImagesBase} />

      <ContentSectionFirst reverse />

      {blogsData && <BlogSection currentLang={lang} blogList={blogsData} />}

      <BaseCaruselSection dataset={filterImagesMiddle} />
      <ContactSection />

      <FaqSection currentLang={lang} />
      <MapSection />
    </main>
  );
}
