export default function getSingleBlog(id: string) {
  return `query getBlogDynamic {
  blog(id: "${id}", idType: DATABASE_ID) {
    id
    title
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
        }
      }
      nazivDokumentaHr
    }
    docsUploadIta {
      ita {
        node {
          id
          sourceUrl
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
  }
}`;
}
