export const getSingleNewsQuery = (id: string, lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      sadrzajHrFields {
        kratkiUvodniTekstSadrzajHr
        naslovSadrzajHr
        sadrzajSadrzajHr
      }
      seoHr {
        seoTagoviHr
        seoTekstHr
        ogImageHr {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      docsUploadHr {
        hr {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaHr
      }
      tagsHr {
        tagTextHr
      }
    `,
    eng: `
      sadrzajEngFields {
        kratkiUvodniTekstSadrzajEng
        naslovSadrzajSadrzajEng
        sadrzajSadrzajEng
      }
      seoEng {
        seoTagoviEng
        seoTekstEng
        ogImageEng {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      docsUploadEng {
        eng {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaEng
      }
      tagsEng {
        tagTextEng
      }
    `,
    ger: `
      sadrzajGerFields {
        kratkiUvodniTekstSadrzajGer
        naslovSadrzajGer
        sadrzajSadrzajGer
      }
      seoGer {
        seoTagoviGer
        seoTekstGer
        ogImageGer {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      docsUploadGer {
        ger {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaGer
      }
      tagsGer {
        tagTextGer
      }
    `,
    ita: `
      sadrzajItaFields {
        kratkiUvodniTekstSadrzajIta
        naslovSadrzajIta
        sadrzajSadrzajIta
      }
      seoIta {
        seoTagoviIta
        seoTekstIta
        ogImageIta {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      docsUploadIta {
        ita {
          node {
            mediaItemUrl
            mediaType
          }
        }
        nazivDokumentaIta
      }
      tagsIta {
        tagTextIta
      }
    `,
  };

  return `
    query NewQuery {
      novosti(id: "${id}") {
        introNews {
          datum
          kategorija {
            edges {
              node {
                id
                ... on Category {
                  id
                  name
                    informacijeKategorije {
                    bojaKategorije
                    imeKategorijeEng
                    imeKategorijeGer
                    imeKategorijeHr
                    imeKategorijeIta
                    opisKategorijeEng
                    opisKategorijeGer
                    opisKategorijeHr
                    opisKategorijeIta
                  }
                }
              }
            }
          }
          naslovnaSlika {
            node {
              id
              sourceUrl
              srcSet
            }
          }
        }

       author {
          node {
            avatar {
              url
            }
            firstName
            lastName
            name
            nicename
            nickname
          }
        }
        ${languageFieldsMap[lang] || ''}
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika02 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika03 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika04 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika05 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika06 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika07 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika08 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika09 {
              node {
                sourceUrl
                srcSet
              }
            }
            galSlika10 {
              node {
                sourceUrl
                srcSet
              }
            }
          }
        }
      }
    }
  `;
};
