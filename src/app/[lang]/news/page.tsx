export const revalidate = 1800;

import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';
import getAllNews from '@/app/queries/dynamicQueries/getAllNews';
import { fetchData } from '@/app/utils/callApi';
import Client from './Client';
import { Suspense } from 'react';

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
    <main className='relative w-full dark:bg-primarna-tamna min-h-screen bg-white z-40'>
      <Suspense>
        <div className='max-w-screen-xl px-4 mx-auto flex items-center justify-start -mt--desktop---5xl'>
          <Breadcrumbs />
        </div>
        {allnews && <Client currentLang={lang} blogList={allnews} param={searchParams!.tag ?? null} />}
      </Suspense>
    </main>
  );
}
