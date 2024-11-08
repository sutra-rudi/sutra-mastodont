export const getTagsQuery = (lang: string) => {
  const languageFieldsMapTags: Record<string, string> = {
    hr: `
      imeKategorijeHr
      opisKategorijeHr
    `,
    eng: `
      imeKategorijeEng
      opisKategorijeEng
    `,
    ger: `
      imeKategorijeGer
      opisKategorijeGer
    `,
    ita: `
      imeKategorijeIta
      opisKategorijeIta
    `,
  };

  return `
    query NewQuery {
      tags {
        edges {
          node {
            id
            informacijeKategorije {
              bojaKategorije
              ${languageFieldsMapTags[lang] || ''}
            }
            name
          }
        }
      }
    }
  `;
};
