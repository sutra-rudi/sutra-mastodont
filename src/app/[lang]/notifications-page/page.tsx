import { getObavijestiNaStraniciQuery } from '@/app/queries/getAllObavijestiQuery';
import PageContent from './PageContent';

export default async function ObavijestiPage({ params: { lang } }: { params: { lang: string } }) {
  const getAllObavijesti = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getObavijestiNaStraniciQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const getObavijestiData = await getAllObavijesti.json();

  const obavijestiNaStraniciDataShorthand = getObavijestiData?.data?.allObavijestiNaStranici?.edges || null;

  return (
    <main>
      <PageContent pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
    </main>
  );
}
