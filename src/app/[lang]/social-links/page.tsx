import { getAllSocialLinksQuery } from '@/app/queries/getAllSocialLinksQuery';
import { PageContent } from './PageContent';

export default async function SocialLinksPage() {
  const getAllSocialLinks = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllSocialLinksQuery(),
    }),
  });

  const parseDataSocialLinks = await getAllSocialLinks.json();

  const dataShorthand = parseDataSocialLinks.data.allDrustveneMrezeLinkovi.edges[0].node;

  //   const socialLinks: [string, string][] = Object.entries(dataShorthand.povezniceDrustvene);

  return (
    <main>
      <PageContent pageContent={dataShorthand} />
    </main>
  );
}
