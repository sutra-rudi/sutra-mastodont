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
          kategorija
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
        fileAttachments {
          dokumenti {
            eng {
              node {
                mediaItemUrl
                mediaType
              }
            }
            ger {
              node {
                mediaItemUrl
                mediaType
              }
            }
            hr {
              node {
                mediaItemUrl
                mediaType
              }
            }
            tal {
              node {
                mediaItemUrl
                mediaType
              }
            }
          }
          imeDokumenta {
            eng
            ger
            hr
            ita
          }
        }
        sadrzajHrFields {
          kratkiUvodniTekstSadrzajHr
          naslovSadrzajHr
          sadrzajSadrzajHr
        }
      }
    }
  }
}`;
