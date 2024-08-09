export const getAdminBlogArchiveSettingsQuery = () => `query NewQuery {
  adminSetupArea {
    edges {
      node {
        websiteAktivatori {
          blogArchivePage {
            activateCategoryFilter
            activateSearchBar
            activateTagFilter
            sortByAZ
            sortByDate
            sortByPopularity
            archiveItemsNumberOnSinglePage
          }
        }
        adminGlobalniSelektorCta {
          blogSekcijaCta
        }
      }
    }
  }
}`;
