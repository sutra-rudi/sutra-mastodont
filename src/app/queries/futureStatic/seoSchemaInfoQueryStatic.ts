export default function seoSchemaQuery() {
  return `query SeoSchemaInfoQuery {
  allSeoSchemaInfo {
    edges {
      node {
        id
        title
        osnovneInformacijeOWebstraniciNapredniSeo {
          certifikatiIAkreditacijeCertificatesAccreditations {
            certifikat1 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat2 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat3 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat4 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat5 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
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
          product
          typeSelector
        }
      }
    }
  }
}`;
}
