export const getBazaTekstaPodstranice1ModulQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      modulBazeTekstovaHr {
        nadnaslovPodnaslovBazaTekstovaHr
        naslovBazaTekstovaHr
        tekstBazaTekstovaHr
      }
      seoHr {
        ogImageHr {
          node {
            sourceUrl
            srcSet
          }
        }
      seoTagoviHr
      seoTekstHr
      }
    `,
    ger: `
      modulBazeTekstovaGer {
        nadnaslovPodnaslovBazaTekstovaGer
        naslovBazaTekstovaGer
        tekstBazaTekstovaGer
      }
      seoGer {
        ogImageGer {
          node {
            sourceUrl
            srcSet
          }
        }
      seoTagoviGer
      seoTekstGer
      }
    `,
    eng: `
      modulBazeTekstovaEng {
        nadnaslovPodnaslovBazaTekstovaEng
        naslovBazaTekstovaEng
        tekstBazaTekstovaEng
      }
      seoEng {
        ogImageEng {
          node {
            sourceUrl
            srcSet
          }
        }
      seoTagoviEng
      seoTekstEng
      }
    `,
    ita: `
      modulBazeTekstovaIta {
        nadnaslovPodnaslovBazaTekstovaIta
        naslovBazaTekstovaIta
        tekstBazaTekstovaIta
      }
      seoIta {
        ogImageIta {
          node {
            sourceUrl
            srcSet
          }
        }
      seoTagoviIta
      seoTekstIta
      }
    `,
  };

  return `
    query NewQuery {
      allBazaTekstaPodstranice1Modul {
        edges {
          node {
            modulBazeTekstovaUvod {
              slika1 {
                node {
                  sourceUrl
                  srcSet
                }
              }
              slika2 {
                node {
                  sourceUrl
                  srcSet
                }
              }
              statusPrikazaTekstaZaPodstranicu
            }
            ${languageFieldsMap[lang] || ''}
           photoGallery {
            fotogalerija {
            ${generatePhotoGalleryFields()}
            }
    }
          }

        }
      }
    }
  `;
};

function generatePhotoGalleryFields() {
  let fields = '';
  for (let i = 1; i <= 10; i++) {
    fields += `
      galSlika${String(i).padStart(2, '0')} {
        node {
          sourceUrl
          srcSet
        }
      }
    `;
  }
  return fields;
}
