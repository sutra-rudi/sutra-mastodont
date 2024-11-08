export const maxDuration = 60;

import dynamic from 'next/dynamic';
import Loading from '../loading';
import { fetchData } from '../utils/callApi';
import AppHero from './AppHero';
import { naslovnaQuery } from '../queries/landingPageContentQuery';

const BlogSection = dynamic(() => import('./BlogSection'), { loading: () => <Loading /> });
const BrojcaniciSection = dynamic(() => import('./BrojcaniciSection'), { loading: () => <Loading /> });
const PartnersSection = dynamic(() => import('./PartnersSection'), { loading: () => <Loading /> });

const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), { loading: () => <Loading /> });

const DocumentsCatalogsSection = dynamic(() => import('./DocumentsCatalogsSection'), { loading: () => <Loading /> });
const NewsTrack = dynamic(() => import('../components/NewsTrack'), { loading: () => <Loading /> });

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const datasetLanding = await fetchData(naslovnaQuery(lang));

  const heroDataShorthand = !datasetLanding.error ? datasetLanding.data.allHeroSekcija.edges[0] || null : null;

  const blogDataArrayShorthand = !datasetLanding.error ? datasetLanding.data.allBlog.edges || [] : [];
  const brojcaniciDataArrayShorthand = !datasetLanding.error ? datasetLanding?.data?.allBrojcanici?.edges || [] : [];

  const logotipiPartneraDataArrayShorthand = !datasetLanding.error
    ? datasetLanding?.data?.logotipiPartneraKlijenata?.edges || []
    : [];

  const iskustvaKlijenataShorthand = !datasetLanding.error
    ? datasetLanding?.data?.allIskustvaKlijenata?.edges || []
    : [];

  const obavijestiNaStraniciDataShorthand = !datasetLanding.error
    ? datasetLanding?.data?.allObavijestiNaStranici?.edges || []
    : [];
  const dokumentiKataloziDataShorthand = !datasetLanding.error
    ? datasetLanding?.data?.dokumentikatalozi?.edges || []
    : [];
  const kategorijeDataShorthand = !datasetLanding.error ? datasetLanding?.data?.categories?.edges || [] : [];
  const tagsDataShorthand = !datasetLanding.error ? datasetLanding?.data?.tags?.edges || [] : [];
  const adminCtaSelection = !datasetLanding.error ? datasetLanding?.data?.adminSetupArea.edges[0]?.node || null : null;

  return (
    <main className='relative w-full dark:bg-primarna-tamna'>
      <AppHero heroContent={heroDataShorthand} lang={lang} />

      {blogDataArrayShorthand.length > 0 && (
        <BlogSection
          pageContent={blogDataArrayShorthand}
          lang={lang}
          categoriesList={kategorijeDataShorthand}
          tagsList={tagsDataShorthand}
          blogCtaKey={adminCtaSelection ? adminCtaSelection.adminGlobalniSelektorCta.blogSekcijaCta[0] : ''}
          blogTableKey={process.env.BLOG_AIRTABLE_CTA_ID!}
        />
      )}

      {brojcaniciDataArrayShorthand.length > 0 && (
        <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />
      )}

      {logotipiPartneraDataArrayShorthand.length > 0 && (
        <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />
      )}

      {iskustvaKlijenataShorthand.length > 0 && (
        <TestimonialsSection pageContent={iskustvaKlijenataShorthand} lang={lang} />
      )}

      {dokumentiKataloziDataShorthand.length > 0 && (
        <DocumentsCatalogsSection pageContent={dokumentiKataloziDataShorthand} lang={lang} />
      )}
      {obavijestiNaStraniciDataShorthand.length > 0 && (
        <NewsTrack pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
      )}
    </main>
  );
}
