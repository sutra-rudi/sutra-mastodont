export const getAllCompanyInfoQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      naslov2textKolumneHr {
        naslov2KolumneHr {
          naslovTekstaSDvijeKolumne
          sadrzajTextDesnaKolumna
          sadrzajTextLijevaKolumna
        }
      }
    `,
    eng: `
      naslov2textKolumneEng {
        naslov2KolumneEng {
          naslovTekstaSDvijeKolumne
          sadrzajTextDesnaKolumna
          sadrzajTextLijevaKolumna
        }
      }
    `,
    ger: `
      naslov2textKolumneGer {
        naslov2KolumneGer {
          naslovTekstaSDvijeKolumne
          sadrzajTextDesnaKolumna
          sadrzajTextLijevaKolumna
        }
      }
    `,
    ita: `
      naslov2textKolumneIta {
        naslov2KolumneIta {
          naslovTekstaSDvijeKolumne
          sadrzajTextDesnaKolumna
          sadrzajTextLijevaKolumna
        }
      }
    `,
  };

  return `
    query NewQuery {
      allInformacijeOTvrtki {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
          }
        }
      }
    }
  `;
};
