import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/payment-page.css";

export default function PaymentPage() {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/confirmation");
  };

  const backToConfirmatiom = () => {
    navigate("/confirmation");
  };

  const backToShipping = () => {
    navigate("/shipping");
  };

  return (
    <>
      <Navbar />
      <div className="payment-page-container">
        <h1>
          <span className="payment-header" onClick={backToShipping}>
            Shipping
          </span>
          <span className="active">&rarr;</span>
          <span className="active">Payment</span>
          <span>&rarr;</span>
          <span className="confirmation-header" onClick={backToConfirmatiom}>
            Confirmation
          </span>
        </h1>
        <div className="payment-container">
          <div className="payment-form">
            <div className="sign-in-div">
              <div className="sign-in-text">
                <span>Already Have an Account?</span>
                <span>Sign in to speed up your chekout</span>
              </div>
              <button>Sign In</button>
            </div>
            <div className="shipping-address-form">
              <div className="payment-title">
                <h2>Payment Details</h2>
                <div>
                  <img src="/media/svg/lock-icon.svg" alt="" />
                  <span>Secure payment</span>
                </div>
              </div>

              <form>
                <label>
                  Card Number <span>*</span>
                  <input
                    type="text"
                    name=""
                    className="form-input"
                    id=""
                    placeholder="Card Number"
                  />
                </label>
                <div className="split-form">
                  <label>
                    Expiration Date<span>*</span>
                    <input
                      type="text"
                      name=""
                      className="form-input"
                      id=""
                      placeholder="Month"
                    />
                  </label>
                  <label>
                    .
                    <input
                      type="text"
                      name=""
                      className="form-input"
                      id=""
                      placeholder="Year"
                    />
                  </label>
                  <label>
                    CVC <span>*</span>
                    <input
                      type="text"
                      name=""
                      className="form-input"
                      id=""
                      placeholder="Card Number"
                    />
                  </label>
                </div>
                <label>
                  Name on Card <span>*</span>
                  <input
                    type="text"
                    name=""
                    className="form-input"
                    id=""
                    placeholder="Enter your Cardholder Name"
                  />
                </label>
              </form>
            </div>
            <div className="save-card first-line">
              <input type="checkbox" name="" id="" />
              <span>Save credit card information for future use.</span>
            </div>
            <div className="save-card second-line">
              <div></div>
              <span>This will enable instant checkout in the future!</span>
            </div>
          </div>

          <div className="payment-summary">
            <h3>Order Summary</h3>
            <div className="summary-list">
              <div>
                <span>Subtotal</span>
                <span className="subtotal">$39.99</span>
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
              Purchase
            </button>
          </div>
        </div>

        <div className="chatbot">?</div>
      </div>
      <Footer />
    </>
  );
}
