import React from "react";
import { Layout } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./config/routes";
// import bg from "./assets/image_bg.png";

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
