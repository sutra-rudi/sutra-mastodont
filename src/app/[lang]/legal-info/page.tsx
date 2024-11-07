export const revalidate = false;
import dynamic from 'next/dynamic';
import { UserLanguage } from '@/app/enums/LangEnum';

const LazyContent = dynamic(() => import('./PageContent'));

export async function generateStaticParams() {
  return Object.values(UserLanguage).map((lang) => ({ lang }));
}

export default async function LegalInfo({ params: { lang } }: { params: { lang: string } }) {
  const getAllLegal = await fetch(`${process.env.BASE_APP_URL}/api/legalInfo?lang=${lang}`, {
    cache: 'force-cache',
  });

  if (!getAllLegal.ok) {
    console.error('Greška pri dohvatu podataka');
    return <h1>Podaci nisu dostupni</h1>;
  }

  const parseData = await getAllLegal.json();
  const dataShorthand = parseData[lang]?.data.allLegalneInformacije?.edges[0]?.node;

  const prepareData = {
    intro: { ...dataShorthand.legalneUvod },
    pageContent: {
      title: dataShorthand[`modulBazeTekstova${lang}`]?.[`naslovBazaTekstova${lang}`] || 'Nema dostupnog naslova',
      subtitle:
        dataShorthand[`modulBazeTekstova${lang}`]?.[`nadnaslovPodnaslovBazaTekstova${lang}`] || 'Nema podnaslova',
      content: dataShorthand[`modulBazeTekstova${lang}`]?.[`tekstBazaTekstova${lang}`] || 'Nema sadržaja',
    },
  };

  return (
    <main>
      <LazyContent intro={prepareData.intro} pageContent={prepareData.pageContent} lang={lang} />
    </main>
  );
}
