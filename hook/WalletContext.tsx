import { ethers } from 'ethers';
import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import CollectionConfig from '../lib/CollectionConfig';
import NetworkConfigInterface from '../lib/NetworkConfigInterface';
import { useWeb3Provider } from './useWeb3Provider';

interface WalletState {
  userAddress: string | null;
  network: ethers.providers.Network | null,
  networkConfig: NetworkConfigInterface,
}

const defaultWalletState: WalletState = {
  userAddress: null,
  network: null,
  networkConfig: CollectionConfig.mainnet,
};

const defaultWalletContext = {
  wallet: {
    userAddress: null,
    network: null,
    networkConfig: CollectionConfig.mainnet,
  },
  setUserWallet: () => { },
  connectWallet: () => { },
  disconnectWallet: () => { },
  isWalletConnected: false,
  isNotMainnet: false,
};

export const WalletContext = React.createContext(defaultWalletState);


const WalletContextProvider = ({ children }) => {
  const { provider, isLoading } = useWeb3Provider();
  const [wallet, setUserWallet] = useState<WalletState>(defaultWalletState);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const disconnectWallet = () => {
    setUserWallet(defaultWalletState);
  }

  async function connectWallet(): Promise<void> {
    if (isLoading || !provider) {
      return;
    }
    try {
      await provider.provider.request!({ method: 'eth_requestAccounts' });
      initWallet();
    } catch (e) {
      console.error(e);
    }
  }

  // useEffect(() => {
  //   console.log(wallet);
  // }, [wallet]);

  function isWalletConnected(): boolean {
    return wallet.userAddress !== null;
  }

  function isNotMainnet(): boolean {
    return wallet.network !== null && wallet.network.chainId !== CollectionConfig.mainnet.chainId;
  }

  const initWallet = useCallback(async () => {
    if (isLoading || !provider) {
      return;
    }
    const walletAccounts = await provider.listAccounts();
    if (walletAccounts.length === 0) {
      return;
    }

    const network = await provider.getNetwork();
    let networkConfig: NetworkConfigInterface;

    if (network.chainId === CollectionConfig.mainnet.chainId) {
      networkConfig = CollectionConfig.mainnet;
      // } else if (network.chainId === CollectionConfig.testnet.chainId) {
      //   networkConfig = CollectionConfig.testnet;
    } else {
      setErrorMessage("Unsupported network! Please switch to mainnet!")
      console.error('Unsupported network!');
      return;
    }
    setUserWallet(
      {
        userAddress: walletAccounts[0],
        network,
        networkConfig,
      }
    )
  }, [provider, isLoading]);

  useEffect(() => {
    initWallet();
    return (() => {
      setUserWallet(defaultWalletState);
    })
  }, [initWallet]);

  return (
    <WalletContext.Provider value={{ wallet, setUserWallet, connectWallet, disconnectWallet, isWalletConnected, isNotMainnet, errorMessage }}>
      {children}
    </WalletContext.Provider>
  )
}
export default WalletContextProvider;

export const useWallet = () => {
  const { wallet, setUserWallet, connectWallet, disconnectWallet, isWalletConnected, isNotMainnet, errorMessage } = useContext(WalletContext)
  return { wallet, setUserWallet, connectWallet, disconnectWallet, isWalletConnected, isNotMainnet, errorMessage }
}