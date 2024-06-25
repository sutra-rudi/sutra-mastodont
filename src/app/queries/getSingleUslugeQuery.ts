export const getSingleServicesOfferQuery = (id: string, lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      atributiHr {
        atributiHr {
          nazivAtributa
          vrijednostAtributa1
          vrijednostAtributa2
          vrijednostAtributa3
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
      tagsHr {
        tagTextHr
      }
      modulBazeTekstova2KolumneHr {
        naslovNadnaslov2KolumneTekstaHr {
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
    eng: `
      atributiEng {
        atributiEng {
          nazivAtributa
          vrijednostAtributa1
          vrijednostAtributa2
          vrijednostAtributa3
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
      tagsEng {
        tagTextEng
      }
      modulBazeTekstova2KolumneEng {
        naslovNadnaslov2KolumneTekstaEng {
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
    ger: `
      atributiGer {
        atributiGer {
          nazivAtributa
          vrijednostAtributa1
          vrijednostAtributa2
          vrijednostAtributa3
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
      tagsGer {
        tagTextGer
      }
      modulBazeTekstova2KolumneGer {
        naslovNadnaslov2KolumneTekstaGer {
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
    ita: `
      atributiIta {
        atributiIta {
          nazivAtributa
          vrijednostAtributa1
          vrijednostAtributa2
          vrijednostAtributa3
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
      tagsIta {
        tagTextIta
      }
      modulBazeTekstova2KolumneIta {
        naslovNadnaslov2KolumneTekstaIta {
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
  };

  return `
    query NewQuery {
      usluge(id: "${id}") {
        id
        ${languageFieldsMap[lang] || ''}
        modulBazeTekstovaUvod {
          slika1 {
            node {
              sourceUrl
              srcSet
            }
          }
          slika2 {
            node {
              sourceUrl
              srcSet
            }
          }
          statusPrikazaTekstaZaPodstranicu
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
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
        }
      }
    }
  `;
};
