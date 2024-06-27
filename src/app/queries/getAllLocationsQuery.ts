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
      }
    }
  }
}`;
