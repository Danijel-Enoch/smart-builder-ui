import React, { useEffect, useState } from 'react';
// import * as nearAPI from 'near-api-js';
import { Box, Button, Image } from '@chakra-ui/react';
import logo from '../assets/Smart Builders Logo.png';
import brandName from '../assets/Smart Builders Logo text.png';
import nearIcon from '../assets/near-icon.png';
// import connectors from '../utils/connectors'

import { SigningArchwayClient } from '@archwayhq/arch3.js'; import { GasPrice } from '@cosmjs/stargate';
import UAuth from '@uauth/js'



const Header = () => {

  let isActive = false;
  const [udUser, setUdUser] = useState(null)



  const uauth = new UAuth({
    clientID: "d33e635d-7c71-4e48-9376-5756cd2a018b",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet email profile:optional social:optional"

  })

  // Handle connector activation and update connection/error state
  const handleToggleConnect = async () => {
    if (udUser)
      await uauth.logout()
    else
      try {
        const authorization = await uauth.loginWithPopup()
        window.location.reload()
      } catch (error) {
        console.error(error)
      }
  };

  useEffect(() => {
    uauth.user()
      .then((user) => {
        setUdUser(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  if (udUser) isActive = true
  else isActive = false

  // boil fever net pottery hidden shiver small skin harsh chronic method vacant

  const ChainInfo = {
    chainId: 'constantine-1', chainName: 'Constantine Testnet', rpc: 'https://rpc.constantine-1.archway.tech', rest: 'https://api.constantine-1.archway.tech', stakeCurrency: { coinDenom: 'CONST', coinMinimalDenom: 'uconst', coinDecimals: 6 }, bip44: { coinType: 118 }, bech32Config: { bech32PrefixAccAddr: 'archway', bech32PrefixAccPub: 'archwaypub', bech32PrefixValAddr: 'archwayvaloper', bech32PrefixValPub: 'archwayvaloperpub', bech32PrefixConsAddr: 'archwayvalcons', bech32PrefixConsPub: 'archwayvalconspub', }, currencies: [{ coinDenom: 'CONST', coinMinimalDenom: 'uconst', coinDecimals: 6 }], feeCurrencies: [{ coinDenom: 'CONST', coinMinimalDenom: 'uconst', coinDecimals: 6 }], coinType: 118, gasPriceStep: { low: 0, average: 0.1, high: 0.2 }, features: ['cosmwasm'],
  };

  let accounts, CosmWasmClient, queryHandler, gasPrice;

  async function connectKeplrWallet() {
    if (window['keplr']) {
      if (window.keplr['experimentalSuggestChain']) {

        await window.keplr.experimentalSuggestChain(ChainInfo);
        await window.keplr.enable(ChainInfo.chainId);

        const offlineSigner = await window.keplr.getOfflineSigner(ChainInfo.chainId);

        gasPrice = GasPrice.fromString('0.002' + ChainInfo.currencies[0].coinMinimalDenom);

        CosmWasmClient = await SigningArchwayClient.connectWithSigner(ChainInfo.rpc, offlineSigner, { gasPrice: gasPrice });
        // This async waits for the user to authorize your dapp
        // it returns their account address only after permissions
        // to read that address are granted
        accounts = await offlineSigner.getAccounts();
        // A less verbose reference to handle our queries
        queryHandler = CosmWasmClient.queryClient.wasm.queryContractSmart;
        console.log('Wallet connected', {
          offlineSigner: offlineSigner,
          CosmWasmClient: CosmWasmClient,
          accounts: accounts,
          chain: ChainInfo,
          queryHandler: queryHandler,
          gasPrice: gasPrice,
        });
      } else {
        console.warn('Error accessing experimental features, please update Keplr');
      }
    } else {
      console.warn('Error accessing Keplr, please install Keplr');
    }
  }

  const handleArchwayConnect = async () => {
    await connectKeplrWallet()
  }

  console.log(accounts)

  return (
    <Box
      as="header"
      w="100%"
      position="fixed"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="20%"
      p="1.5rem"
      bg="white"
      top="0"
      zIndex={2}
    >
      <Box display="flex" alignItems="center">
        <Image boxSize="40px" src={logo} alt="logo" />
        <Image ml="1rem" src={brandName} alt="brandName" />
      </Box>

      <Box display="flex" alignItems="center">
        <Image boxSize="40px" src={nearIcon} alt="nearIcon" />
        <Button
          ml="1.5rem"
          p="1.5rem"
          bg="brand.primary"
          color="white"
          borderRadius="15px"
          _hover={{
            bg: 'brand.primary',
            opacity: '0.8',
            color: 'black',
          }}
          onClick={handleArchwayConnect}
        >
          Connect Wallet
        </Button>

        <Button
          ml="1.5rem"
          p="1.5rem"
          bg="brand.primary"
          color="white"
          borderRadius="15px"
          _hover={{
            bg: 'brand.primary',
            opacity: '0.8',
            color: 'black',
          }}
          onClick={handleToggleConnect}
        >
          {isActive ? 'Logout' : 'Login with Unstoppable'}
        </Button>
      </Box>
      <Box>
        <h3>
          Status -{' '}

        </h3>
      </Box>
    </Box>
  );
};

export default Header;

// passphrase: wreck paper grunt roast lonely join rail tourist double soldier name wise
// devcreed.testnet;
