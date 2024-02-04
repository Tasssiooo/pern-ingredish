/* Global styles */
import "./globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
/* Layouts */
import Footer from "./layouts/Footer/index.tsx";
import DesktopNavBar from "./layouts/DesktopNavBar/index.tsx";
import MobileNavBar from "./layouts/MobileNavBar/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
/* Pages */
import MainPage from "./pages/MainPage/index.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DesktopNavBar />
    <MobileNavBar />
      <RouterProvider router={routes} />
    <Footer />
  </React.StrictMode>
);
