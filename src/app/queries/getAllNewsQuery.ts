export const getAllNewsQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      sadrzajHrFields {
        kratkiUvodniTekstSadrzajHr
        naslovSadrzajHr
        sadrzajSadrzajHr
      }
    `,
    eng: `
      sadrzajEngFields {
        kratkiUvodniTekstSadrzajEng
        naslovSadrzajSadrzajEng
        sadrzajSadrzajEng
      }
    `,
    ger: `
      sadrzajGerFields {
        kratkiUvodniTekstSadrzajGer
        naslovSadrzajGer
        sadrzajSadrzajGer
      }
    `,
    ita: `
      sadrzajItaFields {
        kratkiUvodniTekstSadrzajIta
        naslovSadrzajIta
        sadrzajSadrzajIta
      }
    `,
  };

  return `
    query NewQuery {
      allNovosti {
        edges {
          node {
            id
          author {
          node {
            id
            name
            nickname
            nicename
            lastName
            avatar {
              url
            }
          }
        }
            ${languageFieldsMap[lang] || ''}
            introNews {
              datum
              istaknutoNaNaslovnici
              kategorija {
                edges {
                  node {
                    id
                    ... on Category {
                      id
                      name
                    }
                  }
                }
              }
              naslovnaSlika {
                node {
                  sourceUrl
                  srcSet
                }
              }
              thumbnail {
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
