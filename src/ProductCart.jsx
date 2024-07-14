import React from "react";
import "./styles/cart-page.css";
import itemImage from "./assets/png/image-1.png";
import { Outlet, Link } from "react-router-dom";

function ProductCart(props) {
  if (props.data) {
    const { name, current_price, photos, id, url_slug } = props.data;

    const carts = JSON.parse(localStorage.getItem("cart"));

    return (
      <div className="item pt-3">
        <Link to={url_slug}>
          <div className="item-image">
            <img
              src={`https://api.timbu.cloud/images/${photos.at(0).url}`}
              alt="clogs"
            />
          </div>
        </Link>
        <div className="item-info-div">
          <div className="item-info">
            <span className="name">{name}</span>
            <div></div>
            <div className="span-context">
              <span>Colour:</span>
              <span>Black</span>
            </div>
            <div className="span-context">
              <span>Size:</span>
              <span>US 13</span>
            </div>
            <span className="edit">Edit</span>
          </div>
          <div className="price-quantity">
            <span className="price">${current_price.at(0).USD.at(0)}</span>
            <div className="edit-cart">
              <div className="change-quantity">
                <span className="minus">-</span>
                <span className="quantity">{props.qty}</span>
                <span className="plus">+</span>
              </div>
              <span className="delete">Delete</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCart;
