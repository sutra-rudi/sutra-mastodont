export default function whyUsQuery() {
  return `query WhyUsQuery {
  allWhyUs {
    edges {
      node {
        id
        title
        uvodArgumentiWhyChooseUsKeys {
          ikonaSlikaAmeneties {
            node {
              id
              sourceUrl
              srcSet
            }
          }
          slikaIkonaAmeneties1 {
            node {
              id
              sourceUrl
              srcSet
            }
          }
          slikaIkonaAmeneties10 {
            node {
              id
              sourceUrl
              srcSet
            }
          }
          slikaIkonaAmeneties11 {
            node {
              id
              sourceUrl
              srcSet
            }
          }
          slikaIkonaAmeneties12 {
            node {
              id
              sourceUrl
              srcSet
            }
          }
          odabirBojeAmeneties
          ikonaSlikaAmenetiesReactIkone
        }
        textHr {
          naslovHr
          sadrzajTextHr
        }
        textEng {
          naslovEng
          sadrzajTextEng
        }
        textGer {
          naslovGer
          sadrzajTextGer
        }
        textIta {
          naslovIta
          sadrzajTextIta
        }
      }
    }
  }
}`;
}
