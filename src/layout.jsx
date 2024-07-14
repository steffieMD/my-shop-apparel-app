import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { CartProvider } from "react-use-cart";

const RootLayout = ({ children }) => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>{children}</div>
        <Footer />
      </CartProvider>
      ;
    </>
  );
};

export default RootLayout;
