export default function heroSekcijaQuery() {
  return `query HeroSekcija {
  allHeroSekcija {
    edges {
      node {
        id
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
      }
    }
  }
}`;
}
