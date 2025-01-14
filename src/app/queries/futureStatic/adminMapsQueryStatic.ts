export default function adminMapsQueryStatic() {
  return `query AllAdminMaps {
  allAdminMaps {
    edges {
      node {
      title
        adminMapLokacijaIzCmsSustava {
          mapsLatitude
          mapsLongitude
          lokacija2
          lokacija3
          lokacija4
          lokacija5
          lokacija6
          imeLokacijeKojaSeIspisujeUMapi
          podaciZaAktiviranuLokaciju2 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
            porukaKojaSeIspisujeZaDodatnuLokaciju
          }
          podaciZaAktiviranuLokaciju3 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
          podaciZaAktiviranuLokaciju4 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
          ikonaIliSlikaNaMapi {
            node {
              id
              sourceUrl
            }
          }
          podaciZaAktiviranuLokaciju5 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
          podaciZaAktiviranuLokaciju6 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
        }
        adminMapsAktivatorSpecijalnihMapboxSkripti {
          addAFullscreenControlToAMap
          addCooperativeGesturesToAMap
          animateMapCameraAroundAPoint
          animateTheCameraAroundAPointWith3dTerrain
        }
        adminMapsField {
          mapboxStylesheetAdminMaps
          mapboxTokenAdminMaps
          mapboxZoomAdminMaps
          nazivMape
        }
        mapsCentarMapeKoordinate {
          bearing
          mapsLatitudeMapCenter
          mapsLongitudeMapCenter
          maxZoomIn
          maxZoomOut
          pitchNagib
          rotationSpeed
        }
      }
    }
  }
}`;
}
