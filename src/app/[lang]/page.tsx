export const maxDuration = 60;

import dynamic from 'next/dynamic';
import Loading from '../loading';
import { allQueries } from '../queries';
import { fetchData } from '../utils/callApi';

const BlogSection = dynamic(() => import('./BlogSection'), { loading: () => <Loading /> });
const BrojcaniciSection = dynamic(() => import('./BrojcaniciSection'), { loading: () => <Loading /> });
const UslugeSection = dynamic(() => import('./UslugeSection'), { loading: () => <Loading /> });
const PartnersSection = dynamic(() => import('./PartnersSection'), { loading: () => <Loading /> });
const CarouselBase = dynamic(() => import('./CarouselBase'), { loading: () => <Loading /> });
const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), { loading: () => <Loading /> });
const WhyUsSection = dynamic(() => import('./WhyUsSection'), { loading: () => <Loading /> });
const DocumentsCatalogsSection = dynamic(() => import('./DocumentsCatalogsSection'), { loading: () => <Loading /> });
const HeroSection = dynamic(() => import('./HeroSection'), { loading: () => <Loading /> });
const NewsTrack = dynamic(() => import('../components/NewsTrack'), { loading: () => <Loading /> });

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  try {
    const queryConfigs = allQueries(lang);

    const results = await Promise.all(
      queryConfigs.map(async ({ query, noCache }) => {
        try {
          const data = await fetchData(query, noCache);
          return data;
        } catch (error) {
          console.error(`Error fetching query: ${query}`, error);
          return { error: true };
        }
      })
    );

    const [
      getAllBlogs,
      getAllBrojcanici,
      getAllUsluge,
      getAllPartnersLogos,
      getAllCarouselBase,
      getAllIskustvaKlijenata,
      getAllWhyUs,
      getAllObavijesti,
      getAllDocuments,
      getAllCategories,
      getAllTags,
      getAllAdminCtaSelection,
    ] = results;

    const blogDataArrayShorthand = !getAllBlogs.error ? getAllBlogs?.data?.allBlog?.edges || [] : [];
    const brojcaniciDataArrayShorthand = !getAllBrojcanici.error
      ? getAllBrojcanici?.data?.allBrojcanici?.edges || []
      : [];
    const uslugeDataArrayShorthand = !getAllUsluge.error ? getAllUsluge?.data?.allUsluge?.edges || [] : [];
    const logotipiPartneraDataArrayShorthand = !getAllPartnersLogos.error
      ? getAllPartnersLogos?.data?.logotipiPartneraKlijenata?.edges || []
      : [];
    const baseCarouselDataShorthand = !getAllCarouselBase.error
      ? getAllCarouselBase?.data?.karuselNaslovnica?.edges[0]?.node || null
      : null;
    const iskustvaKlijenataShorthand = !getAllIskustvaKlijenata.error
      ? getAllIskustvaKlijenata?.data?.allIskustvaKlijenata?.edges || []
      : [];
    const whyUsDataShorthand = !getAllWhyUs.error ? getAllWhyUs?.data?.allWhyus?.edges || [] : [];
    const obavijestiNaStraniciDataShorthand = !getAllObavijesti.error
      ? getAllObavijesti?.data?.allObavijestiNaStranici?.edges || []
      : [];
    const dokumentiKataloziDataShorthand = !getAllDocuments.error
      ? getAllDocuments?.data?.dokumentikatalozi?.edges || []
      : [];
    const kategorijeDataShorthand = !getAllCategories.error ? getAllCategories?.data?.categories?.edges || [] : [];
    const tagsDataShorthand = !getAllTags.error ? getAllTags?.data?.tags?.edges || [] : [];
    const adminCtaSelection = !getAllAdminCtaSelection.error
      ? getAllAdminCtaSelection?.data?.adminSetupArea.edges[0]?.node || null
      : null;

    return (
      <main className='relative w-full dark:bg-primarna-tamna'>
        <HeroSection />

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

        {uslugeDataArrayShorthand.length > 0 && <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />}
        {logotipiPartneraDataArrayShorthand.length > 0 && (
          <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />
        )}
        {baseCarouselDataShorthand && <CarouselBase imageArray={baseCarouselDataShorthand} />}
        {iskustvaKlijenataShorthand.length > 0 && (
          <TestimonialsSection pageContent={iskustvaKlijenataShorthand} lang={lang} />
        )}
        {whyUsDataShorthand.length > 0 && <WhyUsSection pageContent={whyUsDataShorthand} lang={lang} />}
        {dokumentiKataloziDataShorthand.length > 0 && (
          <DocumentsCatalogsSection pageContent={dokumentiKataloziDataShorthand} lang={lang} />
        )}
        {obavijestiNaStraniciDataShorthand.length > 0 && (
          <NewsTrack pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
        )}
      </main>
    );
  } catch (error) {
    console.error('Error loading page content:', error);
    return <h2>Error loading content. Please try again later. {JSON.stringify(`Error: ${error}`)}</h2>;
  }
}
