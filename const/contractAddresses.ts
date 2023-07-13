/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { ZksyncEra } from "@thirdweb-dev/chains";
export const NETWORK = ZksyncEra;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
// Rewiki Marketplace
export const MARKETPLACE_ADDRESS = "0xDD39DBcc155EfC5F2fc4655347B8734c0D4C1363";

// 3. The address of your NFT collection smart contract. 
// Rewiki on ZKSync
export const NFT_COLLECTION_ADDRESS =
  "0xbBB3C56f0Ee015990e86A44a5FB5a8d33462200c";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://explorer.zksync.io";
