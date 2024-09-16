export const getWorkingHoursSchemaQuery = () => {
  return `query NewQuery {
  allRadnaVremenaTraziliceSeo {
    edges {
      node {
        id
        sezonskoRadnoVrijemeAktivatorDatuma {
          vrijediDoSezonskoRadnoVrijeme
          vrijediOdSezonskoRadnoVrijeme
        }
        tjedniRasporedRadnoVrijemeGoogleSeo {
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
          dodatnaNapomenaTjedniRasporedHr
        }
        tjedniRasporedSezonskoRadnoVrijemeGoogleSeo {
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
          noteDodatnaNapomenaTjedniRasporedSezonskoRadnoVrijemeGoogleSeo
        }
      }
    }
  }
}`;
};
