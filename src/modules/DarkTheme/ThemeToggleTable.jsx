import React, { useState, useEffect } from "react";

const data = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 30 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 25 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 32 },
  { id: 4, name: "David", email: "david@example.com", age: 29 },
  { id: 5, name: "Eva", email: "eva@example.com", age: 22 },
  { id: 6, name: "Frank", email: "frank@example.com", age: 33 },
  { id: 7, name: "Grace", email: "grace@example.com", age: 28 },
];

function ThemeToggleTable() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col px-6 py-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">

<div className="px-6 py-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 rounded shadow-md">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
      Tailwind Compact Data Table
    </h1>
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  </div>

  <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded">
    <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
      <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-300">
        <tr>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr key={person.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-3">{person.id}</td>
            <td className="px-6 py-3">{person.name}</td>
            <td className="px-6 py-3">{person.email}</td>
            <td className="px-6 py-3">{person.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
}

export default ThemeToggleTable;
