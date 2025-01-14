export default function objektOpcenitoQuery() {
  return `query ObjektOpcenito {
  allObjektOpciSadrzajiIInformacije {
    edges {
      node {
        id
        title
        opceInformacijeOObjektuKucnomReduPologu {
          kucniRed {
            prijava {
              napomenaMolimoVasDaUnaprijedObavijestiteObjektOVremenuDolaska
              od
            }
            pravilaZaPusace
            pravilaODobnojGranici
          }
          opceStavkeOpisaNekretnine {
            tehnologija {
              prikljucakNaInternetDane
            }
            sigurnost {
              protupozarniSustavDetektoriDimaAparatiZaGasenjePozara
              protuprovalnaVrata
              sigurnosniSustavAlarmItd
              videoNadzorDaNe
            }
            osnovniPodaci {
              brojJedinicaUnutarObjekta
              kapacitetPomocnihLezajaBrojOsoba
              ukupnaPovrsinaStambenogDijelaM
            }
            povrsineDetaljno {
              povrsinaTeraseM
            }
            kontaktInformacije {
              emailVlasnikaObjekta
              googleLokacijaShareLink
              imeVlasnika
              kontaktTelefonVlasnika
              kontaktTelefonVlasnikaPrikazNaWebu
              nazivObjekta
              webStranicaObjekta
            }
            dodatneInformacije {
              dozvoljeniKucniLjubimciDane
              pristupZaOsobeSInvaliditetomDane
            }
            energetskiPodaci {
              vrstaHladenja
              vrstaGrijanja
            }
            zajednickiProstori
            uslugaDostupnaNa
            tipNekretnine
            prikaziOpcijeDetaljnogUpisaPovrsinaObjekta
            opcijeZaTagovePrivatnostiIEkskluzivnostiSmjestaja
            lokacijaObjekta
            ekoloskeZnacajke
          }
          pologAktivator
          polog {
            iznosPologaEur
            informacijeOPologu
            nacinPovrataPologa
            povratPologa
            pravilaOstecenja
            uvjetiZaPovratPologa
            vrstaPologa
            vrijemeUplatePologa
          }
        }
      }
    }
  }
}`;
}
