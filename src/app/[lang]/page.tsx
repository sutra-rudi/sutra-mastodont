import AppHero from '../appComponents/landing/AppHero';
import BaseCaruselSection from '../appComponents/landing/BaseCaruselSection';
import ContentSectionFirst from '../appComponents/landing/ContentSectionFirst';
import ContentSectionSecond from '../appComponents/landing/ContentSectionSecond';
import MapSection from '../appComponents/landing/MapSection';

export const maxDuration = 60;

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen'>
      <AppHero lang={lang} heroContent={''} />
      <ContentSectionFirst />
      <BaseCaruselSection />
      <ContentSectionSecond />
      <MapSection />
    </main>
  );
}
