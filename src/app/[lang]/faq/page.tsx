// import FaqSection from '@/app/appComponents/landing/FaqSection';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import Client from './Client';
import { Suspense } from 'react';
import { fetchData } from '@/app/utils/callApi';
import getFaqPage from '@/app/queries/dynamicQueries/getFaqPage';
import parse from 'html-react-parser';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

export default async function FAQpage({ params: { lang } }: { params: { lang: string } }) {
  const MP = await fetchMediaPaths();
  const l = getSuffixFromLang(lang);

  const getFaqData = await fetchData(getFaqPage());

  const dataset = !getFaqData.error ? getFaqData.data.allFaqOnePager.edges[0].node : null;

  const { heroImagesFAQ } = MP;
  return (
    <main className='relative w-full min-h-screen -mt--desktop---4xl'>
      <Suspense>
        <Client lang={lang} imgSrc={heroImagesFAQ} />

        {dataset[`text${l}`]?.[`sadrzajText${l}`] && (
          <div className='max-w-prose mx-auto px-4 lg:-mt--desktop---3xl md:-mt--tablet---3xl -mt--mobile---3xl'>
            <h1 className='lg:text-h1-desktop md:text-h1-tablet text-h1-mobile35 text-heading-color-light-mode dark:text-heading-color-dark-mode'>
              {dataset[`text${l}`]?.[`naslov${l}`] ?? 'Nema naslova'}
            </h1>
            <div className='lg:prose-lg prose text-text-light-mode dark:text-text-dark-mode prose-headings:text-heading-color-light-mode dark:prose-headings:text-hero-heading-color-dark-mode'>
              {parse(dataset[`text${l}`]?.[`sadrzajText${l}`])}
            </div>
          </div>
        )}
        {/* <FaqSection currentLang={lang} isSub /> */}
      </Suspense>
    </main>
  );
}
