// WalletConnectComponent.js
import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import WalletConnectProvider from '@walletconnect/web3-provider';

const WalletConnectComponent = () => {
  // const [web3Provider, setWeb3Provider] = useState(null);
  // const [address, setAddress] = useState('');
  // const [balance, setBalance] = useState('');

  // const connectWalletConnect = async () => {
  //   const provider = new WalletConnectProvider({
  //     infuraId: 'YOUR_INFURA_PROJECT_ID', // Replace with your Infura Project ID
  //   });

  //   await provider.enable();

  //   const ethersProvider = new ethers.providers.Web3Provider(provider);
  //   const signer = ethersProvider.getSigner();
  //   const accounts = await signer.getAddress();

  //   setWeb3Provider(signer);
  //   setAddress(accounts);
  // };

  // const fetchBalance = async () => {
  //   if (web3Provider && address) {
  //     const balance = await web3Provider.getBalance(address);
  //     setBalance(ethers.utils.formatEther(balance));
  //   }
  // };

  // useEffect(() => {
  //   fetchBalance();
  // }, [web3Provider, address]);

  return (
         <Button width={'156px'} height={'52px'} _hover={{textDecoration:'none'}} textColor={'white'} bgGradient={'linear(to-l,#7C0F35,#581266)'} borderRadius={'20px'} 
        //  onClick={connectWalletConnect}
         >Connect</Button> 
  );
};


export default WalletConnectComponent;



{/* <Button width={'156px'} height={'52px'} _hover={{textDecoration:'none'}} textColor={'white'} bgGradient={'linear(to-l,#7C0F35,#581266)'} borderRadius={'20px'} onClick={connectWalletConnect}>Connect</Button> */}
