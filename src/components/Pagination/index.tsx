import React from "react";
import ReactPaginate from "react-paginate";

import style from "./Pagination.module.scss";

type PaginationProps = {
  currentPage:number;
  onChangePage:(page:number) => void;
}

export const Pagination:React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={5}
        forcePage={currentPage-1}
        previousLabel="<"
      />
    </div>
  );
};

export default Pagination;
