export const maxDuration = 60;

import AppHero from '../appComponents/landing/AppHero';
import BaseCaruselSection from '../appComponents/landing/BaseCaruselSection';
import BlogSection from '../appComponents/landing/BlogSection';
import ContentSectionFirst from '../appComponents/landing/ContentSectionFirst';
import ContentSectionSecond from '../appComponents/landing/ContentSectionSecond';
import FaqSection from '../appComponents/landing/FaqSection';
import MapSection from '../appComponents/landing/MapSection';
import getAllBlogs from '../queries/dynamicQueries/getAllBlogs';
import { fetchData } from '../utils/callApi';

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const getBlogs = await fetchData(getAllBlogs());
  const blogsData = !getBlogs.error ? getBlogs.data.allBlog?.edges : null;

  // const filterBlogsForLanding = blogsData.filter(
  //   (blogItem: any) =>
  //     blogItem.node.introBlog.istaknutoNaNaslovnici === true && blogItem.node.introBlog.statusBloga === true
  // );

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen'>
      <AppHero currentLang={lang} />
      <ContentSectionFirst />
      <BaseCaruselSection />
      <ContentSectionSecond />

      {blogsData && <BlogSection currentLang={lang} blogList={blogsData} />}

      <FaqSection currentLang={lang} />
      <MapSection />
    </main>
  );
}
