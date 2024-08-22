import { Suspense } from 'react';
import { getAllBlogsQuery } from '../queries/getAllBlogsQuery';
import { getAllNewsQuery } from '../queries/getAllNewsQuery';
import BlogSection from './BlogSection';
import NewsSection from './NewsSection';
import LocationsSection from './LocationsSection';
import BrojcaniciSection from './BrojcaniciSection';
import { getAllBrojcaniciQuery } from '../queries/getAllBrojcaniciQuery';
import SingleFaqSection from './SingleFaqSection';
import { getAllFaqSinglesQuery } from '../queries/getAllFaqSingles';
import { getAllUslugeQuery } from '../queries/getAllUslugeQuery';
import UslugeSection from './UslugeSection';
import PartnersSection from './PartnersSection';
import { getAllLogotipiPartneraQuery } from '../queries/getAllLogotipiPartnera';
import { getAllCarouselBaseQuery } from '../queries/getAllCarouselBase';
import CarouselBase from './CarouselBase';
import { getAllIskustvaKlijenataQuery } from '../queries/getAllIskustvaKlijenataQuery';
import TestimonialsSection from './TestimonialsSection';
import { getWhyUsQuery } from '../queries/getAllWhyUsQuery';
import WhyUsSection from './WhyUsSection';
import { getObavijestiNaStraniciQuery } from '../queries/getAllObavijestiQuery';
import ObavijestiSection from './ObavijestiSection';
import { getDokumentikataloziQuery } from '../queries/getAllDocumentsQuery';
import DocumentsCatalogsSection from './DocumentsCatalogsSection';
import HeroSection from './HeroSection';

import { getLokacijeQuery } from '../queries/getAllLocationsQuery';
import { getCategoriesQuery } from '../queries/getAllBlogCategoriesQuery';
import { getTagsQuery } from '../queries/getAllTagsQuery';
import { getAdminCtaSelectionQuery } from '../queries/getAdminCtaSelectionQuery';
import NewsTrack from '../components/NewsTrack';

export const maxDuration = 60;
export const revalidate = 3600; // revalidate at most every hour

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
      const errorResponse = await response.text();
      throw new Error(`Fetch error: ${response.statusText}\n${errorResponse}`);
    }

    const responseData = await response.text();
    try {
      return JSON.parse(responseData);
    } catch (e) {
      throw new Error(`Invalid JSON: ${responseData}`);
    }
  } catch (error) {
    console.error('Fetch data error:', error);
    return null; // vratite null ili fallback podatke u slučaju greške
  }
}

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  try {
    const [
      getAllBlogs,
      // getAllNews,
      getAllLocations,
      getAllBrojcanici,
      getAllFaqSingle,
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
      // fetchData(getAllNewsQuery(lang)),
      fetchData(getLokacijeQuery(lang)),
      fetchData(getAllBrojcaniciQuery(lang)),
      fetchData(getAllFaqSinglesQuery(lang)),
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
    // const newsDataArrayShorthand = getAllNews?.data?.allNovosti?.edges || null;
    const locationsDataArrayShorthand = getAllLocations?.data?.lokacije?.edges || null;
    const brojcaniciDataArrayShorthand = getAllBrojcanici?.data?.allBrojcanici?.edges || null;
    const faqSingleDataArrayShorthand = getAllFaqSingle?.data?.allFAQPojedinacno?.edges || null;
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
        <main className='relative'>
          <HeroSection />
          {blogDataArrayShorthand && (
            <BlogSection
              pageContent={blogDataArrayShorthand}
              lang={lang}
              categoriesList={kategorijeDataShorthand}
              tagsList={tagsDataShorthand}
              blogCtaKey={adminCtaSelection.adminGlobalniSelektorCta.blogSekcijaCta[0]}
              blogTableKey={process.env.BLOG_AIRTABLE_CTA_ID!}
            />
          )}
          {/* {newsDataArrayShorthand && <NewsSection pageContent={newsDataArrayShorthand} lang={lang} />} */}
          {locationsDataArrayShorthand && <LocationsSection pageContent={locationsDataArrayShorthand} />}
          {brojcaniciDataArrayShorthand && <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />}
          {faqSingleDataArrayShorthand && <SingleFaqSection pageContent={faqSingleDataArrayShorthand} lang={lang} />}
          {uslugeDataArrayShorthand && <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />}
          {logotipiPartneraDataArrayShorthand && <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />}
          {baseCarouselDataShorthand && <CarouselBase imageArray={baseCarouselDataShorthand} />}
          {iskustvaKlijenataShorthand && <TestimonialsSection pageContent={iskustvaKlijenataShorthand} lang={lang} />}
          {whyUsDataShorthand && <WhyUsSection pageContent={whyUsDataShorthand} lang={lang} />}
          {obavijestiNaStraniciDataShorthand && (
            <ObavijestiSection pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
          )}
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
