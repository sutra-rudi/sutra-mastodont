import { getOkolicaQuery } from '@/app/queries/getAllWhatToVisit';
import PageContent from './PageContent';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

export default async function WhatToVisit({ params: { lang } }: { params: { lang: string } }) {
  const getWhatToVisit = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getOkolicaQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const parseData = await getWhatToVisit.json();

  const whatToVisitDataShorthand = parseData.data.allOkolica.edges;

  const l = getSuffixFromLang(lang);

  return (
    <main>
      <PageContent content={whatToVisitDataShorthand} lang={l} />
    </main>
  );
}
