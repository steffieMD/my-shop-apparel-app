import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ProductPage from "./pages/ProductPage";
import React from "react";

function App() {
  const routes = [
    {
      path: "/",
      element: <ProductListPage />,
    },
    {
      path: "/cartpage",
      element: <CartPage />,
    },
    {
      path: "/shipping",
      element: <ShippingPage />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/confirmation",
      element: <ConfirmationPage />,
    },
    {
      path: "/:url_slug",
      element: <ProductPage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
