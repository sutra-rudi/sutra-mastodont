export const getPojedinacnePoruketekstoviZaPrikazQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      bazaPojedinacniTekstHr {
        pojedinacniTekstHr
      }
    `,
    ger: `
      bazaPojedinacniTekstGer {
        pojedinacniTekstGer
      }
    `,
    eng: `
      bazaPojedinacniTekstEng {
        pojedinacniTekstEng
      }
    `,
    ita: `
      bazaPojedinacniTekstIta {
        pojedinacniTekstIta
      }
    `,
    esp: `
      bazaPojedinacniTekstEsp {
        pojedinacniTekstEsp
      }
    `,
    fra: `
      bazaPojedinacniTekstFra {
        pojedinacniTekstFra
      }
    `,
  };

  return `
    query NewQuery {
      allPojedinacnePoruketekstoviZaPrikaz {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            naslovnaSlika {
              glavnaSlikaNaslovnaSlika {
                node {
                  srcSet
                  sourceUrl
                }
              }
              sekundarnaGlavnaSlikaThumbnailHover {
                node {
                  srcSet
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `;
};
