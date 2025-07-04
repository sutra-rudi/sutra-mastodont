export default function getAllPortfolioCaseStudy() {
  return `query getAllPortfolioCaseStudyAgency {
  allPortfolioCaseStudyAgency {
    edges {
      node {
        id
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
