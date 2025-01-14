export default function adminTxtLegalQuery() {
  return `query AllAdminLegal {
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
      }
    }
  }
}`;
}
