export default function getAllBrojcanici() {
  return `query getAllBrojcanici {
  allBrojcanici {
    edges {
      node {
        id
        title
        brojcanikCompanyInNumbersUvod {
          brojcaniciUvod {
            broj
            pozicijaUNizuUBrojcaniku
            prikaziDodatneOpcijeSlikaIkona
            reactIconsImportCode
            znakIliNatpisUzBroj
            slikaPngSvg {
              node {
                id
                sourceUrl
              }
            }
          }
        }
        metricsHr {
          companyInNumbersHr {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsGer {
          companyInNumbersGer {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsFra {
          companyInNumbersFra {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsEsp {
          companyInNumbersEsp {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsEng {
          companyInNumbersEng {
            prikaziDodatneOpcije
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsIta {
          companyInNumbersIta {
            fieldGroupName
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsSlo {
          companyInNumbersSlo {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
      }
    }
  }
}`;
}
