export default function GetAlertsQuery() {
  return `query getAlerts {
  allObavijestiNaStranici {
    edges {
      node {
        id
        obavijestiInterventne {
          datumIVrijemeKrajaObjave
          datumIVrijemeObjave
          linkNaKojiVodiObavijestOpcionalno
          odabirAkcijskeBoje
          prikaziDodatneOpcije
          obavijestiPngSlikaIliIkona {
            node {
              id
              sourceUrl
            }
          }
        }
        statusAtivacijePoJezicima {
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
          aktivatorHr
          aktivatorEng
          aktivatorGer
          aktivatorIta
        }
        textHr {
          naslovHr
          sadrzajTextHr
        }
        textEng {
          naslovEng
          sadrzajTextEng
        }
        textGer {
          naslovGer
          sadrzajTextGer
        }
        textIta {
          naslovIta
          sadrzajTextIta
        }
        textFra {
          naslovFra
          sadrzajTextFra
        }
        textEsp {
          naslovEsp
          sadrzajTextEsp
        }
        textSlo {
          naslovSlo
          sadrzajTextSlo
        }
      }
    }
  }
}`;
}
