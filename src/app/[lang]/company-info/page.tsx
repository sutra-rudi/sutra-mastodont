import { getAllCompanyInfoQuery } from '@/app/queries/getAllCompanyInfoQuery';
import PageContent from './PageContent';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

export default async function CompanyInfo({ params: { lang } }: { params: { lang: string } }) {
  const getAllCompanyInfo = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllCompanyInfoQuery(lang),
    }),
    // cache: 'no-cache',
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
      <PageContent content={prepareData} />
    </main>
  );
}
