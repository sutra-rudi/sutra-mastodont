export default function objektUdaljenostiAktivnostiQuery() {
  return `query ObjektUdaljenostiAktivnosti {
  allObjektUdaljenostiAktivnosti {
    edges {
      node {
        id
        title
        objektStoSeNalaziUBlizini {
          aktivnostiISadrzajiUBlizini {
            drustveniSadrzaji
            kulturniSadrzaji
            prirodniResursi
            restoraniUBlizini
            transportneOpcijeUBlizini
            povijesniIKulturniSadrzaji
            poljoprivredniSadrzaji
            vodeniSadrzaji
            ektremniSportoviIAvanture
            shoppingDestinacije
          }
        }
      }
    }
  }
}`;
}
