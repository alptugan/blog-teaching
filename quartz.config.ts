import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "● Teaching",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    //baseUrl: "alptugan.github.io/blog-teaching",
    baseUrl: "teaching.alptugan.com",
    ignorePatterns: ["private", "templates", ".obsidian", "**/.space/**"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Space Grotesk",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        // ...existing code...
        darkMode: {
          light: "#1a1a14",          // Dark warm background with slight yellow tint
          lightgray: "#2e2e1e",      // Warm dark gray for borders
          gray: "#5a5a3a",           // Muted olive gray for icons/secondary elements
          darkgray: "#c1c1bb",       // Warm light gray for secondary text
          dark: "#f5f0d0",           // Warm white for primary text
          secondary: "#ffcc00",      // Golden yellow — primary accent
          tertiary: "#cc9900",       // Deeper gold for hover/tertiary elements
          highlight: "rgba(255, 204, 0, 0.12)", // Subtle golden highlight
          textHighlight: "#ffcc0055", // Transparent golden text highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
