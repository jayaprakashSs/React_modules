import React from "react";

const SkeletonLoader = ({ type = "card", count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <div className="w-full p-4 rounded-lg border shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full" />
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
            </div>
          </div>
        );
      case "avatar":
        return (
          <div className="flex items-center space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/4" />
            </div>
          </div>
        );
      case "list":
        return (
          <div className="animate-pulse space-y-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, idx) => (
        <div key={idx}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
