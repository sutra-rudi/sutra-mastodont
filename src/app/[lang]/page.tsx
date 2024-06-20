import { getAllBlogsQuery } from '../queries/getAllBlogsQuery';
import BlogSection from './BlogSection';

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const getAllblogs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBlogsQuery,
    }),
    cache: 'no-cache',
  });

  const parseData = await getAllblogs.json();

  const dataArrayShorthand = parseData.data.allBlog.edges;

  return <main>{<BlogSection pageContent={dataArrayShorthand} lang={lang} />}</main>;
}
