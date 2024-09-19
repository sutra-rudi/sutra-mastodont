import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { getPojedinacnePoruketekstoviZaPrikazQuery } from '@/app/queries/getAllPojedinacnePorukeQuery';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function MessageSingles({ params: { lang } }: { params: { lang: string } }) {
  const getMessageSingles = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getPojedinacnePoruketekstoviZaPrikazQuery(lang),
    }),
  });

  const parseData = await getMessageSingles.json();

  const dataShorthand = parseData.data.allPojedinacnePoruketekstoviZaPrikaz.edges;

  const l = getSuffixFromLang(lang);

  const prepareData = dataShorthand.map((data: any) => {
    return {
      msgId: data.node.id,
      msgContent: data.node[`bazaPojedinacniTekst${l}`]?.[`pojedinacniTekst${l}`],
      mainImg: data.node.naslovnaSlika.glavnaSlikaNaslovnaSlika.node,
      secondaryImg: data.node.naslovnaSlika.sekundarnaGlavnaSlikaThumbnailHover.node,
    };
  });

  return (
    <main>
      <LazyContent content={prepareData} />
    </main>
  );
}
