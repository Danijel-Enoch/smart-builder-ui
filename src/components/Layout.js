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
      <Box display="flex">
        <Sidebar />
        <Box w="80%">{props.children}</Box>
      </Box>
    </>
  );
};

export default Layout;
