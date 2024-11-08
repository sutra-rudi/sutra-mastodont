import { naslovnaQuery } from '@/app/queries/landingPageContentQuery';
import ClientPag from './ClientPag';
import { fetchData } from '@/app/utils/callApi';

export default async function RudiTest({ params: { lang } }: { params: { lang: string } }) {
  const datas = await fetchData(naslovnaQuery(lang));
  return (
    <main>
      <ClientPag content={datas} />
    </main>
  );
}
