import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/alptugan",
      "Personal": "https://www.alptugan.com",
      "Instagram": "https://www.instagram.com/alptugan",
      "Twitter":"https://www.twitter.com/alptugan"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  pageBody: Component.Content(),
  afterBody: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({title: "Content List",mapFn: (node) => {
    // dont change name of root node
    if (node.depth > 0) {
      // set emoji for file/folder
      if (node.file) {
        //node.displayName = "📄 " + node.displayName
      } else {
        node.displayName = "📁 " + node.displayName
      }

      // Trim display name if it's longer than 26 characters
      const maxLength = 26
      if (node.displayName.length > maxLength) {
        node.displayName = node.displayName.substring(0, maxLength - 3) + "..."
      }
      }
    },
    }),
  ],
  right: [
    Component.Graph(),
    Component.TagList(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks()
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  pageBody: Component.Content(),
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({title: "Content List"}),
  ],
  right: [],
}

/* components for the homepage (index.md)
export const indexPageLayout: PageLayout = {
  beforeBody: [],
  pageBody: [
    Component.RecentNotes({ limit: 5 }),
    Component.Content(),
  ],
  left: [],
  right: [],
}

Component.RecentNotes({ limit: 5, showTags: false, linkToMore: "Tutorials/" })
*/