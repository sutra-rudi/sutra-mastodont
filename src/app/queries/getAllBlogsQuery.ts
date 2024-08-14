export const getAllBlogsQuery = (lang: string) => {
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

  return `query NewQuery {
      allBlog {
        edges {
          node {
            id
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
        }
            ${languageFieldsMap[lang] || ''}
            introBlog {
              datum
              istaknutoNaNaslovnici
              statusBloga
          tag {
            edges {
              node {
                id
                name
              }
            }
          }
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
