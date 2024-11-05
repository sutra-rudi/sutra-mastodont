import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getAllLegalneInformacijeQuery } from '@/app/queries/getAllLegalInfoQuery';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function LegalInfo({ params: { lang } }: { params: { lang: string } }) {
  const getAllLegal = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLegalneInformacijeQuery(lang),
    }),
    cache: 'force-cache',
  });

  const parseData = await getAllLegal.json();

  const dataShorthand = parseData.data.allLegalneInformacije.edges[0].node;
  const l = getSuffixFromLang(lang);

  const prepareData = {
    intro: { ...dataShorthand.legalneUvod },
    pageContent: {
      title: dataShorthand[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`],
      subtitle: dataShorthand[`modulBazeTekstova${l}`]?.[`nadnaslovPodnaslovBazaTekstova${l}`],
      content: dataShorthand[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`],
    },
  };

  return (
    <main>
      <LazyContent intro={prepareData.intro} pageContent={prepareData.pageContent} lang={lang} />
    </main>
  );
}
