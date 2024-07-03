import { Suspense } from 'react';
import { getAllBlogsQuery } from '../queries/getAllBlogsQuery';
import { getAllNewsQuery } from '../queries/getAllNewsQuery';
import BlogSection from './BlogSection';
import NewsSection from './NewsSection';
import LocationsSection from './LocationsSection';
import { getAllLocationsQuery } from '../queries/getAllLocationsQuery';
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
export const maxDuration = 60;

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const requests = [
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllBlogsQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllNewsQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllLocationsQuery,
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllBrojcaniciQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllFaqSinglesQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllUslugeQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllLogotipiPartneraQuery(),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllCarouselBaseQuery(),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getAllIskustvaKlijenataQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getWhyUsQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getObavijestiNaStraniciQuery(lang),
      }),
      // cache: 'no-cache',
    }),
    fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getDokumentikataloziQuery(lang),
      }),
      // cache: 'no-cache',
    }),
  ];

  const [
    getAllblogs,
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
  ] = await Promise.all(requests);

  const [
    parseDataBlog,
    parseDataNews,
    parseDataLocations,
    parseDataBrojcanici,
    parseDataFaqSingle,
    parseDataUsluge,
    parseDataPartnersLogos,
    parseDataCarouselQuery,
    parseDataIskustva,
    parseDataWhyUs,
    parseDataObavijesti,
    parseAllDocuments,
  ] = await Promise.all([
    getAllblogs.json(),
    getAllNews.json(),
    getAllLocations.json(),
    getAllBrojcanici.json(),
    getAllFaqSingle.json(),
    getAllUsluge.json(),
    getAllPartnersLogos.json(),
    getAllCarouselBase.json(),
    getAllIskustvaKlijenata.json(),
    getAllWhyUs.json(),
    getAllObavijesti.json(),
    getAllDocuments.json(),
  ]);

  const blogDataArrayShorthand = parseDataBlog.data.allBlog.edges;
  const newsDataArrayShorthand = parseDataNews.data.allNovosti.edges;
  const brojcaniciDataArrayShorthand = parseDataBrojcanici.data.allBrojcanici.edges;
  const faqSingleDataArrayShorthand = parseDataFaqSingle.data.allFAQPojedinacno.edges;
  const uslugeDataArrayShorthand = parseDataUsluge.data.allUsluge.edges;
  const logotipiPartneraDataArrayShorthand = parseDataPartnersLogos.data.logotipiPartneraKlijenata.edges;
  const baseCarouselDataShorthand = parseDataCarouselQuery.data.karuselNaslovnica.edges[0].node;
  const iskustvaKlijenataShorthand = parseDataIskustva.data.allIskustvaKlijenata.edges;
  const whyUsDataShorthand = parseDataWhyUs.data.allWhyus.edges;
  const obavijestiNaStraniciDataShorthand = parseDataObavijesti.data.allObavijestiNaStranici.edges;
  const dokumentiKataloziDataShorthand = parseAllDocuments.data.dokumentikatalozi.edges;

  return (
    <Suspense fallback={<h2>LOADING...</h2>}>
      <main>
        <BlogSection pageContent={blogDataArrayShorthand} lang={lang} />
        <NewsSection pageContent={newsDataArrayShorthand} lang={lang} />
        <LocationsSection pageContent={parseDataLocations} />
        <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />
        <SingleFaqSection pageContent={faqSingleDataArrayShorthand} lang={lang} />
        <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />
        <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />
        <CarouselBase imageArray={baseCarouselDataShorthand} />
        <TestimonialsSection pageContent={iskustvaKlijenataShorthand} lang={lang} />
        <WhyUsSection pageContent={whyUsDataShorthand} lang={lang} />
        <ObavijestiSection pageContent={obavijestiNaStraniciDataShorthand} lang={lang} />
        <DocumentsCatalogsSection pageContent={dokumentiKataloziDataShorthand} lang={lang} />
      </main>
    </Suspense>
  );
}
