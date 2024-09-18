import { Suspense } from 'react';

import { getAllBlogsQuery } from '../queries/getAllBlogsQuery';
import { getAllBrojcaniciQuery } from '../queries/getAllBrojcaniciQuery';
import { getAllUslugeQuery } from '../queries/getAllUslugeQuery';
import { getAllLogotipiPartneraQuery } from '../queries/getAllLogotipiPartnera';
import { getAllCarouselBaseQuery } from '../queries/getAllCarouselBase';
import { getAllIskustvaKlijenataQuery } from '../queries/getAllIskustvaKlijenataQuery';
import { getWhyUsQuery } from '../queries/getAllWhyUsQuery';
import { getObavijestiNaStraniciQuery } from '../queries/getAllObavijestiQuery';
import { getDokumentikataloziQuery } from '../queries/getAllDocumentsQuery';
import { getCategoriesQuery } from '../queries/getAllBlogCategoriesQuery';
import { getTagsQuery } from '../queries/getAllTagsQuery';
import { getAdminCtaSelectionQuery } from '../queries/getAdminCtaSelectionQuery';
import dynamic from 'next/dynamic';
import Loading from '../loading';

// dynamic loading komponenti
const BlogSection = dynamic(() => import('./BlogSection'), { loading: () => <Loading /> });
const BrojcaniciSection = dynamic(() => import('./BrojcaniciSection'), { loading: () => <Loading /> });
const UslugeSection = dynamic(() => import('./UslugeSection'), { loading: () => <Loading /> });
const PartnersSection = dynamic(() => import('./PartnersSection'), { loading: () => <Loading /> });
const CarouselBase = dynamic(() => import('./CarouselBase'), { loading: () => <Loading /> });
const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), { loading: () => <Loading /> });
const WhyUsSection = dynamic(() => import('./WhyUsSection'), { loading: () => <Loading /> });
const DocumentsCatalogsSection = dynamic(() => import('./DocumentsCatalogsSection'), { loading: () => <Loading /> });
const HeroSection = dynamic(() => import('./HeroSection'), { ssr: false });
const NewsTrack = dynamic(() => import('../components/NewsTrack'), { loading: () => <Loading /> });

export const maxDuration = 60;
// export const revalidate = 3600; // revalidate at most every hour

async function fetchData(query: any) {
  try {
    const response = await fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate', // Keširaj API odgovore na sat vremena
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.statusText}`);
    }

    const data = await response.text(); // Get raw response text

    try {
      return JSON.parse(data); // Attempt to parse JSON
    } catch (jsonError) {
      console.error('Invalid JSON response:', data);
      return null;
    }
  } catch (error) {
    console.error('Fetch data error:', error);
    return null;
  }
}

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  try {
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
    ] = await Promise.all([
      fetchData(getAllBlogsQuery(lang)),
      fetchData(getAllBrojcaniciQuery(lang)),
      fetchData(getAllUslugeQuery(lang)),
      fetchData(getAllLogotipiPartneraQuery()),
      fetchData(getAllCarouselBaseQuery()),
      fetchData(getAllIskustvaKlijenataQuery(lang)),
      fetchData(getWhyUsQuery(lang)),
      fetchData(getObavijestiNaStraniciQuery(lang)),
      fetchData(getDokumentikataloziQuery(lang)),
      fetchData(getCategoriesQuery(lang)),
      fetchData(getTagsQuery(lang)),
      fetchData(getAdminCtaSelectionQuery()),
    ]);

    const blogDataArrayShorthand = getAllBlogs?.data?.allBlog?.edges || null;

    const brojcaniciDataArrayShorthand = getAllBrojcanici?.data?.allBrojcanici?.edges || null;

    const uslugeDataArrayShorthand = getAllUsluge?.data?.allUsluge?.edges || null;
    const logotipiPartneraDataArrayShorthand = getAllPartnersLogos?.data?.logotipiPartneraKlijenata?.edges || null;
    const baseCarouselDataShorthand = getAllCarouselBase?.data?.karuselNaslovnica?.edges[0]?.node || null;
    const iskustvaKlijenataShorthand = getAllIskustvaKlijenata?.data?.allIskustvaKlijenata?.edges || null;
    const whyUsDataShorthand = getAllWhyUs?.data?.allWhyus?.edges || null;
    const obavijestiNaStraniciDataShorthand = getAllObavijesti?.data?.allObavijestiNaStranici?.edges || null;
    const dokumentiKataloziDataShorthand = getAllDocuments?.data?.dokumentikatalozi?.edges || null;
    const kategorijeDataShorthand = getAllCategories?.data?.categories?.edges || null;
    const tagsDataShorthand = getAllTags?.data?.tags?.edges || null;
    const adminCtaSelection = getAllAdminCtaSelection?.data?.adminSetupArea.edges[0].node || null;

    return (
      <Suspense>
        <main className='relative w-full  dark:bg-primary-dark min-h-screen'>
          <HeroSection />

          {blogDataArrayShorthand && (
            <BlogSection
              pageContent={blogDataArrayShorthand}
              lang={lang}
              categoriesList={kategorijeDataShorthand}
              tagsList={tagsDataShorthand}
              blogCtaKey={adminCtaSelection ? adminCtaSelection.adminGlobalniSelektorCta.blogSekcijaCta[0] : ''}
              blogTableKey={process.env.BLOG_AIRTABLE_CTA_ID!}
            />
          )}

          {brojcaniciDataArrayShorthand && <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />}

          {uslugeDataArrayShorthand && <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />}
          {logotipiPartneraDataArrayShorthand && <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />}
          {baseCarouselDataShorthand && <CarouselBase imageArray={baseCarouselDataShorthand} />}
          {iskustvaKlijenataShorthand && <TestimonialsSection pageContent={iskustvaKlijenataShorthand} lang={lang} />}
          {whyUsDataShorthand && <WhyUsSection pageContent={whyUsDataShorthand} lang={lang} />}

          {dokumentiKataloziDataShorthand && (
            <DocumentsCatalogsSection pageContent={dokumentiKataloziDataShorthand} lang={lang} />
          )}

          <NewsTrack pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
        </main>
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading page content:', error);
    return <h2>Error loading content. Please try again later. {JSON.stringify(`Error: ${error}`)}</h2>;
  }
}
