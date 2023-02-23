import React from "react";
import { Layout } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./config/routes";

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
