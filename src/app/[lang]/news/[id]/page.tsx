import { getSingleNewsQuery } from '@/app/queries/getSingleNewsQuery';
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
      query: getSingleNewsQuery(slugId),
    }),
    cache: 'no-cache',
  });

  const parseData = await getSingleBlog.json();

  const prepareDataForClient = parseData.data.novosti;

  const languageField = blogLanguageFields[lang];

  // const documentsField = {
  //   file: prepareDataForClient.fileAttachments.dokumenti[lang],
  //   fileName: prepareDataForClient.fileAttachments.imeDokumenta[lang],
  // };

  const l = `${lang[0].toUpperCase() + lang.slice(1).toLowerCase()}`;
  const constructField = `tags` + l;

  const tagsField = prepareDataForClient[constructField].tagText;

  return (
    <main>
      <PageContent
        content={prepareDataForClient[languageField]}
        global={prepareDataForClient.introNews}
        gallery={prepareDataForClient.photoGallery.fotogalerija}
        files={['documentsField']}
        tags={tagsField}
      />
    </main>
  );
}
