import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Widget from "./Widget";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Widget />
      <Box position="relative" display="flex">
        <Sidebar />
        <Box
          ml="25%"
          w="100%"
          transition="all 200ms ease-in-out"
          py="4rem"
          mt="7.5rem"
          px="2rem"
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
