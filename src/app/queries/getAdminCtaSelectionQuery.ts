export const getAdminCtaSelectionQuery = () => `query NewQuery {
  adminSetupArea {
    edges {
      node {
        adminGlobalniSelektorCta {
          blogSekcijaCta
          kontaktSekcijaCTA
          kontaktSekcijaButtonCta
          jednostavniRentServisiNprAutoRentBoatRentCta
          jednostavniRentObjektiCta
          novostiSekcijaCTA
          oglasiPosaoSekcijaCta
          newsletterSekcijaCtabutton
          pogledajVideoCTA
          proizvodiSekcijaCTA
          receptiSekcijaCta
          regsitracijaCta
          restoraniRezervacijaCta
          sekcijaCtaCopy
          testimonialsSekcijaCTA
          turistickeZajedniceTuristickaPonuda
          uslugeSekcijaCta
          velikeTvrtke
          googleMapsCta
          fotoGalerijaSekcijaCta
          eventCta
          eventButton
          documentDownloadCTA
          caseStudySekcijaCTA
          agencySekcijaCTA
          aProjektniCta
        }
      }
    }
  }
}`;
