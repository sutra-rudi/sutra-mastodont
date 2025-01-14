export default function okolicaQuery() {
  return `query OkolicaQuery {
  allOkolica {
    edges {
      node {
        id
        title
        statusAtivacijePoJezicima {
          aktivatorHr
          aktivatorGer
          aktivatorEng
          aktivatorIta
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
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
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
      }
    }
  }
}`;
}
