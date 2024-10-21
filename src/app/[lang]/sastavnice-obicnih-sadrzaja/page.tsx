import { getAllAdminBazeTekstovaPodstranice } from '@/app/queries/getAllAdminBazeTekstovaPodstranice';
import { fetchData } from '@/app/utils/callApi';
import PageContent from './PageContent';

export default async function SastavniceObicnihSadrzajaPage({ params: { lang } }: { params: { lang: string } }) {
  const clientData = await fetchData(getAllAdminBazeTekstovaPodstranice(lang));

  console.log('CLIENTG', clientData);

  const parseDataForClient = !clientData.error ? clientData.data.allAdminBazeTekstaStranice.edges : null;
  return <main>{parseDataForClient && <PageContent content={parseDataForClient} lang={lang} />}</main>;
}
