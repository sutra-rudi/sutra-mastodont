export const maxDuration = 60;

import { Suspense } from 'react';
import Loading from './loading';
import dynamic from 'next/dynamic';
//SECTION IMPORTS
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
import ContactLocations from '../appComponents/landing/ContactLocations';
import WhyUsSection from '../appComponents/landing/WhyUsSection';
import MiddleSectionBanner from '../appComponents/landing/MiddleSectionBanner';
import FeatureListSection from '../appComponents/landing/FeatureListSection';
import { Metadata } from 'next';
import { UserLanguage } from '../enums/LangEnum';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { cookies } from 'next/headers';
///

const seoData = dataset.data.allSeoAdmin.edges.find((item) => item.node.title === 'Glavni SEO weba');
//

const MiddleSectionVideo = dynamic(() => import('../appComponents/landing/MiddleSectionVIdeo'), {
  ssr: false,
  loading: () => <Loading />,
});
const BlogSection = dynamic(() => import('../appComponents/landing/BlogSection'), {
  loading: () => <Loading />,
});
const NewsSection = dynamic(() => import('../appComponents/landing/NewsSection'));
const MapSection = dynamic(() => import('../appComponents/landing/MapSection'));
const WorkingHoursSection = dynamic(() => import('../appComponents/landing/WorkingHoursSection'));
const FaqSection = dynamic(() => import('../appComponents/landing/FaqSection'), { ssr: false });
const ContactSection = dynamic(() => import('../appComponents/landing/ContactSection'), { ssr: false });
const HeroSection = dynamic(() => import('../appComponents/landing/AppHero'), {
  ssr: false,
  loading: () => <Loading />,
});
const BaseCaruselSection = dynamic(() => import('../appComponents/landing/BaseCaruselSection'), {
  ssr: false,
  loading: () => <Loading />,
});

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

const localeMapping: Record<UserLanguage, string> = {
  hr: 'hr-HR', // Hrvatski (Hrvatska)
  eng: 'en-US', // Engleski (SAD)
  ger: 'de-DE', // Njemački (Njemačka)
  ita: 'it-IT', // Talijanski (Italija)
  fra: 'fr-FR', // Francuski (Francuska)
  esp: 'es-ES', // Španjolski (Španjolska)
  slo: 'sl-SI', // Slovenski (Slovenija)
};

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const { ogImagesDefault } = await fetchMediaPaths();
  const l = getSuffixFromLang(lang);
  //@ts-ignore
  const seoGlobal = seoData?.node[`bazniSeo${l}`]?.[`bazniSeoTekstoviGlobalniZaStranicu${l}`];

  const title = seoGlobal?.seoNaslov;

  const desc = seoGlobal?.seoOpisStranice;

  const pathSuffixes: Record<UserLanguage, string> = {
    hr: '/hr',
    eng: '/eng',
    ger: '/ger',
    ita: '/ita',
    fra: '/fra',
    esp: '/esp',
    slo: '/slo',
  };
  const domain = 'https://www.sutra-mastodont.vercel.app';

  //@ts-ignore
  const suffixPath = pathSuffixes[lang] ?? '';
  const canonicalUrl = `${domain}${suffixPath}`;

  const languages = Object.fromEntries(
    Object.entries(pathSuffixes).map(([code, suf]) => {
      const iso = localeMapping[code as UserLanguage];
      return [iso, `${domain}${suf}`];
    })
  );

  return {
    title: { template: `%s | ${title}`, default: title },
    description: desc,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: title,
      description: desc,
      url: canonicalUrl,
      //@ts-ignore
      locale: localeMapping[lang],
      alternateLocale: Object.keys(languages),
      type: 'website',
      siteName: 'Boat Tour Zadar',
      images: [ogImagesDefault.default],
    },

    twitter: {
      title: title,
      description: desc,
      card: 'summary_large_image',
      creator: '@Boat-Tour-Zadar',
      images: [ogImagesDefault.default],
    },
  };
}

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const abGroup = cookies().get('@sutra-ab-test')?.value as 'A' | 'B';

  console.log(abGroup, 'GRUPA');
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

  const blogsData = !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allBlog?.edges : null;
  const newsData = !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allNovosti?.edges : null;
  const cInData = !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allBrojcanici?.edges : null;
  const cTData = !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allIskustvaKlijenata?.edges : null;
  // const pCsData = !groupQ.error ? groupQ.data.allPortfolioCaseStudy?.edges : null;
  const jOData = !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allOglasiZaPosao?.edges : null;

  const baseWHdata = !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allRadnoVrijeme?.edges : null;
  const seasonWHdata =
    !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allRadnoVrijemeSezonsko?.edges : null;

  const eventsData = !groupQ.error && typeof groupQ.data !== 'undefined' ? groupQ.data.allEvent?.edges : null;

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
        <HeroSection currentLang={lang} imgs={heroImagesHomePage} abGroup={abGroup} />
        <ContentSectionFirst isList={false} content={findFirstTextContent?.node} currentLang={lang} />
        <BaseCaruselSection dataset={filterImagesBase} />

        <ContentSectionFirst reverse isList={true} content={findFirstListContent?.node} currentLang={lang} />

        {eventsData && <EventSection dataset={eventsData} currentLang={lang} />}

        <ButtonDisplay />

        <ContactLocations currentLang={lang} />

        <WhyUsSection currentLang={lang} />

        <FeatureListSection currentLang={lang} />

        {seasonWHdata && baseWHdata && (
          <WorkingHoursSection sezonsko={seasonWHdata} bazno={baseWHdata} currentLang={lang} />
        )}

        <EmailBannerSection currentLang={lang} />

        {blogsData && <BlogSection currentLang={lang} blogList={blogsData} />}

        <BaseCaruselSection dataset={filterImagesMiddle} />

        <ServicesSection currentLang={lang} />

        <MiddleSectionBanner img={heroImagesHomePage} />

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
