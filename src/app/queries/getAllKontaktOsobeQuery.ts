export const getKontaktiOsobeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      imePrezimePozicijaDodatnogKontaktaHr {
        bonusLinkTekstHr
        pozicijaDodatnogKontaktaHr
        sektorDodatniKontaktiHr
      }
    `,
    eng: `
      imePrezimePozicijaDodatnogKontaktaEng {
        bonusLinkTekstEng
        pozicijaDodatnogKontaktaEng
        sektorDodatniKontaktiEng
      }
    `,
    ger: `
      imePrezimePozicijaDodatnogKontaktaGer {
        bonusLinkTekstGer
        pozicijaDodatnogKontaktaGer
        sektorDodatniKontaktiGer
      }
    `,
    ita: `
      imePrezimePozicijaDodatnogKontaktaIta {
        bonusLinkTekstIta
        pozicijaDodatnogKontaktaIta
        sektorDodatniKontaktiIta
      }
    `,
  };

  return `
    query NewQuery {
      kontaktiOsobe {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            kontaktiDodatniEmailKontakti {
              slikaDodatniDodatniKontakti {
                node {
                  sourceUrl
                  srcSet
                }
              }
              slikaDodatniKontaktOsobe {
                node {
                  sourceUrl
                  srcSet
                }
              }
              slikaKontaktOsobeHover {
                node {
                  sourceUrl
                  srcSet
                }
              }
              vcardKontaktOsobe
              titulaKontaktOsobe
              telefonPrikazNaStraniciKontaktOsobe
              telefonLinkKontaktOsobe
              socialSwitcher
              emailKontaktOsobe
              imeKontaktOsobe
              mobitelLinkKontaktOsobe
              mobitelPrikazNaStraniciKontaktOsobe
              prezimeKontaktOsobe
              linkedinKontaktOsobe
              instagramKontaktOsobe
              facebookKontaktOsobe
              discordKontaktOsobe
              bonusPoljeKontaktOsobe
              viberKontaktOsobe
              whatsappKontaktOsobe
              xKontaktOsobe
              youtubeKontaktOsobe
            }
          }
        }
      }
    }
  `;
};
