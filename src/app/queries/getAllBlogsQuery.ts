export const getAllBlogsQuery = `query NewQuery {
  allBlog {
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
            galSlika2 {
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
        introBlog {
          datum
          istaknutoNaNaslovnici
          kategorija {
            edges {
              node {
                id
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
        docsUploadHr {
          hr {
            node {
              mediaType
              mediaItemUrl
            }
          }
          nazivDokumentaHr
        }
        docsUploadEng {
          eng {
            node {
              mediaType
              mediaItemUrl
            }
          }
          nazivDokumentaEng
        }
        docsUploadGer {
          ger {
            node {
              mediaType
              mediaItemUrl
            }
          }
          nazivDokumentaGer
        }
        docsUploadIta {
          ita {
            node {
              mediaType
              mediaItemUrl
            }
          }
          nazivDokumentaIta
        }
      }
    }
  }
}`;
