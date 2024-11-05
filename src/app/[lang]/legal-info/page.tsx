export const revalidate = false;
import { UserLanguage } from '@/app/enums/LangEnum';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));

export async function generateStaticParams() {
  return Object.values(UserLanguage).map((lang) => ({ lang }));
}

export default async function LegalInfo({ params: { lang } }: { params: { lang: string } }) {
  const getAllLegal = await fetch(`${process.env.BASE_APP_URL}/api/legal-info?lang=${lang}`, {
    headers: { 'Cache-Control': 'no-cache' }, // S obzirom da podaci stižu sa CDN-a, ovdje nije potrebno dodatno keširanje
  });

  if (!getAllLegal.ok) {
    console.error('Fetch failed for legal info');
    return <h1>Error fetching data</h1>;
  }

  const parseData = await getAllLegal.json();
  const dataShorthand = parseData.data.allLegalneInformacije?.edges[0]?.node;

  if (!dataShorthand) {
    console.error('Specific data for allLegalneInformacije not found');
    return <h1>Content not found</h1>;
  }

  const prepareData = {
    intro: { ...dataShorthand.legalneUvod },
    pageContent: {
      title: dataShorthand[`modulBazeTekstova${lang}`]?.[`naslovBazaTekstova${lang}`] || 'No title available',
      subtitle:
        dataShorthand[`modulBazeTekstova${lang}`]?.[`nadnaslovPodnaslovBazaTekstova${lang}`] || 'No subtitle available',
      content: dataShorthand[`modulBazeTekstova${lang}`]?.[`tekstBazaTekstova${lang}`] || 'No content available',
    },
  };

  return (
    <main>
      <LazyContent intro={prepareData.intro} pageContent={prepareData.pageContent} lang={lang} />
    </main>
  );
}
