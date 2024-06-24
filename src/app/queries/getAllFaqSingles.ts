export const getAllFaqSinglesQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      faqPojedinacnoDodavanjeHr {
        odgovorFaqHr
        pitanjeFaqHr
      }
    `,
    eng: `
      faqPojedinacnoDodavanjeEn {
        odgovorFaqEng
        pitanjeFaqEng
      }
    `,
    ger: `
      faqPojedinacnoDodavanjeGer {
        odgovorFaqGer
        pitanjeFaqGer
      }
    `,
    ita: `
      faqPojedinacnoDodavanjeIta {
        odgovorFaqIta
        pitanjeFaqIta
      }
    `,
  };

  return `
    query newQuery {
      allFAQPojedinacno {
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
