import React from 'react';
import { Box, List, ListItem, Text, Image, Switch } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import sun from '../assets/sun.png';
import { SidebarItem } from '../constants/data';


const Sidebar = () => {

    // const navLinkStyles = ({isActive}) => {
    //     return {
    //     transition: 'all 0.3s ease-in-out',
    //     bg: isActive ? 'brand.primary' : 'transparent',
    //     // color: isActive ? 'white' : 'black',
    //     _hover: {
    //         bg: 'brand.primary',
    //         opacity: '0.8',
    //         color: 'black',
    //     },
    // }
    // };

  return (
    <Box
      w="25%"
      position='fixed'
      h='100%'
      overflowY='auto'
      bg="white"
      top='26.6%'
      borderRight="1px"
      borderColor="rgba(0, 0, 0, 0.1);"
      pt='1rem'
      zIndex={2}
    >
      <List>
        {SidebarItem.map((item) => (
        <NavLink key={item.id} to={item.path}>
          <ListItem pl='2rem' pr='0.5rem' display="flex" alignItems="center" flexWrap='wrap' py='0.7rem' cursor='pointer'>
            <Image boxSize="18px" src={item.image} alt={item.name} />
            <Text ml='2rem'>{item.name}</Text>
            <Text ml='auto' as="small" color="brand.primary">
              {item.text}
            </Text>
          </ListItem>
        </NavLink>
        ))}
      </List>

      <Box display='flex' mt="2rem" mb='2rem'>
        <Image boxSize="20px" src={sun} alt="sun" />
        <Switch colorScheme="red" />
      </Box>
    </Box>
  );
}

export default Sidebar