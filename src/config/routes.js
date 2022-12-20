import React from 'react';
import { useRoutes } from 'react-router-dom';
import { SmartTokenLayout } from '../components';
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
      element: <SmartTokenLayout />,
      children: [
        { element: <StandardToken />, index: true },
        { path: 'deflationary', element: <DeflationaryToken /> },
        { path: 'hyperdeflationary', element: <HyperDeflationaryToken /> },
        { path: 'mintburn', element: <MintBurnToken /> },
      ],
    },
  ]);
}
