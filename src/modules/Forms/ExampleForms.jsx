import React, { useState } from "react";
import {
  InputField,
  SelectField,
  CheckboxField,
  FormContainer,
  useFormValidation,
  validationRules,
  Toast,
} from "./FormComponents";
import {
  User,
  Mail,
  Phone,
  Lock,
  CreditCard,
  DollarSign,
  Building,
  Calendar,
} from "lucide-react";

// User Registration Form
export const UserRegistrationForm = () => {
  const [toast, setToast] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeToTerms: false,
  };

  const validation = {
    firstName: [validationRules.required, validationRules.minLength(2)],
    lastName: [validationRules.required, validationRules.minLength(2)],
    email: [validationRules.required, validationRules.email],
    phone: [validationRules.required, validationRules.phone],
    password: [validationRules.required, validationRules.password],
    confirmPassword: [
      validationRules.required,
      validationRules.confirmPassword,
    ],
    role: [validationRules.required],
    agreeToTerms: [(value) => (!value ? "You must agree to the terms" : "")],
  };

  const { values, errors, handleChange, handleBlur, validateAll, reset } =
    useFormValidation(initialValues, validation);

  const roleOptions = [
    { value: "admin", label: "Administrator" },
    { value: "manager", label: "Manager" },
    { value: "user", label: "User" },
    { value: "viewer", label: "Viewer" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setToast({ type: "success", message: "User registered successfully!" });
      reset();
    } else {
      setToast({
        type: "error",
        message: "Please fix the errors and try again.",
      });
    }
  };

  return (
    <>
      <FormContainer
        title="User Registration"
        subtitle="Create a new user account"
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="First Name"
            value={values.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            onBlur={() => handleBlur("firstName")}
            error={errors.firstName}
            placeholder="Enter first name"
            icon={User}
            required
          />

          <InputField
            label="Last Name"
            value={values.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            onBlur={() => handleBlur("lastName")}
            error={errors.lastName}
            placeholder="Enter last name"
            icon={User}
            required
          />
        </div>

        <InputField
          label="Email Address"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          error={errors.email}
          placeholder="Enter email address"
          icon={Mail}
          required
        />

        <InputField
          label="Phone Number"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          onBlur={() => handleBlur("phone")}
          error={errors.phone}
          placeholder="Enter phone number"
          icon={Phone}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Password"
            type="password"
            value={values.password}
            onChange={(e) => handleChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            error={errors.password}
            placeholder="Enter password"
            icon={Lock}
            required
          />

          <InputField
            label="Confirm Password"
            type="password"
            value={values.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            onBlur={() => handleBlur("confirmPassword")}
            error={errors.confirmPassword}
            placeholder="Confirm password"
            icon={Lock}
            required
          />
        </div>

        <SelectField
          label="Role"
          value={values.role}
          onChange={(e) => handleChange("role", e.target.value)}
          options={roleOptions}
          error={errors.role}
          placeholder="Select a role"
          required
        />

        <CheckboxField
          label="I agree to the Terms of Service and Privacy Policy"
          checked={values.agreeToTerms}
          onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
          error={errors.agreeToTerms}
          required
        />

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Register User
          </button>
          <button
            type="button"
            onClick={reset}
            className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Reset Form
          </button>
        </div>
      </FormContainer>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

// Payment Form
export const PaymentForm = () => {
  const [toast, setToast] = useState(null);

  const initialValues = {
    amount: "",
    description: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  };

  const validation = {
    amount: [validationRules.required, validationRules.amount],
    description: [validationRules.required, validationRules.minLength(5)],
    paymentMethod: [validationRules.required],
    cardNumber: [
      validationRules.required,
      (value) => {
        const cleaned = value.replace(/\s/g, "");
        if (cleaned.length !== 16 || !/^\d+$/.test(cleaned)) {
          return "Please enter a valid 16-digit card number";
        }
        return "";
      },
    ],
    expiryDate: [
      validationRules.required,
      (value) => {
        if (value && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
          return "Please enter a valid expiry date (MM/YY)";
        }
        return "";
      },
    ],
    cvv: [
      validationRules.required,
      (value) => {
        if (
          value &&
          (value.length < 3 || value.length > 4 || !/^\d+$/.test(value))
        ) {
          return "Please enter a valid CVV";
        }
        return "";
      },
    ],
    cardName: [validationRules.required, validationRules.minLength(2)],
  };

  const { values, errors, handleChange, handleBlur, validateAll, reset } =
    useFormValidation(initialValues, validation);

  const paymentMethods = [
    { value: "credit_card", label: "Credit Card" },
    { value: "debit_card", label: "Debit Card" },
    { value: "paypal", label: "PayPal" },
    { value: "bank_transfer", label: "Bank Transfer" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setToast({ type: "success", message: "Payment processed successfully!" });
      reset();
    } else {
      setToast({
        type: "error",
        message: "Please fix the errors and try again.",
      });
    }
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, "");
    const groups = cleaned.match(/.{1,4}/g) || [];
    return groups.join(" ").substr(0, 19);
  };

  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.substr(0, 2) + "/" + cleaned.substr(2, 2);
    }
    return cleaned;
  };

  return (
    <>
      <FormContainer
        title="Process Payment"
        subtitle="Enter payment details below"
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Amount"
            type="number"
            step="0.01"
            value={values.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            onBlur={() => handleBlur("amount")}
            error={errors.amount}
            placeholder="0.00"
            icon={DollarSign}
            required
          />

          <SelectField
            label="Payment Method"
            value={values.paymentMethod}
            onChange={(e) => handleChange("paymentMethod", e.target.value)}
            options={paymentMethods}
            error={errors.paymentMethod}
            placeholder="Select method"
            required
          />
        </div>

        <InputField
          label="Description"
          value={values.description}
          onChange={(e) => handleChange("description", e.target.value)}
          onBlur={() => handleBlur("description")}
          error={errors.description}
          placeholder="Payment description"
          required
        />

        {values.paymentMethod &&
          (values.paymentMethod === "credit_card" ||
            values.paymentMethod === "debit_card") && (
            <>
              <InputField
                label="Card Number"
                value={values.cardNumber}
                onChange={(e) =>
                  handleChange("cardNumber", formatCardNumber(e.target.value))
                }
                onBlur={() => handleBlur("cardNumber")}
                error={errors.cardNumber}
                placeholder="1234 5678 9012 3456"
                icon={CreditCard}
                required
              />

              <InputField
                label="Cardholder Name"
                value={values.cardName}
                onChange={(e) => handleChange("cardName", e.target.value)}
                onBlur={() => handleBlur("cardName")}
                error={errors.cardName}
                placeholder="Name on card"
                icon={User}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Expiry Date"
                  value={values.expiryDate}
                  onChange={(e) =>
                    handleChange("expiryDate", formatExpiryDate(e.target.value))
                  }
                  onBlur={() => handleBlur("expiryDate")}
                  error={errors.expiryDate}
                  placeholder="MM/YY"
                  icon={Calendar}
                  maxLength={5}
                  required
                />

                <InputField
                  label="CVV"
                  type="password"
                  value={values.cvv}
                  onChange={(e) => handleChange("cvv", e.target.value)}
                  onBlur={() => handleBlur("cvv")}
                  error={errors.cvv}
                  placeholder="123"
                  icon={Lock}
                  maxLength={4}
                  required
                />
              </div>
            </>
          )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Process Payment
          </button>
          <button
            type="button"
            onClick={reset}
            className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Reset
          </button>
        </div>
      </FormContainer>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

// Company Settings Form
export const CompanySettingsForm = () => {
  const [toast, setToast] = useState(null);

  const initialValues = {
    companyName: "Tech Solutions Inc.",
    companyEmail: "admin@techsolutions.com",
    companyPhone: "+1 (555) 123-4567",
    address: "123 Business St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "US",
    currency: "USD",
    timezone: "America/New_York",
    notifications: true,
    autoBackup: true,
  };

  const validation = {
    companyName: [validationRules.required, validationRules.minLength(2)],
    companyEmail: [validationRules.required, validationRules.email],
    companyPhone: [validationRules.required, validationRules.phone],
    address: [validationRules.required],
    city: [validationRules.required],
    state: [validationRules.required],
    zipCode: [validationRules.required],
    country: [validationRules.required],
    currency: [validationRules.required],
    timezone: [validationRules.required],
  };

  const { values, errors, handleChange, handleBlur, validateAll, reset } =
    useFormValidation(initialValues, validation);

  const currencies = [
    { value: "USD", label: "US Dollar ($)" },
    { value: "EUR", label: "Euro (€)" },
    { value: "GBP", label: "British Pound (£)" },
    { value: "JPY", label: "Japanese Yen (¥)" },
    { value: "CAD", label: "Canadian Dollar (C$)" },
  ];

  const timezones = [
    { value: "America/New_York", label: "Eastern Time (ET)" },
    { value: "America/Chicago", label: "Central Time (CT)" },
    { value: "America/Denver", label: "Mountain Time (MT)" },
    { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
    { value: "UTC", label: "UTC" },
  ];

  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setToast({ type: "success", message: "Settings saved successfully!" });
    } else {
      setToast({
        type: "error",
        message: "Please fix the errors and try again.",
      });
    }
  };

  return (
    <>
      <FormContainer
        title="Company Settings"
        subtitle="Manage your company information and preferences"
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-6">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Company Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Company Name"
                value={values.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                onBlur={() => handleBlur("companyName")}
                error={errors.companyName}
                icon={Building}
                required
              />

              <InputField
                label="Company Email"
                type="email"
                value={values.companyEmail}
                onChange={(e) => handleChange("companyEmail", e.target.value)}
                onBlur={() => handleBlur("companyEmail")}
                error={errors.companyEmail}
                icon={Mail}
                required
              />

              <InputField
                label="Company Phone"
                type="tel"
                value={values.companyPhone}
                onChange={(e) => handleChange("companyPhone", e.target.value)}
                onBlur={() => handleBlur("companyPhone")}
                error={errors.companyPhone}
                icon={Phone}
                required
              />
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Address
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <InputField
                label="Street Address"
                value={values.address}
                onChange={(e) => handleChange("address", e.target.value)}
                onBlur={() => handleBlur("address")}
                error={errors.address}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="City"
                  value={values.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  onBlur={() => handleBlur("city")}
                  error={errors.city}
                  required
                />

                <InputField
                  label="State"
                  value={values.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  onBlur={() => handleBlur("state")}
                  error={errors.state}
                  required
                />

                <InputField
                  label="ZIP Code"
                  value={values.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  onBlur={() => handleBlur("zipCode")}
                  error={errors.zipCode}
                  required
                />
              </div>

              <SelectField
                label="Country"
                value={values.country}
                onChange={(e) => handleChange("country", e.target.value)}
                options={countries}
                error={errors.country}
                required
              />
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField
                label="Default Currency"
                value={values.currency}
                onChange={(e) => handleChange("currency", e.target.value)}
                options={currencies}
                error={errors.currency}
                required
              />

              <SelectField
                label="Timezone"
                value={values.timezone}
                onChange={(e) => handleChange("timezone", e.target.value)}
                options={timezones}
                error={errors.timezone}
                required
              />
            </div>

            <div className="mt-4 space-y-3">
              <CheckboxField
                label="Enable email notifications"
                checked={values.notifications}
                onChange={(e) =>
                  handleChange("notifications", e.target.checked)
                }
              />

              <CheckboxField
                label="Enable automatic backups"
                checked={values.autoBackup}
                onChange={(e) => handleChange("autoBackup", e.target.checked)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Save Settings
          </button>
          <button
            type="button"
            onClick={reset}
            className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Reset Changes
          </button>
        </div>
      </FormContainer>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};
