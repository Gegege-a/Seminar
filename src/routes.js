import React from 'react';
import { Navigate } from 'react-router-dom';
import TopNavbar from './components/Navbar/TopNavbar';
import DefaultLayout from './layouts/DefaultLayout';

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'navbar', 
        element: <TopNavbar />,
      },
    //   {
    //     index: true,
    //     element: <Navigate to="navbar" replace />,
    //   },
    ],
  },
];

export default routes;
