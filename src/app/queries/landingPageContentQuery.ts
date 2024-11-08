export const naslovnaQuery = (lang: string) => {
  const languageFieldsMapHero: Record<string, string> = {
    hr: `
      tekstHeroHr {
        aktivirajDodatniSlide2Hr
        aktivirajDodatniSlide3Hr
        aktivirajDodatniSlide4Hr
        slide1Hero {
          tekst
          naslov
          nadnaslov
        }
        slide2Hero {
          tekst
          naslov
        }
        slide3Hero {
          naslov
          tekst
        }
        slide4Hero {
          tekst
          naslov
        }
      }
    `,
    eng: `
      tekstHeroEng {
        aktivirajDodatniSlide2Eng
        aktivirajDodatniSlide3Eng
        aktivirajDodatniSlide4Eng
        slide1HeroEng {
          naslov
          tekst
          nadnaslov
        }
        slide2HeroEng {
          naslov
          tekst
        }
        slide3HeroEng {
          naslov
          tekst
        }
        slide4HeroEng {
          naslov
          tekst
        }
      }
    `,
    ger: `
      tekstHeroGer {
        aktivirajDodatniSlide2Ger
        aktivirajDodatniSlide3Ger
        aktivirajDodatniSlide4Ger
        slide1HeroGer {
          tekst
          naslov
          nadnaslov
        }
        slide2HeroGer {
          tekst
          naslov
        }
        slide3HeroGer {
          tekst
          naslov
        }
        slide4HeroGer {
          tekst
          naslov
        }
      }
    `,
    ita: `
      tekstHeroIta {
        aktivirajDodatniSlide2Ita
        aktivirajDodatniSlide3Ita
        aktivirajDodatniSlide4Ita
        slide1HeroIta {
          tekst
          naslov
          nadnaslov
        }
        slide2HeroIta {
          tekst
          naslov
        }
        slide3HeroIta {
          naslov
          tekst
        }
        slide4HeroIta {
          tekst
          naslov
        }
      }
    `,
  };

  const languageFieldsMapBlogs: Record<string, string> = {
    hr: `
      sadrzajHrFields {
        kratkiUvodniTekstSadrzajHr
        naslovSadrzajHr
        sadrzajSadrzajHr
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
      tagsIta {
        tagTextIta
      }
    `,
  };

  const languageFieldsMapBrojcanici: Record<string, string> = {
    hr: `
      metricsHr {
        companyInNumbersHr {
          prikaziDodatneOpcijeSwitcher
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
    eng: `
      metricsEng {
        companyInNumbersEng {
          prikaziDodatneOpcije
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
    ger: `
      metricsGer {
        companyInNumbersGer {
          prikaziDodatneOpcijeSwitcher
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
    ita: `
      metricsIta {
        companyInNumbersIta {
          prikaziDodatneOpcijeSwitcher
          tekstBrojcanikaGlavni
          tekstBrojcanikaSekundarniTekst
          znakIliNatpisUzBroj
        }
      }
    `,
  };

  const languageFieldsMapIskustvaKlijenata: Record<string, string> = {
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

  const commonFieldsBrojcanici = `
    brojcanikCompanyInNumbersUvod {
      brojcaniciUvod {
        slikaPngSvg {
          node {
            sourceUrl
          }
        }
        znakIliNatpisUzBroj
        broj
        pozicijaUNizuUBrojcaniku
        prikaziDodatneOpcijeSlikaIkona
        reactIconsImportCode
      }
    }
  `;

  const languageFieldsMapDokumenti: Record<string, string> = {
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

  const languageFieldsMapCategories: Record<string, string> = {
    hr: `
      imeKategorijeHr
      opisKategorijeHr
    `,
    eng: `
      imeKategorijeEng
      opisKategorijeEng
    `,
    ger: `
      imeKategorijeGer
      opisKategorijeGer
    `,
    ita: `
      imeKategorijeIta
      opisKategorijeIta
    `,
  };

  const languageFieldsMapTags: Record<string, string> = {
    hr: `
      imeKategorijeHr
      opisKategorijeHr
    `,
    eng: `
      imeKategorijeEng
      opisKategorijeEng
    `,
    ger: `
      imeKategorijeGer
      opisKategorijeGer
    `,
    ita: `
      imeKategorijeIta
      opisKategorijeIta
    `,
  };

  const languageFieldsMapObavijesti: Record<string, string> = {
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
    query NaslovnaQuery {
      allHeroSekcija {
        edges {
          node {
            id
            ${languageFieldsMapHero[lang] || ''}
          }
        }
      }

      allBlog {
        edges {
          node {
            id
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
        }
            ${languageFieldsMapBlogs[lang] || ''}
            introBlog {
              datum
              istaknutoNaNaslovnici
              statusBloga
          tag {
            edges {
              node {
                id
                name
              }
            }
          }
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
          }
        }
      }

      allBrojcanici {
        edges {
          node {
            id
            ${commonFieldsBrojcanici}
            ${languageFieldsMapBrojcanici[lang] || ''}
          }
        }
      }

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
            ${languageFieldsMapIskustvaKlijenata[lang] || ''}
          }
        }
      }

      logotipiPartneraKlijenata {
        edges {
          node {
            id
            logotipiPartnera {
              logoPNG {
                node {
                  sourceUrl
                  srcSet
                  sizes
                }
              }
              linkNaStranicuKlijentapartnera
              naziv
              prikaziNaNaslovnici
            }
          }
        }
      }

      dokumentikatalozi {
        edges {
          node {
            id
            ${languageFieldsMapDokumenti[lang] || ''}
          }
        }
      }

      categories {
        edges {
          node {
            informacijeKategorije {
              bojaKategorije
              ${languageFieldsMapCategories[lang] || ''}
            }
          }
        }
      }

      tags {
        edges {
          node {
            id
            informacijeKategorije {
              bojaKategorije
              ${languageFieldsMapTags[lang] || ''}
            }
            name
          }
        }
      }

      adminSetupArea {
        edges {
          node {
            adminGlobalniSelektorCta {
              blogSekcijaCta
              kontaktSekcijaCTA
              kontaktSekcijaButtonCta
              jednostavniRentServisiNprAutoRentBoatRentCta
              jednostavniRentObjektiCta
              novostiSekcijaCTA
              oglasiPosaoSekcijaCta
              newsletterSekcijaCtabutton
              pogledajVideoCTA
              proizvodiSekcijaCTA
              receptiSekcijaCta
              regsitracijaCta
              restoraniRezervacijaCta
              sekcijaCtaCopy
              testimonialsSekcijaCTA
              turistickeZajedniceTuristickaPonuda
              uslugeSekcijaCta
              velikeTvrtke
              googleMapsCta
              fotoGalerijaSekcijaCta
              eventCta
              eventButton
              documentDownloadCTA
              caseStudySekcijaCTA
              agencySekcijaCTA
              aProjektniCta
            }
          }
        }
      }

       allObavijestiNaStranici {
        edges {
          node {
            id
            obavijestiInterventne {
              obavijestiPngSlikaIliIkona {
                node {
                  sourceUrl
                  srcSet
                }
              }
              odabirAkcijskeBoje
              linkNaKojiVodiObavijestOpcionalno
              datumIVrijemeObjave
              datumIVrijemeKrajaObjave
            }
            ${languageFieldsMapObavijesti[lang] || ''}
            statusAtivacijePoJezicima {
              aktivatorEng
              aktivatorGer
              aktivatorHr
              aktivatorIta
            }
          }
        }
      }
    }
  `;
};
