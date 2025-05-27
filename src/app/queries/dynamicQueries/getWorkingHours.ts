export default function getWorkingHoursQueryFragment() {
  return `allRadnoVrijeme {
    edges {
      node {
        title
        id
        radnoVrijemeHr {
          textBoxHr
        }
        radnoVrijemeEng {
          textBoxEng
        }
        radnoVrijemeGer {
          textBoxGer
        }
        radnoVrijemeEsp {
          textBoxEsp
        }
        radnoVrijemeFra {
          textBoxFra
        }
        radnoVrijemeIta {
          textBoxIta
        }
        radnoVrijemeSlo {
          textBoxSlo
        }
      }
    }
  }
  allRadnoVrijemeSezonsko {
    edges {
      node {
        id
        title
        radnoVrijemeHr {
          textBoxHr
        }
        radnoVrijemeEng {
          textBoxEng
        }
        radnoVrijemeGer {
          textBoxGer
        }
        radnoVrijemeEsp {
          textBoxEsp
        }
        radnoVrijemeFra {
          textBoxFra
        }
        radnoVrijemeIta {
          textBoxIta
        }
        radnoVrijemeSlo {
          textBoxSlo
        }
        sezonskoRadnoVrijemeAktivatorDatuma {
          vrijediOdSezonskoRadnoVrijeme
          vrijediDoSezonskoRadnoVrijeme
        }
      }
    }
  }`;
}
