import { getAllONamaQuery } from '@/app/queries/getAllONamaQuery';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
  const getAboutUs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllONamaQuery(lang),
    }),
  });

  const parseData = await getAboutUs.json();

  const prepareDataForClient = parseData.data.allONama.edges[0].node;

  const l = getSuffixFromLang(lang);

  const seoField = prepareDataForClient[`seo${l}`];

  return {
    title: prepareDataForClient[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`].oNamaNaslovHeroSekcija,
    description: seoField[`seoTekst${l}`],
    keywords: seoField[`seoTagovi${l}`].split(', ').map((keyw: string) => keyw),
  };
}

export default async function AboutUsPage({ params: { lang } }: { params: { lang: string } }) {
  const getAboutUs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllONamaQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const parseData = await getAboutUs.json();

  const prepareDataForClient = parseData.data.allONama.edges[0].node;

  const l = getSuffixFromLang(lang);

  const pageContent = {
    title: prepareDataForClient[`oNamaSadrzaj${l}`]?.[`tekstoviPodstraniceONama${l}`],
    textualContent: {
      ...prepareDataForClient[`oNamaSadrzaj${l}`]?.[`pasus1GrupaTekstova${l}`],
      ...prepareDataForClient[`oNamaSadrzaj${l}`]?.[`pasus2GrupaTekstova${l}`],
      ...prepareDataForClient[`oNamaSadrzaj${l}`]?.[`pasus3GrupaTekstova${l}`],
    },
    photoGallery: Object.values(prepareDataForClient.photoGallery.fotogalerija),
    heroImage: prepareDataForClient.naslovnaSlika,
  };

  return (
    <main>
      <LazyContent
        content={pageContent.textualContent}
        title={pageContent.title}
        gallery={pageContent.photoGallery}
        hero={pageContent.heroImage}
      />
    </main>
  );
}
