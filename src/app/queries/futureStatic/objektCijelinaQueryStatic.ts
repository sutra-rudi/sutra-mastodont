export default function objektCijelinaQuery() {
  return `query ObjektCijelina {
  allObjektOpisCijelina {
    edges {
      node {
        id
        title
        objektOpisiHr {
          opisiObjekta {
            kratakOpisNekretnine
            nazivNekretnine
            opisi {
              opis1 {
                naslov
                opis
              }
              opis2 {
                naslov
                opis
              }
              opis3 {
                naslov
                opis
              }
              opis4 {
                naslov
                opis
              }
              opis5 {
                naslov
                opis
              }
              opis6 {
                naslov
                opis
              }
              opis7 {
                naslov
                opis
              }
              opis8 {
                naslov
                opis
              }
              opis9 {
                naslov
                opis
              }
            }
          }
        }
        objektOpisiEng {
          opisiObjekta {
            kratakOpisNekretnine
            nazivNekretnine
            opisi {
              opis1 {
                naslov
                opis
              }
              opis2 {
                naslov
                opis
              }
              opis3 {
                naslov
                opis
              }
              opis4 {
                naslov
                opis
              }
              opis5 {
                naslov
                opis
              }
              opis6 {
                naslov
                opis
              }
              opis7 {
                naslov
                opis
              }
              opis8 {
                naslov
                opis
              }
              opis9 {
                naslov
                opis
              }
            }
          }
        }
        objektOpisiGer {
          opisiObjekta {
            kratakOpisNekretnine
            nazivNekretnine
            opisi {
              opis1 {
                naslov
                opis
              }
              opis2 {
                naslov
                opis
              }
              opis3 {
                naslov
                opis
              }
              opis4 {
                naslov
                opis
              }
              opis5 {
                naslov
                opis
              }
              opis6 {
                naslov
                opis
              }
              opis7 {
                naslov
                opis
              }
              opis8 {
                naslov
                opis
              }
              opis9 {
                naslov
                opis
              }
            }
          }
        }
        objektOpisiIta {
          opisiObjekta {
            kratakOpisNekretnine
            nazivNekretnine
            opisi {
              opis1 {
                naslov
                opis
              }
              opis2 {
                naslov
                opis
              }
              opis3 {
                naslov
                opis
              }
              opis4 {
                naslov
                opis
              }
              opis5 {
                naslov
                opis
              }
              opis6 {
                naslov
                opis
              }
              opis7 {
                naslov
                opis
              }
              opis8 {
                naslov
                opis
              }
              opis9 {
                naslov
                opis
              }
            }
          }
        }
      }
    }
  }
}`;
}
