import NewsSection from '@/app/appComponents/landing/NewsSection';
import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import getAllNews from '@/app/queries/dynamicQueries/getAllNews';
import { fetchData } from '@/app/utils/callApi';
import Client from './Client';

export default async function NewsPage({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const getNews = await fetchData(getAllNews());
  const allnews = !getNews.error ? getNews.data.allNovosti?.edges : null;
  return (
    <main className='w-full h-full relative block min-h-screen'>
      <div className='max-w-screen-xl px-4 mx-auto flex items-center justify-start -mt--desktop---5xl'>
        <Breadcrumbs />
      </div>
      {allnews && <Client currentLang={lang} blogList={allnews} param={searchParams!.tag ?? null} />}
    </main>
  );
}
