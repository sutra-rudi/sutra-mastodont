export const getHeroSlideStatusQuery = (lang: string) => `
  query GetHeroSlideStatus {
    allHeroSekcija {
      edges {
        node {
          id
          ${
            lang === 'hr'
              ? `
            tekstHeroHr {
              aktivirajDodatniSlide2Hr
              aktivirajDodatniSlide3Hr
              aktivirajDodatniSlide4Hr
            }`
              : ''
          }
          ${
            lang === 'eng'
              ? `
            tekstHeroEng {
              aktivirajDodatniSlide2Eng
              aktivirajDodatniSlide3Eng
              aktivirajDodatniSlide4Eng
            }`
              : ''
          }
          ${
            lang === 'ger'
              ? `
            tekstHeroGer {
              aktivirajDodatniSlide2Ger
              aktivirajDodatniSlide3Ger
              aktivirajDodatniSlide4Ger
            }`
              : ''
          }
          ${
            lang === 'ita'
              ? `
            tekstHeroIta {
              aktivirajDodatniSlide2Ita
              aktivirajDodatniSlide3Ita
              aktivirajDodatniSlide4Ita
            }`
              : ''
          }
        }
      }
    }
  }
`;

export const getHeroContentQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
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

  return `query GetHeroContent {
    allHeroSekcija {
      edges {
        node {
          id
          ${languageFieldsMap[lang] || ''}
        }
      }
    }
  }`;
};
