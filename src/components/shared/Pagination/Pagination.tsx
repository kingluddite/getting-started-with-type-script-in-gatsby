// npm
import { Link } from 'gatsby';
import React from 'react';

// styles
import { PaginationStyles } from './styles';

// types
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  pageSize,
  totalCount,
  currentPage,
  // skip,
  base,
  visible,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    // Apply visibility style based on the 'visible' prop
    <PaginationStyles
      style={{
        visibility: visible ? `visible` : `hidden`,
      }}
    >
      {/* Render the 'Prev' link only if there is a previous page */}
      {hasPrevPage && <Link to={`${base}/${prevPage}`}>Prev</Link>}

      {/* Render a link for each page */}
      {Array.from({
        length: totalPages,
      }).map((_, i) => (
        <Link
          key={`link-${i}`}
          // Add 'current' class to the current page's link
          className={currentPage === 1 && i === 0 ? `current` : ``}
          // Generate the link URL for each page
          to={`${base}/${i > 0 ? i + 1 : ``}`}
        >
          {i + 1}
        </Link>
      ))}

      {/* Render the 'Next' link only if there is a next page */}
      {hasNextPage && <Link to={`${base}/${nextPage}`}>Next</Link>}
    </PaginationStyles>
  );
};

export default Pagination;
