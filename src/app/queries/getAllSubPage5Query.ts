export const getBazaTekstovaPodstranice5PasusaQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      sadrzaj5PasusaHr {
        pasus1GrupaTekstovaHr {
          nadnaslovPodnaslov1
          naslov1
          sadrzaj1
        }
        pasus2GrupaTekstovaHr {
          nadnaslovPodnaslov2
          naslov2
          sadrzaj2
        }
        pasus3GrupaTekstovaHr {
          nadnaslovPodnaslov3
          naslov3
          sadrzaj3
        }
        pasus4GrupaTekstovaHr {
          nadnaslovPodnaslov4
          naslov4
          sadrzaj4
        }
        pasus5GrupaTekstovaHr {
          nadnaslovPodnaslov5
          naslov5
          sadrzaj5
        }
        tekstoviPodstraniceHeroHr {
          heroSekcijaTekstIspodNaslova
          naslovHeroSekcija
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
      sadrzaj5PasusaEng {
        pasus1GrupaTekstovaEng {
          nadnaslovPodnaslov1
          naslov1
          sadrzaj1
        }
        pasus2GrupaTekstovaEng {
          nadnaslovPodnaslov2
          naslov2
          sadrzaj2
        }
        pasus3GrupaTekstovaEng {
          nadnaslovPodnaslov3
          naslov3
          sadrzaj3
        }
        pasus4GrupaTekstovaEng {
          nadnaslovPodnaslov4
          naslov4
          sadrzaj4
        }
        pasus5GrupaTekstovaEng {
          nadnaslovPodnaslov5
          naslov5
          sadrzaj5
        }
        tekstoviPodstraniceHeroEng {
          heroSekcijaTekstIspodNaslova
          naslovHeroSekcija
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
    `,
    ger: `
      sadrzaj5PasusaGer {
        pasus1GrupaTekstovaGer {
          nadnaslovPodnaslov1
          naslov1
          sadrzaj1
        }
        pasus2GrupaTekstovaGer {
          nadnaslovPodnaslov2
          naslov2
          sadrzaj2
        }
        pasus3GrupaTekstovaGer {
          nadnaslovPodnaslov3
          naslov3
          sadrzaj3
        }
        pasus4GrupaTekstovaGer {
          nadnaslovPodnaslov4
          naslov4
          sadrzaj4
        }
        pasus5GrupaTekstovaGer {
          nadnaslovPodnaslov5
          naslov5
          sadrzaj5
        }
        tekstoviPodstraniceHeroGer {
          heroSekcijaTekstIspodNaslova
          naslovHeroSekcija
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
    `,
    ita: `
      sadrzaj5PasusaIta {
        pasus1GrupaTekstovaIta {
          nadnaslovPodnaslov1
          naslov1
          sadrzaj1
        }
        pasus2GrupaTekstovaIta {
          nadnaslovPodnaslov2
          naslov2
          sadrzaj2
        }
        pasus3GrupaTekstovaIta {
          nadnaslovPodnaslov3
          naslov3
          sadrzaj3
        }
        pasus4GrupaTekstovaIta {
          nadnaslovPodnaslov4
          naslov4
          sadrzaj4
        }
        pasus5GrupaTekstovaIta {
          nadnaslovPodnaslov5
          naslov5
          sadrzaj5
        }
        tekstoviPodstraniceHeroIta {
          heroSekcijaTekstIspodNaslova
          naslovHeroSekcija
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
    `,
  };

  return `
    query NewQuery {
      bazaTekstovaPodstranice5Pasusa {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};

// function generatePhotoGalleryFields() {
//   let fields = '';
//   for (let i = 1; i <= 10; i++) {
//     fields += `
//       galSlika${String(i).padStart(2, '0')} {
//         node {
//           sourceUrl
//           srcSet
//         }
//       }
//     `;
//   }
//   return fields;
// }

const rawQuery = `query NewQuery {
  bazaTekstovaPodstranice5Pasusa {
    edges {
      node {
        id
        sadrzaj5PasusaGer {
          pasus3GrupaTekstovaGer {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus2GrupaTekstovaGer {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus1GrupaTekstovaGer {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus4GrupaTekstovaGer {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaGer {
            nadnaslovPodnaslov5
            naslov2
            sadrzaj3
          }
          tekstoviPodstraniceHeroGer {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaHr {
          pasus3GrupaTekstovaHr {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus2GrupaTekstovaHr {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus1GrupaTekstovaHr {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus4GrupaTekstovaHr {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaHr {
            nadnaslovPodnaslov5
            naslov2
            sadrzaj3
          }
          tekstoviPodstraniceHeroHr {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaEng {
          pasus2GrupaTekstovaEng {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus1GrupaTekstovaEng {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus3GrupaTekstovaEng {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaEng {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaEng {
            nadnaslovPodnaslov5
            naslov2
            sadrzaj3
          }
          tekstoviPodstraniceHeroEng {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaIta {
          pasus1GrupaTekstovaIta {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus3GrupaTekstovaIta {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus2GrupaTekstovaIta {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus4GrupaTekstovaIta {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaIta {
            nadnaslovPodnaslov5
            naslov2
            sadrzaj3
          }
          tekstoviPodstraniceHeroIta {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        seoEng {
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
    }
  }
}`;
