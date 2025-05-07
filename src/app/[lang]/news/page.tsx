import NewsSection from '@/app/appComponents/landing/NewsSection';
import getAllNews from '@/app/queries/dynamicQueries/getAllNews';
import { fetchData } from '@/app/utils/callApi';

export default async function NewsPage({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  const getNews = await fetchData(getAllNews());
  const allnews = !getNews.error ? getNews.data.allNovosti?.edges : null;
  return (
    <main className='w-full h-full relative block min-h-screen'>
      {allnews && <NewsSection currentLang={lang} newsList={allnews} />}
    </main>
  );
}
