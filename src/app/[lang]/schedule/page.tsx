import { getTjedniRasporedQuery } from '@/app/queries/getAllTjedniRasporedQuery';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function SchedulePage({ params: { lang, id } }: { params: { lang: string; id: string } }) {
  const getAllSchedule = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getTjedniRasporedQuery(lang),
    }),
  });

  const parseData = await getAllSchedule.json();

  const prepareDataForClient = parseData.data.allTjedniRaspored.edges[0].node;

  return (
    <main className='min-h-dvh'>
      <LazyContent content={prepareDataForClient} lang={lang} />
    </main>
  );
}
