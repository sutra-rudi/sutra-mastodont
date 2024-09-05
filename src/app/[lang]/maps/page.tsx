import { getAllMapsQuery } from '@/app/queries/getAllMapsQuery';

import { lazy, Suspense } from 'react';

export default async function Maps() {
  const getAllMaps = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllMapsQuery(),
    }),
    next: {
      revalidate: 60 * 30,
    },
    // cache: 'no-cache',
  });

  const parseMapsData = await getAllMaps.json();

  const prepareDataMaps = parseMapsData.data.bazaMapsKarte.edges;

  const LazyContent = lazy(() => import('./PageContent'));

  return (
    <main>
      <Suspense>{parseMapsData.data && <LazyContent pageContent={prepareDataMaps} />}</Suspense>
    </main>
  );
}
