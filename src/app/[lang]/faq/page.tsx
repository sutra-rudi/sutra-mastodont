import FaqSection from '@/app/appComponents/landing/FaqSection';

export default async function FAQpage({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className='relative w-full min-h-screen md:-mt--desktop---section-l -mt--desktop---5xl'>
      <FaqSection currentLang={lang} />
    </main>
  );
}
