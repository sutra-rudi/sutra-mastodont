export const getAllNewsQuery = (lang: string) => {
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
    `,
  };

  return `
    query NewQuery {
      allNovosti {
        edges {
          node {
            id
            photoGallery {
              fotogalerija {
                galSlika01 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika02 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika03 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika04 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika05 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika06 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika07 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika08 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika09 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                galSlika10 {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
              }
            }
            ${languageFieldsMap[lang] || ''}
            introNews {
              datum
              istaknutoNaNaslovnici
              kategorija {
                edges {
                  node {
                    id
                    ... on Category {
                      id
                      name
                    }
                  }
                }
              }
              naslovnaSlika {
                node {
                  sourceUrl
                  srcSet
                }
              }
              thumbnail {
                node {
                  srcSet
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `;
};
