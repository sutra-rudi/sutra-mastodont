export default function getAllPortfolioCaseStudy() {
  return `query portfolioCaseStudy {
  allPortfolioCaseStudy {
    edges {
      node {
        id
        caseStudySadrzajHr {
          nadnaslovPodnaslovNaslovCaseStudyHr
          naslovCaseStudyHr
          sadrzajNaslovCaseStudyHr
        }
        caseStudySadrzajGer {
          nadnaslovPodnaslovCaseStudyGer
          naslovCaseStudyGer
          sadrzajCaseStudyGer
        }
        caseStudySadrzajFra {
          nadnaslovPodnaslovCaseStudyFra
          naslovCaseStudyFra
          sadrzajCaseStudyFra
        }
        caseStudySadrzajEsp {
          nadnaslovPodnaslovCaseStudyEsp
          naslovCaseStudyEsp
          sadrzajCaseStudyEsp
        }
        caseStudySadrzajEng {
          nadnaslovpodnaslovStudy
          naslovCaseStudy
          sadrzaj
        }
        caseStudySadrzajIta {
          nadnaslovPodnaslovCaseStudyIta
          naslovCaseStudyIta
          sadrzaj
        }
        caseStudySadrzajSlo {
          nadnaslovPodnaslovCaseStudySlo
          naslovCaseStudySlo
          sadrzajCaseStudySlo
        }
        caseStudyUvod {
          bonusPoljeZaUpisCaseStudy
          colorCaseStudy
          favoriteCaseStudy
          godinaCaseStudy
          imeKlijentaCaseStudy
          statusCaseStudy
          glavnaSlikaCaseStudy {
            node {
              id
              sourceUrl
            }
          }
          izbornikKategorijeCheckbox {
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
          slikaThumbnailCaseStudy {
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
}`;
}
