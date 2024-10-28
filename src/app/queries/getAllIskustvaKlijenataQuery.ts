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
    ger: `
      testimonialsGer {
        pozicijaUkolikoPostojiGer
        tekstTestimonialaGer
      }
    `,
    ita: `
      testimonialsIta {
        pozicijaUkolikoPostojiIta
        tekstTestimonialaIta
      }
    `,
  };

  return `query newQuery {
    allIskustvaKlijenata {
      edges {
        node {
          id
          iskustvaklijenataUvod {
            datumTestimoniala
            imeKlijentaTestimonials
            imeTvrtkeTestimonials
            izvorRecenzije
            ocijenaIliBrojZvjezdicaTestimonials
            prikaziDodatneOpcijeVideoLogoLinkYoutube
            vanjskaPoveznicaTestimonials
            vanjskiLinkNaVideoYoutube
            prilozenaSlikaTestimonials {
              node {
                id
                sourceUrl
              }
            }
            uploadVideo {
              node {
                id
                mediaItemUrl
              }
            }
            logotipIliSlikaOsobe {
              node {
                id
                sourceUrl
              }
            }
            kategorijaNaKojuSeOdnosiTestimonial {
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
          }
          ${languageFieldsMap[lang] || ''}
        }
      }
    }
  }`;
};
