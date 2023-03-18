import React, { useState } from 'react';
// import * as nearAPI from 'near-api-js';
import { Box, Button, Image } from '@chakra-ui/react';
import logo from '../assets/Smart Builders Logo.png';
import brandName from '../assets/Smart Builders Logo text.png';
import nearIcon from '../assets/near-icon.png';
// import connectors from '../utils/connectors'


const Header = () => {
  // const connector = connectors["UAuth"][0];

  // const { useIsActivating, useIsActive } = connectors['UAuth'][1];
  // const isActivating = useIsActivating();
  const isActive = false;

  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [error, setError] = useState();

  // Handle connector activation and update connection/error state
  // const handleToggleConnect = () => {
  //   setError(undefined); // Clear error state

  //   if (isActive) {
  //     if (connector?.deactivate) {
  //       void connector.deactivate();
  //     } else {
  //       void connector.resetState();
  //     }
  //     setConnectionStatus('Disconnected');
  //   } else if (!isActivating) {
  //     setConnectionStatus('Connecting...');

  //     // Activate the connector and update states
  //     connector
  //       .activate(1)
  //       // .user()
  //       .then((user) => {
  //         setConnectionStatus('Connected');
  //         localStorage.setItem('currentUser:', user)
  //         console.log(user);
  //       })
  //       .catch((e) => {
  //         connector.resetState();
  //         setError(e);
  //       });
  //   }
  // };

  const handleArchwayConnect = () => {

  }

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

        >
          {isActive ? 'Logout' : 'Login with Unstoppable'}
        </Button>
      </Box>
      <Box>
        <h3>
          Status -{' '}
          {error?.message ? 'Error: ' + error.message : connectionStatus}
        </h3>
      </Box>
    </Box>
  );
};

export default Header;

// passphrase: wreck paper grunt roast lonely join rail tourist double soldier name wise
// devcreed.testnet;
