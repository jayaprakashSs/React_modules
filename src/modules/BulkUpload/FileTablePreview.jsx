import React from "react";

const FileTablePreview = ({ data }) => {
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200 border">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            {headers.map((head) => (
              <th key={head} className="px-4 py-2 border">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {headers.map((key) => (
                <td key={key} className="bx-4 py-2 border">{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTablePreview;
