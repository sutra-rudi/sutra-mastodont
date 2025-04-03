export default function GIGA_QUERY() {
  return `query rawNaslovna {
  allHeroSekcija {
    edges {
      node {
        id
        title
        tekstHeroHr {
          aktivirajDodatniSlide2Hr
          aktivirajDodatniSlide3Hr
          aktivirajDodatniSlide4Hr
          slide1Hero {
            nadnaslov
            naslov
            tekst
          }
          slide2Hero {
            nadnaslov
            naslov
            tekst
          }
          slide3Hero {
            nadnaslov
            naslov
            tekst
          }
          slide4Hero {
            nadnaslov
            naslov
            tekst
          }
        }
        tekstHeroIta {
          aktivirajDodatniSlide2Ita
          aktivirajDodatniSlide3Ita
          aktivirajDodatniSlide4Ita
          slide1HeroIta {
            nadnaslov
            naslov
            tekst
          }
          slide2HeroIta {
            nadnaslov
            naslov
            tekst
          }
          slide3HeroIta {
            nadnaslov
            naslov
            tekst
          }
          slide4HeroIta {
            nadnaslov
            naslov
            tekst
          }
        }
        tekstHeroEng {
          aktivirajDodatniSlide2Eng
          aktivirajDodatniSlide3Eng
          aktivirajDodatniSlide4Eng
          slide1HeroEng {
            nadnaslov
            naslov
            tekst
          }
          slide2HeroEng {
            nadnaslov
            naslov
            tekst
          }
          slide3HeroEng {
            nadnaslov
            naslov
            tekst
          }
          slide4HeroEng {
            nadnaslov
            naslov
            tekst
          }
        }
        tekstHeroGer {
          aktivirajDodatniSlide2Ger
          aktivirajDodatniSlide3Ger
          aktivirajDodatniSlide4Ger
          slide1HeroGer {
            nadnaslov
            naslov
            tekst
          }
          slide2HeroGer {
            nadnaslov
            naslov
            tekst
          }
          slide3HeroGer {
            nadnaslov
            naslov
            tekst
          }
          slide4HeroGer {
            nadnaslov
            naslov
            tekst
          }
        }
        tekstHeroFra {
          aktivirajDodatniSlide2Fra
          aktivirajDodatniSlide3Fra
          aktivirajDodatniSlide4Fra
          slide1HeroFra {
            nadnaslov
            naslov
            tekst
          }
          slide2HeroFra {
            nadnaslov
            naslov
            tekst
          }
          slide3HeroFra {
            nadnaslov
            naslov
            tekst
          }
          slide4HeroFra {
            nadnaslov
            naslov
            tekst
          }
        }
        tekstHeroEsp {
          aktivirajDodatniSlide2Esp
          aktivirajDodatniSlide3Esp
          aktivirajDodatniSlide4Esp
          slide1HeroEsp {
            nadnaslov
            naslov
            tekst
          }
          slide2HeroEsp {
            nadnaslov
            naslov
            tekst
          }
          slide3HeroEsp {
            nadnaslov
            naslov
            tekst
          }
          slide4HeroEsp {
            nadnaslov
            naslov
            tekst
          }
        }
      }
    }
  }
  allBazaTekstaPodstranice1Modul {
    edges {
      node {
        id
        title
        modulBazeTekstovaUvod {
          statusPrikazaTekstaZaPodstranicu
          slika1 {
            node {
              id
              sourceUrl
            }
          }
          slika2 {
            node {
              id
              sourceUrl
            }
          }
        }
        modulBazeTekstovaHr {
          tekstBazaTekstovaHr
          naslovBazaTekstovaHr
          nadnaslovPodnaslovBazaTekstovaHr
        }
        modulBazeTekstovaEng {
          tekstBazaTekstovaEng
          naslovBazaTekstovaEng
          nadnaslovPodnaslovBazaTekstovaEng
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaSlo {
          nadnaslovPodnaslovBazaTekstovaSlo
          naslovBazaTekstovaSlo
          tekstBazaTekstovaSlo
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  allSlikeGalerijaKarusel {
    edges {
      node {
        id
        title
        photoGallery30pcs {
          galSlika01 {
            node {
              id
              sourceUrl
            }
          }
          galSlika02 {
            node {
              id
              sourceUrl
            }
          }
          galSlika03 {
            node {
              id
              sourceUrl
            }
          }
          galSlika04 {
            node {
              id
              sourceUrl
            }
          }
          galSlika05 {
            node {
              id
              sourceUrl
            }
          }
          galSlika06 {
            node {
              id
              sourceUrl
            }
          }
          galSlika07 {
            node {
              id
              sourceUrl
            }
          }
          galSlika08 {
            node {
              id
              sourceUrl
            }
          }
          galSlika09 {
            node {
              id
              sourceUrl
            }
          }
          galSlika10 {
            node {
              id
              sourceUrl
            }
          }
          galSlika11 {
            node {
              id
              sourceUrl
            }
          }
          galSlika12 {
            node {
              id
              sourceUrl
            }
          }
          galSlika13 {
            node {
              id
              sourceUrl
            }
          }
          galSlika14 {
            node {
              id
              sourceUrl
            }
          }
          galSlika15 {
            node {
              id
              sourceUrl
            }
          }
          galSlika16 {
            node {
              id
              sourceUrl
            }
          }
          galSlika17 {
            node {
              id
              sourceUrl
            }
          }
          galSlika18 {
            node {
              id
              sourceUrl
            }
          }
          galSlika19 {
            node {
              id
              sourceUrl
            }
          }
          galSlika20 {
            node {
              id
              sourceUrl
            }
          }
          galSlika21 {
            node {
              id
              sourceUrl
            }
          }
          galSlika22 {
            node {
              id
              sourceUrl
            }
          }
          galSlika23 {
            node {
              id
              sourceUrl
            }
          }
          galSlika24 {
            node {
              id
              sourceUrl
            }
          }
          galSlika25 {
            node {
              id
              sourceUrl
            }
          }
          galSlika26 {
            node {
              id
              sourceUrl
            }
          }
          galSlika27 {
            node {
              id
              sourceUrl
            }
          }
          galSlika28 {
            node {
              id
              sourceUrl
            }
          }
          galSlika29 {
            node {
              id
              sourceUrl
            }
          }
          galSlika30 {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  allBazaLista {
    edges {
      node {
        id
        title
        listaHr {
          listaSadrzajHr
          listaUvodHr {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaEng {
          listaSadrzajEng
          listaUvodEng {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaIta {
          listaSadrzajIta
          listaUvodIta {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaGer {
          listaSadrzajGer
          listaUvodGer {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaEsp {
          listaSadrzajEsp
          listaUvodEsp {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaFra {
          listaSadrzajFra
          listaUvodFra {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaSlo {
          listaUvodSlo {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajSlo
        }
      }
    }
  }
  allAdminMaps {
    edges {
      node {
        title
        adminMapLokacijaIzCmsSustava {
          mapsLatitude
          mapsLongitude
          lokacija2
          lokacija3
          lokacija4
          lokacija5
          lokacija6
          imeLokacijeKojaSeIspisujeUMapi
          podaciZaAktiviranuLokaciju2 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
            porukaKojaSeIspisujeZaDodatnuLokaciju
          }
          podaciZaAktiviranuLokaciju3 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
          podaciZaAktiviranuLokaciju4 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
          ikonaIliSlikaNaMapi {
            node {
              id
              sourceUrl
            }
          }
          podaciZaAktiviranuLokaciju5 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
          podaciZaAktiviranuLokaciju6 {
            dodajIkonuIliSliku {
              node {
                id
                sourceUrl
              }
            }
            mapsLatitudeDodatneLokacije
            mapsLongitudeDodatneLokacije
            nazivLokacije
          }
        }
        adminMapsAktivatorSpecijalnihMapboxSkripti {
          addAFullscreenControlToAMap
          addCooperativeGesturesToAMap
          animateMapCameraAroundAPoint
          animateTheCameraAroundAPointWith3dTerrain
        }
        adminMapsField {
          mapboxStylesheetAdminMaps
          mapboxTokenAdminMaps
          mapboxZoomAdminMaps
          nazivMape
        }
        mapsCentarMapeKoordinate {
          bearing
          mapsLatitudeMapCenter
          mapsLongitudeMapCenter
          maxZoomIn
          maxZoomOut
          pitchNagib
          rotationSpeed
        }
      }
    }
  }
  allAdminKontaktForma {
    edges {
      node {
        id
        title
        adminKontaktFormaTekstoviHr {
          kontaktiBazaTekstovaHr {
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
            tekstoviStavkiUKontaktima {
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              checkmarkBonusPolje
              datepicker1 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              datepicker2 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              emailErrorMessage
              emailNazivStavke
              emailPlaceholderTekst
              imeErrorMessage
              imeNazivStavke
              imePlaceholderTekst
              porukaErrorMessage
              porukaNazivStavke
              porukaPlaceholderTekst
              prezimeErrorMessage
              prezimeNazivStavke
              prezimePlaceholderTekst
              telefonErrorMessage
              temaErrorMessage
              telefonPlaceholderTekst
              telefonNazivStavke
              temaNazivStavke
              temaPlaceholderTekst
              uploadDokumenataNazivStavke
              uvjetiCheckmark
              uploadDokumenataPlaceholderTekst
              uvjetiCheckmarkCopy
              uvodniTekstUOdabir
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
            }
          }
        }
        adminKontaktFormaTekstoviEng {
          kontaktiBazaTekstovaEng {
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
            tekstoviStavkiUKontaktima {
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              checkmarkBonusPolje
              datepicker1 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              datepicker2 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              emailErrorMessage
              emailNazivStavke
              emailPlaceholderTekst
              imeErrorMessage
              imeNazivStavke
              imePlaceholderTekst
              porukaErrorMessage
              porukaNazivStavke
              porukaPlaceholderTekst
              prezimeErrorMessage
              prezimeNazivStavke
              prezimePlaceholderTekst
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              telefonErrorMessage
              telefonNazivStavke
              telefonPlaceholderTekst
              temaErrorMessage
              temaNazivStavke
              temaPlaceholderTekst
              uploadDokumenataNazivStavke
              uploadDokumenataPlaceholderTekst
              uvjetiCheckmark
              uvjetiCheckmarkCopy
              uvodniTekstUOdabir
            }
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
          }
        }
        adminKontaktFormaTekstoviGer {
          kontaktiBazaTekstovaGer {
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
            tekstoviStavkiUKontaktima {
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              datepicker1 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              checkmarkBonusPolje
              datepicker2 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              emailErrorMessage
              emailNazivStavke
              emailPlaceholderTekst
              imeErrorMessage
              imeNazivStavke
              porukaNazivStavke
              imePlaceholderTekst
              porukaErrorMessage
              porukaPlaceholderTekst
              prezimeErrorMessage
              prezimeNazivStavke
              prezimePlaceholderTekst
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              telefonErrorMessage
              telefonNazivStavke
              telefonPlaceholderTekst
              temaErrorMessage
              temaNazivStavke
              temaPlaceholderTekst
              uvodniTekstUOdabir
              uvjetiCheckmarkCopy
              uvjetiCheckmark
              uploadDokumenataPlaceholderTekst
              uploadDokumenataNazivStavke
            }
          }
        }
        adminKontaktFormaTekstoviiIta {
          kontaktiBazaTekstovaIta {
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
            tekstoviStavkiUKontaktima {
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              checkmarkBonusPolje
              emailErrorMessage
              emailNazivStavke
              emailPlaceholderTekst
              datepicker1 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              datepicker2 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              imeErrorMessage
              prezimePlaceholderTekst
              prezimeNazivStavke
              prezimeErrorMessage
              porukaPlaceholderTekst
              porukaErrorMessage
              porukaNazivStavke
              imePlaceholderTekst
              imeNazivStavke
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              telefonNazivStavke
              telefonErrorMessage
              telefonPlaceholderTekst
              temaErrorMessage
              temaNazivStavke
              temaPlaceholderTekst
              uploadDokumenataNazivStavke
              uploadDokumenataPlaceholderTekst
              uvjetiCheckmark
              uvjetiCheckmarkCopy
              uvodniTekstUOdabir
            }
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
          }
        }
        adminKontaktFormaTekstoviFra {
          kontaktiBazaTekstovaFra {
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
            tekstoviStavkiUKontaktima {
              checkmarkBonusPolje
              emailErrorMessage
              emailNazivStavke
              emailPlaceholderTekst
              imeErrorMessage
              imeNazivStavke
              imePlaceholderTekst
              porukaErrorMessage
              porukaNazivStavke
              porukaPlaceholderTekst
              prezimeErrorMessage
              prezimeNazivStavke
              prezimePlaceholderTekst
              telefonErrorMessage
              telefonNazivStavke
              telefonPlaceholderTekst
              temaErrorMessage
              temaNazivStavke
              temaPlaceholderTekst
              uploadDokumenataNazivStavke
              uploadDokumenataPlaceholderTekst
              uvjetiCheckmark
              uvjetiCheckmarkCopy
              uvodniTekstUOdabir
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
            }
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
          }
        }
        adminKontaktFormaTekstoviEsp {
          kontaktiBazaTekstovaEsp {
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
            tekstoviStavkiUKontaktima {
              checkmarkBonusPolje
              emailErrorMessage
              emailNazivStavke
              emailPlaceholderTekst
              imeErrorMessage
              imeNazivStavke
              imePlaceholderTekst
              porukaErrorMessage
              porukaNazivStavke
              porukaPlaceholderTekst
              prezimeErrorMessage
              prezimeNazivStavke
              prezimePlaceholderTekst
              telefonErrorMessage
              telefonNazivStavke
              telefonPlaceholderTekst
              temaErrorMessage
              temaNazivStavke
              temaPlaceholderTekst
              uploadDokumenataNazivStavke
              uploadDokumenataPlaceholderTekst
              uvjetiCheckmark
              uvjetiCheckmarkCopy
              uvodniTekstUOdabir
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              datepicker1 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              datepicker2 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
            }
          }
        }
        adminKontaktFormaTekstoviSlo {
          kontaktiBazaTekstovaSlo {
            elementiPorukaNakonSlanjaUpita {
              dogodioSeProblemUSlanjuPoruke
              naslovPorukaupitJeUspjesnoPoslan
              recenicaPorukaJeUspjesnoPoslana
            }
            tekstoviStavkiUKontaktima {
              bonusPoljeUnosaInformacija1 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija2 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija3 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija4 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              bonusPoljeUnosaInformacija5 {
                bonusPoljeUnosaErrorPoruka
                bonusPoljeUnosaNazivStavke
                bonusPoljeUnosaPlaceholder
                status
              }
              checkmarkBonusPolje
              datepicker1 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              datepicker2 {
                datePickerErrorPoruka
                datePickerNazivStavke
                datePickerPlaceholderTekst
              }
              emailNazivStavke
              emailErrorMessage
              emailPlaceholderTekst
              imeErrorMessage
              imeNazivStavke
              imePlaceholderTekst
              porukaErrorMessage
              prezimePlaceholderTekst
              prezimeNazivStavke
              prezimeErrorMessage
              porukaPlaceholderTekst
              porukaNazivStavke
              selektor1 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor2 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor3 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor4 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor5 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              selektor6 {
                odabirErrorPoruka
                odabirNazivStavke
                odabirPopisStavkiKojeSePrikazuju
                odabirVrstaPrikaza
                status
              }
              telefonErrorMessage
              telefonNazivStavke
              temaErrorMessage
              telefonPlaceholderTekst
              temaNazivStavke
              temaPlaceholderTekst
              uploadDokumenataNazivStavke
              uvjetiCheckmark
              uploadDokumenataPlaceholderTekst
              uvjetiCheckmarkCopy
              uvodniTekstUOdabir
            }
            uvodniTekstoviZaKontakteGrupaPolja {
              nadnaslovpodnaslovUKontaktima
              naslovUKontaktima
              uvodniTekstZaKontakte12Recenice
            }
          }
        }
      }
    }
  }
  allFaq {
    edges {
      node {
        id
        title
        faqPojedinacnoDodavanjeHr {
          odgovorFaqHr
          pitanjeFaqHr
        }
        faqPojedinacnoDodavanjeEng {
          odgovorFaqEng
          pitanjeFaqEng
        }
        faqPojedinacnoDodavanjeGer {
          odgovorFaqGer
          pitanjeFaqGer
        }
        faqPojedinacnoDodavanjeIta {
          odgovorFaqIta
          pitanjeFaqIta
        }
        faqPojedinacnoDodavanjeFra {
          odgovorFaqFra
          pitanjeFaqFra
        }
        faqPojedinacnoDodavanjeEsp {
          odgovorFaqEsp
          pitanjeFaqEsp
        }
      }
    }
  }
  allAdminLegalTekstovi {
    edges {
      node {
        id
        title
        modulBazeTekstovaHr {
          nadnaslovPodnaslovBazaTekstovaHr
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
      }
    }
  }
  allAdminBazaLista {
    edges {
      node {
        id
        title
        listaHr {
          listaUvodHr {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajHr
        }
        listaGer {
          listaSadrzajGer
          listaUvodGer {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaFra {
          listaSadrzajFra
          listaUvodFra {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaEsp {
          listaUvodEsp {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajEsp
        }
        listaEng {
          listaUvodEng {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
          listaSadrzajEng
        }
        listaIta {
          listaSadrzajIta
          listaUvodIta {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
        listaSlo {
          listaSadrzajSlo
          listaUvodSlo {
            nadnaslovpodnaslovOpcionalno
            naslov
            uvodnaRecenica
          }
        }
      }
    }
  }
  allSeoAdmin {
    edges {
      node {
        id
        title
        bazniSeoEng {
          bazniSeoTekstoviGlobalniZaStranicuEng {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoEsp {
          bazniSeoTekstoviGlobalniZaStranicuEsp {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoFra {
          bazniSeoTekstoviGlobalniZaStranicuFra {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoGer {
          bazniSeoTekstoviGlobalniZaStranicuGer {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoHr {
          bazniSeoTekstoviGlobalniZaStranicuHr {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoIta {
          bazniSeoTekstoviGlobalniZaStranicuIta {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoSlo {
          bazniSeoTekstoviGlobalniZaStranicuSlo {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
      }
    }
  }
  allAdminSetup {
    edges {
      node {
        id
        title
        adminGlobalniSelektorCta {
          aProjektniCta
          agencySekcijaCTA
          blogSekcijaCta
          caseStudySekcijaCTA
          documentDownloadCTA
          eventButton
          eventCta
          fotoGalerijaSekcijaCta
          googleMapsCta
          jednostavniRentObjektiCta
          jednostavniRentServisiNprAutoRentBoatRentCta
          kontaktSekcijaButtonCta
          kontaktSekcijaCTA
          newsletterSekcijaCtabutton
          oglasiPosaoSekcijaCta
          proizvodiSekcijaCTA
          pogledajVideoCTA
          novostiSekcijaCTA
          velikeTvrtke
          uslugeSekcijaCta
          turistickeZajedniceTuristickaPonuda
          testimonialsSekcijaCTA
          restoraniRezervacijaCta
          regsitracijaCta
          receptiSekcijaCta
          sekcijaCtaCopy
        }
        adminGlobalniSetupLinkovaReactIKodova {
          animatedHamburgerMenuIcon
          notifikacijeReactToastify
          reactLoaderSpinner
          reactLoaderSpinnerCode
          tailwindCssButtons
        }
        websiteAktivatori {
          blogArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
          caseStudyArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
          eventsArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
          mktAgencyPortfolioArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
          newsArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
          proizvodiArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
          uslugeArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
        }
      }
    }
  }
  allAdminTekstoviCookies404Footer {
    edges {
      node {
        id
        title
        adminCookiesFooterNewsletterEng {
          osnovniTekstoviWebaEng {
            cookieBazaTekstova {
              cookieDugoCTAPrihvatiSve
              cookieDugoCtaPrihvatiSamoNuzne
              cookieDugoNapomena
              cookieDugoNaslov
              cookieDugoTekst
              cookieKratkoCta
              cookieKratkoNaslov
              cookieKratkoTekst
            }
            dodatneOpcije505Page
            footerBazaTekstova {
              bonusPoljeTeksta
              fOOTERInfoTekstKojiSeIspisujeUDnuStranice
            }
            maintenanceStranicaPrivremenoOdrzavanje {
              naslov
              tekst
            }
            newsletterBazaTekstova {
              naslovNewslettera
              newsletterUvodnaPoruka
              newsletterZahvalaNaPretplati
            }
            stranicaZaPretraguNoResults {
              naslov
              tekst
            }
            thankYouStraniceZahvala {
              tekst
            }
          }
        }
        adminCookiesFooterNewsletterHr {
          osnovniTekstoviWebaHr {
            cookieBazaTekstova {
              cookieDugoCTAPrihvatiSve
              cookieDugoCtaPrihvatiSamoNuzne
              cookieDugoNapomena
              cookieDugoNaslov
              cookieDugoTekst
              cookieKratkoCta
              cookieKratkoNaslov
              cookieKratkoTekst
            }
            dodatneOpcije505Page
            footerBazaTekstova {
              bonusPoljeTeksta
              fOOTERInfoTekstKojiSeIspisujeUDnuStranice
            }
            maintenanceStranicaPrivremenoOdrzavanje {
              naslov
              tekst
            }
            newsletterBazaTekstova {
              naslovNewslettera
              newsletterUvodnaPoruka
              newsletterZahvalaNaPretplati
            }
            stranicaZaPretraguNoResults {
              naslov
              tekst
            }
            thankYouStraniceZahvala {
              tekst
            }
          }
        }
      }
    }
  }
  allAmenetiesSadrzajiPogodnosti {
    edges {
      node {
        id
        title
        amenetiesSadrzajListeHr {
          pogodnostiAmeneties1Do12Hr {
            amenetiesPogodnosti1 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti2 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti3 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti4 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti5 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti6 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti7 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti8 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti9 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti10 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti11 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesPogodnosti12 {
              amenetiesNaslov
              amenetiesSadrzajiText
            }
            amenetiesUvod {
              uvodNaslovHr
              uvodSadrzaj
            }
          }
        }
      }
    }
  }
  allDrustveneMrezeLinkovi {
    edges {
      node {
        id
        title
        povezniceDrustvene {
          behance
          booking
          discord
          dodatneOpcijeSwitcher
          dodatniSwitcher
          dribbble
          dropbox
          eatsy
          expedia
          facebook
          facebookImeProfilaTekstKojiSeIspisuje
          facebookMessenger
          foursquare
          github
          googleDrive
          imeProfilaDrustvene
          instagram
          instagramImeProfilaTekstKojiSeIspisuje
          linkedin
          linkedinImeProfilaTekstKojiSeIspisuje
          pinterest
          reddit
          shopify
          skype
          slack
          snapchat
          spotify
          telegram
          tikTok
          tripadvisor
          tripadvisorImeProfilaTekstKojiSeIspisuje
          trustpilot
          tuiVillas
          tumblr
          twitch
          vimeo
          xTwitter
          xTwitterImeProfilaTekstKojiSeIspisuje
          yelp
          youtube
          youtubeImeProfilaTekstKojiSeIspisuje
          zoom
        }
      }
    }
  }
  allInformacijeOTvrtki {
    edges {
      node {
        id
        title
        naslov2textKolumneEng {
          naslov2KolumneEng {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
        naslov2textKolumneEsp {
          naslov2KolumneEsp {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
        naslov2textKolumneFra {
          naslov2KolumneFra {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
        naslov2textKolumneGer {
          naslov2KolumneGer {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
        naslov2textKolumneHr {
          naslov2KolumneHr {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
        naslov2textKolumneIta {
          naslov2KolumneIta {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
        naslov2textKolumneSlo {
          naslov2KolumneSlo {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
      }
    }
  }
  allKontaktiSektora {
    edges {
      node {
        id
        title
        kontaktNazivSektoraHr {
          nazivSektoraHr
        }
        kontaktNazivSektoraEng {
          nazivSektoraEng
        }
        kontaktNazivSektoraEsp {
          nazivSektoraEsp
        }
        kontaktNazivSektoraFra {
          nazivSektoraFra
        }
        kontaktNazivSektoraGer {
          nazivSektoraGer
        }
        kontaktNazivSektoraIta {
          nazivSektoraIta
        }
        kontaktNazivSektoraSlo {
          nazivSektoraSlo
        }
        kontaktiSektor {
          emailSektor
          faxLinkSektor
          faxPrikazNaStraniciSektor
          mobitelLinkSektor
          mobitelPrikazNaStraniciSektor
          ostaloKontaktZoomTeamsSektor
          prikaziDodatneOpcije
          slackKontaktSektor
          statusSwitcherSektor
          telefonLinkSektor
          telefonPrikazNaStraniciSektor
          slikaSektor {
            node {
              id
              sourceUrl
            }
          }
        }
        statusAtivacijePoJezicima {
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
        }
      }
    }
  }
  allBazaLogotipaCertifikata {
    edges {
      node {
        id
        title
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaHr {
          nadnaslovPodnaslovBazaTekstovaHr
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaSlo {
          nadnaslovPodnaslovBazaTekstovaSlo
          naslovBazaTekstovaSlo
          tekstBazaTekstovaSlo
        }
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
        certifikati {
          nazivCertifikata
          statusPrikazivanjaCertifikata
          vanjskiLinkNaCertifikat
          uploadSlikeCertifkata {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  allONama {
    edges {
      node {
        id
        title
        naslovnaSlika {
          glavnaSlikaNaslovnaSlika {
            node {
              id
              sourceUrl
            }
          }
          sekundarnaGlavnaSlikaThumbnailHover {
            node {
              id
              sourceUrl
            }
          }
        }
        oNamaSadrzajHr {
          pasus2TekstHr
          pasus3TekstHr
          pasus1GrupaTekstovaHr {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaHr {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaHr {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaHr {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaHr {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
        }
        oNamaSadrzajEng {
          pasus1GrupaTekstovaEng {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaEng {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaEng {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaEng {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaEng {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
          pasus2TekstEng
          pasus3TekstEng
        }
        oNamaSadrzajGer {
          pasus1GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaGer {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaGer {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
          pasus3TekstGer
          pasus2TekstGer
        }
        oNamaSadrzajFra {
          pasus2TekstFra
          pasus3TekstFra
          pasus1GrupaTekstovaFra {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaFra {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaFra {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaFra {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
        }
        oNamaSadrzajEsp {
          pasus2TekstEsp
          pasus3TekstEsp
          pasus1GrupaTekstovaEsp {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaEsp {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaEsp {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaEsp {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
        }
        oNamaSadrzajIta {
          pasus2TekstIta
          pasus3TekstIta
          pasus1GrupaTekstovaIta {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1PasusIta
            sadrzaj1
          }
          pasus2GrupaTekstovaIta {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus3GrupaTekstovaIta {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaIta {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaIta {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
        }
        oNamaSadrzajSlo {
          pasus1GrupaTekstovaSlo {
            oNamaNadnaslovPodnaslov1
            oNamaNaslov1Pasus
            sadrzaj1
          }
          pasus2GrupaTekstovaGer {
            oNamaNadnaslovPodnaslov2
            oNamaNaslov2Pasus
            oNamaSadrzaj2
          }
          pasus2TekstSlo
          pasus3TekstSlo
          pasus3GrupaTekstovaSlo {
            oNamaNadnaslovPodnaslov3
            oNamaSadrzaj3
            oNamaSnaslov2
          }
          skraceneVerzijeTekstaTekstaONamaSlo {
            oNamaOpisTvrtkeUJednojReceniciMax200Znakova
            oNamaSkraceniTekstZaNaslovnicuIliFooter
          }
          tekstoviPodstraniceONamaSlo {
            oNamaHeroSekcijaTekstIspodNaslova
            oNamaNaslovHeroSekcija
          }
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  allOkolica {
    edges {
      node {
        id
        title
        atrakcijeUvod {
          glavnaSlikaAtrakcije {
            node {
              sourceUrl
              id
            }
          }
          linkNaGoogleMapsLokaciju
          slikaNaKarticiThumbnail {
            node {
              sourceUrl
              id
            }
          }
          statusAktivator
          vanjskaPoveznicaSaznajVise
        }
        modulBazeTekstovaHr {
          nadnaslovPodnaslovBazaTekstovaHr
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaSlo {
          nadnaslovPodnaslovBazaTekstovaSlo
          naslovBazaTekstovaSlo
          tekstBazaTekstovaSlo
        }
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  allSeoSchemaInfo {
    edges {
      node {
        id
        title
        osnovneInformacijeOWebstraniciNapredniSeo {
          certifikatiIAkreditacijeCertificatesAccreditations {
            certifikat1 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat2 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat3 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat4 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat5 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat6 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
            certifikat7 {
              datumIzdavanja
              nazivCertifikataCertificatenameNazivCertifikataIliAkreditacijeKojiJeTvrtkaDobilaPrimjerIso90012015
              organizacijaKojaJeIzdalaCertifikat
              urlCertifikata
            }
          }
          dodatneInformacijeAdditionalInformation {
            dostupnostPrevoditelja
            dozvole
            events
            podrskaInvaliditetom
            projekti
            specificneNapomene
            vlasniciOwnershipfundinginfo
          }
          financijeIPolitikeFinancePolicies {
            currency
            jamstvoWarrantypromise
            placanje
            politikaPovrata
          }
          kontaktInformacijeContactPoint {
            adresa
            druptveneMrezeLinkoviNaProfil
            email
            fax
            jeziciNaKojimaJeDostupnaUsluga
            porezniBroj
            radnoVrijeme
            telefon
            urlWebStranice
          }
          offerings {
            akcije
            amenityFeature
            cjenovniRaspon
            dostupnost
            product
          }
          opceniteInformacijeOTvrtkiCompanyInformation {
            brendovi
            datumOsnivanja
            jezici
            legalName
            licenca
            nagradePriznanja
            nazivTvrtke
            opisTvrtke
            podrucjaEkspertize
          }
          product
          typeSelector
        }
        seoSchemaSpecijaliziraneStranice {
          carRentServisi {
            detaljiOVozilimaKojaSuDostupnaZaNajam
            mjestoVracanjaVozila
            pickupLocation
            vrijemePreuzimanjaVozila
            vrijemeVracanjaVozila
            vrstaAutomobila
          }
          eCommerceUsluge {
            metodeDostave
            vremenaIsporuke
          }
          fitnessCentar {
            clanarina
            paketi
          }
          hoteliSmjestajniObjekti {
            brojSoba
            kategorijaHotelaapartmana
            pravilaOtkazivanja
          }
          itCompaniesInput {
            integrations
            platforms
            softwareLicense
            softwareType
          }
          kafici {
            vrstaKaveIOstalihPica
          }
          maliObrtnicizanatlije {
            materijaliUKojimaSeRadi
          }
          restorani {
            dijetalneOpcije
            dostupanParking
            jelovnik
            prijemDjece
            rezervacije
            serviranjeAlkohola
            tipKuhinje
          }
          turistickeAgencijeLokalniIzleti {
            bxvcbvxc
            dostupniTermini
            hranaIPice
          }
          turistickeZajednice {
            brojPosjetitelja
            turistickeAtrakcije
          }
          velikeFirme {
            distribucijskaMreza
            industrijskiSektor
            proizvodniKapacitet
          }
          wellnessCentri {
            certifikatiTerapeuta
            paketi
          }
        }
      }
    }
  }
  allTeamMembers {
    edges {
      node {
        id
        title
        meetOurTeamHr {
          meetOurTeamHr {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamEng {
          meetOurTeamEng {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamEsp {
          meetOurTeamEsp {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamFra {
          meetOurTeamFra {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamGer {
          meetOurTeamGer {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamIta {
          meetOurTeamIta {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamSlo {
          meetOurTeamSlo {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamUvod {
          bonusLinkTeam
          emailTeam
          imePrezimeTeam
          instagramTeam
          linkedinTeam
          statusTeam
          xTwitterTeam
          slikaOsobeTeam {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  allWhyUs {
    edges {
      node {
        id
        title
        uvodWhyUs {
          slikaIliIkonaWhyUs {
            node {
              sourceUrl
            }
          }
          linkNaReactIkonuReactIconsgithubio
          odabirBoje
          prikazDodatnihOpcija
          redniBroj
        }
        textHr {
          naslovHr
          sadrzajTextHr
        }
        textEng {
          naslovEng
          sadrzajTextEng
        }
        textEsp {
          naslovEsp
          sadrzajTextEsp
        }
        textFra {
          naslovFra
          sadrzajTextFra
        }
        textGer {
          naslovGer
          sadrzajTextGer
        }
        textIta {
          naslovIta
          sadrzajTextIta
        }
        textSlo {
          naslovSlo
          sadrzajTextSlo
        }
      }
    }
  }
  allAdminUploadVideoEmbed {
    edges {
      node {
        embedFilePlaceholderVideo {
          dodatneOpcijeVideoLinkIframe
          iFrameEmbed
          videoExternalLink
          videoFile {
            node {
              id
              sourceUrl
            }
          }
          videoPlaceholderImage {
            node {
              id
              sourceUrl
            }
          }
        }
        id
        title
      }
    }
  }
  allBazaTekstova2Kolumne {
    edges {
      node {
        id
        title
        modulBazeTekstova2KolumneHr {
          naslovNadnaslov2KolumneTekstaHr {
            kolumneTeksta2 {
              tekstBazaTekstova
              tekstBazaTekstova2kolumna
            }
            naslovIPodnaslovDvaPolja {
              nadnaslovPodnaslovBazaTekstova
              naslovBazaTekstova
            }
          }
        }
        modulBazeTekstova2KolumneEng {
          naslovNadnaslov2KolumneTekstaEng {
            kolumneTeksta2 {
              tekstBazaTekstova
              tekstBazaTekstova2kolumna
            }
            naslovIPodnaslovDvaPolja {
              nadnaslovPodnaslovBazaTekstova
              naslovBazaTekstova
            }
          }
        }
        modulBazeTekstova2KolumneGer {
          naslovNadnaslov2KolumneTekstaGer {
            kolumneTeksta2 {
              tekstBazaTekstova
              tekstBazaTekstova2kolumna
            }
            naslovIPodnaslovDvaPolja {
              nadnaslovPodnaslovBazaTekstova
              naslovBazaTekstova
            }
          }
        }
        modulBazeTekstova2KolumneIta {
          naslovNadnaslov2KolumneTekstaIta {
            kolumneTeksta2 {
              tekstBazaTekstova
              tekstBazaTekstova2kolumna
            }
            naslovIPodnaslovDvaPolja {
              nadnaslovPodnaslovBazaTekstova
              naslovBazaTekstova
            }
          }
        }
        modulBazeTekstova2KolumneEsp {
          naslovNadnaslov2KolumneTekstaEsp {
            kolumneTeksta2 {
              tekstBazaTekstova
              tekstBazaTekstova2kolumna
            }
            naslovIPodnaslovDvaPolja {
              nadnaslovPodnaslovBazaTekstova
              naslovBazaTekstova
            }
          }
        }
        modulBazeTekstova2KolumneFra {
          naslovNadnaslov2KolumneTekstaFra {
            kolumneTeksta2 {
              tekstBazaTekstova
              tekstBazaTekstova2kolumna
            }
            naslovIPodnaslovDvaPolja {
              nadnaslovPodnaslovBazaTekstova
              naslovBazaTekstova
            }
          }
        }
        modulBazeTekstova2KolumneSlo {
          naslovNadnaslov2KolumneTekstaSlo {
            kolumneTeksta2 {
              tekstBazaTekstova
              tekstBazaTekstova2kolumna
            }
            naslovIPodnaslovDvaPolja {
              nadnaslovPodnaslovBazaTekstova
              naslovBazaTekstova
            }
          }
        }
        modulBazeTekstovaUvod {
          statusPrikazaTekstaZaPodstranicu
          slika1 {
            node {
              id
              sourceUrl
            }
          }
          slika2 {
            node {
              id
              sourceUrl
            }
          }
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  allBazaTekstova5Pasusa {
    edges {
      node {
        id
        title
        modulBazeTekstovaUvod {
          statusPrikazaTekstaZaPodstranicu
          slika1 {
            node {
              id
              sourceUrl
            }
          }
          slika2 {
            node {
              id
              sourceUrl
            }
          }
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
        sadrzaj5PasusaHr {
          pasus1GrupaTekstovaHr {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus2GrupaTekstovaHr {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus2TekstaHr
          pasus3GrupaTekstovaHr {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaHr {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaHr {
            nadnaslovPodnaslov5
            naslov5
            sadrzaj5
          }
          tekstoviPodstraniceHeroHr {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaEng {
          pasus1GrupaTekstovaEng {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus2GrupaTekstovaEng {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus2TekstaEng
          pasus3GrupaTekstovaEng {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaEng {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaEng {
            nadnaslovPodnaslov5
            naslov5
            sadrzaj5
          }
          tekstoviPodstraniceHeroEng {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaGer {
          pasus1GrupaTekstovaGer {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus2GrupaTekstovaGer {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus2TekstaGer
          pasus3GrupaTekstovaGer {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaGer {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaGer {
            nadnaslovPodnaslov5
            naslov5
            sadrzaj5
          }
          tekstoviPodstraniceHeroGer {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaIta {
          pasus1GrupaTekstovaIta {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus2GrupaTekstovaIta {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus2TekstaIta
          pasus3GrupaTekstovaIta {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaIta {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaIta {
            nadnaslovPodnaslov5
            naslov5
            sadrzaj5
          }
          tekstoviPodstraniceHeroIta {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaFra {
          pasus1GrupaTekstovaFra {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus2GrupaTekstovaFra {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus2TekstaFra
          pasus3GrupaTekstovaFra {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaFra {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaFra {
            nadnaslovPodnaslov5
            naslov5
            sadrzaj5
          }
          tekstoviPodstraniceHeroFra {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaSlo {
          pasus1GrupaTekstovaSlo {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus2GrupaTekstovaSlo {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus2TekstaSlo
          pasus3GrupaTekstovaSlo {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaSlo {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaSlo {
            nadnaslovPodnaslov5
            naslov5
            sadrzaj5
          }
          tekstoviPodstraniceHeroSlo {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
        sadrzaj5PasusaEsp {
          pasus1GrupaTekstovaEsp {
            nadnaslovPodnaslov1
            naslov1
            sadrzaj1
          }
          pasus2GrupaTekstovaEsp {
            nadnaslovPodnaslov2
            naslov2
            sadrzaj2
          }
          pasus2TekstaEsp
          pasus3GrupaTekstovaEsp {
            nadnaslovPodnaslov3
            naslov3
            sadrzaj3
          }
          pasus4GrupaTekstovaEsp {
            nadnaslovPodnaslov4
            naslov4
            sadrzaj4
          }
          pasus5GrupaTekstovaEsp {
            nadnaslovPodnaslov5
            naslov5
            sadrzaj5
          }
          tekstoviPodstraniceHeroEsp {
            heroSekcijaTekstIspodNaslova
            naslovHeroSekcija
          }
        }
      }
    }
  }
  allBrojcanici {
    edges {
      node {
        id
        title
        brojcanikCompanyInNumbersUvod {
          brojcaniciUvod {
            broj
            pozicijaUNizuUBrojcaniku
            prikaziDodatneOpcijeSlikaIkona
            reactIconsImportCode
            znakIliNatpisUzBroj
            slikaPngSvg {
              node {
                id
                sourceUrl
              }
            }
          }
        }
        metricsHr {
          companyInNumbersHr {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsGer {
          companyInNumbersGer {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsFra {
          companyInNumbersFra {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsEsp {
          companyInNumbersEsp {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsEng {
          companyInNumbersEng {
            prikaziDodatneOpcije
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsIta {
          companyInNumbersIta {
            fieldGroupName
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
        metricsSlo {
          companyInNumbersSlo {
            prikaziDodatneOpcijeSwitcher
            tekstBrojcanikaGlavni
            tekstBrojcanikaSekundarniTekst
            znakIliNatpisUzBroj
          }
        }
      }
    }
  }
  allCjenik {
    edges {
      node {
        id
        title
        cjenikHrvatskiJezik {
          cijenikHrvatskiJezik {
            nadnaslov
            naslovHero
            uvodnaRecenicaOpcionalno
            valuta
            stavka1 {
              cijena
              nazivStavke
            }
            stavka2 {
              cijena
              nazivStavke
            }
          }
        }
      }
    }
  }
  allUploadDokumentiKatalozi {
    edges {
      node {
        id
        title
        odabirIkone {
          uploadIkoneSvg {
            node {
              id
              sourceUrl
            }
          }
        }
        docsUploadHr {
          nazivDokumentaHr
          hr {
            node {
              id
              sourceUrl
            }
          }
        }
        docsUploadEng {
          nazivDokumentaEng
          eng {
            node {
              id
              sourceUrl
            }
          }
        }
        docsUploadGer {
          nazivDokumentaGer
          ger {
            node {
              id
              sourceUrl
            }
          }
        }
        docsUploadIta {
          nazivDokumentaIta
          ita {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  allFaqOnePager {
    edges {
      node {
        id
        title
        textHr {
          naslovHr
          sadrzajTextHr
        }
        textEng {
          naslovEng
          sadrzajTextEng
        }
        textEsp {
          naslovEsp
          sadrzajTextEsp
        }
        textFra {
          naslovFra
          sadrzajTextFra
        }
        textGer {
          naslovGer
          sadrzajTextGer
        }
        textIta {
          naslovIta
          sadrzajTextIta
        }
        textSlo {
          naslovSlo
          sadrzajTextSlo
        }
      }
    }
  }
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
          logotipIliSlikaOsobe {
            node {
              id
              sourceUrl
            }
          }
          prilozenaSlikaTestimonials {
            node {
              id
              sourceUrl
            }
          }
          uploadVideo {
            node {
              id
              sourceUrl
            }
          }
        }
        testimonialsEng {
          pozicijaUkolikoPostojiEng
          tekstTestimonialaEng
        }
        testimonialsEsp {
          pozicijaUkolikoPostojiEsp
          tekstTestimonialaEsp
        }
        testimonialsFra {
          pozicijaUkolikoPostojiFra
          tekstTestimonialaFra
        }
        testimonialsGer {
          pozicijaUkolikoPostojiGer
          tekstTestimonialaGer
        }
        testimonialsHr {
          pozicijaUkolikoPostojiHr
          tekstTestimonialaHr
        }
        testimonialsIta {
          pozicijaUkolikoPostojiIta
          tekstTestimonialaIta
        }
        testimonialsSlo {
          pozicijaUkolikoPostojiSlo
          tekstTestimonialaSlo
        }
      }
    }
  }
  allKontakt {
    edges {
      node {
        id
        kontaktPodaci {
          adresa
          dodatneOpcijeSwitcherWhatsappViber
          email
          faxPrikazNaStranici
          googleMapsUputeZaLokaciju
          mobitelLink
          mobitelPrikazNaStranici
          sluzbenoImeTvrtke
          telefonLink
          telefonLinkCopy
          telefonPrikazNaStranici
          viberLink
          viberPrikazNaStranici
          whatsappLink
          whatsappPrikazNaStranici
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  allKontaktiOsoba {
    edges {
      node {
        id
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
        title
        imePrezimePozicijaDodatnogKontaktaEng {
          bonusLinkTekstEng
          pozicijaDodatnogKontaktaEng
          sektorDodatniKontaktiEng
        }
        imePrezimePozicijaDodatnogKontaktaHr {
          bonusLinkTekstHr
          pozicijaDodatnogKontaktaHr
          sektorDodatniKontaktiHr
        }
        imePrezimePozicijaDodatnogKontaktaIta {
          bonusLinkTekstIta
          pozicijaDodatnogKontaktaIta
          sektorDodatniKontaktiIta
        }
        kontaktiDodatniEmailKontakti {
          bonusPoljeKontaktOsobe
          discordKontaktOsobe
          emailKontaktOsobe
          facebookKontaktOsobe
          imeKontaktOsobe
          instagramKontaktOsobe
          linkedinKontaktOsobe
          mobitelLinkKontaktOsobe
          mobitelPrikazNaStraniciKontaktOsobe
          prezimeKontaktOsobe
          slackKontaktOsobe
          socialSwitcher
          telefonLinkKontaktOsobe
          telefonPrikazNaStraniciKontaktOsobe
          titulaKontaktOsobe
          vcardKontaktOsobe
          viberKontaktOsobe
          whatsappKontaktOsobe
          xKontaktOsobe
          youtubeKontaktOsobe
          slikaDodatniKontaktOsobe {
            node {
              id
              sourceUrl
            }
          }
          slikaKontaktOsobeHover {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  allBazaLogotipaKlijenata {
    edges {
      node {
        id
        title
        logotipiPartnera {
          linkNaStranicuKlijentapartnera
          naziv
          prikaziNaNaslovnici
          logoPNG {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  allKontaktiLokacije {
    edges {
      node {
        id
        title
        naslovnaSlika {
          glavnaSlikaNaslovnaSlika {
            node {
              id
              sourceUrl
            }
          }
          sekundarnaGlavnaSlikaThumbnailHover {
            node {
              id
              sourceUrl
            }
          }
        }
        photoGallery {
          fotogalerija {
            galSlika01 {
              node {
                id
                sourceUrl
              }
            }
            galSlika02 {
              node {
                id
                sourceUrl
              }
            }
            galSlika03 {
              node {
                id
                sourceUrl
              }
            }
            galSlika04 {
              node {
                id
                sourceUrl
              }
            }
            galSlika05 {
              node {
                id
                sourceUrl
              }
            }
            galSlika06 {
              node {
                id
                sourceUrl
              }
            }
            galSlika07 {
              node {
                id
                sourceUrl
              }
            }
            galSlika08 {
              node {
                id
                sourceUrl
              }
            }
            galSlika09 {
              node {
                id
                sourceUrl
              }
            }
            galSlika10 {
              node {
                id
                sourceUrl
              }
            }
          }
        }
        radnaVremenaLokacijaOsnovneInformacije {
          adresaLokacije
          emailLokacije
          googleMapsLinkPojedineLokacije
          imeOdgovorneOsobe
          kontaktTelefonLokacije
          kontaktTelefonLokacijeLink
          nazivLokacije
          status
        }
        radnoVrijemeEng {
          textBoxEng
        }
        radnoVrijemeEsp {
          textBoxEsp
        }
        radnoVrijemeFra {
          textBoxFra
        }
        radnoVrijemeGer {
          textBoxGer
        }
        radnoVrijemeHr {
          textBoxHr
        }
        radnoVrijemeIta {
          textBoxIta
        }
        radnoVrijemeSlo {
          textBoxSlo
        }
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
      }
    }
  }
  allPressMediaSekcija {
    edges {
      node {
        id
        title
        statusAtivacijePoJezicima {
          aktivatorEng
          aktivatorGer
          aktivatorHr
          aktivatorIta
          dodatniJezici {
            aktivatorFra
            aktivatorSlo
            aktivatorSpa
          }
        }
        modulBazeTekstovaHr {
          nadnaslovPodnaslovBazaTekstovaHr
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaEsp {
          nadnaslovPodnaslovBazaTekstovaEsp
          naslovBazaTekstovaEsp
          tekstBazaTekstovaEsp
        }
        modulBazeTekstovaFra {
          nadnaslovPodnaslovBazaTekstovaFra
          naslovBazaTekstovaFra
          tekstBazaTekstovaFra
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        modulBazeTekstovaSlo {
          nadnaslovPodnaslovBazaTekstovaSlo
          naslovBazaTekstovaSlo
          tekstBazaTekstovaSlo
        }
      }
    }
  }
  allPortfolioProizvoda {
    edges {
      node {
        id
        proizvodiUvod {
          favorite
          favoriteCopy
          status
          glavnaSlika {
            node {
              id
              sourceUrl
            }
          }
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
          slikaThumbnail {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  allTreningProgram {
    edges {
      node {
        id
        title
        treningProgramPolja {
          brojLjudiUGrupi
          tipTreninga
          trajanjeTreninga
          engleski {
            naslovPrograma
            opisPrograma
          }
          glavnaSlika {
            node {
              id
              sourceUrl
            }
          }
          hrvatski {
            naslovPrograma
            opisPrograma
          }
          thumbnailSlika {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  allPortfolioUsluga {
    edges {
      node {
        id
        uslugeIntro {
          
          istakniUsluguFavorite
          status
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
          radniBrojUsluge
          slikaThumbnailSlikaNaKartici {
            node {
              id
              sourceUrl
            }
          }
          dodatneOpcijeUsluga {
            bojaUsluge
            
            ikonaUsluge {
              node {
                id
                sourceUrl
              }
            }
            sliderSlikeHeroSekcije1 {
              node {
                id
              }
            }
            tAG {
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
            uploadVidea {
              node {
                id
                sourceUrl
              }
            }
          }
          dodatneOpcijeSwitcher
          glavnaSlika {
            node {
              id
              sourceUrl
            }
          }
        }
        uslugeSadrzajHr {
          sadrzajGrupeUslugaHr {
            
            kratakOpisUslugeHr
            nazivUslugeHr
            podnaslovIliUvodnikHr
            sadrzajHr {
              pasus2Switcher
              pasus3Switcher
              pasus4Switcher
              sadrzajPasusa
              sadrzajPasusa2
              sadrzajPasusa3
              sadrzajPasusa4
            }
          }
        }
        uslugeSadrzajEng {
          sadrzajGrupeUslugaEng {
            kratakOpisUsluge180Znakova
            naz
            podnaslovIliUvodnik
            sadrzajEng {
              pasus2Switcher
              pasus3Switcher
              pasus4Switcher
              sadrzajPasusa
              sadrzajPasusa2
              sadrzajPasusa3
              sadrzajPasusa4
            }
          }
        }
      }
    }
  }
}`;
}
