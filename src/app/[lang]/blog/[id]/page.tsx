import { getSingleBlogQuery } from '@/app/queries/getSingleBlogQuery';
import PageContent from './PageContent';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';

import { htmlToText } from 'html-to-text';
import { UserLanguage } from '@/app/enums/LangEnum';
import { ogImagesArchiveBlog } from '@/app/pathsUtils/mediaImportsDynamic';

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

  const fallbackOg = prepareDataForClient.blog.introBlog.thumbnail
    ? prepareDataForClient.blog.introBlog.thumbnail.node.sourceUrl
    : ogImagesArchiveBlog.default;
  const languageField = blogLanguageFields[lang];

  const l = getSuffixFromLang(lang);
  const constructFieldTags = `tags` + l;
  const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;
  const blogTitle = prepareDataForClient.blog[languageField][las];

  const introField = prepareDataForClient.blog[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`] ?? '';

  const plainIntroText = htmlToText(introField, {
    wordwrap: 130,
  });

  const seoTagField = prepareDataForClient.blog[`seo${l}`]?.[`seoTagovi${l}`];
  const seoDescField = prepareDataForClient.blog[`seo${l}`]?.[`seoTekst${l}`];
  const seoImageField = prepareDataForClient.blog[`seo${l}`]?.[`ogImage${l}`]
    ? prepareDataForClient.blog[`seo${l}`]?.[`ogImage${l}`].node.sourceUrl
    : null;

  const seoTagPrep = seoTagField ? seoTagField.split(', ') : [];

  const authorField = prepareDataForClient.blog.author.node.name ?? '';

  const tagsField = prepareDataForClient.blog[constructFieldTags][`tagText${l}`];

  return {
    title: blogTitle,
    description: prepareDataForClient.blog.description,
    keywords: seoTagPrep,
    openGraph: {
      title: blogTitle,
      keywords: seoTagPrep,
      description: seoDescField ?? plainIntroText,
      // url: `https://yourwebsite.com/blog/${id}`,
      type: 'article',
      images: [
        {
          url: seoImageField ?? fallbackOg,
          width: 1200,
          height: 630,
          alt: 'descriptive image of article',
          type: 'image/jpeg',
          secure_url: seoImageField ?? fallbackOg,
        },
      ],
      locale: lang,

      article: {
        published_time: prepareDataForClient.blog.introBlog.datum,
        // modified_time: prepareDataForClient.blog.modifiedDate,
        // expiration_time: prepareDataForClient.blog.expirationDate,
        section: 'Blog',
        tag: tagsField,
        author: authorField,
      },
    },
    twitter: {
      card: 'summary_large_image',
      // site: '@YourTwitterHandle',
      creator: authorField,
      title: blogTitle,
      keywords: seoTagPrep,
      description: seoDescField ?? plainIntroText,
      image: seoImageField ?? fallbackOg,
      alt: 'descriptive image of article',
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
