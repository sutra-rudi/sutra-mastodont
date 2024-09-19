import { getOkolicaQuery } from '@/app/queries/getAllWhatToVisit';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function WhatToVisit({ params: { lang } }: { params: { lang: string } }) {
  const getWhatToVisit = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getOkolicaQuery(lang),
    }),
  });

  const parseData = await getWhatToVisit.json();

  const whatToVisitDataShorthand = parseData.data.allOkolica.edges;

  const l = getSuffixFromLang(lang);

  return (
    <main>
      <LazyContent content={whatToVisitDataShorthand} lang={l} />
    </main>
  );
}
