import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './styles';

export const Pagination = ({ setCurrentPage, totalCount, currentPage }: any) => {
  const vacanciesPerPage = 20;
  const totalPages = Math.ceil(totalCount / vacanciesPerPage) || 1;
  const [currentPageNumber, setCurrentPageNumber] = useState(currentPage);

  useEffect(() => {
    setCurrentPage(currentPageNumber);
  }, [currentPageNumber]);

  // Método para cambiar de página
  const handlePageClick = ({ selected }: any) => {
    setCurrentPageNumber(selected + 1);
  };

  // console.log({ currentPageNumber, currentPage });
  // console.log(totalPages);
  // console.log(totalCount);

  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousClassName={'previous_next'}
        nextClassName={'previous_next'}
        pageClassName={'pages'}
        activeClassName={'active'}
        breakClassName={'break-me'}
      />
    </PaginationContainer>
  );
};
