export default function getSingleJobOpening(id: string) {
  return `query jobOpeningSingle {
  oglasiZaPosao(id: "${id}", idType: DATABASE_ID) {
    oglasiUvod {
      glavnaSlikaOglas {
        node {
          id
          sourceUrl
          sizes
          srcSet
        }
      }
      mjestoRada
      objavaNatjecaja
      oglasAktivnostSwitcher
      trajanjeNatjecaja
      eksterniLink
    }
    title
    oglasiZaPosaoSadrzajHr {
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
    oglasiZaPosaoSadrzajGer {
      kategorija
      kratkiUvod
      naslov
      opisPosla
      uvjeti
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
    oglasiZaPosaoSadrzajIta {
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
    statusAtivacijePoJezicima {
      dodatniJezici {
        aktivatorFra
        aktivatorSlo
        aktivatorSpa
      }
      aktivatorIta
      aktivatorGer
      aktivatorEng
      aktivatorHr
    }
  }
}`;
}
