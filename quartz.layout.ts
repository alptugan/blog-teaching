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
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  pageBody: Component.Content(),
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({title: "Content List",mapFn: (node) => {
      // dont change name of root node
      // Trim display name if it's longer than 26 characters
      const maxLength = 30
      if (node.displayName.length > maxLength) {
        node.displayName = node.displayName.substring(0, maxLength - 3) + "..."
      }
    },
    }),
  ],
  middle: [],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.TagList()
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  pageBody: Component.Content(),
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({title: "Content List"}),
  ],
  middle: [],
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