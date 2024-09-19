import { getAllLogotipiPartneraQuery } from '@/app/queries/getAllLogotipiPartnera';
import dynamic from 'next/dynamic';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function PartnersPage() {
  const getAllPartners = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLogotipiPartneraQuery(),
    }),
  });

  const getAllPartnersLogos = await getAllPartners.json();

  const logotipiPartneraDataArrayShorthand = getAllPartnersLogos?.data?.logotipiPartneraKlijenata?.edges || null;

  return (
    <main>
      <LazyContent pageContent={logotipiPartneraDataArrayShorthand} />
    </main>
  );
}
