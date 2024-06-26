import { getAllONamaQuery } from '@/app/queries/getAllONamaQuery';
import PageContent from './PageContent';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

export default async function AboutUsPage({ params: { lang } }: { params: { lang: string } }) {
  const getAboutUs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllONamaQuery(lang),
    }),
    cache: 'no-cache',
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

  console.log('pageContent', prepareDataForClient);

  return (
    <main>
      <PageContent
        content={pageContent.textualContent}
        title={pageContent.title}
        gallery={pageContent.photoGallery}
        hero={pageContent.heroImage}
      />
    </main>
  );
}
