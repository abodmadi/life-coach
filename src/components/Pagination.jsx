import React from "react";

export default function Pagination({
  totalItems,
  ItemsPerPage,
  currentPage,
  paginate,
}) {
  const pages = [
    ...Array(Math.ceil(totalItems / ItemsPerPage) + 1).keys(),
  ].slice(1);
  
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      paginate(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };
  return (
    <div className="mt-3 mb-8 inline-flex items-center justify-center gap-3">
      <div
        onClick={handlePreviousPage}
        className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-gray-900 font-semibold">{currentPage}-{pages.length}</span>
      <div
        onClick={handleNextPage}
        className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* <a
        onClick={handlePreviousPage}
        className="cursor-pointer inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-slate-900 rtl:rotate-180"
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>

      <p className="text-xs text-slate-900">
        {currentPage}
        <span className="mx-0.25">/</span>
        {pages.length}
      </p>

      <a
        onClick={handleNextPage}
        className="cursor-pointer inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-slate-900 rtl:rotate-180"
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a> */}
    </div>
  );
}
