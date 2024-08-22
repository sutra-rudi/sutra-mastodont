import { getSezonskoRadnoVrijemeQuery } from '@/app/queries/getAllSezonskoRadnoVrijemeQuery';
import PageContent from './PageContent';
import { getAllRadnoVrijemeQuery } from '@/app/queries/getDefaultRadnoVrijeme';

export default async function RadnaVremena({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  const getAllSeasonalVremena = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSezonskoRadnoVrijemeQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseData = await getAllSeasonalVremena.json();

  const dataShorthandSezonsko = parseData.data.allSezonskoRadnoVrijeme.edges[0].node;

  const getDefaultRadnaVremena = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllRadnoVrijemeQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDefaultData = await getDefaultRadnaVremena.json();

  const defaultShorthand = parseDefaultData.data.allRadnoVrijeme.edges[0].node;

  return (
    <main>
      {dataShorthandSezonsko && (
        <PageContent defaultRadno={defaultShorthand} lang={lang} pageContent={dataShorthandSezonsko} />
      )}
    </main>
  );
}
