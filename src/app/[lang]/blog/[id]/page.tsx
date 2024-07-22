import { getSingleBlogQuery } from '@/app/queries/getSingleBlogQuery';
import PageContent from './PageContent';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

export async function generateMetadata({ params: { lang, id } }: { params: { lang: string; id: string } }) {
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
  });

  const parseData = await getSingleBlog.json();
  const prepareDataForClient = parseData.data;

  const globalData = prepareDataForClient.blog.introBlog;
  const ogImage = globalData.naslovnaSlika.node.sourceUrl;
  const ogImageAlt = prepareDataForClient.blog.title;
  const languageField = blogLanguageFields[lang];
  const l = getSuffixFromLang(lang);
  const blogTitle = prepareDataForClient.blog[languageField][`naslovSadrzaj${l}`];
  return {
    title: blogTitle,
    description: prepareDataForClient.blog.description,
    openGraph: {
      title: blogTitle,
      description: prepareDataForClient.blog.description,
      // url: `https://yourwebsite.com/blog/${id}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
          type: 'image/jpeg',
          secure_url: ogImage,
        },
      ],
      locale: lang,

      article: {
        published_time: prepareDataForClient.blog.publishedDate,
        modified_time: prepareDataForClient.blog.modifiedDate,
        expiration_time: prepareDataForClient.blog.expirationDate,
        section: 'Blog',
        tag: prepareDataForClient.blog.tags,
        author: prepareDataForClient.blog.author.name,
      },
    },
    twitter: {
      card: 'summary_large_image',
      // site: '@YourTwitterHandle',
      // creator: '@AuthorTwitterHandle',
      title: blogTitle,
      description: prepareDataForClient.blog.description,
      image: ogImage,
    },
  };
}

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
    // cache: 'no-cache',
  });

  const parseData = await getSingleBlog.json();

  const prepareDataForClient = parseData.data;

  // console.log('PREP', prepareDataForClient.blog);

  const languageField = blogLanguageFields[lang];

  const l = getSuffixFromLang(lang);
  const constructFieldTags = `tags` + l;

  const constructDocumentString = () => {
    return `docsUpload${l}`;
  };

  const documentsField = {
    file: prepareDataForClient.blog[constructDocumentString()][lang],
    fileName: prepareDataForClient.blog[constructDocumentString()][`nazivDokumenta${l}`],
  };

  const tagsField = prepareDataForClient.blog[constructFieldTags][`tagText${l}`];

  const introField = prepareDataForClient.blog[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`] ?? '';

  const authorField = prepareDataForClient.blog.author ?? '';

  const categoryField =
    prepareDataForClient.blog.introBlog.kategorija.edges.map((noda: any) => {
      return {
        catName: noda.node.informacijeKategorije ? noda.node.informacijeKategorije[`imeKategorije${l}`] : 'No category',
        catDesc: noda.node.informacijeKategorije
          ? noda.node.informacijeKategorije[`opisKategorije${l}`]
          : 'No category',
        catColor: noda.node.informacijeKategorije ? noda.node.informacijeKategorije.bojaKategorije : 'No color',
      };
    }) ?? [];

  return (
    <main>
      <PageContent
        content={prepareDataForClient.blog[languageField]}
        global={prepareDataForClient.blog.introBlog}
        gallery={prepareDataForClient.blog.photoGallery.fotogalerija}
        files={documentsField}
        tags={tagsField}
        author={authorField}
        intro={introField}
        category={categoryField}
      />
    </main>
  );
}
