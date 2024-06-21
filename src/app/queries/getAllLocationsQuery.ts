export const getAllLocationsQuery = `query NewQuery {
  lokacije {
    edges {
      node {
        id
        radnaVremenaLokacijaOsnovneInformacije {
          adresaLokacije
          emailLokacije
          googleMapsLinkPojedineLokacije
          imeLokacije
          imeOdgovorneOsobe
          kontaktTelefonLokacije
        }
        naslovnaSlika {
          glavnaSlika {
            node {
              sourceUrl
              srcSet
            }
          }
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika2 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika03 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika04 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika05 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika06 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika07 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika08 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika09 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika10 {
              node {
                sourceUrl
                srcSet
              }
            }
          }
        }
      }
    }
  }
}`;
