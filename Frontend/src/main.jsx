import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
        {
          path: "/login",
          element: <Login />, 
        
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
        path: "/dashboard",
        element: <Dashboard/>
        }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);

