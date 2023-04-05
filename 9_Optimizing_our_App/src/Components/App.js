import React, { Suspense , lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import RestaurantMenu from "./RestaurantMenu";
import ErrorElement from "./Error";
import Shimmer from "./Shimmer";
//import Instamart from "./Instamart";

const Instamart = lazy(() => import("./Instamart"));
// doing lazy loading it will create separate bundle which is good for performance optimization of web applications.

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/Restaurantmenu/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
