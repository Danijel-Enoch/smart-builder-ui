import { Box, Image, List, ListItem, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import sun from "../assets/sun.png";
import { SidebarItem } from "../constants/data";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      w="20%"
      minHeight="100vh"
      bg="white"
      borderRight="1px"
      borderColor="rgba(0, 0, 0, 0.1);"
      pt="1rem"
    >
      <List>
        {SidebarItem.map((item) => (
          <NavLink key={item.id} to={item.path}>
            <ListItem
              pl="2rem"
              pr="0.5rem"
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              py="0.7rem"
              cursor="pointer"
              bg={item.path === pathname && "#FC8B23"}
            >
              <Image boxSize="18px" src={item.image} alt={item.name} />
              <Text ml="2rem" color={item.path === pathname && "white"}>
                {item.name}
              </Text>
              <Text ml="auto" as="small" color="brand.primary">
                {item.text}
              </Text>
            </ListItem>
          </NavLink>
        ))}
      </List>

      <Box display="flex" mt="2rem" gap={"1rem"} ml={"2rem"}>
        <Image boxSize="20px" src={sun} alt="sun" />
        <Switch colorScheme="red" />
      </Box>
    </Box>
  );
};

export default Sidebar;
