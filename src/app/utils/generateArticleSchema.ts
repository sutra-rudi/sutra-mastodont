// generateArticleSchema.ts

/**
 * Prošireni tipovi podataka za generiranje Article Schema objekt
 */
interface Author {
  firstName: string;
  lastName: string;
  url?: string; // opcionalni link do profila autora
  image?: string; // opcionalna slika autora (avatar)
}

interface Publisher {
  name: string;
  logoUrl: string;
}

interface ArticleSchemaProps {
  /** Naslov blog posta ili članka */
  headline: string;
  /** Kratki opis ili uvod */
  description: string;
  /** Datum objave u ISO formatu, npr. "2025-04-08T12:34:56Z" */
  datePublished: string;
  /** Opcionalni datum ažuriranja u ISO formatu */
  dateModified?: string;
  /** URL slike (naslovna) koja ilustrira članak */
  image: string;
  /** Podaci o autoru */
  author: Author;
  /** Kategorija ili sekcija članka, npr. "Blog" */
  articleSection: string;
  /** Potpuni tekst članka (opcionalno) */
  articleBody?: string;
  /** Opcionalni podaci o izdavaču */
  publisher?: Publisher;
  /** Ključne riječi, ili comma separated string, ili niz stringova */
  keywords?: string | string[];
  /** Glavna entiteta stranice (primjer: URL same stranice) */
  mainEntityOfPage?: string;
  /** URL članka (opcionalno) */
  url?: string;
}

/**
 * Funkcija generira prošireni JSON‑LD objekt za članke prema Schema.org Article specifikaciji.
 *
 * @param props - Podaci potrebni za generiranje Schema.org Article objekta.
 * @returns Objekt spreman za JSON‑LD embed koji možeš umetnuti u Head od Next.js stranice.
 */
export function generateArticleSchema(props: ArticleSchemaProps) {
  const {
    headline,
    description,
    datePublished,
    dateModified,
    image,
    author,
    articleSection,
    articleBody,
    publisher,
    keywords,
    mainEntityOfPage,
    url,
  } = props;

  // Pretvaranje ključnih riječi u niz ako nisu već niz
  const keywordsArray = Array.isArray(keywords)
    ? keywords
    : keywords
    ? keywords.split(',').map((keyword) => keyword.trim())
    : [];

  // Konstrukcija osnovnog schema objekta
  const schemaArticle: { [key: string]: any } = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    author: {
      '@type': 'Person',
      name: `${author.firstName} ${author.lastName}`,
      ...(author.url && { url: author.url }),
      ...(author.image && { image: author.image }),
    },
    datePublished: datePublished,
    articleSection: articleSection,
  };

  // Ako je definiran datum ažuriranja, dodaj ga
  if (dateModified) {
    schemaArticle.dateModified = dateModified;
  }

  // Ako je dostupan puni tekst članka, dodaj ga kao articleBody
  if (articleBody) {
    schemaArticle.articleBody = articleBody;
  }

  // Dodavanje opcionalnih podataka o izdavaču
  if (publisher) {
    schemaArticle.publisher = {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logoUrl,
      },
    };
  }

  // Ako su definirane ključne riječi, dodaj ih
  if (keywordsArray.length > 0) {
    schemaArticle.keywords = keywordsArray;
  }

  // Ako je definirana glavna entiteta stranice, dodaj je
  if (mainEntityOfPage) {
    schemaArticle.mainEntityOfPage = {
      '@type': 'WebPage',
      '@id': mainEntityOfPage,
    };
  }

  // Ako je dostupan URL članka, dodaj ga kao url
  if (url) {
    schemaArticle.url = url;
  }

  return schemaArticle;
}
