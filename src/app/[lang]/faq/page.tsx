import { getAllFaqOnePagerQuery } from '@/app/queries/getAllFaqOnePagerQuery';
import PageContent from './PageContent';
import { getAllFaqSinglesQuery } from '@/app/queries/getAllFaqSingles';

export default async function FaqPage({ params: { lang } }: { params: { lang: string } }) {
  const getAllFaqOnePager = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllFaqOnePagerQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const parseDataFaqOnePager = await getAllFaqOnePager.json();

  const faqOnePagerDataArrayShorthand = parseDataFaqOnePager.data.allfaqOnePager.edges;

  const getAllFaqSingles = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllFaqSinglesQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const getAllFaqSingle = await getAllFaqSingles.json();

  const faqSingleDataArrayShorthand = getAllFaqSingle?.data?.allFAQPojedinacno?.edges || null;

  return (
    <main>
      <PageContent
        pageContent={faqOnePagerDataArrayShorthand}
        lang={lang}
        singlePageCont={faqSingleDataArrayShorthand}
      />
    </main>
  );
}
