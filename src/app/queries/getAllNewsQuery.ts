export const getAllNewsQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      sadrzajHrFields {
        kratkiUvodniTekstSadrzajHr
        naslovSadrzajHr
        sadrzajSadrzajHr
      }
      tagsHr {
          tagTextHr
        }
    `,
    eng: `
      sadrzajEngFields {
        kratkiUvodniTekstSadrzajEng
        naslovSadrzajSadrzajEng
        sadrzajSadrzajEng
      }
      tagsEng {
          tagTextEng
        }
    `,
    ger: `
      sadrzajGerFields {
        kratkiUvodniTekstSadrzajGer
        naslovSadrzajGer
        sadrzajSadrzajGer
      }
      tagsGer {
          tagTextGer
        }
    `,
    ita: `
      sadrzajItaFields {
        kratkiUvodniTekstSadrzajIta
        naslovSadrzajIta
        sadrzajSadrzajIta
      }
      tagsIta {
          tagTextIta
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
                  informacijeKategorije {
                    bojaKategorije
                    imeKategorijeEng
                    imeKategorijeGer
                    imeKategorijeHr
                    imeKategorijeIta
                    opisKategorijeEng
                    opisKategorijeGer
                    opisKategorijeHr
                    opisKategorijeIta
                  }
                  taxonomy {
                    cursor
                  }
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
