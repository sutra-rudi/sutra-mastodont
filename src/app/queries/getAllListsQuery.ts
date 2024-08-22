export const getListeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      listaHr {
        listaUvodHr {
          nadnaslovpodnaslovOpcionalno
          naslov
          uvodnaRecenica
        }
        listaSadrzajHr
      }
    `,
    eng: `
      listaEng {
        listaUvodEng {
          nadnaslovpodnaslovOpcionalno
          naslov
          uvodnaRecenica
        }
        listaSadrzajEng
      }
    `,
    ita: `
      listaIta {
        listaUvodIta {
          nadnaslovpodnaslovOpcionalno
          naslov
          uvodnaRecenica
        }
        listaSadrzajIta
      }
    `,
    ger: `
      listaGer {
        listaUvodGer {
          nadnaslovpodnaslovOpcionalno
          naslov
          uvodnaRecenica
        }
        listaSadrzajGer
      }
    `,
  };

  return `
    query NewQuery {
      liste {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            ikona {
              odabirBojeZaDefaultIkone
              odabirIkoneKojaSePrikazujeNaListi
              svgListIcon {
                node {
                  sourceUrl
                }
              }
            }
            title
          }
        }
      }
    }
  `;
};
