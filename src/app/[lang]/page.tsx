import { Suspense } from 'react';
import { getAllBlogsQuery } from '../queries/getAllBlogsQuery';
import { getAllNewsQuery } from '../queries/getAllNewsQuery';
import BlogSection from './BlogSection';
import NewsSection from './NewsSection';

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const getAllblogs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBlogsQuery,
    }),
    cache: 'no-cache',
  });

  const parseData = await getAllblogs.json();

  const getAllNews = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllNewsQuery,
    }),
    cache: 'no-cache',
  });

  const parseDataNews = await getAllNews.json();

  const dataArrayShorthand = parseData.data.allBlog.edges;
  const newsDataArrayShorthand = parseDataNews.data.allNovosti.edges;

  return (
    <Suspense>
      <main>
        <BlogSection pageContent={dataArrayShorthand} lang={lang} />
        <NewsSection pageContent={newsDataArrayShorthand} lang={lang} />
      </main>
    </Suspense>
  );
}
