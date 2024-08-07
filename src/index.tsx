import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { GearPlanner } from "./GearPlanner/GearPlanner";
import { Market } from "./Market/Market";
import { Monsters } from "./Monster/monsters";
import { Bank } from "./Bank/bank";
import HOF from "./HOF/hof";

// TODO: https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "monsters",
        element: <Monsters />,
      },
      {
        path: "gear",
        element: <GearPlanner />,
      },
      {
        path: "market",
        element: <Market />,
      },
      {
        path: "bank",
        element: <Bank />,
      },
      {
        path: "hof",
        element: <HOF />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
