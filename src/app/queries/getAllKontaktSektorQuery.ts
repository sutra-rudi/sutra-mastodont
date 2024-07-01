export const getKontaktiSektorQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      kontaktNazivSektoraHr {
        nazivSektoraHr
      }
    `,
    eng: `
      kontaktNazivSektoraEng {
        nazivSektoraEng
      }
    `,
    ger: `
      kontaktNazivSektoraGer {
        nazivSektoraGer
      }
    `,
    ita: `
      kontaktNazivSektoraIta {
        nazivSektoraIta
      }
    `,
  };

  const aktivatorFieldMap: Record<string, string> = {
    hr: 'aktivatorHr',
    eng: 'aktivatorEng',
    ger: 'aktivatorGer',
    ita: 'aktivatorIta',
  };

  return `
    query NewQuery {
      kontaktiSektor {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
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
            statusAtivacijePoJezicima {
              ${aktivatorFieldMap[lang] || ''}
            }
          }
        }
      }
    }
  `;
};
