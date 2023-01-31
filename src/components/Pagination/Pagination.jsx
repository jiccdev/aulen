import React from 'react';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';
import { icons } from '../Icons';

const PaginationComponent = ({
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
  metaData,
}) => {
  const { GrFormPrevious, GrFormNext } = icons;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    paginate(metaData.page + 1);
  };

  const prevPage = () => {
    paginate(metaData.page - 1);
  };

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={metaData.page - 1 === 0 ? true : false}>
        <PaginationLink
          className="page-link-prev"
          onClick={(ev) => {
            ev.preventDefault();
            prevPage();
          }}
          href="#prev"
        >
          <GrFormPrevious />
          <span>Atrás</span>
        </PaginationLink>
      </PaginationItem>
      {pageNumbers.map((item) => {
        return (
          <PaginationItem
            className={currentPage === item ? 'active' : ''}
            key={item}
          >
            <PaginationLink
              tag="a"
              href="#pageitem"
              onClick={(ev) => {
                ev.preventDefault();
                paginate(item);
              }}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        );
      })}

      <PaginationItem
        disabled={pageNumbers[pageNumbers.length - 1] === metaData.page}
      >
        <PaginationLink
          className="page-link-next"
          onClick={(ev) => {
            ev.preventDefault();
            nextPage();
          }}
          href="#next"
        >
          <span>Siguiente</span>
          <GrFormNext />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
