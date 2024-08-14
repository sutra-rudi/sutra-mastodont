export const getListeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      listaHr {
        listaSadrzajHr
      }
    `,
    eng: `
      listaEng {
        listaSadrzajEng
      }
    `,
    ger: `
      listaGer {
        listaSadrzajGer
      }
    `,
    ita: `
      listaIta {
        listaSadrzajIta
      }
    `,
  };

  return `
    query NewQuery {
      liste {
        edges {
          node {
            id
            title
            ${languageFieldsMap[lang] || ''}
            ikona {
              svgListIcon {
                node {
                  id
                  sourceUrl
                }
              }
              odabirBojeZaDefaultIkone
              odabirIkoneKojaSePrikazujeNaListi
            }
          }
        }
      }
    }
  `;
};
