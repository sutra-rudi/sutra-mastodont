export default function getAllPressMediaQuery() {
  return `query getAllPress {
  allPressMediaSekcija {
    edges {
      node {
        id
        databaseId
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
        modulBazeTekstovaHr {
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
          nadnaslovPodnaslovBazaTekstovaHr
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaSlo {
          nadnaslovPodnaslovBazaTekstovaSlo
          naslovBazaTekstovaSlo
          tekstBazaTekstovaSlo
        }
        pressMediaSekcijaUvod {
          datumPress
          istakniStaviNaPocetakPress
          nazivMedijaPress
          prikaziDodatneOpcijePress
          vanjskiLinkPress
          odabirIkonePress
          fileDownloadPress {
            node {
              sourceUrl
              mediaItemUrl
            }
          }
          slikaPressObjave {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
}

export function getPressMediaFragment() {
  return `  allPressMediaSekcija {
    edges {
      node {
        id
        databaseId
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
        modulBazeTekstovaHr {
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
          nadnaslovPodnaslovBazaTekstovaHr
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaSlo {
          nadnaslovPodnaslovBazaTekstovaSlo
          naslovBazaTekstovaSlo
          tekstBazaTekstovaSlo
        }
        pressMediaSekcijaUvod {
          datumPress
          istakniStaviNaPocetakPress
          nazivMedijaPress
          prikaziDodatneOpcijePress
          vanjskiLinkPress
          odabirIkonePress
          fileDownloadPress {
            node {
              sourceUrl
              mediaItemUrl
            }
          }
          slikaPressObjave {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }`;
}

export function getSinglePressMedia(id: string) {
  return `query getSinglePress {
  pressMediaSekcija(id: "${id}", idType:DATABASE_ID) {
       id
      databaseId        
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
        modulBazeTekstovaHr {
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
          nadnaslovPodnaslovBazaTekstovaHr
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaSlo {
          nadnaslovPodnaslovBazaTekstovaSlo
          naslovBazaTekstovaSlo
          tekstBazaTekstovaSlo
        }
        pressMediaSekcijaUvod {
          datumPress
          istakniStaviNaPocetakPress
          nazivMedijaPress
          prikaziDodatneOpcijePress
          vanjskiLinkPress
          odabirIkonePress
          fileDownloadPress {
            node {
              sourceUrl
              mediaItemUrl
            }
          }
          slikaPressObjave {
            node {
              sourceUrl
            }
          }
        }
  }
}`;
}
