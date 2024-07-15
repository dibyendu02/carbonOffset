import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OffsetNow from "./pages/OffsetNow";
import CarbonCalculator from "./pages/CarbonCalculator";
import OurProjects from "./pages/OurProjects";
import UserDashboard from "./pages/UserDashboard";
import UserTransactions from "./pages/UserTransactions";
import UserOffsetDetails from "./pages/UserOffsetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/offsetNow",
    element: <OffsetNow />,
  },
  {
    path: "/calculator",
    element: <CarbonCalculator />,
  },
  {
    path: "/ourProjects",
    element: <OurProjects />,
  },
  {
    path: "/userDashboard",
    element: <UserDashboard />,
  },
  {
    path: "/userTransactions",
    element: <UserTransactions />,
  },
  {
    path: "/userOffsetDetails",
    element: <UserOffsetDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
