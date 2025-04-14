export default function getSingleBlog(id: string) {
  return `query getABlogDynamic {
  blog(id: "${id}", idType: DATABASE_ID) {
    id
    title
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
                slikaKategorije {
                  node {
                    id
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
      tag {
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
    sadrzajItaFields {
      kratkiUvodniTekstSadrzajIta
      naslovSadrzajIta
      sadrzajSadrzajIta
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
    sadrzajSloFields {
      kratkiUvodniTekstSadrzajSlo
      naslovSadrzajSlo
      sadrzajSadrzajSlo
    }
    docsUploadHr {
      hr {
        node {
          id
          sourceUrl
          mediaType
          mediaItemUrl
        }
      }
      nazivDokumentaHr
    }
    docsUploadIta {
      ita {
        node {
          id
          sourceUrl
          mediaType
          mediaItemUrl
        }
      }
      nazivDokumentaIta
    }
    docsUploadGer {
      nazivDokumentaGer
      ger {
        node {
          id
          sourceUrl
          mediaType
          mediaItemUrl
        }
      }
    }
    docsUploadEng {
      nazivDokumentaEng
      eng {
        node {
          id
          sourceUrl
          mediaType
          mediaItemUrl
        }
      }
    }
    photoGallery {
      fotogalerija {
        galSlika01 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika02 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika03 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika04 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika05 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika06 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika07 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika08 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika09 {
          node {
            sourceUrl
            srcSet
          }
        }
        galSlika10 {
          node {
            sourceUrl
            srcSet
          }
        }
      }
    }
    seoHr {
      seoHr {
        seoOpisStranice
      }
    }
    seoEsp {
      seoEsp {
        seoOpisStranice
      }
    }
    seoEng {
      seoEng {
        seoOpisStranice
      }
    }
    seoFra {
      seoFra {
        seoOpisStranice
      }
    }
    seoGer {
      seoGer {
        seoOpisStranice
      }
    }
    seoIta {
      seoIta {
        seoOpisStranice
      }
    }
    seoSlo {
      seoSlo {
        seoOpisStranice
      }
    }
  }
}`;
}
