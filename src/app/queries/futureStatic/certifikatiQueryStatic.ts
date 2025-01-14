export default function certifikatiQuery() {
  return `query Certifikati {
  allBazaLogotipaCertifikata {
    edges {
      node {
        id
        title
        modulBazeTekstovaHr {
          nadnaslovPodnaslovBazaTekstovaHr
          naslovBazaTekstovaHr
          tekstBazaTekstovaHr
        }
        modulBazeTekstovaGer {
          nadnaslovPodnaslovBazaTekstovaGer
          naslovBazaTekstovaGer
          tekstBazaTekstovaGer
        }
        modulBazeTekstovaEng {
          nadnaslovPodnaslovBazaTekstovaEng
          naslovBazaTekstovaEng
          tekstBazaTekstovaEng
        }
        modulBazeTekstovaIta {
          nadnaslovPodnaslovBazaTekstovaIta
          naslovBazaTekstovaIta
          tekstBazaTekstovaIta
        }
        statusAtivacijePoJezicima {
          aktivatorHr
          aktivatorGer
          aktivatorEng
          aktivatorIta
        }
        certifikati {
          uploadSlikeCertifkata {
            node {
              srcSet
              sourceUrl
            }
          }
          vanjskiLinkNaCertifikat
          statusPrikazivanjaCertifikata
          nazivCertifikata
        }
      }
    }
  }
}`;
}
