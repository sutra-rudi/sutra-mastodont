export const getObavijestiNaStraniciQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      textHr {
        naslovHr
        sadrzajTextHr
      }
    `,
    eng: `
      textEng {
        naslovEng
        sadrzajTextEng
      }
    `,
    ger: `
      textGer {
        naslovGer
        sadrzajTextGer
      }
    `,
    ita: `
      textIta {
        naslovIta
        sadrzajTextIta
      }
    `,
  };

  return `
    query NewQuery {
      allObavijestiNaStranici {
        edges {
          node {
            id
            obavijestiInterventne {
              obavijestiPngSlikaIliIkona {
                node {
                  sourceUrl
                  srcSet
                }
              }
              odabirAkcijskeBoje
              linkNaKojiVodiObavijestOpcionalno
              datumIVrijemeObjave
              datumIVrijemeKrajaObjave
            }
            ${languageFieldsMap[lang] || ''}
            statusAtivacijePoJezicima {
              aktivatorEng
              aktivatorGer
              aktivatorHr
              aktivatorIta
            }
          }
        }
      }
    }
  `;
};
