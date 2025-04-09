export const maxDuration = 60;
export const revalidate = 3600;
//IMPORTS
import AppHero from '../appComponents/landing/AppHero';
import BaseCaruselSection from '../appComponents/landing/BaseCaruselSection';
import BlogSection from '../appComponents/landing/BlogSection';
import ContactSection from '../appComponents/landing/ContactSection';
import ContentSectionFirst from '../appComponents/landing/ContentSectionFirst';
import FaqSection from '../appComponents/landing/FaqSection';
import MapSection from '../appComponents/landing/MapSection';
import getAllBlogs from '../queries/dynamicQueries/getAllBlogs';
import getAllNews from '../queries/dynamicQueries/getAllNews';
import NewsSection from '../appComponents/landing/NewsSection';
//UTILS
import { fetchData } from '../utils/callApi';
//STATIC DATA
import dataset from '../staticData/staticQueryData.json';
import { fetchMediaPaths } from '../utils/callMediaPaths';

const findKaruselDataBase = dataset.data.allSlikeGalerijaKarusel.edges.find(
  (list) => list.node.title === 'Naslovnica – Karusel slika'
);
const findKaruselDataMiddle = dataset.data.allSlikeGalerijaKarusel.edges.find(
  (list) => list.node.title === 'Fotogalerija – Obilazak jezera Mir i Klifova Telascice'
);
const findFirstTextContent = dataset.data.allBazaTekstaPodstranice1Modul.edges.find(
  (item) => item.node.title === 'Naslovnica – S NAMA NA KORNATE'
);

const findFirstListContent = dataset.data.allBazaLista.edges.find(
  (item) => item.node.title === 'NASLOVNICA – ŠTO ĆETE SVE VIDJETI'
);

const filterImagesBase = Object.values(findKaruselDataBase?.node.photoGallery30pcs!).filter((val) => val);
const filterImagesMiddle = Object.values(findKaruselDataMiddle?.node.photoGallery30pcs!).filter((val) => val);

//
export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  //DYNAMIC DATA
  const getBlogs = await fetchData(getAllBlogs());
  const blogsData = !getBlogs.error ? getBlogs.data.allBlog?.edges : null;

  const getNews = await fetchData(getAllNews());
  const newsData = !getNews.error ? getNews.data.allNovosti?.edges : null;

  //MEDIA PATHS
  const MP = await fetchMediaPaths();

  const { carusel1Images } = MP;

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen'>
      <AppHero currentLang={lang} />
      <ContentSectionFirst
        isList={false}
        content={findFirstTextContent?.node}
        currentLang={lang}
        placeholderGallery={carusel1Images}
      />
      <BaseCaruselSection dataset={filterImagesBase} />

      <ContentSectionFirst
        reverse
        isList={true}
        content={findFirstListContent?.node}
        currentLang={lang}
        placeholderGallery={carusel1Images}
      />

      {blogsData && <BlogSection currentLang={lang} blogList={blogsData} />}

      <BaseCaruselSection dataset={filterImagesMiddle} />

      {newsData && <NewsSection currentLang={lang} newsList={newsData} />}
      <ContactSection currentLang={lang} />

      <FaqSection currentLang={lang} />
      <MapSection />
    </main>
  );
}
