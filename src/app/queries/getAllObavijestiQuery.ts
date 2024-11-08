export const getObavijestiNaStraniciQuery = (lang: string) => {
  const languageFieldsMapObavijesti: Record<string, string> = {
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
            ${languageFieldsMapObavijesti[lang] || ''}
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
