export default function getJobOpenings() {
  return `query jobOpenings {
 allOglasiZaPosao {
    edges {
      node {
        id
        databaseId
        oglasiUvod {
          eksterniLink
          mjestoRada
          objavaNatjecaja
          oglasAktivnostSwitcher
          trajanjeNatjecaja
          glavnaSlikaOglas {
            node {
              sourceUrl
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
        oglasZaPosaoHr {
          kategorijaHr
          kratkiUvodHr
          naslovHr
          opisPoslaHr
          uvjetiHr
        }
        oglasZaPosaoEng {
          kategorijaEng
          kratkiUvodEng
          naslovEng
          opisPoslaEng
          uvjetiEng
        }
        oglasZaPosaoGer {
          kategorijaGer
          kratkiUvodGer
          naslovGer
          opisPoslaGer
          uvjetiGer
        }
        oglasZaPosaoFra {
          kategorijaFra
          kratkiUvodFra
          naslovFra
          opisPoslaFra
          uvjetiFra
        }
        oglasZaPosaoEsp {
          kategorijaEsp
          kratkiUvodEsp
          naslovEsp
          opisPoslaEsp
          uvjetiEsp
        }
        oglasZaPosaoIta {
          kategorijaIta
          kratkiUvodIta
          naslovIta
          opisPoslaIta
          uvjetiIta
        }
        oglasZaPosaoSlo {
          kategorijaSlo
          kratkiUvodSlo
          naslovSlo
          opisPoslaSlo
          uvjetiSlo
        }
      }
    }
  }
}`;
}

export function JobOpeningsFragment() {
  return `allOglasiZaPosao {
    edges {
      node {
        id
        databaseId
        oglasiUvod {
          eksterniLink
          mjestoRada
          objavaNatjecaja
          oglasAktivnostSwitcher
          trajanjeNatjecaja
          glavnaSlikaOglas {
            node {
              sourceUrl
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
        oglasZaPosaoHr {
          kategorijaHr
          kratkiUvodHr
          naslovHr
          opisPoslaHr
          uvjetiHr
        }
        oglasZaPosaoEng {
          kategorijaEng
          kratkiUvodEng
          naslovEng
          opisPoslaEng
          uvjetiEng
        }
        oglasZaPosaoGer {
          kategorijaGer
          kratkiUvodGer
          naslovGer
          opisPoslaGer
          uvjetiGer
        }
        oglasZaPosaoFra {
          kategorijaFra
          kratkiUvodFra
          naslovFra
          opisPoslaFra
          uvjetiFra
        }
        oglasZaPosaoEsp {
          kategorijaEsp
          kratkiUvodEsp
          naslovEsp
          opisPoslaEsp
          uvjetiEsp
        }
        oglasZaPosaoIta {
          kategorijaIta
          kratkiUvodIta
          naslovIta
          opisPoslaIta
          uvjetiIta
        }
        oglasZaPosaoSlo {
          kategorijaSlo
          kratkiUvodSlo
          naslovSlo
          opisPoslaSlo
          uvjetiSlo
        }
      }
    }
  }`;
}
