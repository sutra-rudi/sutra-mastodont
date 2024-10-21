export const getAllAdminBazeTekstovaPodstranice = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      modulBazeTekstovaHr {
        nadnaslovPodnaslovBazaTekstovaHr
        naslovBazaTekstovaHr
        tekstBazaTekstovaHr
      }
      seoHr {
        ogImageHr {
          node {
            id
            sourceUrl
          }
        }
      }
    `,
    eng: `
      modulBazeTekstovaEng {
        nadnaslovPodnaslovBazaTekstovaEng
        naslovBazaTekstovaEng
        tekstBazaTekstovaEng
      }
      seoEng {
        ogImageEng {
          node {
            id
          }
        }
      }
    `,
    ger: `
      modulBazeTekstovaGer {
        nadnaslovPodnaslovBazaTekstovaGer
        naslovBazaTekstovaGer
        tekstBazaTekstovaGer
      }
      seoGer {
        ogImageGer {
          node {
            id
            sourceUrl
          }
        }
      }
    `,
    ita: `
      modulBazeTekstovaIta {
        nadnaslovPodnaslovBazaTekstovaIta
        naslovBazaTekstovaIta
        tekstBazaTekstovaIta
      }
      seoIta {
        ogImageIta {
          node {
            id
          }
        }
      }
    `,
  };

  return `
    query NewQuery {
      allAdminBazeTekstaStranice {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            modulBazeTekstovaUvod {
              slika1 {
                node {
                  id
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  sourceUrl
                }
              }
              statusPrikazaTekstaZaPodstranicu
            }
          }
        }
      }
    }
  `;
};
