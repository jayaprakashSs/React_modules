import React from 'react';

const IllustrationPanel = () => (
  <div className="hidden lg:flex w-2/3 bg-[#f1f3f6] items-center justify-center relative">
    <div className="relative w-[500px] h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-6xl">🔐</div>
      <div className="absolute top-16 left-36 w-[120px] h-[250px] bg-gray-800 rounded-2xl p-3">
        <div className="w-full h-full bg-white rounded-xl p-3 space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-8 bg-gray-100 rounded"></div>
            </div>
          ))}
          <div className="flex justify-center space-x-1 pt-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-40 left-10 w-[150px] h-[250px] bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg flex items-center justify-center text-4xl">👤</div>
    </div>
  </div>
);

export default IllustrationPanel;
