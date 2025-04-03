import { getAllBlogsQuery } from '@/app/queries/getAllBlogsQuery';
import { getAdminBlogArchiveSettingsQuery } from '@/app/queries/getAdminBlogArchiveSettings';
import { getCategoriesQuery } from '@/app/queries/getAllBlogCategoriesQuery';
import dynamic from 'next/dynamic';
import { fetchData } from '@/app/utils/callApi';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function BlogPage({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  // const getAllBlogs = await fetch(`${process.env.CMS_BASE_URL}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: getAllBlogsQuery(lang),
  //   }),
  // });

  const res = await fetchData(getAllBlogsQuery(lang));

  console.log('BBBB', res);
  const dataShorthand = res.data.allBlog.edges;

  //

  const settingsRes = await fetchData(getAdminBlogArchiveSettingsQuery());
  console.log('SETTINGS', settingsRes);
  const settingsDataShorthand = !settingsRes.error
    ? settingsRes.data.adminSetupArea.edges[0].node.websiteAktivatori.blogArchivePage
    : null;

  //

  //

  const categoresRes = await fetchData(getCategoriesQuery(lang));

  const categoriesDataShorthand = categoresRes.data.categories.edges;

  const fetchAnimation = async () => {
    try {
      const response = await fetch('https://cms.sutra.hr/cms_sutra/Lottie/alkar-lottie/alkar2_1200px.json', {});

      if (response.ok) {
        const json = await response.json();

        return json;
      } else {
        console.error('Error fetching Lottie animation:', response);
      }
    } catch (error) {
      console.error('Error fetching Lottie animation:', error);
    }
  };

  const lottieTest = await fetchAnimation();

  return (
    <main>
      <LazyContent
        pageContent={dataShorthand}
        totalPosts={dataShorthand.length}
        adminSetup={settingsDataShorthand}
        catList={categoriesDataShorthand}
        lang={lang}
        lottieData={lottieTest}
        currentLandingTag={tag}
      />
    </main>
  );
}
