export const getAllIskustvaKlijenataQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      testimonialsHr {
        pozicijaUkolikoPostojiHr
        tekstTestimonialaHr
      }
    `,
    eng: `
      testimonialsEng {
        pozicijaUkolikoPostojiEng
        tekstTestimonialaEng
      }
    `,
    ita: `
      testimonialsIta {
        pozicijaUkolikoPostojiIta
        tekstTestimonialaIta
      }
    `,
    ger: `
      testimonialsGer {
        pozicijaUkolikoPostojiGer
        tekstTestimonialaGer
      }
    `,
  };

  return `
    query NewQuery {
      allIskustvaKlijenata {
        edges {
          node {
            id
            iskustvaklijenataUvod {
              imeKlijentaTestimonials
              imeTvrtkeZemljaTestimonials
              ocijenaIliBrojZvjezdicaTestimonials
              prikaziDodatneOpcijeVideoLogoLinkYoutube
              vanjskaPoveznicaTestimonials
              vanjskiLinkNaVideoYoutube
              logotipTestimonials {
                node {
                  id
                  sourceUrl
                  srcSet
                }
              }
              uploadVideo {
                node {
                  id
                  mediaType
                  mediaItemUrl
                }
              }
              prilozenaSlikaTestimonials {
                node {
                  id
                  srcSet
                  sourceUrl
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
