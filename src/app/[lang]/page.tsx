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
import ButtonsDisplay from './ButtonsDisplay';
import { getLokacijeQuery } from '../queries/getAllLocationsQuery';
import { getCategoriesQuery } from '../queries/getAllBlogCategoriesQuery';
import { getTagsQuery } from '../queries/getAllTagsQuery';

export const maxDuration = 60;
export const revalidate = 3600; // revalidate at most every hour

async function fetchData(query: any) {
  const response = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  if (!response.ok) {
    const errorResponse = await response.text();
    throw new Error(`Fetch error: ${response.statusText}\n${errorResponse}`);
  }

  // console.log('DATA QUERY', query);

  return response.json();
}

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  try {
    const [
      getAllBlogs,
      getAllNews,
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
    ] = await Promise.all([
      fetchData(getAllBlogsQuery(lang)),
      fetchData(getAllNewsQuery(lang)),
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
    ]);

    const blogDataArrayShorthand = getAllBlogs.data.allBlog.edges;
    const newsDataArrayShorthand = getAllNews.data.allNovosti.edges;
    const locationsDataArrayShorthand = getAllLocations.data.lokacije.edges;
    const brojcaniciDataArrayShorthand = getAllBrojcanici.data.allBrojcanici.edges;
    const faqSingleDataArrayShorthand = getAllFaqSingle.data.allFAQPojedinacno.edges;
    const uslugeDataArrayShorthand = getAllUsluge.data.allUsluge.edges;
    const logotipiPartneraDataArrayShorthand = getAllPartnersLogos.data.logotipiPartneraKlijenata.edges;
    const baseCarouselDataShorthand = getAllCarouselBase.data.karuselNaslovnica.edges[0].node;
    const iskustvaKlijenataShorthand = getAllIskustvaKlijenata.data.allIskustvaKlijenata.edges;
    const whyUsDataShorthand = getAllWhyUs.data.allWhyus.edges;
    const obavijestiNaStraniciDataShorthand = getAllObavijesti.data.allObavijestiNaStranici.edges;
    const dokumentiKataloziDataShorthand = getAllDocuments.data.dokumentikatalozi.edges;
    const kategorijeDataShorthand = getAllCategories.data.categories.edges;
    const tagsDataShorthand = getAllTags.data.tags.edges;

    return (
      <Suspense>
        <main>
          <HeroSection />
          <BlogSection
            pageContent={blogDataArrayShorthand}
            lang={lang}
            categoriesList={kategorijeDataShorthand}
            tagsList={tagsDataShorthand}
          />
          <NewsSection pageContent={newsDataArrayShorthand} lang={lang} />
          <LocationsSection pageContent={locationsDataArrayShorthand} />
          <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />
          <SingleFaqSection pageContent={faqSingleDataArrayShorthand} lang={lang} />
          <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />
          <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />
          <CarouselBase imageArray={baseCarouselDataShorthand} />
          <TestimonialsSection pageContent={iskustvaKlijenataShorthand} lang={lang} />
          <WhyUsSection pageContent={whyUsDataShorthand} lang={lang} />
          <ObavijestiSection pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
          <DocumentsCatalogsSection pageContent={dokumentiKataloziDataShorthand} lang={lang} />
          <ButtonsDisplay />
        </main>
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading page content:', error);
    return <h2>Error loading content. Please try again later. {JSON.stringify(`Error: ${error}`)}</h2>;
  }
}
