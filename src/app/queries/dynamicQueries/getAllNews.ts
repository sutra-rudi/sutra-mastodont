export default function getAllNews() {
  return `query getAllNewsDynamic {
  allNovosti(first: 20) {
    edges {
      node {
        id
        databaseId
        title
        slug
        date
        introNews {
          datum
          istaknutoNaNaslovnici
          statusNovosti
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
        }
        sadrzajHrFields {
          kratkiUvodniTekstSadrzajHr
          naslovSadrzajHr
          sadrzajSadrzajHr
        }
        sadrzajEngFields {
          kratkiUvodniTekstSadrzajEng
          naslovSadrzajSadrzajEng
          sadrzajSadrzajEng
        }
        sadrzajGerFields {
          kratkiUvodniTekstSadrzajGer
          naslovSadrzajGer
          sadrzajSadrzajGer
        }
        sadrzajFraFields {
          kratkiUvodniTekstSadrzajFra
          naslovSadrzajFra
          sadrzajSadrzajFra
        }
        sadrzajEspFields {
          kratkiUvodniTekstSadrzajEsp
          naslovSadrzajEsp
          sadrzajSadrzajEsp
        }
        sadrzajItaFields {
          kratkiUvodniTekstSadrzajIta
          naslovSadrzajIta
          sadrzajSadrzajIta
        }
        sadrzajSloFields {
          kratkiUvodniTekstSadrzajSlo
          naslovSadrzajSlo
          sadrzajSadrzajSlo
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
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
        docsUploadHr {
          nazivDokumentaHr
          hr {
            node {
              id
              sourceUrl
            }
          }
        }
        docsUploadEng {
          nazivDokumentaEng
          eng {
            node {
              id
              sourceUrl
            }
          }
        }
        docsUploadGer {
          nazivDokumentaGer
          ger {
            node {
              id
              sourceUrl
            }
          }
        }
        docsUploadIta {
          nazivDokumentaIta
          ita {
            node {
              id
              sourceUrl
            }
          }
        }
        seoHr {
          seoHr {
            seoOpisStranice
          }
        }
        seoEng {
          seoEng {
            seoOpisStranice
          }
        }
        seoIta {
          seoIta {
            seoOpisStranice
          }
        }
        seoGer {
          seoGer {
            seoOpisStranice
          }
        }
        seoFra {
          seoFra {
            seoOpisStranice
          }
        }
        seoEsp {
          seoEsp {
            seoOpisStranice
          }
        }
        seoSlo {
          seoSlo {
            seoOpisStranice
          }
        }
      }
    }
  }
}`;
}
