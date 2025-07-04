import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPages = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let end = start + maxPagesToShow - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-1 rounded-md mx-1 border text-sm font-medium transition duration-200 ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center p-4 flex-wrap gap-2">
      <button
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 disabled:opacity-50"
      >
        First
      </button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 disabled:opacity-50"
      >
        Prev
      </button>

      {getPages()}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 disabled:opacity-50"
      >
        Next
      </button>
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 disabled:opacity-50"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
