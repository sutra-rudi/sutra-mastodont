import { getLokacijeQuery } from '@/app/queries/getAllLocationsQuery';

import dynamic from 'next/dynamic';

export default async function LokacijePage({ params: { lang } }: { params: { lang: string } }) {
  const getAllLokacije = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getLokacijeQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const getAllLocations = await getAllLokacije.json();

  const locationsDataArrayShorthand = getAllLocations?.data?.lokacije?.edges || null;

  const LazyContent = dynamic(() => import('./PageContent'));

  return (
    <main>
      <LazyContent pageContent={locationsDataArrayShorthand} />
    </main>
  );
}
