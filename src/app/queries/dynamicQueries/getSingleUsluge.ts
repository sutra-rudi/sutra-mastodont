export default function getSingleUsluge(id: string) {
  return `query getAPortfolioUsluga {
  portfolioUsluga(id: "${id}", idType: DATABASE_ID) {
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
    uslugeIntro {
      dodatneOpcijeSwitcher
      istakniUsluguFavorite
      radniBrojUsluge
      status
      dodatneOpcijeUsluga {
        bojaUsluge
        ikonaUsluge {
          node {
            id
            sourceUrl
          }
        }
        sliderSlikeHeroSekcije1 {
          node {
            id
            sourceUrl
          }
        }
        sliderSlikeHeroSekcije2 {
          node {
            id
            sourceUrl
          }
        }
        sliderSlikeHeroSekcije3 {
          node {
            id
            sourceUrl
          }
        }
        sliderSlikeHeroSekcije4 {
          node {
            id
            sourceUrl
          }
        }
        tAG {
          edges {
            node {
              id
              ... on Tag {
                id
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
      }
      slikaThumbnailSlikaNaKartici {
        node {
          id
          sourceUrl
        }
      }
      glavnaSlika {
        node {
          sourceUrl
          id
        }
      }
    }
    skupinaAtributaHr {
      atributiSkupinaHr {
        poljeAtributa01 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa02 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa03 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa04 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa05 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa06 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa07 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa08 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa09 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa10 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa11 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa12 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa13 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa14 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa15 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa16 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa17 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa18 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa19 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa20 {
          nazivAtributa
          vrijednostAtributa
        }
      }
    }
    skupinaAtributaEng {
      atributiSkupinaEng {
        poljeAtributa01 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa02 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa03 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa04 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa05 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa06 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa07 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa08 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa09 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa10 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa11 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa12 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa13 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa14 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa15 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa16 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa17 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa18 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa19 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa20 {
          nazivAtributa
          vrijednostAtributa
        }
      }
    }
    skupinaAtributaGer {
      atributiSkupinaGer {
        poljeAtributa01 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa02 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa03 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa04 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa05 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa06 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa07 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa08 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa09 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa10 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa11 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa12 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa13 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa14 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa15 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa16 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa17 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa18 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa19 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa20 {
          nazivAtributa
          vrijednostAtributa
        }
      }
    }
    skupinaAtributaIta {
      atributiSkupinaIta {
        poljeAtributa01 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa02 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa03 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa04 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa05 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa06 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa07 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa08 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa09 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa10 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa11 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa12 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa13 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa14 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa15 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa16 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa17 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa18 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa19 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa20 {
          nazivAtributa
          vrijednostAtributa
        }
      }
    }
    skupinaAtributaFra {
      atributiSkupinaFra {
        poljeAtributa01 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa02 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa03 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa04 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa05 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa06 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa07 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa08 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa09 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa10 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa11 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa12 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa13 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa14 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa15 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa16 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa17 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa18 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa19 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa20 {
          nazivAtributa
          vrijednostAtributa
        }
      }
    }
    skupinaAtributaEsp {
      atributiSkupinaEsp {
        poljeAtributa01 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa02 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa03 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa04 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa05 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa06 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa07 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa08 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa09 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa10 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa11 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa12 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa13 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa14 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa15 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa16 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa17 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa18 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa19 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa20 {
          nazivAtributa
          vrijednostAtributa
        }
      }
    }
    skupinaAtributaSlo {
      atributiSkupinaSlo {
        poljeAtributa01 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa02 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa03 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa04 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa05 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa06 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa07 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa08 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa09 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa10 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa11 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa12 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa13 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa14 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa15 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa16 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa17 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa18 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa19 {
          nazivAtributa
          vrijednostAtributa
        }
        poljeAtributa20 {
          nazivAtributa
          vrijednostAtributa
        }
      }
    }
    uslugeSadrzajHr {
      sadrzajGrupeUslugaHr {
        sadrzaj {
          sadrzajPasusa
          sadrzajPasusa2
          sadrzajPasusa3
          sadrzajPasusa4
        }
        nazivUsluge
        podnaslovIliUvodnik
        kratakOpisUsluge
      }
    }
    uslugeSadrzajEng {
      sadrzajGrupeUslugaEng {
        sadrzaj {
          sadrzajPasusa
          sadrzajPasusa2
          sadrzajPasusa3
          sadrzajPasusa4
        }
        nazivUsluge
        podnaslovIliUvodnik
        kratakOpisUsluge
      }
    }
    uslugeSadrzajGer {
      sadrzajGrupeUslugaGer {
        sadrzaj {
          sadrzajPasusa
          sadrzajPasusa2
          sadrzajPasusa3
          sadrzajPasusa4
        }
        nazivUsluge
        podnaslovIliUvodnik
        kratakOpisUsluge
      }
    }
    uslugeSadrzajIta {
      sadrzajGrupeUslugaIta {
        sadrzaj {
          sadrzajPasusa
          sadrzajPasusa2
          sadrzajPasusa3
          sadrzajPasusa4
        }
        nazivUsluge
        podnaslovIliUvodnik
        kratakOpisUsluge
      }
    }
    uslugeSadrzajFra {
      sadrzajGrupeUslugaFra {
        sadrzaj {
          sadrzajPasusa
          sadrzajPasusa2
          sadrzajPasusa3
          sadrzajPasusa4
        }
        nazivUsluge
        podnaslovIliUvodnik
        kratakOpisUsluge
      }
    }
    uslugeSadrzajSlo {
      sadrzajGrupeUslugaSlo {
        sadrzaj {
          sadrzajPasusa
          sadrzajPasusa2
          sadrzajPasusa3
          sadrzajPasusa4
        }
        nazivUsluge
        podnaslovIliUvodnik
        kratakOpisUsluge
      }
    }
    uslugeSadrzajEsp {
      sadrzajGrupeUslugaEsp {
        sadrzaj {
          sadrzajPasusa
          sadrzajPasusa2
          sadrzajPasusa3
          sadrzajPasusa4
        }
        nazivUsluge
        podnaslovIliUvodnik
        kratakOpisUsluge
      }
    }
  }
}`;
}
