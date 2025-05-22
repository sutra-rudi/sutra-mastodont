import FaqSection from '@/app/appComponents/landing/FaqSection';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';
import Client from './Client';
import { Suspense } from 'react';

export default async function FAQpage({ params: { lang } }: { params: { lang: string } }) {
  const MP = await fetchMediaPaths();

  const { heroImagesFAQ } = MP;
  return (
    <main className='relative w-full min-h-screen -mt--desktop---4xl'>
      <Suspense>
        <Client lang={lang} imgSrc={heroImagesFAQ} />
        <FaqSection currentLang={lang} isSub />
      </Suspense>
    </main>
  );
}
