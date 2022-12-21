import React from "react";
import { useRoutes } from "react-router-dom";
import {
  Home,
  StandardToken,
  DeflationaryToken,
  HyperDeflationaryToken,
  MintBurnToken,
  TokenHome,
  SmartBuidl,
  SmartMarketplace,
  SmartNFTs,
  SmartStaking,
} from "../pages";

export function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/smarttoken",
      children: [
        { element: <TokenHome />, index: true },
        {
          path: "hyperdeflationary",
          element: <HyperDeflationaryToken />,
        },
        {
          path: "standardToken",
          element: <StandardToken />,
        },
        {
          path: "deflationary",
          element: <DeflationaryToken />,
        },

        {
          path: "mintburn",
          element: <MintBurnToken />,
        },
      ],
    },
    {
      path: "/smartbuidl",
      children: [
        { element: <SmartBuidl />, index: true },
        { path: "smartstaking", element: <SmartStaking /> },
        { path: "smartnfts", element: <SmartNFTs /> },
        { path: "smartmarket", element: <SmartMarketplace /> },
      ],
    },
  ]);
}
