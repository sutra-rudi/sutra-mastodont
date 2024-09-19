import { getBazaTekstaPodstranice1ModulQuery } from '@/app/queries/getAllSubPage1Query';
import PageContent from './PageContent';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
  const getSubPageOne = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getBazaTekstaPodstranice1ModulQuery(lang),
    }),
  });

  const parseData = await getSubPageOne.json();

  const dataShorthand = parseData.data.allBazaTekstaPodstranice1Modul.edges[0].node;

  const l = getSuffixFromLang(lang);

  const seoField = dataShorthand[`seo${l}`];

  return {
    title: 'Sub page 1',
    description: seoField[`seoTekst${l}`],
    keywords: seoField[`seoTagovi${l}`].split(', ').map((keyw: string) => keyw),
  };
}

export default async function SubPageOne({ params: { lang } }: { params: { lang: string } }) {
  const getSubPageOne = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getBazaTekstaPodstranice1ModulQuery(lang),
    }),
  });

  const parseData = await getSubPageOne.json();

  const dataShorthand = parseData.data.allBazaTekstaPodstranice1Modul.edges[0].node;

  const l = getSuffixFromLang(lang);

  const prepareDataForClient = {
    pageCont: {
      title: dataShorthand[`modulBazeTekstova${l}`]?.[`naslovBazaTekstova${l}`],
      subtitle: dataShorthand[`modulBazeTekstova${l}`]?.[`nadnaslovPodnaslovBazaTekstova${l}`],
      pageContent: dataShorthand[`modulBazeTekstova${l}`]?.[`tekstBazaTekstova${l}`],
    },
    intro: dataShorthand[`modulBazeTekstovaUvod`],
    gallery: dataShorthand.photoGallery.fotogalerija,
  };

  return (
    <main>
      <LazyContent content={prepareDataForClient} />
    </main>
  );
}
