import { Suspense } from 'react';
import { getAllBlogsQuery } from '../queries/getAllBlogsQuery';
import { getAllNewsQuery } from '../queries/getAllNewsQuery';
import BlogSection from './BlogSection';
import NewsSection from './NewsSection';
import LocationsSection from './LocationsSection';
import { getAllLocationsQuery } from '../queries/getAllLocationsQuery';
import BrojcaniciSection from './BrojcaniciSection';
import { getAllBrojcaniciQuery } from '../queries/getAllBrojcaniciQuery';

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const getAllblogs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBlogsQuery(lang),
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
      query: getAllNewsQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataNews = await getAllNews.json();

  const getAllLocations = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLocationsQuery,
    }),
    cache: 'no-cache',
  });

  const parseDataLocations = await getAllLocations.json();

  const getAllBrojcanici = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBrojcaniciQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataBrojcanici = await getAllBrojcanici.json();

  ///
  const dataArrayShorthand = parseData.data.allBlog.edges;
  const newsDataArrayShorthand = parseDataNews.data.allNovosti.edges;
  const brojcaniciDataArrayShorthand = parseDataBrojcanici.data.allBrojcanici.edges;

  return (
    <Suspense>
      <main>
        <BlogSection pageContent={dataArrayShorthand} lang={lang} />
        <NewsSection pageContent={newsDataArrayShorthand} lang={lang} />
        <LocationsSection pageContent={parseDataLocations} lang={lang} />
        <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />
      </main>
    </Suspense>
  );
}
