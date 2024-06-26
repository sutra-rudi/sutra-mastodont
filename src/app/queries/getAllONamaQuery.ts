export const getAllONamaQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
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
    `,
    eng: `
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

  const globalFields = `
    naslovnaSlika {
      glavnaSlikaNaslovnaSlika {
        node {
          sourceUrl
          srcSet
        }
      }
      sekundarnaGlavnaSlikaThumbnailHover {
        node {
          sourceUrl
          srcSet
        }
      }
    }
    photoGallery {
      fotogalerija {
        ${generatePhotoGalleryFields()}
      }
    }
  `;

  return `
    query NewQuery {
      allONama {
        edges {
          node {
            id
            ${globalFields}
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};

function generatePhotoGalleryFields() {
  let fields = '';
  for (let i = 1; i <= 10; i++) {
    fields += `
      galSlika${String(i).padStart(2, '0')} {
        node {
          sourceUrl
          srcSet
        }
      }
    `;
  }
  return fields;
}
