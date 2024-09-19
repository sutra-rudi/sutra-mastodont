import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getBazaTekstovaPodstranice5PasusaQuery } from '@/app/queries/getAllSubPage5Query';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function SubPageFive({ params: { lang } }: { params: { lang: string } }) {
  const getSubPageFive = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getBazaTekstovaPodstranice5PasusaQuery(lang),
    }),
  });

  const parseData = await getSubPageFive.json();

  const dataShorthand = parseData.data.bazaTekstovaPodstranice5Pasusa.edges[0].node;

  const l = getSuffixFromLang(lang);

  const prepareDataForClient = dataShorthand[`sadrzaj5Pasusa${l}`];

  return (
    <main>
      <LazyContent content={prepareDataForClient} />
    </main>
  );
}
