import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';


export function useWeb3Provider() {
  const [provider, setProvider] = useState<Web3Provider | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const initProvider = async () => {
      const browserProvider = await detectEthereumProvider() as ExternalProvider;
      if (browserProvider?.isMetaMask !== true) {
        setMessage("We were not able to detect MetaMask");
      } else {
        setMessage("Detect MetaMask successfully");
        setProvider(new ethers.providers.Web3Provider(browserProvider));
      }
    }
    initProvider();
  }, []);

  return {
    provider: provider,
    isLoading: !message && !provider,
    message: message,
  }
}
