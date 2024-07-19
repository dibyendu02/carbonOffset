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
import Gallery from "./pages/Gallery";
import OurServices from "./pages/OurServices";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAllTransaction from "./pages/AdminAllTransaction";
import AdminFarmOnboarding from "./pages/AdminFarmOnboarding";
import AdminProjectDetails from "./pages/AdminProjectDetails";

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
    path: "/gallery",
    element: <Gallery />,
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
    path: "/services",
    element: <OurServices />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
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
  {
    path: "/allTransactions",
    element: <AdminAllTransaction />,
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/farmOnboarding",
    element: <AdminFarmOnboarding />,
  },
  {
    path: "/adminProjectDetails",
    element: <AdminProjectDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
