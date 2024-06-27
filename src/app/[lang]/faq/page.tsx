import { getAllFaqOnePagerQuery } from '@/app/queries/getAllFaqOnePagerQuery';
import PageContent from './PageContent';

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

  return (
    <main>
      <PageContent pageContent={faqOnePagerDataArrayShorthand} lang={lang} />
    </main>
  );
}
