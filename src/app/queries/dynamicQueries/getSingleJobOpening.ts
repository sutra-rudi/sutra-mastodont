export default function getSingleJobOpening(id: string) {
  return `query jobOpeningSingle {
  oglasiZaPosao(id: "${id}", idType: DATABASE_ID) {
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
}`;
}
