import React, { useState } from "react";
import Pagination from "./Pagination";

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl text-white font-semibold mb-4"> Pagination </h1>
      {/* Your content here */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PaginationPage;
