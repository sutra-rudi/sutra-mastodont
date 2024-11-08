export const getCategoriesQuery = (lang: string) => {
  const languageFieldsMapCategories: Record<string, string> = {
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
      categories {
        edges {
          node {
            informacijeKategorije {
              bojaKategorije
              ${languageFieldsMapCategories[lang] || ''}
            }
          }
        }
      }
    }
  `;
};
