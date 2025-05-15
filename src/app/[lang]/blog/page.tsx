export const revalidate = 1800;

import getAllBlogs from '@/app/queries/dynamicQueries/getAllBlogs';
import { fetchData } from '@/app/utils/callApi';
import Client from './Client';
import Breadcrumbs from '@/app/globalComponents/Breadcrumbs';

export default async function BlogPage({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const getBlogs = await fetchData(getAllBlogs());
  const allBlogs = !getBlogs.error ? getBlogs.data.allBlog?.edges : null;
  return (
    <main className='w-full h-full relative block min-h-screen'>
      <div className='max-w-screen-xl px-4 mx-auto flex items-center justify-start -mt--desktop---5xl'>
        <Breadcrumbs />
      </div>
      {allBlogs && <Client currentLang={lang} blogList={allBlogs} param={searchParams!.tag ?? null} />}
    </main>
  );
}
