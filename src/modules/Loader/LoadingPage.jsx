import React from "react";
import MultiLoader from "./MultiLoader";

const LoadingPage = () => {
  return (
    <div className=" flex flex-rows items-center justify-center gap-8 bg-gray-100 dark:bg-gray-900">
    <MultiLoader type="spinner" size="md" />
    <MultiLoader type="dots" size="md" />
    <MultiLoader type="bars" size="sm" />
    <MultiLoader type="pulse" size="md" />
    <MultiLoader type="orbit" size="sm" />
    </div>
  );
};

export default LoadingPage;
