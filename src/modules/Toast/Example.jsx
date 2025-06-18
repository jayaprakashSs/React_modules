import React, { useState } from "react";
import Toast from "./Toast";

const Example = () => {
  const [toast, setToast] = useState(null);

  const showToast = (type) => {
    const messages = {
      success: "Your changes have been saved successfully!",
      error: "Something went wrong. Please try again.",
      warning: "Be cautious! You are about to delete data.",
      info: "New updates are available. Check them out!",
    };
    setToast({ message: messages[type], type });
  };

  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-900 ">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Toast Notification Example
      </h1>

      <div className="space-x-4 mb-6">
        <button
          onClick={() => showToast("success")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Show Success
        </button>
        <button
          onClick={() => showToast("error")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Show Error
        </button>
        <button
          onClick={() => showToast("warning")}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Show Warning
        </button>
        <button
          onClick={() => showToast("info")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Show Info
        </button>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Example;
