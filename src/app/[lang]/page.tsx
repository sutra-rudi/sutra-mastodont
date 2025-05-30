export const maxDuration = 60;
export const revalidate = 1800;

import { Suspense } from 'react';
import Loading from './loading';
import dynamic from 'next/dynamic';
//SECTION IMPORTS
import AppHero from '../appComponents/landing/AppHero';
import BaseCaruselSection from '../appComponents/landing/BaseCaruselSection';
import ContentSectionFirst from '../appComponents/landing/ContentSectionFirst';
import CompanyInNumbers from '../appComponents/landing/CompanyInNumbers';
import ClientTestimonials from '../appComponents/landing/ClientTestimonials';
import ServicesSection from '../appComponents/landing/ServicesSection';
import PartnersSection from '../appComponents/landing/PartnersSection';
// import { PortfolioCaseStudyFragment } from '../queries/dynamicQueries/getAllPortfolioCaseStudy';
// import PortfolioCaseStudy from '../appComponents/landing/PortfolioCaseStudy';
import AboutUsSection from '../appComponents/landing/AboutUsSection';
import JobOpeningSection from '../appComponents/landing/JobOpeningSection';
import ButtonDisplay from '../appComponents/landing/ButtonDisplay';
import EmailBannerSection from '../appComponents/landing/NewsletterSection';

const MiddleSectionVideo = dynamic(() => import('../appComponents/landing/MiddleSectionVIdeo'), { ssr: false });
const BlogSection = dynamic(() => import('../appComponents/landing/BlogSection'));
const NewsSection = dynamic(() => import('../appComponents/landing/NewsSection'));
const MapSection = dynamic(() => import('../appComponents/landing/MapSection'));
const WorkingHoursSection = dynamic(() => import('../appComponents/landing/WorkingHoursSection'));
const FaqSection = dynamic(() => import('../appComponents/landing/FaqSection'), { ssr: false });
const ContactSection = dynamic(() => import('../appComponents/landing/ContactSection'), { ssr: false });
//QUERIES
import { fetchMediaPaths } from '../utils/callMediaPaths';
import { BlogFragment } from '../queries/dynamicQueries/getAllBlogs';
import { NewsFragment } from '../queries/dynamicQueries/getAllNews';
import { BrojcaniciFragment } from '../queries/dynamicQueries/getAllBrojcanici';
import { IskustvaFragment } from '../queries/dynamicQueries/getAllIskustva';

//UTILS
import { fetchData } from '../utils/callApi';
//STATIC DATA
import dataset from '../staticData/staticQueryData.json';
import PhotoGalleryComponent from '../appComponents/global/PhotoGallery';
import { JobOpeningsFragment } from '../queries/dynamicQueries/getAllJobOpenings';
import Timeline from '../components/Timeline';
import getWorkingHoursQueryFragment from '../queries/dynamicQueries/getWorkingHours';

import { getAllEventsFragment } from '../queries/dynamicQueries/getAllEvents';
import EventSection from '../appComponents/landing/EventSection';

const findKaruselDataBase = dataset.data.allSlikeGalerijaKarusel.edges.find(
  (list) => list.node.title === 'Naslovnica – Karusel slika'
);
const findKaruselDataMiddle = dataset.data.allSlikeGalerijaKarusel.edges[0];
const findFirstTextContent = dataset.data.allBazaTekstaPodstranice1Modul.edges.find(
  (item) => item.node.title === 'Naslovnica – S NAMA NA KORNATE'
);

const findFirstListContent = dataset.data.allBazaLista.edges.find(
  (item) => item.node.title === 'NASLOVNICA – ŠTO ĆETE SVE VIDJETI'
);

const findCiNStatic = dataset.data.allBrojcanici.edges;
const findCtStatic = dataset.data.allIskustvaKlijenata.edges;

const filterImagesBase = Object.values(findKaruselDataBase?.node.photoGallery30pcs!).filter((val) => val);
const filterImagesMiddle = Object.values(findKaruselDataMiddle?.node.photoGallery30pcs!).filter((val) => val);

//
export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  //DYNAMIC DATA

  // ${PortfolioCaseStudyFragment()}
  const groupQ = await fetchData(`query groupQuery {
    ${BlogFragment()}
    ${NewsFragment()}
    ${BrojcaniciFragment()}
    ${IskustvaFragment()}
    ${JobOpeningsFragment()}
    ${getWorkingHoursQueryFragment()}
    ${getAllEventsFragment()}
    }`);

  const blogsData = !groupQ.error ? groupQ.data.allBlog?.edges : null;
  const newsData = !groupQ.error ? groupQ.data.allNovosti?.edges : null;
  const cInData = !groupQ.error ? groupQ.data.allBrojcanici?.edges : null;
  const cTData = !groupQ.error ? groupQ.data.allIskustvaKlijenata?.edges : null;
  // const pCsData = !groupQ.error ? groupQ.data.allPortfolioCaseStudy?.edges : null;
  const jOData = !groupQ.error ? groupQ.data.allOglasiZaPosao?.edges : null;

  const baseWHdata = !groupQ.error ? groupQ.data.allRadnoVrijeme?.edges : null;
  const seasonWHdata = !groupQ.error ? groupQ.data.allRadnoVrijemeSezonsko?.edges : null;

  const eventsData = !groupQ.error ? groupQ.data.allEvent?.edges : null;

  //MEDIA PATHS
  const MP = await fetchMediaPaths();

  const {
    carusel1Images,
    heroImagesHomePage,
    videoResources: { homePageMiddleSection },
  } = MP;

  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen'>
      <Suspense fallback={<Loading />}>
        <AppHero currentLang={lang} imgs={heroImagesHomePage} />
        <ContentSectionFirst
          isList={false}
          content={findFirstTextContent?.node}
          currentLang={lang}
          placeholderGallery={carusel1Images}
        />
        <BaseCaruselSection dataset={filterImagesBase} />

        <ContentSectionFirst
          reverse
          isList={true}
          content={findFirstListContent?.node}
          currentLang={lang}
          placeholderGallery={carusel1Images}
        />

        {eventsData && <EventSection dataset={eventsData} currentLang={lang} />}

        <ButtonDisplay />

        {seasonWHdata && baseWHdata && (
          <WorkingHoursSection sezonsko={seasonWHdata} bazno={baseWHdata} currentLang={lang} />
        )}

        <EmailBannerSection currentLang={lang} />

        {blogsData && <BlogSection currentLang={lang} blogList={blogsData} />}

        <BaseCaruselSection dataset={filterImagesMiddle} />

        <ServicesSection currentLang={lang} />

        <AboutUsSection currentLang={lang} />

        <Timeline currentLang={lang} />

        <MiddleSectionVideo sourceUrl={homePageMiddleSection} />

        {/* {pCsData && <PortfolioCaseStudy currentLang={lang} dataset={pCsData} />} */}

        <CompanyInNumbers dataset={cInData ? cInData : findCiNStatic} currentLang={lang} />

        <PartnersSection currentLang={lang} />

        {jOData && <JobOpeningSection currentLang={lang} dataset={jOData} />}

        <ClientTestimonials currentLang={lang} dataset={cTData ? cTData : findCtStatic} />
        {newsData && <NewsSection currentLang={lang} newsList={newsData} />}

        <div className='lg:-mt--desktop---5xl md:-mt--tablet---5xl -mt--mobile---5xl max-w-[1140px] mx-auto px-4'>
          <PhotoGalleryComponent gallery={filterImagesBase} currentLang={lang} />
        </div>

        <ContactSection currentLang={lang} sezonsko={seasonWHdata} bazno={baseWHdata} />

        <FaqSection currentLang={lang} isSub={false} />
        <MapSection />
      </Suspense>
    </main>
  );
}
