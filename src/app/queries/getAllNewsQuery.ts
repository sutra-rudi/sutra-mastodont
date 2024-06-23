export const getAllNewsQuery = `query NewQuery {
  allNovosti {
    edges {
      node {
        id
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika02 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika03 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika04 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika05 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika06 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika07 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika08 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika09 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
            galSlika10 {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
          }
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
        sadrzajItaFields {
          kratkiUvodniTekstSadrzajIta
          naslovSadrzajIta
          sadrzajSadrzajIta
        }
        seoEng {
          seoTagoviEng
          seoTekstEng
        }
        seoGer {
          seoTagoviGer
          seoTekstGer
        }
        seoHr {
          seoTagoviHr
          seoTekstHr
        }
        seoIta {
          seoTagoviIta
          seoTekstIta
        }
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
        sadrzajHrFields {
          kratkiUvodniTekstSadrzajHr
          naslovSadrzajHr
          sadrzajSadrzajHr
        }
        docsUploadEng {
          eng {
            node {
              mediaItemUrl
              mediaType
            }
          }
          nazivDokumentaEng
        }
        docsUploadGer {
          ger {
            node {
              mediaItemUrl
              mediaType
            }
          }
          nazivDokumentaGer
        }
        docsUploadHr {
          hr {
            node {
              mediaItemUrl
              mediaType
            }
          }
          nazivDokumentaHr
        }
        docsUploadIta {
          ita {
            node {
              mediaItemUrl
              mediaType
            }
          }
          nazivDokumentaIta
        }
      }
    }
  }
}`;
