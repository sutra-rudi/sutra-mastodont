import { getAllLogotipiPartneraQuery } from '@/app/queries/getAllLogotipiPartnera';
import PageContent from './PageContent';

export default async function PartnersPage() {
  const getAllPartners = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLogotipiPartneraQuery(),
    }),
    // cache: 'no-cache',
  });

  const getAllPartnersLogos = await getAllPartners.json();

  const logotipiPartneraDataArrayShorthand = getAllPartnersLogos?.data?.logotipiPartneraKlijenata?.edges || null;

  return (
    <main>
      <PageContent pageContent={logotipiPartneraDataArrayShorthand} />
    </main>
  );
}
