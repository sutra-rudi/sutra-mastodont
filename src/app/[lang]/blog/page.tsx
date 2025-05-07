import BlogSection from '@/app/appComponents/landing/BlogSection';
import getAllBlogs from '@/app/queries/dynamicQueries/getAllBlogs';
import { fetchData } from '@/app/utils/callApi';

export default async function BlogPage({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  const getBlogs = await fetchData(getAllBlogs());
  const allBlogs = !getBlogs.error ? getBlogs.data.allBlog?.edges : null;
  return (
    <main className='w-full h-full relative block'>
      {allBlogs && <BlogSection currentLang={lang} blogList={allBlogs} />}
    </main>
  );
}
