import React from "react";
import { Pagination, PageNumber } from "./Paginate.styled";
import { pagination } from "helpers/pagination";

const Paginate = ({ currentPage, totalPages, setCurrentPage }) => {
  const pagesToShow = pagination(currentPage, totalPages);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Pagination>
      <PageNumber disabled={currentPage === 1} onClick={handlePrevPage}>
        &lt;
      </PageNumber>
      {pagesToShow.map((number, index) => (
        <PageNumber
          key={index}
          onClick={() => number !== "..." && handlePageClick(parseInt(number))}
          $active={currentPage === parseInt(number)}
          disabled={number === "..."}
        >
          {number}
        </PageNumber>
      ))}
      <PageNumber
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        &gt;
      </PageNumber>
    </Pagination>
  );
};

export default Paginate;
