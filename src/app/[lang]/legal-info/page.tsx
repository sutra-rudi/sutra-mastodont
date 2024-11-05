export const revalidate = false; // Nema revalidacije

import { UserLanguage } from '@/app/enums/LangEnum';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));

export async function generateStaticParams() {
  return Object.values(UserLanguage).map((lang) => ({ lang }));
}

export default async function LegalInfo({ params: { lang } }: { params: { lang: string } }) {
  const response = await fetch(`${process.env.BASE_APP_URL}/api/legal-info?lang=${lang}`, {
    cache: 'force-cache', // Dugotrajno keširanje na CDN-u
  });

  const data = await response.json();
  const dataShorthand = data?.data?.allLegalneInformacije?.edges[0]?.node;

  if (!dataShorthand) {
    console.error('Specific data for allLegalneInformacije not found');
    return <h1>Content not found</h1>;
  }

  const l = getSuffixFromLang(lang);
  const prepareData = {
    intro: { ...dataShorthand.legalneUvod },
    pageContent: {
      title: dataShorthand[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`] || 'No title available',
      subtitle:
        dataShorthand[`modulBazeTekstova${l}`]?.[`nadnaslovPodnaslovBazaTekstova${l}`] || 'No subtitle available',
      content: dataShorthand[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`] || 'No content available',
    },
  };

  return (
    <main>
      <LazyContent intro={prepareData.intro} pageContent={prepareData.pageContent} lang={lang} />
    </main>
  );
}
