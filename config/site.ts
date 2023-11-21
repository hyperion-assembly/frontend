// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    docs: string
    discord: string
    twitter: string
    github: string
    farcaster: string
  }
}

export const SITE_CANONICAL = "https://turboeth.xyz"

export const siteConfig: SiteConfig = {
  name: "Hyperion Assembly ",
  title: "Hyperion Assembly",
  emoji: "🚀",
  description:
    "Hyperion Assembly is a community of builders working together to build the future of the web.",
  localeDefault: "en",
  links: {
    docs: "https://github.com/hyperion-assembly",
    discord: "https://github.com/hyperion-assembly",
    twitter: "https://github.com/hyperion-assembly",
    github: "https://github.com/hyperion-assembly",
    farcaster: "https://github.com/hyperion-assembly",
  },
}
