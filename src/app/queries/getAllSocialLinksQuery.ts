export const getAllSocialLinksQuery = () => {
  return `query NewQuery {
  allDrustveneMrezeLinkovi {
    edges {
      node {
        id
        povezniceDrustvene {
          facebook
          instagram
          linkedin
          pinterest
          spotify
          tikTok
          tripadvisor
          xTwitter
          youtube
        }
      }
    }
  }
}`;
};
