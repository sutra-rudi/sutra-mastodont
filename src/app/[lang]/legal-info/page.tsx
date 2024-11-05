import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getAllLegalneInformacijeQuery } from '@/app/queries/getAllLegalInfoQuery';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));

export async function generateStaticParams() {
  return Object.values(UserLanguage).map((lang) => ({ lang }));
}

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

  if (!getAllLegal.ok) {
    console.error('Fetch failed for legal info');
    return <h1>Error fetching data</h1>;
  }

  const parseData = await getAllLegal.json();

  if (!parseData || !parseData.data) {
    console.error('Data structure is undefined:', parseData);
    return <h1>Data is unavailable</h1>;
  }

  const dataShorthand = parseData.data.allLegalneInformacije?.edges[0]?.node;

  if (!dataShorthand) {
    console.error('Specific data for allLegalneInformacije not found');
    return <h1>Content not found</h1>;
  }
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
