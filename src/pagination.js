import React from "react";
import "./styles.css";
const Pagination = ({ totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / 50); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button style={{ color: "red" }} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
