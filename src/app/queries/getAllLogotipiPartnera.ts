export const getAllLogotipiPartneraQuery = `query NewQuery {
  logotipiPartneraKlijenata {
    edges {
      node {
        id
        logotipiPartnera {
          logoPNG {
            node {
              sourceUrl
              srcSet
            }
          }
          linkNaStranicuKlijentapartnera
          naziv
          prikaziNaNaslovnici
        }
      }
    }
  }
}`;
