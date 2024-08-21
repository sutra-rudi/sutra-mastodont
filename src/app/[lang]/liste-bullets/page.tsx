import { getListeQuery } from '@/app/queries/getAllListsQuery';
import PageContent from './PageContent';

export default async function ListePage({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  const getAllListe = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getListeQuery(lang),
    }),
    cache: 'no-cache',
  });

  const res = await getAllListe.json();

  const dataShorthand = res.data.liste.edges;

  const baseURL = process.env.CMS_PUBLIC_MEDIA_URL;
  return (
    <main className='w-full min-h-dvh dark:bg-primary-dark'>
      <PageContent pageContent={dataShorthand} lang={lang} baseURL={baseURL!} />
    </main>
  );
}
