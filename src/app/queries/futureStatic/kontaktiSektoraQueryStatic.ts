export default function kontaktiSektoraQuery() {
  return `query KontaktiSektora {
  allKontaktiSektora {
    edges {
      node {
        id
        title
        kontaktNazivSektoraHr {
          nazivSektoraHr
        }
        kontaktNazivSektoraEng {
          nazivSektoraEng
        }
        kontaktNazivSektoraGer {
          nazivSektoraGer
        }
        kontaktNazivSektoraIta {
          nazivSektoraIta
        }
        kontaktiSektor {
          emailSektor
          faxLinkSektor
          faxPrikazNaStraniciSektor
          mobitelLinkSektor
          mobitelPrikazNaStraniciSektor
          ostaloKontaktZoomTeamsSektor
          prikaziDodatneOpcije
          slackKontaktSektor
          statusSwitcherSektor
          telefonLinkSektor
          telefonPrikazNaStraniciSektor
          slikaSektor {
            node {
              id
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
}`;
}
