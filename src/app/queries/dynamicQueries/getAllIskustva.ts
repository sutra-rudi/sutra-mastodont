export default function getIskustvaKlijenata() {
  return `query iskustvaKlijenata {
 allIskustvaKlijenata {
    edges {
      node {
        id
        title
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
        testimonialsHr {
          pozicijaUkolikoPostojiHr
          tekstTestimonialaHr
        }
        testimonialsEng {
          pozicijaUkolikoPostojiEng
          tekstTestimonialaEng
        }
        testimonialsGer {
          pozicijaUkolikoPostojiGer
          tekstTestimonialaGer
        }
        testimonialsIta {
          pozicijaUkolikoPostojiIta
          tekstTestimonialaIta
        }
        testimonialsFra {
          pozicijaUkolikoPostojiFra
          tekstTestimonialaFra
        }
        testimonialsEsp {
          pozicijaUkolikoPostojiEsp
          tekstTestimonialaEsp
        }
      }
    }
  }
}`;
}

export function IskustvaFragment() {
  return `allIskustvaKlijenata {
    edges {
      node {
        id
        title
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
        testimonialsHr {
          pozicijaUkolikoPostojiHr
          tekstTestimonialaHr
        }
        testimonialsEng {
          pozicijaUkolikoPostojiEng
          tekstTestimonialaEng
        }
        testimonialsGer {
          pozicijaUkolikoPostojiGer
          tekstTestimonialaGer
        }
        testimonialsIta {
          pozicijaUkolikoPostojiIta
          tekstTestimonialaIta
        }
        testimonialsFra {
          pozicijaUkolikoPostojiFra
          tekstTestimonialaFra
        }
        testimonialsEsp {
          pozicijaUkolikoPostojiEsp
          tekstTestimonialaEsp
        }
      }
    }
  }`;
}
