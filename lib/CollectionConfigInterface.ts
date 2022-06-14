import NetworkConfigInterface from '../lib/NetworkConfigInterface';

interface SaleConfig {
  price: number,
  maxMintAmountPerTx: number,
};

export default interface CollectionConfigInterface {
  testnet: NetworkConfigInterface,
  mainnet: NetworkConfigInterface,
}