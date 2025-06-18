import React from "react";

const MultiLoader = ({ type = "spinner", size = "md", className = "" }) => {
  const sizes = {
    sm: "h-2 w-2",
    md: "h-6 w-6",
    lg: "h-20 w-20",
  };

  const renderSpinner = () => (
    <div className={`relative ${sizes[size]}`}>
      <div
        className={`absolute inset-0 rounded-full border-4 border-blue-500 dark:border-blue-400 animate-spin`}
        style={{ borderTopColor: "transparent" }}
      />
      <div
        className={`absolute inset-1 rounded-full bg-blue-100 dark:bg-blue-900 animate-pulse`}
      />
    </div>
  );

  const renderDots = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" />
    </div>
  );

  const renderBars = () => (
    <div className="flex justify-center items-end space-x-1 h-12">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-2 bg-blue-600 dark:bg-blue-400 rounded animate-[ping_1.2s_ease-in-out_infinite]"
          style={{
            animationDelay: `${i * 0.15}s`,
            height: `${(i + 1) * 8}px`,
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full animate-ping" />
    </div>
  );

  const renderOrbit = () => (
    <div className="relative flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-4 border-dashed border-blue-500 dark:border-blue-400 ${sizes[size]}`}
        style={{ borderTopColor: "transparent" }}
      />
      <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-0 animate-ping" />
    </div>
  );

  const loaderMap = {
    spinner: renderSpinner,
    dots: renderDots,
    bars: renderBars,
    pulse: renderPulse,
    orbit: renderOrbit,
  };

  return <div className={`flex items-center justify-center ${className}`}>{loaderMap[type]()}</div>;
};

export default MultiLoader;
