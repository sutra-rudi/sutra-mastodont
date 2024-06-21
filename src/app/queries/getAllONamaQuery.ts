export const getAllONamaQuery = `query NewQuery {
  allIONama {
    edges {
      node {
        id
        onamaSadrzajEng {
          heroSekcijaTekstIspodNaslova
          nadnaslovPodnaslovDva
          nadnaslovPodnaslovTri
          naslovCopy
          naslovHeroSekcija
          naslovONama
          opisTvrtkeUJednojReceniciMax200Znakova
          podnaslovONama
          sadrzaj
          sadrzajPasusDrugi
          sadrzajPasusTri
          skraceniTekstZaNaslovnicuIliFooter
        }
        onamaSadrzajGer {
          heroSekcijaTekstIspodNaslova
          nadnaslovPodnaslovDva
          nadnaslovPodnaslovTri
          naslovCopy
          naslovHeroSekcija
          naslovONama
          opisTvrtkeUJednojReceniciMax200Znakova
          podnaslovONama
          sadrzaj
          sadrzajPasusDrugi
          sadrzajPasusTri
          skraceniTekstZaNaslovnicuIliFooter
        }
        onamaSadrzajHr {
          heroSekcijaTekstIspodNaslova
          nadnaslovPodnaslovDva
          nadnaslovPodnaslovTri
          naslovCopy
          naslovHeroSekcija
          naslovONama
          opisTvrtkeUJednojReceniciMax200Znakova
          podnaslovONama
          sadrzaj
          sadrzajPasusDrugi
          sadrzajPasusTri
          skraceniTekstZaNaslovnicuIliFooter
        }
        onamaSadrzajIta {
          heroSekcijaTekstIspodNaslova
          nadnaslovPodnaslovDva
          nadnaslovPodnaslovTri
          naslovCopy
          naslovHeroSekcija
          naslovONama
          opisTvrtkeUJednojReceniciMax200Znakova
          podnaslovONama
          sadrzaj
          sadrzajPasusDrugi
          sadrzajPasusTri
          skraceniTekstZaNaslovnicuIliFooter
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika2 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika03 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika04 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika05 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika06 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika07 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika08 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika09 {
              node {
                srcSet
                sourceUrl
              }
            }
            galSlika10 {
              node {
                srcSet
                sourceUrl
              }
            }
          }
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
          seoTekstHr
          seoTagoviHr
          ogImageHr {
            node {
              sourceUrl
              srcSet
            }
          }
        }
        seoIta {
          seoTekstIta
          seoTagoviIta
          ogImageIta {
            node {
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
}`;
