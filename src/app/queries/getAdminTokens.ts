export const getAdminTokensQuery = () => `query NewQuery {
  kodoviApitokenStylebox {
    edges {
      node {
        id
        kodoviAdminApi {
          airbnb
          airtableApiKljuc
          airtableBaseId
          airtableTableName
          apiCode
          booking
          cookieyes
          disqus
          fareharbour
          formsparkCodeId
          getform
          getformCode
          googleAnalytics
          googleCalendar
          googleMapsApi
          googleOptimizeKod
          googleSiteVerification
          googleTagManager
          hotjar
          hotjarCopy
          inspectlet
          intercomApi
          mailchimp
          mapboxToken
          microsoftClarity
          mojPosao
          notionEmbed
          opentable
          plerdy
          rentlioEmbed
          tablein
          tallyApi
          twilio
          userway
          weather
          windy
          zapier
          zendeskChatCode
        }
      }
    }
  }
}`;
