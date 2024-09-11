import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getAllLegalneInformacijeQuery } from '@/app/queries/getAllLegalInfoQuery';
import PageContent from './PageContent';

export default async function LegalInfo({ params: { lang } }: { params: { lang: string } }) {
  const getAllLegal = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLegalneInformacijeQuery(lang),
    }),
    // cache: 'no-cache',
    next: {
      revalidate: 3600,
    },
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
      <PageContent intro={prepareData.intro} pageContent={prepareData.pageContent} lang={lang} />
    </main>
  );
}
