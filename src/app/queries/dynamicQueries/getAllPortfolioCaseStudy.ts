export default function getAllPortfolioCaseStudy() {
  return `query getAllPortfolioCaseStudyAgency {
  allPortfolioCaseStudyAgency {
    edges {
      node {
        id
        title
        databaseId
        agencijaSadrzajHr {
          sadrzajHr {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajEng {
          sadrzajEng {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajIta {
          sadrzajIta {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajFra {
          sadrzajFra {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajSlo {
          sadrzajSlo {
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
          }
        }
        agencijaSadrzajGer {
          sadrzajGer {
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
          }
        }
        agencijaSadrzajEsp {
          sadrzajEsp {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
        caseStudyUvod {
          bonusPoljeZaUpisCaseStudy
          colorCaseStudy
          favoriteCaseStudy
          godinaCaseStudy
          imeKlijentaCaseStudy
          slikaThumbnailCaseStudy {
            node {
              id
              sourceUrl
            }
          }
          izbornikOznakaCheckbox {
            edges {
              node {
                id
                ... on Tag {
                  name
                  tags {
                    prijevodiTagova {
                      engleskiPrijevod
                      francuskiPrijevod
                      hrvatskiPrijevod
                      njemackiPrijevod
                      talijanskiPrijevod
                    }
                  }
                }
              }
            }
          }
          izbornikKategorijeCheckbox {
            edges {
              node {
                id
                ... on Category {
                  id
                  informacijeKategorije {
                    prijevodi {
                      imeKategorijeEng
                      imeKategorijeEsp
                      imeKategorijeFra
                      imeKategorijeGer
                      imeKategorijeHr
                      imeKategorijeIta
                      opisKategorijeEng
                      opisKategorijeEsp
                      opisKategorijeFra
                      opisKategorijeGer
                      opisKategorijeHr
                      opisKategorijeIta
                    }
                    uvod {
                      slikaKategorije {
                        node {
                          id
                          sourceUrl
                        }
                      }
                      bojaKategorije
                    }
                  }
                }
              }
            }
          }
          glavnaSlikaCaseStudy {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
}

export const portfolioCaseStudyAgencyFragment = () => {
  return `allPortfolioCaseStudyAgency {
    edges {
      node {
        id
        title
        databaseId
        agencijaSadrzajHr {
          sadrzajHr {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajEng {
          sadrzajEng {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajIta {
          sadrzajIta {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajFra {
          sadrzajFra {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        agencijaSadrzajSlo {
          sadrzajSlo {
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
          }
        }
        agencijaSadrzajGer {
          sadrzajGer {
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
          }
        }
        agencijaSadrzajEsp {
          sadrzajEsp {
            oKlijentu {
              oKlijentuNaslov
              oKlijentuSadrzaj
            }
            opisProjekta {
              opisProjektaIIzazoviNaslov
              opisProjektaIIzazoviSadrzaj
            }
            realiziraneUsluge {
              popisRealiziranihUsluga
            }
            rjesenje {
              rjesenjeNaslov
              rjesenjeSadrzaj
            }
            cmsSwitcher {
              cmsSwitcherOKlijentu
              cmsSwitcherOpisProjekta
              cmsSwitcherRealiziraneUsluge
              cmsSwitcherRjesenje
            }
          }
        }
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
        caseStudyUvod {
          bonusPoljeZaUpisCaseStudy
          colorCaseStudy
          favoriteCaseStudy
          godinaCaseStudy
          imeKlijentaCaseStudy
          slikaThumbnailCaseStudy {
            node {
              id
              sourceUrl
            }
          }
          izbornikOznakaCheckbox {
            edges {
              node {
                id
                ... on Tag {
                  name
                  tags {
                    prijevodiTagova {
                      engleskiPrijevod
                      francuskiPrijevod
                      hrvatskiPrijevod
                      njemackiPrijevod
                      talijanskiPrijevod
                    }
                  }
                }
              }
            }
          }
          izbornikKategorijeCheckbox {
            edges {
              node {
                id
                ... on Category {
                  id
                  informacijeKategorije {
                    prijevodi {
                      imeKategorijeEng
                      imeKategorijeEsp
                      imeKategorijeFra
                      imeKategorijeGer
                      imeKategorijeHr
                      imeKategorijeIta
                      opisKategorijeEng
                      opisKategorijeEsp
                      opisKategorijeFra
                      opisKategorijeGer
                      opisKategorijeHr
                      opisKategorijeIta
                    }
                    uvod {
                      slikaKategorije {
                        node {
                          id
                          sourceUrl
                        }
                      }
                      bojaKategorije
                    }
                  }
                }
              }
            }
          }
          glavnaSlikaCaseStudy {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }`;
};

export function getSinglePortfolio(slug: string) {
  return `query singlePortfolio {
  portfolioCaseStudyAgency(idType: SLUG, id: "${slug}") {
    id
    title
    databaseId
    
    agencijaSadrzajHr {
      sadrzajHr {
        oKlijentu {
          oKlijentuNaslov
          oKlijentuSadrzaj
        }
        opisProjekta {
          opisProjektaIIzazoviNaslov
          opisProjektaIIzazoviSadrzaj
        }
        realiziraneUsluge {
          popisRealiziranihUsluga
        }
        rjesenje {
          rjesenjeNaslov
          rjesenjeSadrzaj
        }
        cmsSwitcher {
          cmsSwitcherOKlijentu
          cmsSwitcherOpisProjekta
          cmsSwitcherRealiziraneUsluge
          cmsSwitcherRjesenje
        }
      }
    }
    agencijaSadrzajEng {
      sadrzajEng {
        oKlijentu {
          oKlijentuNaslov
          oKlijentuSadrzaj
        }
        opisProjekta {
          opisProjektaIIzazoviNaslov
          opisProjektaIIzazoviSadrzaj
        }
        realiziraneUsluge {
          popisRealiziranihUsluga
        }
        rjesenje {
          rjesenjeNaslov
          rjesenjeSadrzaj
        }
        cmsSwitcher {
          cmsSwitcherOKlijentu
          cmsSwitcherOpisProjekta
          cmsSwitcherRealiziraneUsluge
          cmsSwitcherRjesenje
        }
      }
    }
    agencijaSadrzajIta {
      sadrzajIta {
        oKlijentu {
          oKlijentuNaslov
          oKlijentuSadrzaj
        }
        opisProjekta {
          opisProjektaIIzazoviNaslov
          opisProjektaIIzazoviSadrzaj
        }
        realiziraneUsluge {
          popisRealiziranihUsluga
        }
        rjesenje {
          rjesenjeNaslov
          rjesenjeSadrzaj
        }
        cmsSwitcher {
          cmsSwitcherOKlijentu
          cmsSwitcherOpisProjekta
          cmsSwitcherRealiziraneUsluge
          cmsSwitcherRjesenje
        }
      }
    }
    agencijaSadrzajFra {
      sadrzajFra {
        oKlijentu {
          oKlijentuNaslov
          oKlijentuSadrzaj
        }
        opisProjekta {
          opisProjektaIIzazoviNaslov
          opisProjektaIIzazoviSadrzaj
        }
        realiziraneUsluge {
          popisRealiziranihUsluga
        }
        rjesenje {
          rjesenjeNaslov
          rjesenjeSadrzaj
        }
        cmsSwitcher {
          cmsSwitcherOKlijentu
          cmsSwitcherOpisProjekta
          cmsSwitcherRealiziraneUsluge
          cmsSwitcherRjesenje
        }
      }
    }
    agencijaSadrzajSlo {
      sadrzajSlo {
        cmsSwitcher {
          cmsSwitcherOKlijentu
          cmsSwitcherOpisProjekta
          cmsSwitcherRealiziraneUsluge
          cmsSwitcherRjesenje
        }
        oKlijentu {
          oKlijentuNaslov
          oKlijentuSadrzaj
        }
        opisProjekta {
          opisProjektaIIzazoviNaslov
          opisProjektaIIzazoviSadrzaj
        }
        realiziraneUsluge {
          popisRealiziranihUsluga
        }
        rjesenje {
          rjesenjeNaslov
          rjesenjeSadrzaj
        }
      }
    }
    agencijaSadrzajGer {
      sadrzajGer {
        cmsSwitcher {
          cmsSwitcherOKlijentu
          cmsSwitcherOpisProjekta
          cmsSwitcherRealiziraneUsluge
          cmsSwitcherRjesenje
        }
        oKlijentu {
          oKlijentuNaslov
          oKlijentuSadrzaj
        }
        opisProjekta {
          opisProjektaIIzazoviNaslov
          opisProjektaIIzazoviSadrzaj
        }
        realiziraneUsluge {
          popisRealiziranihUsluga
        }
        rjesenje {
          rjesenjeNaslov
          rjesenjeSadrzaj
        }
      }
    }
    agencijaSadrzajEsp {
      sadrzajEsp {
        oKlijentu {
          oKlijentuNaslov
          oKlijentuSadrzaj
        }
        opisProjekta {
          opisProjektaIIzazoviNaslov
          opisProjektaIIzazoviSadrzaj
        }
        realiziraneUsluge {
          popisRealiziranihUsluga
        }
        rjesenje {
          rjesenjeNaslov
          rjesenjeSadrzaj
        }
        cmsSwitcher {
          cmsSwitcherOKlijentu
          cmsSwitcherOpisProjekta
          cmsSwitcherRealiziraneUsluge
          cmsSwitcherRjesenje
        }
      }
    }
    statusAtivacijePoJezicima {
      aktivatorEng
      aktivatorGer
      aktivatorHr
      aktivatorIta
      dodatniJezici {
        aktivatorFra
        aktivatorSlo
        aktivatorSpa
      }
    }
    caseStudyUvod {
      bonusPoljeZaUpisCaseStudy
      colorCaseStudy
      favoriteCaseStudy
      godinaCaseStudy
      imeKlijentaCaseStudy
      slikaThumbnailCaseStudy {
        node {
          id
          sourceUrl
        }
      }
      izbornikOznakaCheckbox {
        edges {
          node {
            id
            ... on Tag {
              name
              tags {
                prijevodiTagova {
                  engleskiPrijevod
                  francuskiPrijevod
                  hrvatskiPrijevod
                  njemackiPrijevod
                  talijanskiPrijevod
                }
              }
            }
          }
        }
      }
      izbornikKategorijeCheckbox {
        edges {
          node {
            id
            ... on Category {
              id
              informacijeKategorije {
                prijevodi {
                  imeKategorijeEng
                  imeKategorijeEsp
                  imeKategorijeFra
                  imeKategorijeGer
                  imeKategorijeHr
                  imeKategorijeIta
                  opisKategorijeEng
                  opisKategorijeEsp
                  opisKategorijeFra
                  opisKategorijeGer
                  opisKategorijeHr
                  opisKategorijeIta
                }
                uvod {
                  slikaKategorije {
                    node {
                      id
                      sourceUrl
                    }
                  }
                  bojaKategorije
                }
              }
            }
          }
        }
      }
      glavnaSlikaCaseStudy {
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
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
  }
}`;
}
