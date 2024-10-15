export const getKontaktiOsobeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      imePrezimePozicijaDodatnogKontaktaHr {
        bonusLinkTekstHr
        pozicijaDodatnogKontaktaHr
        sektorDodatniKontaktiHr
      }
      statusAtivacijePoJezicima {
        aktivatorHr
      }
    `,
    eng: `
      imePrezimePozicijaDodatnogKontaktaEng {
        bonusLinkTekstEng
        pozicijaDodatnogKontaktaEng
        sektorDodatniKontaktiEng
      }
      statusAtivacijePoJezicima {
        aktivatorEng
      }
    `,
    ger: `
      imePrezimePozicijaDodatnogKontaktaGer {
        bonusLinkTekstGer
        pozicijaDodatnogKontaktaGer
        sektorDodatniKontaktiGer
      }
      statusAtivacijePoJezicima {
        aktivatorGer
      }
    `,
    ita: `
      imePrezimePozicijaDodatnogKontaktaIta {
        bonusLinkTekstIta
        pozicijaDodatnogKontaktaIta
        sektorDodatniKontaktiIta
      }
      statusAtivacijePoJezicima {
        aktivatorIta
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
              slikaDodatniKontaktOsobe {
                node {
                  sourceUrl
                }
              }
              slikaKontaktOsobeHover {
                node {
                  sourceUrl
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
