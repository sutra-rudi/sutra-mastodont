export const getAdminContactFormSemantics = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      adminStavkeOsnovniTekstoviHr {
        kontaktiBazaTekstovaHr {
          tekstoviStavkiUKontaktima {
            checkmarkSelectionNazivStavke
            checkmarkSelectionPopisStavkiKojeSePrikazuju
            datePickerErrorPoruka
            datePickerNazivStavke
            datePickerPlaceholderTekst
            dropdownSelectionErrorPoruka
            dropdownSelectionNazivStavke
            dropdownSelectionPlaceholderTekst
            dropdownSelectionPopisStavkiKojeSePrikazuju
            emailErrorMessage
            emailNazivStavke
            emailPlaceholderTekst
            imeErrorMessage
            imeNazivStavke
            imePlaceholderTekst
            porukaErrorMessage
            porukaNazivStavke
            porukaPlaceholderTekst
            prezimeErrorMessage
            prezimeNazivStavke
            prezimePlaceholderTekst
            radioButtonSelectionErrorPoruka
            radioButtonSelectionNazivStavke
            radioButtonSelectionPopisStavkiKojeSePrikazuju
            telefonErrorMessage
            telefonNazivStavke
            telefonPlaceholderTekst
            uploadDokumenataNazivStavke
            uploadDokumenataPlaceholderTekst
            uvjetiSlazemSeSaUvjetima
          }
        }
      }
    `,
    eng: `
      adminStavkeOsnovniTekstoviEng {
        kontaktiBazaTekstovaEng {
          tekstoviStavkiUKontaktima {
            checkmarkSelectionNazivStavke
            checkmarkSelectionPopisStavkiKojeSePrikazuju
            datePickerErrorPoruka
            datePickerNazivStavke
            datePickerPlaceholderTekst
            dropdownSelectionErrorPoruka
            dropdownSelectionNazivStavke
            dropdownSelectionPlaceholderTekst
            dropdownSelectionPopisStavkiKojeSePrikazuju
            emailErrorMessage
            emailNazivStavke
            emailPlaceholderTekst
            imeErrorMessage
            imeNazivStavke
            imePlaceholderTekst
            porukaErrorMessage
            porukaNazivStavke
            porukaPlaceholderTekst
            prezimeErrorMessage
            prezimeNazivStavke
            prezimePlaceholderTekst
            radioButtonSelectionErrorPoruka
            radioButtonSelectionNazivStavke
            radioButtonSelectionPopisStavkiKojeSePrikazuju
            telefonErrorMessage
            telefonNazivStavke
            telefonPlaceholderTekst
            uploadDokumenataNazivStavke
            uploadDokumenataPlaceholderTekst
            uvjetiSlazemSeSaUvjetima
          }
        }
      }
    `,
    ger: `
      adminStavkeOsnovniTekstoviGer {
        kontaktiBazaTekstovaGer {
          tekstoviStavkiUKontaktima {
            checkmarkSelectionNazivStavke
            checkmarkSelectionPopisStavkiKojeSePrikazuju
            datePickerErrorPoruka
            datePickerNazivStavke
            datePickerPlaceholderTekst
            dropdownSelectionErrorPoruka
            dropdownSelectionNazivStavke
            dropdownSelectionPlaceholderTekst
            dropdownSelectionPopisStavkiKojeSePrikazuju
            emailErrorMessage
            emailNazivStavke
            emailPlaceholderTekst
            imeErrorMessage
            imeNazivStavke
            imePlaceholderTekst
            porukaErrorMessage
            porukaNazivStavke
            porukaPlaceholderTekst
            prezimeErrorMessage
            prezimeNazivStavke
            prezimePlaceholderTekst
            radioButtonSelectionErrorPoruka
            radioButtonSelectionNazivStavke
            radioButtonSelectionPopisStavkiKojeSePrikazuju
            telefonErrorMessage
            telefonNazivStavke
            telefonPlaceholderTekst
            uploadDokumenataNazivStavke
            uploadDokumenataPlaceholderTekst
            uvjetiSlazemSeSaUvjetima
          }
        }
      }
    `,
    ita: `
      adminStavkeOsnovniTekstoviIta {
        kontaktiBazaTekstovaIta {
          tekstoviStavkiUKontaktima {
            checkmarkSelectionNazivStavke
            checkmarkSelectionPopisStavkiKojeSePrikazuju
            datePickerErrorPoruka
            datePickerNazivStavke
            datePickerPlaceholderTekst
            dropdownSelectionErrorPoruka
            dropdownSelectionNazivStavke
            dropdownSelectionPlaceholderTekst
            dropdownSelectionPopisStavkiKojeSePrikazuju
            emailErrorMessage
            emailNazivStavke
            emailPlaceholderTekst
            imeErrorMessage
            imeNazivStavke
            imePlaceholderTekst
            porukaErrorMessage
            porukaNazivStavke
            porukaPlaceholderTekst
            prezimeErrorMessage
            prezimeNazivStavke
            prezimePlaceholderTekst
            radioButtonSelectionErrorPoruka
            radioButtonSelectionNazivStavke
            radioButtonSelectionPopisStavkiKojeSePrikazuju
            telefonErrorMessage
            telefonNazivStavke
            telefonPlaceholderTekst
            uploadDokumenataNazivStavke
            uploadDokumenataPlaceholderTekst
            uvjetiSlazemSeSaUvjetima
          }
        }
      }
    `,
  };

  return `
    query NewQuery {
      adminTekstoviSetupKomponenti {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};
