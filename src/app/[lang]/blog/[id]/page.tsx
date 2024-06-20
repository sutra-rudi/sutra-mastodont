import { getSingleBlogQuery } from '@/app/queries/getSingleBlogQuery';
import PageContent from './PageContent';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';

export default async function SingleBlogPage({ params: { lang, id } }: { params: { lang: string; id: string } }) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(id);

  const getSingleBlog = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSingleBlogQuery(slugId),
    }),
    cache: 'no-cache',
  });

  const parseData = await getSingleBlog.json();

  const prepareDataForClient = parseData.data.blog;

  const languageField = blogLanguageFields[lang];

  return (
    <main>
      <PageContent content={prepareDataForClient[languageField]} global={prepareDataForClient.introBlog} />
    </main>
  );
}
