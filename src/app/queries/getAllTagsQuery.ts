export const getTagsQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
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
              ${languageFieldsMap[lang] || ''}
            }
            name
          }
        }
      }
    }
  `;
};
