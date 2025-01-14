export default function adminUploadVideoQuery() {
  return `query AdminUploadVideo {
  allAdminUploadVideoEmbed {
    edges {
      node {
        id
        title
        embedFilePlaceholderVideo {
          dodatneOpcijeVideoLinkIframe
          iFrameEmbed
          videoExternalLink
          videoFile {
            node {
              id
              sourceUrl
              title
            }
          }
          videoPlaceholderImage {
            node {
              id
              sourceUrl
              title
            }
          }
        }
      }
    }
  }
}`;
}
