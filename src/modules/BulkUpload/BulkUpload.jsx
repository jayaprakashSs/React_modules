import React, { useState } from "react";
import * as XLSX from "xlsx";
import FileTablePreview from "./FileTablePreview";

const BulkUpload = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const parsedData = XLSX.utils.sheet_to_json(ws, { defval: "" });
      setData(parsedData);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded p-6 shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Bulk Upload
      </h2>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
        className="mb-4 w-full text-sm text-gray-900 dark:text-gray-200
          file:mr-4 file:py-2 file:px-4
          file:rounded file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-600 file:text-white
          hover:file:bg-blue-700
          dark:file:bg-blue-500 dark:hover:file:bg-blue-600"
      />
      {data.length > 0 && <FileTablePreview data={data} />}
    </div>
  );
};

export default BulkUpload;
