import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getBazaTekstovaPodstranice5PasusaQuery } from '@/app/queries/getAllSubPage5Query';
import PageContent from './PageContent';

export default async function SubPageFive({ params: { lang } }: { params: { lang: string } }) {
  const getSubPageFive = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getBazaTekstovaPodstranice5PasusaQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseData = await getSubPageFive.json();

  const dataShorthand = parseData.data.bazaTekstovaPodstranice5Pasusa.edges[0].node;

  console.log('PARS', dataShorthand);

  const l = getSuffixFromLang(lang);

  const prepareDataForClient = dataShorthand[`sadrzaj5Pasusa${l}`];

  //   console.log('PREP DATA', prepareDataForClient);

  return (
    <main>
      <PageContent content={prepareDataForClient} />
    </main>
  );
}
