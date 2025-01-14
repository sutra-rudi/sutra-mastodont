export default function informacijeOTvrtkiQuery() {
  return `query InformacijeOTvrtki {
  allInformacijeOTvrtki {
    edges {
      node {
        id
        title
        naslov2textKolumneHr {
          naslov2KolumneHr {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
        naslov2textKolumneEng {
          naslov2KolumneEng {
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
        naslov2textKolumneIta {
          naslov2KolumneIta {
            naslovTekstaSDvijeKolumne
            sadrzajTextDesnaKolumna
            sadrzajTextLijevaKolumna
          }
        }
      }
    }
  }
}`;
}
