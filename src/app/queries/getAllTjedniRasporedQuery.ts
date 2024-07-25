export const getTjedniRasporedQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      tjedniRasporedHr {
        tjedniRasporedHr {
          ponedjeljak
          utorak
          srijeda
          cetvrtak
          petak
          subota
          nedjelja
        }
      }
    `,
    eng: `
      tjedniRasporedEng {
        tjedniRasporedEng {
          ponedjeljak
          utorak
          srijeda
          cetvrtak
          petak
          subota
          nedjelja
        }
      }
    `,
    ger: `
      tjedniRasporedGer {
        tjedniRasporedGer {
          ponedjeljak
          utorak
          srijeda
          cetvrtak
          petak
          subota
          nedjelja
        }
      }
    `,
    ita: `
      tjedniRasporedIta {
        tjedniRasporedIta {
          ponedjeljak
          utorak
          srijeda
          cetvrtak
          petak
          subota
          nedjelja
        }
      }
    `,
  };

  return `
    query NewQuery {
      allTjedniRaspored {
        edges {
          node {
            id
            tjedniRasporedUvod {
              sezonskoRadnoVrijeme
              vrijediDo
              vrijediOd
            }
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};
