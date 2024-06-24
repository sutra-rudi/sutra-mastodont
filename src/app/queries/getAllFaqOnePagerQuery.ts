export const getAllFaqOnePagerQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      textHr {
        naslovHr
        sadrzajTextHr
      }
      seoHr {
        seoTagoviHr
        seoTekstHr
      }
    `,
    eng: `
      textEng {
        naslovEng
        sadrzajTextEng
      }
      seoEng {
        seoTagoviEng
        seoTekstEng
      }
    `,
    ger: `
      textGer {
        naslovGer
        sadrzajTextGer
      }
      seoGer {
        seoTagoviGer
        seoTekstGer
      }
    `,
    ita: `
      textIta {
        naslovIta
        sadrzajTextIta
      }
      seoIta {
        seoTagoviIta
        seoTekstIta
      }
    `,
  };

  return `
    query newQuery {
      allfaqOnePager {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};
