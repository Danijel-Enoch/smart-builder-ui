import React from "react";
import { Layout } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./config/routes";
import bg from "./assets/image_bg.png";
import zIndex from "@mui/material/styles/zIndex";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
