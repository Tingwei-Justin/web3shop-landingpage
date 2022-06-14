import CollectionConfigInterface from './CollectionConfigInterface';
import { ethereumMainnet, ethereumTestnet } from './Networks';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
};

export default CollectionConfig;
