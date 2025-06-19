import React, { useState } from "react";
import { Eye, EyeOff, AlertCircle, CheckCircle, X } from "lucide-react";

// Input Field Component with Validation
export const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  success,
  placeholder,
  required = false,
  icon: Icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        )}

        <input
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          className={`w-full px-3 py-2 ${Icon ? "pl-10" : ""} ${
            type === "password" ? "pr-10" : ""
          } border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : success
                ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                : focused
                  ? "border-blue-500 focus:ring-blue-500 focus:border-blue-500"
                  : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}

        {error && (
          <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500" />
        )}

        {success && !error && (
          <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center space-x-1">
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </p>
      )}

      {success && !error && (
        <p className="text-sm text-green-600 flex items-center space-x-1">
          <CheckCircle className="w-3 h-3" />
          <span>{success}</span>
        </p>
      )}
    </div>
  );
};

// Select Field Component
export const SelectField = ({
  label,
  value,
  onChange,
  options,
  error,
  success,
  placeholder,
  required = false,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : success
              ? "border-green-500 focus:ring-green-500 focus:border-green-500"
              : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-sm text-red-600 flex items-center space-x-1">
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

// Checkbox Field Component
export const CheckboxField = ({
  label,
  checked,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`w-4 h-4 rounded border transition-colors ${
            error
              ? "border-red-500 text-red-600 focus:ring-red-500"
              : "border-gray-300 text-blue-600 focus:ring-blue-500"
          } focus:ring-2`}
        />
        <label className="text-sm text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center space-x-1">
          <AlertCircle className="w-3 h-3" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

// Form Validation Hook
export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return "";

    for (const rule of rules) {
      const error = rule(value, values);
      if (error) return error;
    }
    return "";
  };

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    const newTouched = {};

    Object.keys(validationRules).forEach((name) => {
      newTouched[name] = true;
      newErrors[name] = validateField(name, values[name]);
    });

    setTouched(newTouched);
    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
    isValid: Object.values(errors).every((error) => !error),
  };
};

// Validation Rules
export const validationRules = {
  required: (value) => {
    if (!value || (typeof value === "string" && value.trim() === "")) {
      return "This field is required";
    }
    return "";
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  },

  minLength: (length) => (value) => {
    if (value && value.length < length) {
      return `Must be at least ${length} characters long`;
    }
    return "";
  },

  maxLength: (length) => (value) => {
    if (value && value.length > length) {
      return `Must be no more than ${length} characters long`;
    }
    return "";
  },

  password: (value) => {
    if (value && value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (value && !/(?=.*[a-z])/.test(value)) {
      return "Password must contain at least one lowercase letter";
    }
    if (value && !/(?=.*[A-Z])/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (value && !/(?=.*\d)/.test(value)) {
      return "Password must contain at least one number";
    }
    return "";
  },

  confirmPassword: (value, allValues) => {
    if (value && value !== allValues.password) {
      return "Passwords do not match";
    }
    return "";
  },

  phone: (value) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    if (value && !phoneRegex.test(value)) {
      return "Please enter a valid phone number";
    }
    return "";
  },

  amount: (value) => {
    const amount = parseFloat(value);
    if (value && (isNaN(amount) || amount <= 0)) {
      return "Please enter a valid amount greater than 0";
    }
    return "";
  },
};

// Form Container Component
export const FormContainer = ({
  title,
  subtitle,
  children,
  onSubmit,
  className = "",
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  );
};

// Success/Error Toast Component
export const Toast = ({ type, message, onClose }) => {
  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm w-full ${
        type === "success"
          ? "bg-green-100 border-l-4 border-green-500 text-green-700"
          : "bg-red-100 border-l-4 border-red-500 text-red-700"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {type === "success" ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{message}</span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
