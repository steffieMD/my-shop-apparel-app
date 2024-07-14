import React from "react";
import "./styles/navbar-footer.css";
import googleStoreIcon from "./assets/svg/google-shop.svg";
import appleStoreIcon from "./assets/svg/apple-logo.svg";
import mastercardIcon from "./assets/svg/MasterCard.svg";
import visaIcon from "./assets/svg/Visa.svg";
import americanExpIcon from "./assets/svg/American Express.svg";
import applePayIcon from "./assets/svg/ApplePay.svg";
import googlePayIcon from "./assets/svg/Google Pay.svg";
import payoonerIcon from "./assets/svg/Payoneer.svg";
import paypalIcon from "./assets/svg/PayPal.svg";
import rightArrow from "./assets/svg/right-arrow.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="footer-info">
          <div className="footer-links-div">
            <div>
              <a href="#" className="active">
                Need Help?{" "}
              </a>
              <a href="#">FAQs</a>
              <a href="#">Summer Sales</a>
              <a href="#">Track Order</a>
              <a href="#">Returns & Exchanges</a>
              <a href="#">Find Our Stores & Pickup Locations</a>
            </div>
            <div>
              <a href="#" className="active">
                Information{" "}
              </a>
              <a href="#">Delivery</a>
              <a href="#">Refer a Friend</a>
              <a href="#">Student Discount</a>
              <a href="#">Join our Affiliate Program</a>
            </div>
            <div>
              <a href="#" className="active">
                About Us
              </a>
              <a href="#">Our Story</a>
              <a href="#">Careers</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Join our Affiliate Program</a>
            </div>
          </div>
          <div className="sign-up">
            <span className="sign-up-text">
              Sign up for Discounts & Updates
            </span>
            <div className="email-bar">
              <input type="email" name="" id="" placeholder="Email Address" />
              <button>
                <img src={rightArrow} alt="" />
              </button>
            </div>
            <div className="download-text">
              DOWNLOAD AND SHOP FASTER WITH THE APP
            </div>
            <div className="store-btn">
              <div className="google-btn store">
                <span className="icon">
                  <img src={googleStoreIcon} alt="google store icon" />
                </span>
                <div>
                  <span className="small-text">GET IT ON</span>
                  <span className="big-text">Google Play</span>
                </div>
              </div>

              <div className="apple-btn store">
                <span className="icon">
                  <img src={appleStoreIcon} alt="apple logo" />
                </span>
                <div>
                  <span className="small-text">Download on the</span>
                  <span className="big-text">App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="title">
            <div className="horizontal-line"></div>
            <span>Secure Payment</span>
            <div className="horizontal-line"></div>
          </div>
          <div className="payment-options">
            <div className="payment-icons">
              <img src={mastercardIcon} alt="" />
            </div>
            <div className="payment-icons">
              <img src={visaIcon} alt="" />
            </div>
            <div className="payment-icons">
              <img src={americanExpIcon} alt="" />
            </div>
            <div className="payment-icons">
              <img src={applePayIcon} alt="" />
            </div>
            <div className="payment-icons">
              <img src={googlePayIcon} alt="" />
            </div>
            <div className="payment-icons">
              <img src={payoonerIcon} alt="" />
            </div>
            <div className="payment-icons">
              <img src={paypalIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="policy-footer">
        <span>2024 apparel</span>
        <div className="policy">
          <span>Privacy policy</span>
          <span>Refund policy</span>
        </div>
      </div>
    </footer>
  );
}
