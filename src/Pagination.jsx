import React from "react";
import "./pagination.css";
const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  console.log(postsPerPage);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, i) => {
        return (
          <button key={i} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
