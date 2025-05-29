export default function getAllBlogs() {
  return `query getAllBlogsDynamic {
  allBlog(first: 20) {
    edges {
      node {
        id
        databaseId
        title
        slug
        date
        introBlog {
      datum
      istaknutoNaNaslovnici
      statusBloga
      naslovnaSlika {
        node {
          id
          sourceUrl
        }
      }
      thumbnail {
        node {
          id
          sourceUrl
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
                prijevodi {
                  imeKategorijeEng
                  imeKategorijeEsp
                  imeKategorijeFra
                  imeKategorijeGer
                  imeKategorijeHr
                  imeKategorijeIta
                  opisKategorijeEng
                  opisKategorijeEsp
                  opisKategorijeFra
                  opisKategorijeGer
                  opisKategorijeHr
                  opisKategorijeIta
                }
                uvod {
                  bojaKategorije
                  slikaKategorije {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
      oznaka {
        edges {
          node {
            id
            name
            ... on Tag {
              id
              name
              tags {
                prijevodiTagova {
                  
                  engleskiPrijevod
                  francuskiPrijevod
                  hrvatskiPrijevod
                  talijanskiPrijevod
                  njemackiPrijevod
                }
              }
            }
          }
        }
      }
    }
        sadrzajHrFields {
          kratkiUvodniTekstSadrzajHr
          naslovSadrzajHr
        }
        sadrzajEngFields {
          kratkiUvodniTekstSadrzajEng
          naslovSadrzajSadrzajEng
        }
        sadrzajGerFields {
          kratkiUvodniTekstSadrzajGer
          naslovSadrzajGer
        }
        sadrzajFraFields {
          kratkiUvodniTekstSadrzajFra
          naslovSadrzajFra
        }
        sadrzajEspFields {
          kratkiUvodniTekstSadrzajEsp
          naslovSadrzajEsp
        }
        sadrzajItaFields {
          kratkiUvodniTekstSadrzajIta
          naslovSadrzajIta
        }
        sadrzajSloFields {
          kratkiUvodniTekstSadrzajSlo
          naslovSadrzajSlo
        }
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
      }
    }
  }
}`;
}

export function BlogFragment() {
  return `allBlog(first: 20) {
    edges {
      node {
        id
        databaseId
        title
        slug
        date
        introBlog {
      datum
      istaknutoNaNaslovnici
      statusBloga
      naslovnaSlika {
        node {
          id
          sourceUrl
        }
      }
      thumbnail {
        node {
          id
          sourceUrl
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
                prijevodi {
                  imeKategorijeEng
                  imeKategorijeEsp
                  imeKategorijeFra
                  imeKategorijeGer
                  imeKategorijeHr
                  imeKategorijeIta
                  opisKategorijeEng
                  opisKategorijeEsp
                  opisKategorijeFra
                  opisKategorijeGer
                  opisKategorijeHr
                  opisKategorijeIta
                }
                uvod {
                  bojaKategorije
                  slikaKategorije {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
      oznaka {
        edges {
          node {
            id
            name
            ... on Tag {
              id
              name
              tags {
                prijevodiTagova {
                  
                  engleskiPrijevod
                  francuskiPrijevod
                  hrvatskiPrijevod
                  talijanskiPrijevod
                  njemackiPrijevod
                }
              }
            }
          }
        }
      }
    }
        sadrzajHrFields {
          kratkiUvodniTekstSadrzajHr
          naslovSadrzajHr
          
        }
        sadrzajEngFields {
          kratkiUvodniTekstSadrzajEng
          naslovSadrzajSadrzajEng

        }
        sadrzajGerFields {
          kratkiUvodniTekstSadrzajGer
          naslovSadrzajGer

        }
        sadrzajFraFields {
          kratkiUvodniTekstSadrzajFra
          naslovSadrzajFra

        }
        sadrzajEspFields {
          kratkiUvodniTekstSadrzajEsp
          naslovSadrzajEsp

        }
        sadrzajItaFields {
          kratkiUvodniTekstSadrzajIta
          naslovSadrzajIta

        }
        sadrzajSloFields {
          kratkiUvodniTekstSadrzajSlo
          naslovSadrzajSlo

        }
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
      }
    }
  }`;
}
