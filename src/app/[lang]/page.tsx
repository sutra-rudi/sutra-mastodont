import { Suspense, lazy } from 'react';

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
import CookieConsentNotification from '../components/CookiesNotification';

// Lazy loading komponenti
const BlogSection = lazy(() => import('./BlogSection'));
const BrojcaniciSection = lazy(() => import('./BrojcaniciSection'));
const UslugeSection = lazy(() => import('./UslugeSection'));
const PartnersSection = lazy(() => import('./PartnersSection'));
const CarouselBase = lazy(() => import('./CarouselBase'));
const TestimonialsSection = lazy(() => import('./TestimonialsSection'));
const WhyUsSection = lazy(() => import('./WhyUsSection'));
const DocumentsCatalogsSection = lazy(() => import('./DocumentsCatalogsSection'));
const HeroSection = lazy(() => import('./HeroSection'));
const NewsTrack = lazy(() => import('../components/NewsTrack'));

export const maxDuration = 60;
// export const revalidate = 3600; // revalidate at most every hour

async function fetchData(query: any) {
  try {
    const response = await fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response error:', errorText);
      throw new Error(`Fetch error: ${response.statusText}`);
    }

    const data = await response.text(); // Get raw response text
    // console.log('Raw response:', data); // Log raw response for debugging

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
            <Suspense>
              <BlogSection
                pageContent={blogDataArrayShorthand}
                lang={lang}
                categoriesList={kategorijeDataShorthand}
                tagsList={tagsDataShorthand}
                blogCtaKey={adminCtaSelection ? adminCtaSelection.adminGlobalniSelektorCta.blogSekcijaCta[0] : ''}
                blogTableKey={process.env.BLOG_AIRTABLE_CTA_ID!}
              />
            </Suspense>
          )}

          {brojcaniciDataArrayShorthand && (
            <Suspense>
              <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />
            </Suspense>
          )}

          {uslugeDataArrayShorthand && (
            <Suspense>
              <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />
            </Suspense>
          )}
          {logotipiPartneraDataArrayShorthand && (
            <Suspense>
              <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />
            </Suspense>
          )}
          {baseCarouselDataShorthand && (
            <Suspense>
              <CarouselBase imageArray={baseCarouselDataShorthand} />
            </Suspense>
          )}
          {iskustvaKlijenataShorthand && (
            <Suspense>
              <TestimonialsSection pageContent={iskustvaKlijenataShorthand} lang={lang} />
            </Suspense>
          )}
          {whyUsDataShorthand && (
            <Suspense>
              <WhyUsSection pageContent={whyUsDataShorthand} lang={lang} />
            </Suspense>
          )}

          {dokumentiKataloziDataShorthand && (
            <Suspense>
              <DocumentsCatalogsSection pageContent={dokumentiKataloziDataShorthand} lang={lang} />
            </Suspense>
          )}
          <Suspense>
            <NewsTrack pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
          </Suspense>
        </main>
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading page content:', error);
    return <h2>Error loading content. Please try again later. {JSON.stringify(`Error: ${error}`)}</h2>;
  }
}
