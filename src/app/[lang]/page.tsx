import AppHero from '../appComponents/landing/AppHero';
import BaseCaruselSection from '../appComponents/landing/BaseCaruselSection';
import BlogSection from '../appComponents/landing/BlogSection';
import ContentSectionFirst from '../appComponents/landing/ContentSectionFirst';
import ContentSectionSecond from '../appComponents/landing/ContentSectionSecond';
import MapSection from '../appComponents/landing/MapSection';
import getAllBlogs from '../queries/dynamicQueries/getAllBlogs';
import { fetchData } from '../utils/callApi';

export const maxDuration = 60;

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const getBlogs = await fetchData(getAllBlogs());
  const blogsData = !getBlogs.error ? getBlogs.data.allBlog?.edges : null;

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen'>
      <AppHero lang={lang} heroContent={''} />
      <ContentSectionFirst />
      <BaseCaruselSection />
      <ContentSectionSecond />

      {blogsData && <BlogSection currentLang={lang} blogList={blogsData} />}
      <MapSection />
    </main>
  );
}
