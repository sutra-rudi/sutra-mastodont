export const getAllFaqSinglesQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      faqPojedinacnoDodavanjeHr {
        odgovorFaqHr
        pitanjeFaqHr
      }
    `,
    eng: `
      faqPojedinacnoDodavanjeEng {
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
    fra: `
      faqPojedinacnoDodavanjeFra {
        odgovorFaqFra
        pitanjeFaqFra
      }`,
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
