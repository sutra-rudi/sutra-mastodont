export const getAllBrojcaniciQuery = `query NewQuery {
  allBrojcanici {
    edges {
      node {
        id
        brojcanikCompanyInNumbersUvod {
          slikaPNGSVG {
            node {
              sourceUrl
              srcSet
            }
          }
          broj
        }
        tekstBoxIta {
          tekstTekstboxIta
        }
        tekstBoxHr {
          tekstBoxHr
        }
        tekstBoxGer {
          sadrzajTekstboxGer
        }
        tekstBoxEng {
          tekstBoxEng
        }
      }
    }
  }
}`;
