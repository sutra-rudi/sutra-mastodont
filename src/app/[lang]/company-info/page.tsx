import { getAllCompanyInfoQuery } from '@/app/queries/getAllCompanyInfoQuery';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));

export default async function CompanyInfo({ params: { lang } }: { params: { lang: string } }) {
  const getAllCompanyInfo = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllCompanyInfoQuery(lang),
    }),
  });

  const parseData = await getAllCompanyInfo.json();

  const dataShorthand = parseData.data.allInformacijeOTvrtki.edges;
  const l = getSuffixFromLang(lang);

  const prepareData = dataShorthand.map((pageData: any) => {
    return {
      infoId: pageData.node.id,
      content: {
        ...pageData.node[`naslov2textKolumne${l}`]?.[`naslov2Kolumne${l}`],
      },
    };
  });

  return (
    <main>
      <LazyContent content={prepareData} />
    </main>
  );
}
