import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react"; // Requires lucide-react

const iconMap = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <XCircle className="w-5 h-5 text-red-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
};

const bgMap = {
  success: "bg-green-50 border-green-500 text-green-800",
  error: "bg-red-50 border-red-500 text-red-800",
  warning: "bg-yellow-50 border-yellow-500 text-yellow-800",
  info: "bg-blue-50 border-blue-500 text-blue-800",
};

const Toast = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 w-full max-w-sm border-l-4 rounded shadow-lg p-4 flex items-start gap-3 animate-slide-in ${bgMap[type]}`}
    >
      <div>{iconMap[type]}</div>
      <div className="flex-1 text-sm">{message}</div>
      <button onClick={onClose} className="text-gray-400 hover:text-black dark:hover:text-white">
        ✕
      </button>
    </div>
  );
};

export default Toast;
