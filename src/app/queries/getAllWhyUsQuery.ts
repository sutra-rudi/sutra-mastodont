export const getWhyUsQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      textHr {
        naslovHr
        sadrzajTextHr
      }
    `,
    eng: `
      textEng {
        naslovEng
        sadrzajTextEng
      }
    `,
    ger: `
      textGer {
        naslovGer
        sadrzajTextGer
      }
    `,
    ita: `
      textIta {
        naslovIta
        sadrzajTextIta
      }
    `,
  };

  return `
    query NewQuery {
      allWhyus {
        edges {
          node {
            id
            uvodArgumentiWhyChooseUsKeys {
              brojKeys
              ikonaSlikaKeysReactIkone
              odabirBojeKeysArgumenti
              ikonaSlikaKeys {
                node {
                  sourceUrl
                  srcSet
                }
              }
            }
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};
