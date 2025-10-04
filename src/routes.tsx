import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { lazy, Suspense, type JSX } from "react";
import Loader from "./components/loader/Loader";

// Lazy imports
const Landing = lazy(() => import("./pages/landing/Landing"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const GetStarted = lazy(() => import("./pages/sections/GetStarted"));
const Installation = lazy(() => import("./pages/sections/Installation"));

const withSuspense = (Component: JSX.Element) => (
  <Suspense fallback={<Loader/>}>{Component}</Suspense>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: withSuspense(<Landing />),
  },
  {
    path: "/dashboard",
    element: withSuspense(<Dashboard />),
    children: [
      { path: "getStarted", element: withSuspense(<GetStarted />) },
      { path: "installation", element: withSuspense(<Installation />) },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
