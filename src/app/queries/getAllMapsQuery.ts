export const getAllMapsQuery = () => {
  return `query NewQuery {
  bazaMapsKarte {
    edges {
      node {
        id
        adminMapLokacijaIzCmsSustava {
          imeLokacijeKojaSeIspisujeUMapi
          lokacija2
          lokacija3
          lokacija4
          lokacija5
          lokacija6
          mapsLatitude
          mapsLongitude
          podaciZaAktiviranuLokaciju6 {
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
            porukaKojaSeIspisujeZaDodatnuLokaciju
            dodajIkonuIliSliku {
              node {
                srcSet
                sourceUrl
              }
            }
          }
          podaciZaAktiviranuLokaciju5 {
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
            porukaKojaSeIspisujeZaDodatnuLokaciju
            dodajIkonuIliSliku {
              node {
                srcSet
                sourceUrl
              }
            }
          }
          podaciZaAktiviranuLokaciju4 {
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
            porukaKojaSeIspisujeZaDodatnuLokaciju
            dodajIkonuIliSliku {
              node {
                srcSet
                sourceUrl
              }
            }
          }
          podaciZaAktiviranuLokaciju3 {
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
            porukaKojaSeIspisujeZaDodatnuLokaciju
            dodajIkonuIliSliku {
              node {
                srcSet
                sourceUrl
              }
            }
          }
          podaciZaAktiviranuLokaciju2 {
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
            porukaKojaSeIspisujeZaDodatnuLokaciju
            dodajIkonuIliSliku {
              node {
                srcSet
                sourceUrl
              }
            }
          }
          popUpPorukaKojaSeIspisujeKlikomNaTockuNaMapi
          ikonaIliSlikaNaMapi {
            node {
              sourceUrl
              srcSet
            }
          }
        }
        adminMaps {
          mapboxStylesheetAdminMaps
          mapboxTokenAdminMaps
          mapboxZoomAdminMaps
          nazivMape
        }
        adminMapsAktivatorSpecijalnihMapboxSkripti {
          addAFullscreenControlToAMap
          addCooperativeGesturesToAMap
          animateMapCameraAroundAPoint
          animateTheCameraAroundAPointWith3dTerrain
        }
        mapsCentarMapeKoordinate {
          mapsLatitudeMapCenter
          mapsLongitudeMapCenter
          maxZoomIn
          maxZoomOut
        }
      }
    }
  }
}`;
};
