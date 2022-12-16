import React from 'react';
import { useRoutes } from 'react-router-dom';
import {
  Home,
  StandardToken,
  DeflationaryToken,
  HyperDeflationaryToken,
  MintBurnToken,
} from '../pages';

export function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/smarttoken',
      element: <StandardToken />,
      // children: [
      //   // { element: <StandardToken />, index: true },
      //   { path: 'deflationary', element: <DeflationaryToken /> },
      //   { path: 'hyperdeflationary', element: <HyperDeflationaryToken /> },
      //   { path: 'mintburn', element: <MintBurnToken /> },
      // ],
    },
    {
      path: '/deflationary',
      element: <DeflationaryToken />
    },
    {
      path: '/hyperdeflationary',
      element: <HyperDeflationaryToken />
    },
    {
      path: '/mintburn',
      element: <MintBurnToken />
    },
  ]);
}
