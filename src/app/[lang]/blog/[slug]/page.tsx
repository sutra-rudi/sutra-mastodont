import { getSingleBlogQuery } from '@/app/queries/getSingleBlogQuery';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import { htmlToText } from 'html-to-text';
import { UserLanguage } from '@/app/enums/LangEnum';
import { ogImagesArchiveBlog } from '@/app/pathsUtils/mediaImportsDynamic';
import dynamic from 'next/dynamic';
import { fetchData } from '@/app/utils/callApi';
import getSingleBlog from '@/app/queries/dynamicQueries/getSingleBlog';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import { fetchMediaPaths } from '@/app/utils/callMediaPaths';

import updateLocale from 'dayjs/plugin/updateLocale';
import ClientContent from './ClientContent';
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
});

// const LazyContent = dynamic(() => import('./PageContent'));
// const AsideContent = dynamic(() => import('./AsideContent'));
// const SocialContent = dynamic(() => import('./SocialContent'));
// const PageHero = dynamic(() => import('./PageHero'));

// const isGloria: boolean = true;

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
  const l = getSuffixFromLang(lang);
  const isEngMistake = lang === UserLanguage.eng;
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(slug);

  const bData = await fetchData(getSingleBlog(slugId));

  const MP = await fetchMediaPaths();

  const { heroImagesDefault } = MP;

  const naslovna = bData.data.blog.introBlog.naslovnaSlika
    ? bData.data.blog.introBlog.naslovnaSlika.node.sourceUrl
    : heroImagesDefault.desktop;
  const naslovBloga =
    bData.data.blog[`sadrzaj${l}Fields`]?.[isEngMistake ? `naslovSadrzajSadrzaj${l}` : `naslovSadrzaj${l}`];
  const sadrzajBloga = bData.data.blog[`sadrzaj${l}Fields`]?.[`sadrzajSadrzaj${l}`];
  const introBloga = bData.data.blog[`sadrzaj${l}Fields`]?.[`kratkiUvodniTekstSadrzaj${l}`];
  const author = bData.data.blog.author;

  const datum = bData.data.blog.introBlog.datum;

  const kategorija = bData.data.blog.introBlog.kategorija.edges[0].node.informacijeKategorije[`imeKategorije${l}`];

  const galleryBlog = Object.values(bData.data.blog.photoGallery.fotogalerija).filter(
    (galItem: any) => galItem !== null
  );

  const fileList = {
    fHr: bData.data.blog.docsUploadHr,
    fEng: bData.data.blog.docsUploadEng,
    fIta: bData.data.blog.docsUploadIta,
    fGer: bData.data.blog.docsUploadGer,
  };

  // console.log('BBB', bData.data.blog);

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
    <main className='w-full xl:-pb--xl---5xl lg:-pb--desktop---5xl md:-pb--tablet---5xl -pb--mobile---5xl '>
      <div className='bg-accent-boja/35 text-accent-boja block max-w-max rounded-[36px] text-sm uppercase py-1 px-3 lg:-mt--desktop---3xl md:-mt--tablet---5xl -mt--mobile---5xl mx-auto'>
        {kategorija}
      </div>
      <p className='relative max-w-max flex items-center gap-2 text-accent-boja mx-auto lg:-mt--desktop---l md:-mt--tablet---l -mt--mobile---l px-4'>
        <span>{`${author.node.firstName} ${author.node.lastName}`}</span>
        <span className='block size-1 rounded-full bg-accent-boja'></span>
        <span>{dayjs(datum).format('DD.MM.YYYY')}</span>
      </p>
      <h2 className='lg:text-h2-desktop md:text-h2-tablet text-h2-mobile max-w-max block text-center mx-auto relative px-4'>
        {naslovBloga}
      </h2>

      <div className='text-ellipsis line-clamp-1 max-w-prose mx-auto text-center relative lg:-mt--desktop-h1-2---naslov-nadnaslov md:-mt--tablet-h1-2---naslov-nadnaslov -mt--mobile-h1-2---naslov-nadnaslov lg:text-nadnaslov-desktop md:text-nadnaslov-tablet text-nadnaslov-mobile px-4'>
        {parse(introBloga)}
      </div>

      <div className='flex items-center relative mx-auto lg:mt-10 md:mt-7 mt-4 max-w-max gap-4'>
        <picture>
          <img
            src={author.node.avatar.url}
            alt='author-avatar'
            width={64}
            height={64}
            className='object-cover object-center aspect-auto block rounded-full'
          />
        </picture>

        <div className='lg:text-text-base-l-mobiletablet text-text-base-base-mobiletablet'>
          <p className='font-bold'>{`${author.node.firstName} ${author.node.lastName}`}</p>
          <p className='font-normal'>{dayjs(datum).format('D MMMM YYYY')}</p>
        </div>
      </div>
      <picture className='block relative lg:mt-10 md:mt-7 mt-4'>
        <img
          src={naslovna}
          alt={`Blog image, source: ${naslovna}`}
          width={1920}
          height={800}
          className='object-cover object-center block aspect-auto lg:h-[500px] md:h-[400px] h-[250px]'
        />
      </picture>
      <div className='lg:prose-lg prose max-w-[750px] w-full mx-auto lg:mt-xl-slika-sadrzaj md:mt-desktop-slika-sadrzaj mt-tablet-slika-sadrzaj px-4'>
        {parse(sadrzajBloga)}
      </div>

      <ClientContent gallery={galleryBlog} files={fileList} />
    </main>
  );
}
