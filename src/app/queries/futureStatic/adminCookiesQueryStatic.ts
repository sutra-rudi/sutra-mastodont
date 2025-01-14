export default function adminCookiesQuery() {
  return `query AdminCookies404Footer {
  allAdminTekstoviCookies404Footer {
    edges {
      node {
        id
        title
        adminCookiesFooterNewsletterHr {
          osnovniTekstoviWebaHr {
            cookieBazaTekstova {
              cookieDugoCTAPrihvatiSve
              cookieDugoCtaPrihvatiSamoNuzne
              cookieDugoNapomena
              cookieDugoNaslov
              cookieDugoTekst
              cookieKratkoCta
              cookieKratkoCtaCopy
              cookieKratkoNaslov
              cookieKratkoTekst
            }
            footerBazaTekstova {
              bonusPoljeTeksta
              fOOTERInfoTekstKojiSeIspisujeUDnuStranice
            }
            maintenanceStranicaPrivremenoOdrzavanje {
              naslov
              tekst
            }
            newsletterBazaTekstova {
              naslovNewslettera
              newsletterUvodnaPoruka
              newsletterZahvalaNaPretplati
            }
            stranicaZaPretraguNoResults {
              naslov
              tekst
            }
            thankYouStraniceZahvala {
              tekst
            }
          }
        }
        adminCookiesFooterNewsletterEng {
          osnovniTekstoviWebaEng {
            cookieBazaTekstova {
              cookieDugoCTAPrihvatiSve
              cookieDugoCtaPrihvatiSamoNuzne
              cookieDugoNapomena
              cookieDugoNaslov
              cookieDugoTekst
              cookieKratkoCta
              cookieKratkoNaslov
              cookieKratkoTekst
            }
            footerBazaTekstova {
              bonusPoljeTeksta
              fOOTERInfoTekstKojiSeIspisujeUDnuStranice
            }
            maintenanceStranicaPrivremenoOdrzavanje {
              naslov
              tekst
            }
            newsletterBazaTekstova {
              naslovNewslettera
              newsletterUvodnaPoruka
              newsletterZahvalaNaPretplati
            }
            thankYouStraniceZahvala {
              tekst
            }
            stranicaZaPretraguNoResults {
              naslov
              tekst
            }
          }
        }
      }
    }
  }
}`;
}
