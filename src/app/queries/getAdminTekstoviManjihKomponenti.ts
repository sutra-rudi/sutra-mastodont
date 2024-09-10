export const getAdminTekstoviManjihKomponentiQuery = () => {
  return `query NewQuery {
  allAdminTekstoviManjihKomponenti {
    edges {
      node {
        id
        adminCookiesFooterNewsletter {
          cookiesTekstovi {
            napomena
            naslov
            tekst
          }
        }
      }
    }
  }
}`;
};
