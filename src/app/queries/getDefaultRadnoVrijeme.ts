export const getAllRadnoVrijemeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      radnoVrijemeHr {
        textBoxHr
      }
    `,
    ger: `
      radnoVrijemeGer {
        textBoxGer
      }
    `,
    eng: `
      radnoVrijemeEng {
        textBoxEng
      }
    `,
    ita: `
      radnoVrijemeIta {
        textBoxIta
      }
    `,
  };

  return `
    query NewQuery {
      allRadnoVrijeme {
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
