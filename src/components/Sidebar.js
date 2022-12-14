import React from 'react';
import { Box, List, ListItem, Text, Image, Switch } from '@chakra-ui/react';
import sun from '../assets/sun.png';
import { SidebarItem } from '../constants/data';


const Sidebar = () => {
  return (
    <Box
      w="25%"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="rgba(0, 0, 0, 0.1);"
      pl='2rem'
      pt='1rem'
      pr='0.5rem'
    >
      <List>
        {SidebarItem.map((item) => (
          <ListItem display="flex" alignItems="center" py='0.7rem' cursor='pointer'>
            <Image boxSize="18px" src={item.image} alt={item.name} />
            <Text ml='2rem'>{item.name}</Text>
            <Text ml='auto' as="small" color="brand.primary">
              {item.text}
            </Text>
          </ListItem>
        ))}
      </List>

      <Box display='flex' mt="2rem">
        <Image boxSize="20px" src={sun} alt="sun" />
        <Switch colorScheme="red" />
      </Box>
    </Box>
  );
}

export default Sidebar