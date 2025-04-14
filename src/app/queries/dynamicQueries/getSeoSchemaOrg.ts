export default function getSeoSchemaOrg() {
  return `query getSeoSchemaOrg {
  allSeoSchemaInfo {
    edges {
      node {
        id
        osnovneInformacijeOWebstraniciNapredniSeo {
          product
          certifikatiIAkreditacijeCertificatesAccreditations {
            certifikat1 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat2 {
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
              datumIzdavanja
            }
            certifikat3 {
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
              datumIzdavanja
            }
            certifikat4 {
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
              datumIzdavanja
            }
            certifikat5 {
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
              datumIzdavanja
            }
            certifikat6 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat7 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
          }
          dodatneInformacijeAdditionalInformation {
            dostupnostPrevoditelja
            dozvole
            events
            podrskaInvaliditetom
            projekti
            specificneNapomene
            vlasniciOwnershipfundinginfo
          }
          financijeIPolitikeFinancePolicies {
            currency
            jamstvoWarrantypromise
            placanje
            politikaPovrata
          }
          kontaktInformacijeContactPoint {
            adresa
            druptveneMrezeLinkoviNaProfil
            email
            fax
            jeziciNaKojimaJeDostupnaUsluga
            porezniBroj
            radnoVrijeme
            telefon
            urlWebStranice
          }
          offerings {
            akcije
            amenityFeature
            cjenovniRaspon
            dostupnost
            product
          }
          opceniteInformacijeOTvrtkiCompanyInformation {
            brendovi
            datumOsnivanja
            jezici
            legalName
            licenca
            nagradePriznanja
            nazivTvrtke
            opisTvrtke
            podrucjaEkspertize
          }
          typeSelector
        }
        seoSchemaSpecijaliziraneStranice {
          carRentServisi {
            detaljiOVozilimaKojaSuDostupnaZaNajam
            mjestoVracanjaVozila
            pickupLocation
            vrijemePreuzimanjaVozila
            vrijemeVracanjaVozila
            vrstaAutomobila
          }
          eCommerceUsluge {
            metodeDostave
            vremenaIsporuke
          }
          fitnessCentar {
            clanarina
            paketi
          }
          hoteliSmjestajniObjekti {
            brojSoba
            kategorijaHotelaapartmana
            pravilaOtkazivanja
          }
          itCompaniesInput {
            integrations
            platforms
            softwareLicense
            softwareType
          }
          kafici {
            vrstaKaveIOstalihPica
          }
          maliObrtnicizanatlije {
            materijaliUKojimaSeRadi
            medicinskestomatoloskeOrdinacije {
              hitneUsluge
              specijalnosti
              turistickeAgencijeLokalniIzleti
              vrsteZahvata
            }
          }
          restorani {
            dijetalneOpcije
            dostupanParking
            jelovnik
            prijemDjece
            rezervacije
            serviranjeAlkohola
            tipKuhinje
          }
          turistickeAgencijeLokalniIzleti {
            bxvcbvxc
            dostupniTermini
            hranaIPice
          }
          turistickeZajednice {
            brojPosjetitelja
            turistickeAtrakcije
          }
          velikeFirme {
            distribucijskaMreza
            industrijskiSektor
            proizvodniKapacitet
          }
          wellnessCentri {
            certifikatiTerapeuta
            paketi
          }
        }
      }
    }
  }
}`;
}
