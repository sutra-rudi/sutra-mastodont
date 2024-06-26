export const getAllONamaQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      oNamaSadrzajHr {
        pasus2TekstHr
        pasus3TekstHr
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
    `,
    eng: `
      oNamaSadrzajEng {
        pasus2TekstEng
        pasus3TekstEng
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
      }
      seoEng {
        seoTekstEng
        seoTagoviEng
        ogImageEng {
          node {
            sourceUrl
            srcSet
          }
        }
      }
    `,
    ger: `
      oNamaSadrzajGer {
        pasus2TekstGer
        pasus3TekstGer
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
      }
      seoGer {
        seoTekstGer
        seoTagoviGer
        ogImageGer {
          node {
            sourceUrl
            srcSet
          }
        }
      }
    `,
    ita: `
      oNamaSadrzajIta {
        pasus2TekstIta
        pasus3TekstIta
        tekstoviPodstraniceONamaIta {
          oNamaHeroSekcijaTekstIspodNaslova
          oNamaNaslovHeroSekcija
        }
        skraceneVerzijeTekstaTekstaONamaIta {
          oNamaOpisTvrtkeUJednojReceniciMax200Znakova
          oNamaSkraceniTekstZaNaslovnicuIliFooter
        }
        pasus3GrupaTekstovaIta {
          oNamaNadnaslovPodnaslov3
          oNamaSadrzaj3
          oNamaSnaslov2
        }
        pasus2GrupaTekstovaIta {
          oNamaNadnaslovPodnaslov2
          oNamaNaslov2Pasus
          oNamaSadrzaj2
        }
        pasus1GrupaTekstovaIta {
          oNamaNadnaslovPodnaslov1
          oNamaNaslov1PasusIta
          sadrzaj1
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
    `,
  };

  return `
    query NewQuery {
      allONama {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            photoGallery {
              fotogalerija {
                galSlika01 {
                  node {
                    srcSet
                    sourceUrl
                  }
                }
                galSlika02 {
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
          }
        }
      }
    }
  `;
};
