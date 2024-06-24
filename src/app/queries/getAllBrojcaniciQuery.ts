export const getAllBrojcaniciQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      tekstBoxHr {
        tekstBoxHr
      }
    `,
    eng: `
      tekstBoxEng {
        tekstBoxEng
      }
    `,
    ger: `
      tekstBoxGer {
        tekstBoxGer
      }
    `,
    ita: `
      tekstBoxIta {
        tekstBoxIta
      }
    `,
  };

  return `
    query newQuery {
      allBrojcanici {
        edges {
          node {
            id
            brojcanikCompanyInNumbersUvod {
              slikaPNGSVG {
                node {
                  sourceUrl
                  srcSet
                }
              }
              broj
              reactIconsImportCode
            }
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};
