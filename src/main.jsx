import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import User from "./User";
import Admin from "./Admin";
import Owner from "./Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/User",
    element: <User />,
  },
  {
    path: "/Owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
