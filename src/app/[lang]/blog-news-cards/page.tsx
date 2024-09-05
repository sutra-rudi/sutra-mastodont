import { getAllBlogsQuery } from '@/app/queries/getAllBlogsQuery';
import PageContent from './PageContent';

export default async function BlogAndNewsCards({ params: { lang } }: { params: { lang: string } }) {
  const getAllBlogs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBlogsQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const res = await getAllBlogs.json();

  const dataShorthand = res.data.allBlog.edges;

  return (
    <main>
      <PageContent pageContent={dataShorthand} lang={lang} />
    </main>
  );
}
