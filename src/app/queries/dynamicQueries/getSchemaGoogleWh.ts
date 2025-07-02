export default function getAllSchemaWhQuery() {
  return `query getSchemaRadnaVremenaGoogle {
  allSeoRadnaVremenaTrazilice {
    edges {
      node {
        id
        tjedniRasporedRadnoVrijemeGoogleSeo {
          dodatnaNapomenaTjedniRasporedHr
          tjedniRasporedGoogleSeo {
            ponedjeljak {
              closes
              opens
            }
            utorak {
              closes
              opens
            }
            srijeda {
              closes
              opens
            }
            cetvrtak {
              closes
              opens
            }
            petak {
              closes
              opens
            }
            subota {
              closes
              opens
            }
            nedjelja {
              closes
              opens
            }
          }
        }
        tjedniRasporedSezonskoRadnoVrijemeGoogleSeo {
          noteDodatnaNapomenaTjedniRasporedSezonskoRadnoVrijemeGoogleSeo
          tjedniRasporedGoogleSeoSezonskoRadnoVrijeme {
            ponedjeljak {
              closes
              opens
            }
            utorak {
              closes
              opens
            }
            srijeda {
              closes
              opens
            }
            cetvrtak {
              closes
              opens
            }
            petak {
              closes
              opens
            }
            subota {
              closes
              opens
            }
            nedjelja {
              closes
              opens
            }
          }
        }
      }
    }
  }
}`;
}
