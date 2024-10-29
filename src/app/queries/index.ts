import { getAllBlogsQuery } from './getAllBlogsQuery';
import { getAllBrojcaniciQuery } from './getAllBrojcaniciQuery';
import { getAllUslugeQuery } from './getAllUslugeQuery';
import { getAllLogotipiPartneraQuery } from './getAllLogotipiPartnera';
import { getAllCarouselBaseQuery } from './getAllCarouselBase';
import { getAllIskustvaKlijenataQuery } from './getAllIskustvaKlijenataQuery';
import { getWhyUsQuery } from './getAllWhyUsQuery';
import { getObavijestiNaStraniciQuery } from './getAllObavijestiQuery';
import { getDokumentikataloziQuery } from './getAllDocumentsQuery';
import { getCategoriesQuery } from './getAllBlogCategoriesQuery';
import { getTagsQuery } from './getAllTagsQuery';
import { getAdminCtaSelectionQuery } from './getAdminCtaSelectionQuery';
import { getHeroContentQuery } from './getAllHeroContent';

export const allQueries = (lang: string) => [
  { query: getHeroContentQuery(lang), noCache: false },
  { query: getAllBlogsQuery(lang), noCache: false },
  { query: getAllBrojcaniciQuery(lang), noCache: false },
  { query: getAllUslugeQuery(lang), noCache: false },
  { query: getAllLogotipiPartneraQuery(), noCache: false },
  { query: getAllCarouselBaseQuery(), noCache: false },
  { query: getAllIskustvaKlijenataQuery(lang), noCache: false },
  { query: getWhyUsQuery(lang), noCache: false },
  { query: getObavijestiNaStraniciQuery(lang), noCache: false },
  { query: getDokumentikataloziQuery(lang), noCache: false },
  { query: getCategoriesQuery(lang), noCache: false },
  { query: getTagsQuery(lang), noCache: false },
  { query: getAdminCtaSelectionQuery(), noCache: false },
];
