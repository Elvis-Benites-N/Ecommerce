// import React from "react";
import { createHashRouter } from "react-router-dom";
import App from "../App";


import Home from "../pages/Home";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
];

const router = createHashRouter(routes);

export default router;
