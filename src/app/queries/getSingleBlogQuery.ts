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
  }
}`;
};
