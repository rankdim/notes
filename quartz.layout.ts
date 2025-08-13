import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.TagList(),
    Component.MobileOnly(
      Component.RecentNotes({
        showTags: false,
        limit: 10,
        filter: (f: QuartzPluginData) => f.slug != "index",
      }),
    ),
  ],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Component.PageTitle()),
    Component.ArticleTitle(),
    Component.ContentMeta({ showComma: false }),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),

    // Component.MobileOnly(Component.Spacer()),
    // Component.DesktopOnly(Component.Flex({
    //   components: [
    //     {
    //       Component: Component.Search(),
    //       grow: true,
    //     },
    //     { Component: Component.Darkmode() },
    //     { Component: Component.ReaderMode() },
    //   ],
    // })),
    // Component.Explorer(),
  ],
  right: [
    // Component.Graph(),
    Component.ConditionalRender({
      component: Component.Conway({ id: "conway-3" }),
      condition: (page) => page.fileData.slug == "index",
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.DesktopOnly(
      Component.RecentNotes({
        showTags: false,
        limit: 10,
        filter: (f: QuartzPluginData) => f.slug != "index",
      }),
    ),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Flex({
    //   components: [
    //     {
    //       Component: Component.Search(),
    //       grow: true,
    //     },
    //     { Component: Component.Darkmode() },
    //   ],
    // }),
    // Component.Explorer(),
  ],
  right: [],
}
