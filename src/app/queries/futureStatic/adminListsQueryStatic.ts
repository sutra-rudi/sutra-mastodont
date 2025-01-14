export default function adminListsQuery() {
  return `query AllAdminLists {
  allAdminBazaLista {
    edges {
      node {
        id
        title
        listaHr {
          listaUvodHr {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajHr
        }
        listaEng {
          listaUvodEng {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajEng
        }
        listaGer {
          listaUvodGer {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajGer
        }
        listaIta {
          listaUvodIta {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajIta
        }
        title
        ikona {
          svgListIcon {
            node {
              sourceUrl
            }
          }
          odabirBojeZaDefaultIkone
          odabirIkoneKojaSePrikazujeNaListi
        }
      }
    }
  }
}`;
}
