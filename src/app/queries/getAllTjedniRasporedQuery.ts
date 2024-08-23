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
          dodatnaNapomenaTjedniRasporedHr
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
          dodatnaNapomenaTjedniRasporedEng
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
          dodatnaNapomenaTjedniRasporedGer
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
          dodatnaNapomenaTjedniRasporedIta
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
