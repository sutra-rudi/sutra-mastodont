export const getAllLocationsQuery = `query NewQuery {
  lokacije {
    edges {
      node {
        id
        radnaVremenaLokacijaOsnovneInformacije {
          adresaLokacije
          emailLokacije
          googleMapsLinkPojedineLokacije
          imeOdgovorneOsobe
          kontaktTelefonLokacije
          kontaktTelefonLokacijeLink
          nazivLokacije
          status
        }
        naslovnaSlika {
          glavnaSlikaNaslovnaSlika {
            node {
              sourceUrl
              srcSet
            }
          }
          sekundarnaGlavnaSlikaThumbnailHover {
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
            galSlika02 {
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
