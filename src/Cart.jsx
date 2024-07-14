import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/cart-page.css";
import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCart from "./ProductCart";

export default function Cart() {
  const apiKey = `861aba5c5594402385828f8b3796cff420240713170045427609`;

  const apiUrl = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=687e20cb6a264b0582796344b87df9b8&Appid=CGHFUV32M4R3K95&Apikey=861aba5c5594402385828f8b3796cff420240713170045427609`;

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setProductData(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/shipping");
  };

  const carts = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className="cart-container">
      <div className="cart-container-div">
        <h1>Shopping Bag</h1>
        <div className="cart-summary">
          <div className="cart">
            <div className="cart-items">
              {carts.length > 0 ? (
                carts.map((cart, i) => {
                  let productPosition = productData.findIndex(
                    (value) => value.id == cart.id
                  );
                  if (productData.length > 0) {
                    return (
                      <ProductCart
                        data={productData[productPosition]}
                        key={i}
                        qty={cart.quantity}
                      />
                    );
                  }
                })
              ) : (
                <>Cart is Empty</>
              )}
            </div>
            <span className="for-you">Recommended for You</span>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-list">
              <div>
                <span>Subtotal</span>
                <span className="subtotal">$0</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div>
                <div className="promo">
                  <span>Discounts</span> <span>Add Promo Code</span>
                </div>
                <span>N/A</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span className="bill-total">$50</span>
              </div>
            </div>
            <button className="checkout-btn" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="rec-items">
        <div className="productListSection">
          <div className="listProduct">
            {productData.map((item, i) => {
              if (i < 3) return <Product data={item} key={i} />;
            })}
          </div>
        </div>
      </div>

      <div className="chatbot">?</div>
    </div>
  );
}
