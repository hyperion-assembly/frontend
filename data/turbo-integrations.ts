export const integrationCategories = [
  "general",
  "protocols",
  "services",
] as const

interface TurboIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const turboIntegrations = {
  siwe: {
    name: "SIWE",
    href: "/integration/sign-in-with-ethereum",
    url: "https://login.xyz/",
    description:
      "Sign-In with Ethereum is Web3 authentication using an Ethereum account.",
    imgLight: "/integrations/siwe.svg",
    imgDark: "/integrations/siwe.svg",
    category: "general",
  },
  erc20: {
    name: "ERC20",
    href: "/integration/erc20",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    description: "ERC20 is a standard for fungible tokens on EVM chains",
    imgLight: "/integrations/erc20.png",
    imgDark: "/integrations/erc20.png",
    category: "protocols",
  },
  erc721: {
    name: "ERC721",
    href: "/integration/erc721",
    url: "https://eips.ethereum.org/EIPS/eip-721",
    description: "ERC721 is a standard for non-fungible tokens on EVM chains",
    imgLight: "/integrations/erc721-icon.png",
    imgDark: "/integrations/erc721-icon.png",
    category: "protocols",
  },
  erc1155: {
    name: "ERC1155",
    href: "/integration/erc1155",
    url: "https://eips.ethereum.org/EIPS/eip-1155",
    description: "ERC1155 is a multi-token standard on EVM chains",
    imgLight: "/integrations/erc1155-icon.png",
    imgDark: "/integrations/erc1155-icon.png",
    category: "protocols",
  },
  etherscan: {
    name: "Etherscan",
    href: "/integration/etherscan",
    url: "https://etherscan.io",
    description:
      "Etherscan is the leading block explorer and search, API & analytics platform for Ethereum.",
    imgLight: "/integrations/etherscan-light.svg",
    imgDark: "/integrations/etherscan-dark.svg",
    category: "general",
  },
  sessionKeys: {
    name: "Session Keys",
    href: "/integration/session-keys",
    url: "https://viem.sh/",
    description:
      "Short-lived private keys enable transaction signing and the granting of temporary smart contract permissions.",
    imgLight: "/integrations/session-keys.png",
    imgDark: "/integrations/session-keys.png",
    category: "general",
  },
  pooltogether_v4: {
    name: "PoolTogether",
    href: "/integration/pooltogether-v4",
    url: "https://pooltogether.com/",
    description:
      "PoolTogether is a prize savings protocol, enable you to win by saving.",
    imgLight: "/integrations/pooltogether.svg",
    imgDark: "/integrations/pooltogether.svg",
    category: "protocols",
  },
  livepeer: {
    name: "Livepeer",
    href: "/integration/livepeer",
    url: "https://docs.livepeer.org/",
    description: "Livepeer is the world's open video infrastructure.",
    imgLight: "/integrations/livepeer.svg",
    imgDark: "/integrations/livepeer.svg",
    category: "protocols",
  },
  moralis: {
    name: "Moralis",
    href: "/integration/moralis",
    url: "https://docs.moralis.io/",
    description:
      "Moralis provides a complete end-to-end blockchain application development platform.",
    imgLight: "/integrations/moralis.png",
    imgDark: "/integrations/moralis.png",
    category: "services",
  },
  aave: {
    name: "Aave",
    href: "/integration/aave",
    url: "https://docs.aave.com/hub/",
    description: "Aave is a decentralized non-custodial liquidity protocol.",
    imgLight: "/integrations/aave.png",
    imgDark: "/integrations/aave.png",
    category: "protocols",
  },
  arweave: {
    name: "Arweave",
    href: "/integration/arweave",
    url: "https://arwiki.arweave.dev",
    description:
      "Arweave is the first protocol that enables permanent data storage. Its design allows anyone to preserve data forever with just a single, one-time fee.",
    imgLight: "/integrations/arweave-light.png",
    imgDark: "/integrations/arweave-dark.png",
    category: "protocols",
  },
  defiLlama: {
    name: "DefiLlama",
    href: "/integration/defi-llama",
    url: "https://defillama.com/docs/api",
    description: "Open and transparent DeFi analytics. ",
    imgLight: "/integrations/defi-llama.png",
    category: "services",
    imgDark: "/integrations/defi-llama.png",
  },
  starter: {
    name: "Starter Template",
    href: "/integration/starter",
    url: "https://docs.turboeth.xyz/overview",
    description:
      "Use this template to get started building integrations with TurboETH.",
    imgLight: "/logo-gradient.png",
    category: "general",
    imgDark: "/logo-gradient.png",
  },
} as const
