export default function oNamaQuery() {
  return `query ONama {
  allONama {
    edges {
      node {
        id
        title
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                sourceUrl
              }
            }
            galSlika02 {
              node {
                sourceUrl
              }
            }
            galSlika03 {
              node {
                sourceUrl
              }
            }
            galSlika04 {
              node {
                sourceUrl
              }
            }
            galSlika05 {
              node {
                sourceUrl
              }
            }
            galSlika06 {
              node {
                sourceUrl
              }
            }
            galSlika07 {
              node {
                sourceUrl
              }
            }
          }
        }
        oNamaSadrzajHr {
          pasus1GrupaTekstovaHr {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaHr {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaHr {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaHr {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaHr {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
          pasus2TekstHr
          pasus3TekstHr
        }
        oNamaSadrzajIta {
          pasus1GrupaTekstovaIta {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1PasusIta
            sadrzaj1
          }
          pasus2GrupaTekstovaIta {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaIta {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaIta {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaIta {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
          pasus2TekstIta
          pasus3TekstIta
        }
        oNamaSadrzajGer {
          pasus1GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaGer {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaGer {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
          pasus2TekstGer
          pasus3TekstGer
        }
        oNamaSadrzajEng {
          pasus1GrupaTekstovaEng {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaEng {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaEng {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaEng {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaEng {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
          pasus2TekstEng
          pasus3TekstEng
        }
      }
    }
  }
}`;
}
