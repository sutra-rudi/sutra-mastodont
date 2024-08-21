export const getSezonskoRadnoVrijemeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      radnoVrijemeHr {
        textBoxHr
      }
    `,
    eng: `
      radnoVrijemeEng {
        textBoxEng
      }
    `,
    ger: `
      radnoVrijemeGer {
        textBoxGer
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
      allSezonskoRadnoVrijeme {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            sezonskoRadnoVrijemeAktivatorDatuma {
              vrijediDoSezonskoRadnoVrijeme
              vrijediOdSezonskoRadnoVrijeme
            }
          }
        }
      }
    }
  `;
};
