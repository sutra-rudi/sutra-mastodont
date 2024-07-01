export const getDokumentikataloziQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      docsUploadHr {
        hr {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaHr
      }
    `,
    eng: `
      docsUploadEng {
        eng {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaEng
      }
    `,
    ger: `
      docsUploadGer {
        ger {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaGer
      }
    `,
    ita: `
      docsUploadIta {
        ita {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaIta
      }
    `,
  };

  return `
    query NewQuery {
      dokumentikatalozi {
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
