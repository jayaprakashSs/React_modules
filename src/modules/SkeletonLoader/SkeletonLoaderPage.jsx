import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const SkeletonLoaderPage = () => {
  return (
    <div className="dark:bg-black bg-gray-100 min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white"> Cards</h1>

      {/* 3 Skeleton Cards */}
      <SkeletonLoader type="card" count={3} />

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white"> Avatar</h2>

      <SkeletonLoader type="avatar" />
      <SkeletonLoader type="avatar" />

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white"> List</h2>

      <SkeletonLoader type="list" />
    </div>
  );
};

export default SkeletonLoaderPage;
