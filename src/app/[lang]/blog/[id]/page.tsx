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
      query: getSingleBlogQuery(slugId, lang),
    }),
    cache: 'no-cache',
  });

  const parseData = await getSingleBlog.json();

  const prepareDataForClient = parseData.data;

  const languageField = blogLanguageFields[lang];

  const l = `${lang[0].toUpperCase() + lang.slice(1).toLowerCase()}`;
  const constructFieldTags = `tags` + l;

  const constructDocumentString = () => {
    return `docsUpload${l}`;
  };

  const documentsField = {
    file: prepareDataForClient.blog[constructDocumentString()][lang],
    fileName: prepareDataForClient.blog[constructDocumentString()][`nazivDokumenta${l}`],
  };

  const tagsField = prepareDataForClient.blog[constructFieldTags][`tagText${l}`];

  return (
    <main>
      <PageContent
        content={prepareDataForClient.blog[languageField]}
        global={prepareDataForClient.blog.introBlog}
        gallery={prepareDataForClient.blog.photoGallery.fotogalerija}
        files={documentsField}
        tags={tagsField}
      />
    </main>
  );
}
