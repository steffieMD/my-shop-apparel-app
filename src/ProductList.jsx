import Product from "./Product";
import React from "react";
import "./styles/productlist-page.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function ProductList() {
  const apiUrl = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=687e20cb6a264b0582796344b87df9b8&Appid=CGHFUV32M4R3K95&Apikey=861aba5c5594402385828f8b3796cff420240713170045427609`;

  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setProductData(response.data.items);
    });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = productData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="product-list-container">
        <div className="title-div-men">
          <h1>Men’s Shoes</h1>
          <div className="shoe-options-div">
            <div className="shoe-options active">View All</div>
            <div className="shoe-options">Trainers</div>
            <div className="shoe-options">Loafers</div>
            <div className="shoe-options">Scandals</div>
            <div className="shoe-options">Shoes</div>
            <div className="shoe-options">Crocs</div>
            <div className="shoe-options">Sliders & Flip Flops</div>
            <div className="shoe-options">Boots</div>
          </div>
          <div className="sort-title">
            <span className="sort-btn">
              SORT BY LATEST
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.28886 7.15694L0.631863 1.49994L2.04586 0.0859375L6.99586 5.03594L11.9459 0.0859375L13.3599 1.49994L7.70286 7.15694C7.51534 7.34441 7.26103 7.44972 6.99586 7.44972C6.7307 7.44972 6.47639 7.34441 6.28886 7.15694Z"
                  fill="#0A0A0B"
                />
              </svg>
            </span>
            <span className="show-sorted">SHOWING 1-9 OF 120 RESULTS</span>
          </div>
        </div>
        <div className="productListSection">
          <div className="listProduct">
            {currentPosts.map((item, i) => {
              return <Product data={item} key={i} />;
            })}
          </div>
        </div>
        <div className="bottom-page-direction">
          <button className="prev">&lt; Previous</button>

          <Pagination
            totalPosts={productData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <button className="next">Next &gt;</button>
        </div>
        <div className="loadMore-div">
          <button className="btn-loadMore">Load More</button>
        </div>
      </div>
    </>
  );
}

export default ProductList;
