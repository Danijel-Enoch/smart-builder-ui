import React from 'react';
import { Box, Button, Image } from '@chakra-ui/react';
import logo from '../assets/Smart Builders Logo.png';
import brandName from '../assets/Smart Builders Logo text.png';
import nearIcon from '../assets/near-icon.png';

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="1.5rem"
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
        >
          Connect Wallet
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
