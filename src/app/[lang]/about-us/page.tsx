import { getAllONamaQuery } from '@/app/queries/getAllONamaQuery';

export default async function AboutUsPage({ params: { lang } }: { params: { lang: string } }) {
  const getAboutUs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllONamaQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseData = await getAboutUs.json();

  console.log('PARSE', parseData);

  console.log('CIAO');

  return <main>CIAO ABOUT</main>;
}
