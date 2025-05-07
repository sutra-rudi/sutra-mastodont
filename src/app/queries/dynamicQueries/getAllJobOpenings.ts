export default function getJobOpenings() {
  return `query jobOpenings {
  allOglasiZaPosao {
    edges {
      node {
        id
        databaseId
        title
        oglasiZaPosaoSadrzajHr {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajGer {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajEng {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajIta {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
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
        title
        oglasiUvod {
          eksterniLink
          mjestoRada
          objavaNatjecaja
          oglasAktivnostSwitcher
          trajanjeNatjecaja
          glavnaSlikaOglas {
            node {
              id
              sourceUrl
              srcSet
              sizes
            }
          }
        }
        oglasiZaPosaoSadrzajFra {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajEsp {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajSlo {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
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
        title
        oglasiZaPosaoSadrzajHr {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajGer {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajEng {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajIta {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
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
        title
        oglasiUvod {
          eksterniLink
          mjestoRada
          objavaNatjecaja
          oglasAktivnostSwitcher
          trajanjeNatjecaja
          glavnaSlikaOglas {
            node {
              id
              sourceUrl
              srcSet
              sizes
            }
          }
        }
        oglasiZaPosaoSadrzajFra {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajEsp {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
        oglasiZaPosaoSadrzajSlo {
          kategorija
          kratkiUvod
          naslov
          opisPosla
          uvjeti
        }
      }
    }
  }`;
}
