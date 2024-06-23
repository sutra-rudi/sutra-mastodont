export const getSingleNewsQuery = (id: string) => {
  return `query NewQuery {
  novosti(id: "${id}") {
    introNews {
      datum
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
          srcSet
        }
      }
    }
    sadrzajEngFields {
      kratkiUvodniTekstSadrzajEng
      naslovSadrzajSadrzajEng
      sadrzajSadrzajEng
    }
    sadrzajHrFields {
      kratkiUvodniTekstSadrzajHr
      naslovSadrzajHr
      sadrzajSadrzajHr
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
      ogImageEng {
        node {
          sourceUrl
          srcSet
        }
      }
    }
    seoGer {
      seoTagoviGer
      seoTekstGer
      ogImageGer {
        node {
          sourceUrl
          srcSet
        }
      }
    }
    seoHr {
      seoTagoviHr
      seoTekstHr
      ogImageHr {
        node {
          sourceUrl
          srcSet
        }
      }
    }
    seoIta {
      seoTagoviIta
      seoTekstIta
      ogImageIta {
        node {
          sourceUrl
          srcSet
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
    tagsHr {
      tagText
    }
    tagsEng {
      tagText
    }
    tagsIta {
      tagText
    }
    tagsGer {
      tagText
    }
  }
}`;
};
