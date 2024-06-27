export const getAllLegalneInformacijeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      modulBazeTekstovaHr {
        naslovBazaTekstovaHr
        nadnaslovPodnaslovBazaTekstovaHr
        tekstBazaTekstovaHr
      }
    `,
    eng: `
      modulBazeTekstovaEng {
        naslovBazaTekstovaEng
        nadnaslovPodnaslovBazaTekstovaEng
        tekstBazaTekstovaEng
      }
    `,
    ger: `
      modulBazeTekstovaGer {
        naslovBazaTekstovaGer
        nadnaslovPodnaslovBazaTekstovaGer
        tekstBazaTekstovaGer
      }
    `,
    ita: `
      modulBazeTekstovaIta {
        naslovBazaTekstovaIta
        nadnaslovPodnaslovBazaTekstovaIta
        tekstBazaTekstovaIta
      }
    `,
  };

  return `
    query NewQuery {
      allLegalneInformacije {
        edges {
          node {
            id
            legalneUvod {
              dokumentLegal {
                node {
                  mediaItemUrl
                  mediaType
                  title
                }
              }
              vanjskaPoveznicaLegal
              statusLegal
              slikaLegal {
                node {
                  srcSet
                  sourceUrl
                }
              }
            }
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};
