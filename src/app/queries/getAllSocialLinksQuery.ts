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
          instagramImeProfilaTekstKojiSeIspisuje
          linkedinImeProfilaTekstKojiSeIspisuje
          facebookMessenger
          facebookImeProfilaTekstKojiSeIspisuje
          eatsy
          dropbox
          dribbble
          dodatniSwitcher
          dodatneOpcijeSwitcher
          discord
          behance
          foursquare
          github
          imeProfilaDrustvene
          googleDrive
          reddit
          shopify
          slack
          skype
          snapchat
          telegram
          tripadvisorImeProfilaTekstKojiSeIspisuje
          trustpilot
          tumblr
          vimeo
          twitch
          xTwitterImeProfilaTekstKojiSeIspisuje
          yelp
          youtubeImeProfilaTekstKojiSeIspisuje
          zoom
        }
      }
    }
  }
}`;
};
