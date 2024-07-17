export const getAllBlogsQuery = (lang: string) => {
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

  return `query NewQuery {
      allBlog {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            introBlog {
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
        author {
          node {
            avatar {
              url
            }
            firstName
            name
            nickname
            lastName
            nicename
            username
          }
        }
          }
        }
      }
    }
  `;
};

function generatePhotoGalleryFields() {
  let fields = '';
  for (let i = 1; i <= 10; i++) {
    fields += `
      galSlika${String(i).padStart(2, '0')} {
        node {
          sourceUrl
          srcSet
        }
      }
    `;
  }
  return fields;
}
