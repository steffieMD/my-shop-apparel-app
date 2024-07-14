import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "../styles/confirmation-page.css";
import confirmationImage from "../assets/png/confirmation-img.png";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/payment");
  };

  const backToShipping = () => {
    navigate("/shipping");
  };
  return (
    <>
      <Navbar />
      <div className="confirmation-page-container">
        <h2>
          <span className="shipping-header" onClick={backToShipping}>
            Shipping
          </span>
          <span>&rarr;</span>
          <span className="payment-header" onClick={handleProceedToCheckout}>
            Payment
          </span>
          <span className="active">&rarr;</span>
          <span className="confirmation-header active">Confirmation</span>
        </h2>

        <div className="main-div">
          <h1>Purchase Successful!</h1>
          <div className="img-msg">
            <img src={confirmationImage} alt="lady holding shopping bag" />

            <div className="summary-div">
              <span className="email-msg">
                An email with all the necessary information, including your
                order details and tracking number, has been sent to your
                provided email address. Below is your receipt.
              </span>
              <div className="summary">
                <div className="summary-list-div">
                  <h3>Receipt</h3>
                  <div className="summary-list">
                    <div>
                      <span>Subtotal</span>
                      <span className="subtotal">$39.99</span>
                    </div>
                    <div>
                      <span>Shipping</span>
                      <span>$10</span>
                    </div>

                    <div className="total">
                      <span>Total</span>
                      <span className="bill-total">$50</span>
                    </div>
                  </div>
                </div>
              </div>
              <button>Track Order</button>
            </div>
          </div>
        </div>

        <div className="chatbot">?</div>
      </div>
      <Footer />
    </>
  );
}
