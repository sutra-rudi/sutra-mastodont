//osnovneInformacijeOWebstraniciNapredniSeo > kontaktInformacijeContactPoint, offerings, opceniteInformacijeOTvrtkiCompanyInformation

export const getBasicSchemaOrgProjectQuery = () => {
  return `query NewQuery {
  seoSchemaOrg {
    edges {
      node {
        id
        osnovneInformacijeOWebstraniciNapredniSeo {
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
        }
      }
    }
  }
}`;
};
