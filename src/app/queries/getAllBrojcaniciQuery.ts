export const getAllBrojcaniciQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      metricsHr {
        companyInNumbersHr {
          prikaziDodatneOpcijeSwitcher
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
    eng: `
      metricsEng {
        companyInNumbersEng {
          prikaziDodatneOpcije
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
    ger: `
      metricsGer {
        companyInNumbersGer {
          prikaziDodatneOpcijeSwitcher
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
    ita: `
      metricsIta {
        companyInNumbersIta {
          prikaziDodatneOpcijeSwitcher
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
  };

  return `query newQuery {
    allBrojcanici {
      edges {
        node {
          id
          brojcanikCompanyInNumbersUvod {
            brojcaniciUvod {
              slikaPngSvg {
                node {
                  sourceUrl
                }
              }
              znakIliNatpisUzBroj
              broj
              pozicijaUNizuUBrojcaniku
              prikaziDodatneOpcijeSlikaIkona
              reactIconsImportCode
            }
          }
          ${languageFieldsMap[lang] || ''}
        }
      }
    }
  }`;
};
