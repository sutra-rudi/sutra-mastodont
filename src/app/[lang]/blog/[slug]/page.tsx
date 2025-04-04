import { getSingleBlogQuery } from '@/app/queries/getSingleBlogQuery';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { htmlToText } from 'html-to-text';
import { UserLanguage } from '@/app/enums/LangEnum';
import { ogImagesArchiveBlog } from '@/app/pathsUtils/mediaImportsDynamic';
import dynamic from 'next/dynamic';
import { fetchData } from '@/app/utils/callApi';

// const LazyContent = dynamic(() => import('./PageContent'));
// const AsideContent = dynamic(() => import('./AsideContent'));
// const SocialContent = dynamic(() => import('./SocialContent'));
// const PageHero = dynamic(() => import('./PageHero'));

const isGloria: boolean = true;

// export async function generateMetadata({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
//   // const getIdFromSlug = (slug: string): string => {
//   //   const parts = slug.split('-');
//   //   return parts.pop() || '';
//   // };

//   // const slugId = getIdFromSlug(id);

//   // const getSingleBlog = await fetch(`${process.env.CMS_BASE_URL}`, {
//   //   method: 'POST',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   //   body: JSON.stringify({
//   //     query: getSingleBlogQuery(slugId, lang),
//   //   }),
//   // });

//   // const getSingleBlog = await fetchData(getSingleBlogQuery(slugId, lang));

//   // const parseData = await getSingleBlog.json();
//   // const prepareDataForClient = getSingleBlog.data;

//   // const fallbackOg = prepareDataForClient.blog.introBlog.thumbnail
//   //   ? prepareDataForClient.blog.introBlog.thumbnail.node.sourceUrl
//   //   : ogImagesArchiveBlog.default;
//   // const languageField = blogLanguageFields[lang];

//   const l = getSuffixFromLang(lang);
//   const constructFieldTags = `tags` + l;
//   const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;
//   const blogTitle = prepareDataForClient.blog[languageField][las];

//   const introField = prepareDataForClient.blog[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`] ?? '';

//   const plainIntroText = htmlToText(introField, {
//     wordwrap: 130,
//   });

//   const seoTagField = prepareDataForClient.blog[`seo${l}`]?.[`seoTagovi${l}`];
//   const seoDescField = prepareDataForClient.blog[`seo${l}`]?.[`seoTekst${l}`];
//   const seoImageField = prepareDataForClient.blog[`seo${l}`]?.[`ogImage${l}`]
//     ? prepareDataForClient.blog[`seo${l}`]?.[`ogImage${l}`].node.sourceUrl
//     : null;

//   const seoTagPrep = seoTagField ? seoTagField.split(', ') : [];

//   const authorField = prepareDataForClient.blog.author.node.name ?? '';

//   const tagsField = prepareDataForClient.blog[constructFieldTags][`tagText${l}`];

//   return {
//     title: blogTitle,
//     description: prepareDataForClient.blog.description,
//     keywords: seoTagPrep,
//     openGraph: {
//       title: blogTitle,
//       keywords: seoTagPrep,
//       description: seoDescField ?? plainIntroText,
//       // url: `https://yourwebsite.com/blog/${id}`,
//       type: 'article',
//       images: [
//         {
//           url: seoImageField ?? fallbackOg,
//           width: 1200,
//           height: 630,
//           alt: 'descriptive image of article',
//           type: 'image/jpeg',
//           secure_url: seoImageField ?? fallbackOg,
//         },
//       ],
//       locale: lang,

//       article: {
//         published_time: prepareDataForClient.blog.introBlog.datum,
//         // modified_time: prepareDataForClient.blog.modifiedDate,
//         // expiration_time: prepareDataForClient.blog.expirationDate,
//         section: 'Blog',
//         tag: tagsField,
//         author: authorField,
//       },
//     },
//     twitter: {
//       card: 'summary_large_image',
//       // site: '@YourTwitterHandle',
//       creator: authorField,
//       title: blogTitle,
//       keywords: seoTagPrep,
//       description: seoDescField ?? plainIntroText,
//       image: seoImageField ?? fallbackOg,
//       alt: 'descriptive image of article',
//     },
//   };
// }

export default async function SingleBlogPage({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  // const getIdFromSlug = (slug: string): string => {
  //   const parts = slug.split('-');
  //   return parts.pop() || '';
  // };

  // const slugId = getIdFromSlug(id);

  // const getBlog = await fetchData(getSingleBlogQuery(slugId, lang));

  // const prepareDataForClient = getBlog.data;

  // const languageField = blogLanguageFields[lang];

  // const l = getSuffixFromLang(lang);
  // const constructFieldTags = `tags` + l;

  // const constructDocumentString = () => {
  //   return `docsUpload${l}`;
  // };

  // const documentsField = {
  //   file: prepareDataForClient.blog[constructDocumentString()][lang],
  //   fileName: prepareDataForClient.blog[constructDocumentString()][`nazivDokumenta${l}`],
  // };

  // const tagsField = prepareDataForClient.blog[constructFieldTags][`tagText${l}`];

  // const introField = prepareDataForClient.blog[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`] ?? '';

  // const authorField = prepareDataForClient.blog.author ?? '';

  // const categoryField =
  //   prepareDataForClient.blog.introBlog.kategorija.edges.map((noda: any) => {
  //     return {
  //       catName: noda.node.informacijeKategorije ? noda.node.informacijeKategorije[`imeKategorije${l}`] : 'No category',
  //       catDesc: noda.node.informacijeKategorije
  //         ? noda.node.informacijeKategorije[`opisKategorije${l}`]
  //         : 'No category',
  //       catColor: noda.node.informacijeKategorije ? noda.node.informacijeKategorije.bojaKategorije : 'No color',
  //     };
  //   }) ?? [];

  return (
    <main className=' bg-blog-pozadina-light-mode dark:bg-blog-pozadina-dark-mode w-full xl:-pb--xl---5xl lg:-pb--desktop---5xl md:-pb--tablet---5xl -pb--mobile---5xl'>
      <h2>HALO {slug}</h2>
      {/* <PageHero
        global={prepareDataForClient.blog.introBlog}
        content={prepareDataForClient.blog[languageField]}
        category={categoryField}
        author={authorField}
      />
      {isGloria && (
        <div className='lg:hidden block'>
          <SocialContent layout='ver' />
        </div>
      )}
      {isGloria ? (
        <div className='flex items-stretch justify-center max-w-[1440px] mx-auto gap-12 lg:px-4'>
          <div className='lg:block hidden'>
            <SocialContent layout='hor' />
          </div>

          <LazyContent
            content={prepareDataForClient.blog[languageField]}
            global={prepareDataForClient.blog.introBlog}
            gallery={prepareDataForClient.blog.photoGallery.fotogalerija}
            files={documentsField}
            tags={tagsField}
            author={authorField}
            intro={introField}
            category={categoryField}
          />

          <div className='lg:block max-w-[350px] hidden'>
            <AsideContent layout='hor' />
          </div>
        </div>
      ) : (
        <LazyContent
          content={prepareDataForClient.blog[languageField]}
          global={prepareDataForClient.blog.introBlog}
          gallery={prepareDataForClient.blog.photoGallery.fotogalerija}
          files={documentsField}
          tags={tagsField}
          author={authorField}
          intro={introField}
          category={categoryField}
        />
      )}
      {isGloria && (
        <div className='lg:hidden  block'>
          <AsideContent layout='ver' />
        </div>
      )} */}
    </main>
  );
}
