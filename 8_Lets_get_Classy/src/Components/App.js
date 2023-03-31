import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import RestaurantMenu from "./RestaurantMenu";
import ErrorElement from "./Error";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter =
  createBrowserRouter([
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
      ],
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
