import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../pages';


export function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);
}
