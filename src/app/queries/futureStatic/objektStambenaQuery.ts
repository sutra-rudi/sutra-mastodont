export default function objektStambenaJedinicaQuery() {
  return `query ObjektStambena {
  allObjektStambenaJedinica {
    edges {
      node {
        id
        title
        sadrzajiSobeApartmanaKuceJedinice {
          balkon {
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            namjestajIOpremaZaSjedenjeIOpustanje
            opremaZaOpustanjeIBlagovanje
            zabavaIDodatniSadrzaji
          }
          djecijaSobaIgraonicaUSklopuObjekta {
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            igrackeIOprema
            tehnologija
            sanitarniCvor
            ostaliSadrzaji
            namjestaj
          }
          fitnessProstorUSklopuObjekta {
            dodatniProstori {
              priroda
            }
            dodatniSadrzaji {
              hidratacijaINutritivnaPodrska
              rucniciIHigijena
            }
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            opremaZaVjezbanje {
              kardioOprema
            }
            opremaZaVjezbanjeCopy {
              zvucniSustav
            }
            priroda
            prostoriZaOpustanjeWellness
            zabavaIDodatneAktivnosti
          }
          kinoSoba {
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            namjestajIOpremaZaSjedenjeIOpustanje
            tehnologijaIAvOprema
            ostalo
          }
          kuhinjaUnutarnjaIBlagavanica {
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            namjestaj
            priborIPosudje
            opremaZaPohranu
            uredajiUKuhinji {
              aparatZaKavu
              hladnjaciIUredajiZaHladenje
              ostaliUredaji
              pripremaHraneUredjaji
              kuhanjePecenje
            }
          }
          prostorZaOpustanjeWellnessAreaGrupaUSklopuObjekta {
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            sadrzajWellnessArea
          }
          radnaSoba {
            grijanjeIKlimatizacija
            namjestajIOprema
            tehnologijaIPovezivost
            multimedija {
              igraceKonzole
              tvUredaji
              videoaudioUredaji
            }
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            dodatniSadrzaji
          }
          sobaZaRublje {
            osnovnaOprema
            ostalo
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
          }
          spavacaSoba1 {
            odabirTipaKreveta {
              bracniKrevetSelektor
              djecjiKrevetSelektor
              jastuciIzborJastukaSelektor
              krevetZaJednuOsobuSelektor
              pomocniLezaj
              spojeniKrevetiSelektor
              superKingSizeKrevet
            }
            pogledIzSpavaceSobe {
              priroda
            }
            namjestajIOprema
            ostalo
            krevet {
              djecjiKrevet
              bracniKrevetOdabir
              izborJastukaOdabir
              krevetZaJednuOsobu
              pomocniLezajKrevet
              spojeniKrevetOdabir
              superKingSizeKrevet
              vrtsaMadraca
            }
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
          }
          spavacaSoba2 {
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            krevet {
              bracniKrevetOdabir
              djecjiKrevet
              izborJastukaOdabir
              krevetZaJednuOsobu
              pomocniLezajKrevet
              spojeniKrevetOdabir
              superKingSizeKrevet
              vrtsaMadraca
            }
            kupaonicaUSpavacojSobi
            medijiITehnologijaUSpavacojSobi {
              videoaudioUredaji
              tvUredaji
              igraceKonzole
            }
            namjestajIOprema
            odabirTipaKreveta {
              bracniKrevetSelektor
              djecjiKrevetSelektor
              jastuciIzborJastukaSelektor
              krevetZaJednuOsobuSelektor
              pomocniLezaj
              spojeniKrevetiSelektor
              superKingSizeKrevet
            }
            pogledIzSpavaceSobe {
              priroda
            }
            ostalo
          }
          spavacaSoba4 {
            pogledIzSpavaceSobe {
              priroda
            }
            ostalo
            odabirTipaKreveta {
              bracniKrevetSelektor
              djecjiKrevetSelektor
              jastuciIzborJastukaSelektor
              krevetZaJednuOsobuSelektor
              pomocniLezaj
              spojeniKrevetiSelektor
              superKingSizeKrevet
            }
            namjestajIOprema
            medijiITehnologijaUSpavacojSobi {
              videoaudioUredaji
              tvUredaji
              igraceKonzole
            }
            krevet {
              vrtsaMadraca
              superKingSizeKrevet
              spojeniKrevetOdabir
              pomocniLezajKrevet
              krevetZaJednuOsobu
              izborJastukaOdabir
              djecjiKrevet
              bracniKrevetOdabir
            }
            kupaonicaUSpavacojSobi
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
          }
          spavacaSoba3 {
            ostalo
            pogledIzSpavaceSobe {
              fieldGroupName
            }
            odabirTipaKreveta {
              bracniKrevetSelektor
              djecjiKrevetSelektor
              jastuciIzborJastukaSelektor
              krevetZaJednuOsobuSelektor
              pomocniLezaj
              spojeniKrevetiSelektor
              superKingSizeKrevet
            }
            namjestajIOprema
            medijiITehnologijaUSpavacojSobi {
              tvUredaji
              videoaudioUredaji
              igraceKonzole
            }
            kupaonicaUSpavacojSobi
            krevet {
              izborJastukaOdabir
              spojeniKrevetOdabir
              superKingSizeKrevet
              vrtsaMadraca
              pomocniLezajKrevet
              krevetZaJednuOsobu
              djecjiKrevet
              bracniKrevetOdabir
            }
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
          }
          zajednickiToaletZaGoste {
            grijanje
            dodatniSadrzajiKupaonice
            oprema
            osnovniSadrzajiKupaonice
            toaletniPribor
          }
          zajednickaKupaonica {
            dodatniSadrzajiKupaonice
            grijanje
            oprema
            osnovniSadrzajiKupaonice
            toaletniPribor
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
          }
          terasaApartmanaKataKuce {
            ekoloskeZnacajke
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            namjestajIOprema
            pogodnosti
            sigurnost
            vanjskaKuhinjaNaTerasi
            zabavaIDodatniSadrzaji
          }
          stambeniSadrzajiObjektaSelektor {
            balkonSelektor
            dnevniBoravak
            fieldGroupName
            fitnessSobaSelektor
            kinoSoba
            praonica
            radnaSoba
            sobaZaZabavuSelektor
            terasa
            terasaSelektor
            toaletZaGoste
            unutarnjaKuhinjaBlagavaonica
            wellnesSobaSelektor
            zajednickaKupaonica
            brojSpavacihSoba
            brojDjecijihSoba
          }
          sobaZaZabavu {
            dodatno
            fotogalerija {
              slika1 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika2 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika3 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika4 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika5 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika6 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika7 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika8 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
              slika9 {
                node {
                  id
                  srcSet
                  sourceUrl
                }
              }
            }
            namjestajIOprema
            tehnologija
            igreIAktivnosti
          }
        }
        objektImeApartmanaStambeneJediniceEng {
          imeStambeneJedinice
        }
        objektImeApartmanaStambeneJediniceGer {
          imeStambeneJedinice
        }
        objektImeApartmanaStambeneJediniceHr {
          imeStambeneJedinice
        }
        objektImeApartmanaStambeneJediniceIta {
          imeStambeneJedinice
        }
      }
    }
  }
}`;
}
