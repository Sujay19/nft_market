import React, { useState, useEffect, Children } from 'react';
import Web3modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';

import { maketAddress, maketAddressABI } from './constants';

export const NFTContext = React.createContext();

export const NFTContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const nftCurrency = 'MATIC';

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert('Please Install the Metamask');
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      alert('No accounts found');
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please Install Metamask');

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  return (
    <NFTContext.Provider value={{ nftCurrency, connectWallet, currentAccount }}>
      {children}
    </NFTContext.Provider>
  );
};
