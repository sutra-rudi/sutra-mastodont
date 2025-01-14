export default function drustveneMrezeQuery() {
  return `query DrustveneMreze {
  allDrustveneMrezeLinkovi {
    edges {
      node {
        id
        title
        povezniceDrustvene {
          behance
          discord
          dodatneOpcijeSwitcher
          dodatniSwitcher
          dribbble
          dropbox
          eatsy
          facebook
          facebookImeProfilaTekstKojiSeIspisuje
          facebookMessenger
          foursquare
          github
          googleDrive
          imeProfilaDrustvene
          instagram
          instagramImeProfilaTekstKojiSeIspisuje
          linkedin
          linkedinImeProfilaTekstKojiSeIspisuje
          pinterest
          reddit
          shopify
          skype
          slack
          snapchat
          spotify
          telegram
          tikTok
          tripadvisor
          tripadvisorImeProfilaTekstKojiSeIspisuje
          trustpilot
          tumblr
          twitch
          vimeo
          xTwitter
          xTwitterImeProfilaTekstKojiSeIspisuje
          yelp
          youtube
          youtubeImeProfilaTekstKojiSeIspisuje
          zoom
        }
      }
    }
  }
}`;
}
