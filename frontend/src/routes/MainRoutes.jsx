import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../compontens/Auth/Register";
import Login from "../compontens/Auth/Login";
import Additions from "../compontens/Page/Additions";
import Home from "../compontens/Page/Home";
import AddProduct from "../compontens/Product/AddProduct";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },

    {
      link: "/register",
      element: <Register />,
      id: 2,
    },
    {
      link: "/login",
      element: <Login />,
      id: 3,
    },
    {
      link: "/additions",
      element: <Additions />,
      id: 4,
    },
    {
      link: "/add",
      element: <AddProduct />,
      id: 5,
    },
    {
      link: "/",
      element: <Login />,
      id: 6,
    },
  ];

  // const menUrl =

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
