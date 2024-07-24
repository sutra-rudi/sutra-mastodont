export const getSingleBlogQuery = (id: string, lang: string) => {
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
            mediaType
            mediaItemUrl
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
            mediaType
            mediaItemUrl
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
            mediaType
            mediaItemUrl
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
            mediaType
            mediaItemUrl
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
      blog(id: "${id}") {
        introBlog {
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
          thumbnail {
                node {
                  srcSet
                  sourceUrl
                }
            }
        }
       author {
          node {
            avatar {
              url
            }
            firstName
            name
            nickname
            lastName
            nicename
            username
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
