import { getAllBlogsQuery } from '@/app/queries/getAllBlogsQuery';
import PageContent from './PageContent';
import { getAdminBlogArchiveSettingsQuery } from '@/app/queries/getAdminBlogArchiveSettings';
import { getCategoriesQuery } from '@/app/queries/getAllBlogCategoriesQuery';

export default async function BlogPage({ params: { lang } }: { params: { lang: string } }) {
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

  //

  const getAdminBlogArchiveSettings = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAdminBlogArchiveSettingsQuery(),
    }),
    // cache: 'no-cache',
  });

  const settingsRes = await getAdminBlogArchiveSettings.json();

  const settingsDataShorthand = settingsRes.data.adminSetupArea.edges[0].node.websiteAktivatori.blogArchivePage;

  //

  //

  const getAllCategories = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getCategoriesQuery(lang),
    }),
    // cache: 'no-cache',
  });

  const categoresRes = await getAllCategories.json();

  const categoriesDataShorthand = categoresRes.data.categories.edges;

  // console.log('CAT', categoresRes);

  return (
    <main>
      <PageContent
        pageContent={dataShorthand}
        totalPosts={dataShorthand.length}
        adminSetup={settingsDataShorthand}
        catList={categoriesDataShorthand}
        lang={lang}
      />
    </main>
  );
}
