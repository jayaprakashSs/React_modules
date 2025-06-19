# Usage Examples

## Quick Start Examples

### Basic Workspace Setup

```jsx
// App.jsx
import React from "react";
import Workspace from "./modules/Workspace/Workspace";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Workspace />
    </div>
  );
}

export default App;
```

### Mobile-First Application

```jsx
// MobileApp.jsx
import React, { useState, useEffect } from "react";
import Workspace from "./modules/Workspace/Workspace";
import MobileNavigation from "./modules/Workspace/MobileNavigation";

function MobileApp() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {isMobile && (
        <MobileNavigation
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      )}

      <main className={isMobile ? "pb-16" : ""}>
        <Workspace />
      </main>
    </div>
  );
}

export default MobileApp;
```

## Form Examples

### User Registration Form

```jsx
// UserRegistration.jsx
import React, { useState } from "react";
import {
  InputField,
  SelectField,
  CheckboxField,
  FormContainer,
  useFormValidation,
  validationRules,
  Toast,
} from "../modules/Forms/FormComponents";
import { User, Mail, Phone, Lock } from "lucide-react";

function UserRegistration() {
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

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
    { value: "user", label: "Standard User" },
    { value: "viewer", label: "Viewer" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) {
      setToast({
        type: "error",
        message: "Please fix the errors and try again.",
      });
      return;
    }

    setLoading(true);

    try {
      // API call simulation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setToast({ type: "success", message: "User registered successfully!" });
      reset();
    } catch (error) {
      setToast({
        type: "error",
        message: "Registration failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <FormContainer
        title="Create New User"
        subtitle="Fill in the details to register a new user account"
        onSubmit={handleSubmit}
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
            disabled={loading}
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
            disabled={loading}
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
          placeholder="user@company.com"
          icon={Mail}
          disabled={loading}
          required
        />

        <InputField
          label="Phone Number"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          onBlur={() => handleBlur("phone")}
          error={errors.phone}
          placeholder="+1 (555) 123-4567"
          icon={Phone}
          disabled={loading}
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
            placeholder="Create a strong password"
            icon={Lock}
            disabled={loading}
            required
          />

          <InputField
            label="Confirm Password"
            type="password"
            value={values.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            onBlur={() => handleBlur("confirmPassword")}
            error={errors.confirmPassword}
            placeholder="Confirm your password"
            icon={Lock}
            disabled={loading}
            required
          />
        </div>

        <SelectField
          label="User Role"
          value={values.role}
          onChange={(e) => handleChange("role", e.target.value)}
          options={roleOptions}
          error={errors.role}
          placeholder="Select user role"
          disabled={loading}
          required
        />

        <CheckboxField
          label="I agree to the Terms of Service and Privacy Policy"
          checked={values.agreeToTerms}
          onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
          error={errors.agreeToTerms}
          disabled={loading}
          required
        />

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            {loading ? "Creating User..." : "Create User"}
          </button>

          <button
            type="button"
            onClick={reset}
            disabled={loading}
            className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
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
    </div>
  );
}

export default UserRegistration;
```

### Quick Payment Form

```jsx
// QuickPayment.jsx
import React, { useState } from "react";
import {
  InputField,
  SelectField,
  FormContainer,
  useFormValidation,
  validationRules,
  Toast,
} from "../modules/Forms/FormComponents";
import { DollarSign, CreditCard, User } from "lucide-react";

function QuickPayment() {
  const [toast, setToast] = useState(null);
  const [processing, setProcessing] = useState(false);

  const initialValues = {
    amount: "",
    recipient: "",
    description: "",
    paymentMethod: "credit_card",
  };

  const validation = {
    amount: [
      validationRules.required,
      validationRules.amount,
      (value) =>
        parseFloat(value) > 1000 ? "Amount cannot exceed $1,000" : "",
    ],
    recipient: [validationRules.required, validationRules.email],
    description: [validationRules.required, validationRules.minLength(5)],
    paymentMethod: [validationRules.required],
  };

  const { values, errors, handleChange, handleBlur, validateAll, reset } =
    useFormValidation(initialValues, validation);

  const paymentMethods = [
    { value: "credit_card", label: "Credit Card" },
    { value: "bank_transfer", label: "Bank Transfer" },
    { value: "paypal", label: "PayPal" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) {
      setToast({
        type: "error",
        message: "Please fix the errors before submitting.",
      });
      return;
    }

    setProcessing(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setToast({
        type: "success",
        message: `Payment of $${values.amount} sent successfully!`,
      });
      reset();
    } catch (error) {
      setToast({ type: "error", message: "Payment failed. Please try again." });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <FormContainer
        title="Quick Payment"
        subtitle="Send money quickly and securely"
        onSubmit={handleSubmit}
      >
        <InputField
          label="Amount"
          type="number"
          step="0.01"
          min="0"
          max="1000"
          value={values.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
          onBlur={() => handleBlur("amount")}
          error={errors.amount}
          placeholder="0.00"
          icon={DollarSign}
          disabled={processing}
          required
        />

        <InputField
          label="Recipient Email"
          type="email"
          value={values.recipient}
          onChange={(e) => handleChange("recipient", e.target.value)}
          onBlur={() => handleBlur("recipient")}
          error={errors.recipient}
          placeholder="recipient@email.com"
          icon={User}
          disabled={processing}
          required
        />

        <SelectField
          label="Payment Method"
          value={values.paymentMethod}
          onChange={(e) => handleChange("paymentMethod", e.target.value)}
          options={paymentMethods}
          error={errors.paymentMethod}
          disabled={processing}
          required
        />

        <InputField
          label="Description"
          value={values.description}
          onChange={(e) => handleChange("description", e.target.value)}
          onBlur={() => handleBlur("description")}
          error={errors.description}
          placeholder="What is this payment for?"
          disabled={processing}
          required
        />

        <button
          type="submit"
          disabled={processing || !values.amount || !values.recipient}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
        >
          {processing ? "Processing..." : `Send $${values.amount || "0.00"}`}
        </button>
      </FormContainer>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default QuickPayment;
```

### Search and Filter Form

```jsx
// SearchFilter.jsx
import React, { useState, useEffect } from "react";
import {
  InputField,
  SelectField,
  CheckboxField,
  FormContainer,
} from "../modules/Forms/FormComponents";
import { Search, Filter, Calendar } from "lucide-react";

function SearchFilter({ onFilterChange, data = [] }) {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    dateFrom: "",
    dateTo: "",
    status: "",
    showArchived: false,
  });

  const [filteredData, setFilteredData] = useState(data);

  const categories = [
    { value: "", label: "All Categories" },
    { value: "payment", label: "Payments" },
    { value: "user", label: "Users" },
    { value: "report", label: "Reports" },
    { value: "system", label: "System" },
  ];

  const statusOptions = [
    { value: "", label: "All Statuses" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  useEffect(() => {
    // Apply filters
    let filtered = data.filter((item) => {
      const matchesSearch =
        !filters.search ||
        item.title?.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.description?.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory =
        !filters.category || item.category === filters.category;

      const matchesStatus = !filters.status || item.status === filters.status;

      const matchesArchived = filters.showArchived || !item.archived;

      const matchesDateFrom =
        !filters.dateFrom || new Date(item.date) >= new Date(filters.dateFrom);

      const matchesDateTo =
        !filters.dateTo || new Date(item.date) <= new Date(filters.dateTo);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesArchived &&
        matchesDateFrom &&
        matchesDateTo
      );
    });

    setFilteredData(filtered);
    onFilterChange?.(filtered);
  }, [filters, data, onFilterChange]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      dateFrom: "",
      dateTo: "",
      status: "",
      showArchived: false,
    });
  };

  const activeFiltersCount = Object.values(filters).filter(
    (value) => value !== "" && value !== false,
  ).length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Filters
          </h3>
          {activeFiltersCount > 0 && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {activeFiltersCount} active
            </span>
          )}
        </div>

        <button
          onClick={resetFilters}
          disabled={activeFiltersCount === 0}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Search"
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
          placeholder="Search by title or description..."
          icon={Search}
        />

        <SelectField
          label="Category"
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          options={categories}
        />

        <SelectField
          label="Status"
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          options={statusOptions}
        />

        <InputField
          label="Date From"
          type="date"
          value={filters.dateFrom}
          onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
          icon={Calendar}
        />

        <InputField
          label="Date To"
          type="date"
          value={filters.dateTo}
          onChange={(e) => handleFilterChange("dateTo", e.target.value)}
          icon={Calendar}
        />

        <div className="flex items-end">
          <CheckboxField
            label="Show archived items"
            checked={filters.showArchived}
            onChange={(e) =>
              handleFilterChange("showArchived", e.target.checked)
            }
          />
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>
            Showing {filteredData.length} of {data.length} items
          </span>

          {activeFiltersCount > 0 && (
            <span>
              {activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""}{" "}
              applied
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
```

## Advanced Examples

### Multi-Step Form

```jsx
// MultiStepForm.jsx
import React, { useState } from "react";
import {
  InputField,
  SelectField,
  CheckboxField,
  FormContainer,
  useFormValidation,
  validationRules,
  Toast,
} from "../modules/Forms/FormComponents";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [toast, setToast] = useState(null);
  const totalSteps = 3;

  const initialValues = {
    // Step 1: Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Step 2: Company Info
    companyName: "",
    jobTitle: "",
    companySize: "",
    industry: "",

    // Step 3: Preferences
    newsletter: false,
    notifications: true,
    marketingEmails: false,
    terms: false,
  };

  const validation = {
    // Step 1 validations
    firstName: [validationRules.required, validationRules.minLength(2)],
    lastName: [validationRules.required, validationRules.minLength(2)],
    email: [validationRules.required, validationRules.email],
    phone: [validationRules.required, validationRules.phone],

    // Step 2 validations
    companyName: [validationRules.required, validationRules.minLength(2)],
    jobTitle: [validationRules.required],
    companySize: [validationRules.required],
    industry: [validationRules.required],

    // Step 3 validations
    terms: [(value) => (!value ? "You must accept the terms" : "")],
  };

  const { values, errors, handleChange, handleBlur, validateAll } =
    useFormValidation(initialValues, validation);

  const companySizes = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-1000", label: "201-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  const industries = [
    { value: "technology", label: "Technology" },
    { value: "finance", label: "Finance" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "retail", label: "Retail" },
    { value: "other", label: "Other" },
  ];

  const validateCurrentStep = () => {
    const stepValidations = {
      1: ["firstName", "lastName", "email", "phone"],
      2: ["companyName", "jobTitle", "companySize", "industry"],
      3: ["terms"],
    };

    const fieldsToValidate = stepValidations[currentStep] || [];

    return fieldsToValidate.every((field) => {
      const error = validation[field]?.some((rule) =>
        rule(values[field], values),
      );
      return !error;
    });
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    } else {
      setToast({
        type: "error",
        message: "Please fill in all required fields.",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateAll()) {
      try {
        // Submit form
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setToast({
          type: "success",
          message: "Registration completed successfully!",
        });
      } catch (error) {
        setToast({
          type: "error",
          message: "Registration failed. Please try again.",
        });
      }
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", description: "Basic information" },
    { number: 2, title: "Company Info", description: "Work details" },
    { number: 3, title: "Preferences", description: "Final settings" },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep > step.number
                    ? "bg-green-500 text-white"
                    : currentStep === step.number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-600"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.number
                )}
              </div>

              <div className="ml-3 min-w-0">
                <p
                  className={`text-sm font-medium ${
                    currentStep >= step.number
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <FormContainer
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
        onSubmit={handleSubmit}
      >
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                value={values.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                onBlur={() => handleBlur("firstName")}
                error={errors.firstName}
                required
              />

              <InputField
                label="Last Name"
                value={values.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                onBlur={() => handleBlur("lastName")}
                error={errors.lastName}
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
              required
            />

            <InputField
              label="Phone Number"
              type="tel"
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              error={errors.phone}
              required
            />
          </div>
        )}

        {/* Step 2: Company Info */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <InputField
              label="Company Name"
              value={values.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              onBlur={() => handleBlur("companyName")}
              error={errors.companyName}
              required
            />

            <InputField
              label="Job Title"
              value={values.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              onBlur={() => handleBlur("jobTitle")}
              error={errors.jobTitle}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField
                label="Company Size"
                value={values.companySize}
                onChange={(e) => handleChange("companySize", e.target.value)}
                options={companySizes}
                error={errors.companySize}
                placeholder="Select company size"
                required
              />

              <SelectField
                label="Industry"
                value={values.industry}
                onChange={(e) => handleChange("industry", e.target.value)}
                options={industries}
                error={errors.industry}
                placeholder="Select industry"
                required
              />
            </div>
          </div>
        )}

        {/* Step 3: Preferences */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                Communication Preferences
              </h4>

              <CheckboxField
                label="Subscribe to newsletter"
                checked={values.newsletter}
                onChange={(e) => handleChange("newsletter", e.target.checked)}
              />

              <CheckboxField
                label="Receive push notifications"
                checked={values.notifications}
                onChange={(e) =>
                  handleChange("notifications", e.target.checked)
                }
              />

              <CheckboxField
                label="Receive marketing emails"
                checked={values.marketingEmails}
                onChange={(e) =>
                  handleChange("marketingEmails", e.target.checked)
                }
              />
            </div>

            <div className="border-t pt-4">
              <CheckboxField
                label="I agree to the Terms of Service and Privacy Policy"
                checked={values.terms}
                onChange={(e) => handleChange("terms", e.target.checked)}
                error={errors.terms}
                required
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Complete Registration
            </button>
          )}
        </div>
      </FormContainer>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default MultiStepForm;
```

These examples demonstrate real-world usage patterns and best practices for implementing the workspace components and form validation system in your applications.
