import React, { useState, useEffect, Children } from 'react';
import Web3modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';

import { maketAddress, maketAddressABI } from './constants';

export const NFTContext = React.createContext();

export const NFTContextProvider = ({ children }) => {
  const nftCurrency = 'MATIC';
  return (
    <NFTContext.Provider value={{ nftCurrency }}>
      {children}
    </NFTContext.Provider>
  );
};
