import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const InstaMart = lazy(() => import("./components/InstaMart"));
// const h1=React.createElement("h1",{},"Hi Everyone")

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1)
// const element=<h1>HEllo World    </h1>

// ReactDOM.render(element,document.getElementById('root'))

// const heading = <h1> HEllo World</h1>;

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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);
root.render(<RouterProvider router={appRouter} />);
