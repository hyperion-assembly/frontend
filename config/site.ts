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
    telegram: string
    twitter: string
    github: string
    farcaster: string
  }
}

export const SITE_CANONICAL = "https://www.hyperionassembly.com"

export const siteConfig: SiteConfig = {
  name: "Hyperion Assembly ",
  title: "Hyperion Assembly",
  emoji: "🚀",
  description:
    "Hyperion Assembly is a community of builders working together to build the future of the web.",
  localeDefault: "en",
  links: {
    docs: "https://github.com/hyperion-assembly",
    telegram: "https://t.me/hellno_hellno",
    twitter: "https://github.com/hyperion-assembly",
    github: "https://github.com/hyperion-assembly",
    farcaster: "https://warpcast.com/hellno",
  },
}
