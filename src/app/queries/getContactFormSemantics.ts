export const getAdminContactFormSemantics = () => {
  return `
query NewQuery {
  adminKontaktForme {
    edges {
      node {
        id
        adminStavkeOsnovniTekstoviHr {
          kontaktiBazaTekstovaHr {
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
            tekstoviStavkiUKontaktima {
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              checkmarkBonusPolje
              datepicker1 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              datepicker2 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
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
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              telefonErrorMessage
              telefonNazivStavke
              telefonPlaceholderTekst
              temaErrorMessage
              temaNazivStavke
              temaPlaceholderTekst
              uploadDokumenataNazivStavke
              uploadDokumenataPlaceholderTekst
              uvjetiCheckmark
              uvjetiCheckmarkCopy
              uvodniTekstUOdabir
            }
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
          }
        }
      }
    }
  }
}
  `;
};
