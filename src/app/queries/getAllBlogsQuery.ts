export const getAllBlogsQuery = (lang: string) => {
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
            mediaType
            mediaItemUrl
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
            mediaType
            mediaItemUrl
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
            mediaType
            mediaItemUrl
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
            mediaType
            mediaItemUrl
          }
        }
        nazivDokumentaIta
      }
    `,
  };

  return `
    query NewQuery {
      allBlog {
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
            introBlog {
              datum
              istaknutoNaNaslovnici
              kategorija {
                edges {
                  node {
                    id
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
