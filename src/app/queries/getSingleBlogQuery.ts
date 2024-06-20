export const getSingleBlogQuery = (id: string) => {
  return `query NewQuery {
  blog(id: "${id}") {
    introBlog {
      datum
      kategorija
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
      sadrzaj
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
        galSlika2 {
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
};
