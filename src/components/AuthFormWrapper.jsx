import React from 'react';
import Logo from './Logo';

const AuthFormWrapper = ({ title, children }) => (
  <div className="w-full lg:w-1/3 bg-white p-10 flex flex-col justify-center">
    <div className="mb-8">
      <Logo />
    </div>
    <h2 className="text-xl font-semibold text-gray-700 mb-6">{title}</h2>
    {children}
  </div>
);

export default AuthFormWrapper;
