export default function adminSEOQuery() {
  return `query AllAdminSEO {
  allSeoAdmin {
    edges {
      node {
        title
        id
        bazniSeoHr {
          bazniSeoTekstoviGlobalni {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoEng {
          bazniSeoTekstoviGlobalni {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoIta {
          bazniSeoTekstoviGlobalni {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
        bazniSeoGer {
          bazniSeoTekstoviGlobalni {
            metaRobotsGlobalno
            seoNaslov
            seoOpisStranice
          }
        }
      }
    }
  }
}`;
}
