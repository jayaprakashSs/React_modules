import React from 'react';

const InputField = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  showToggle = false,
  showValue,
  onToggle
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <input
        type={showToggle ? (showValue ? 'text' : 'password') : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-12 px-4 pr-12 rounded-lg bg-gray-100 text-sm text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />
      {showToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="absolute top-0 right-0 h-full px-3 text-white bg-orange-500 hover:bg-orange-600 rounded-r-lg"
        >
          {showValue ? '🙈' : '👁️'}
        </button>
      )}
    </div>
  </div>
);

export default InputField;
