import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Body from "./Body.js";
import Error from "./error.js";
import About from "./about.js";
import Cart from "./cart.js";
import Contact from "./contact.js";
import RestaurentMenu from "./Restaurent_Menu.js";
  import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"

  

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter=createBrowserRouter([
  {
    path : "/",
    element:<AppLayout />,
    errorElement:<Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact/:id",
        element : <Contact name={"phani"} location={"hyderabad"} />
      },
      {
        path : "/cart",
        element : <Cart />
      },
      {
        path : "/restaurent/:id",
        element : <RestaurentMenu />
      },
    ]
  },
  
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
