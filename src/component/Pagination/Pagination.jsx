import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";

const Pagination = ({ pageCount, changePage }) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={s.pagination}
      previousLinkClassName={s.previousLin}
      nextLinkClassName={s.nextLink}
      disabledClassName={s.disabledPage}
      activeClassName={s.activePage}
    />
  );
};

export default Pagination;
