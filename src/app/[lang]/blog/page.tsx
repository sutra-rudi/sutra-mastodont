import getAllBlogs from '@/app/queries/dynamicQueries/getAllBlogs';
import { fetchData } from '@/app/utils/callApi';
import Client from './Client';

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
      {allBlogs && <Client currentLang={lang} blogList={allBlogs} param={searchParams!.tag ?? null} />}
    </main>
  );
}
