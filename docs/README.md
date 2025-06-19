# Workspace Documentation

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Components](#components)
- [Mobile-Friendly Features](#mobile-friendly-features)
- [Form Validation](#form-validation)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)
- [Best Practices](#best-practices)

## Overview

This workspace system provides a comprehensive dashboard solution with mobile-first design, robust form validation, and modern React components. Built with Tailwind CSS and designed for business applications.

### Key Features

- 📱 **Mobile-First Design** - Optimized for all screen sizes
- ✅ **Form Validation** - Real-time validation with custom rules
- 🎨 **Professional UI** - Modern, clean interface
- 🌙 **Dark Mode** - Full dark/light theme support
- 📊 **Analytics** - Built-in charts and metrics
- 🔔 **Notifications** - Real-time notification system

## Installation

### Prerequisites

- Node.js (v14 or higher)
- React (v19.1.0)
- Tailwind CSS (v3.4.17)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Required Dependencies

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.516.0",
  "recharts": "^2.15.3"
}
```

## Components

### Core Components

#### Workspace

Main dashboard component that serves as the central hub.

```jsx
import Workspace from "./modules/Workspace/Workspace";

function App() {
  return <Workspace />;
}
```

**Props:** None required
**Features:**

- Responsive layout
- Integrated sidebar
- Metric cards
- Chart visualizations
- Quick actions panel

#### WorkspaceHeader

Professional header with search, notifications, and user profile.

```jsx
import WorkspaceHeader from "./modules/Workspace/WorkspaceHeader";

<WorkspaceHeader setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />;
```

**Props:**

- `setSidebarOpen` (function) - Sidebar toggle handler
- `sidebarOpen` (boolean) - Sidebar state

#### MobileNavigation

Mobile-optimized navigation with bottom tabs and slide-out menu.

```jsx
import MobileNavigation from "./modules/Workspace/MobileNavigation";

<MobileNavigation currentView={currentView} setCurrentView={setCurrentView} />;
```

**Props:**

- `currentView` (string) - Current active view
- `setCurrentView` (function) - View change handler

### Form Components

#### InputField

Versatile input component with validation and icons.

```jsx
import { InputField } from "./modules/Forms/FormComponents";

<InputField
  label="Email Address"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  icon={Mail}
  required
/>;
```

**Props:**

- `label` (string) - Field label
- `type` (string) - Input type (text, email, password, etc.)
- `value` (string) - Current value
- `onChange` (function) - Change handler
- `onBlur` (function) - Blur handler
- `error` (string) - Error message
- `success` (string) - Success message
- `icon` (Component) - Lucide icon component
- `required` (boolean) - Required field indicator

#### SelectField

Dropdown selection component with validation.

```jsx
import { SelectField } from "./modules/Forms/FormComponents";

<SelectField
  label="Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  options={roleOptions}
  error={roleError}
  required
/>;
```

**Props:**

- `label` (string) - Field label
- `value` (string) - Selected value
- `onChange` (function) - Change handler
- `options` (array) - Options array `[{value, label}]`
- `error` (string) - Error message
- `required` (boolean) - Required field indicator

#### CheckboxField

Checkbox component with validation support.

```jsx
import { CheckboxField } from "./modules/Forms/FormComponents";

<CheckboxField
  label="I agree to the terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
  error={agreeError}
  required
/>;
```

## Mobile-Friendly Features

### Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoints:** sm(640px), md(768px), lg(1024px), xl(1280px)
- **Touch-optimized** buttons and interactions

### Mobile Navigation

- **Bottom tab bar** for primary navigation
- **Slide-out sidebar** for secondary navigation
- **Hamburger menu** for compact layouts
- **Floating action button** for quick actions

### Touch Interactions

- **44px minimum** touch targets
- **Swipe gestures** for navigation
- **Long-press** context menus
- **Pull-to-refresh** functionality

### Performance Optimizations

- **Lazy loading** for heavy components
- **Image optimization** with proper sizing
- **Virtualized lists** for large datasets
- **Code splitting** for faster initial load

## Form Validation

### Validation Hook

Use the `useFormValidation` hook for comprehensive form validation:

```jsx
import {
  useFormValidation,
  validationRules,
} from "./modules/Forms/FormComponents";

const validation = {
  email: [validationRules.required, validationRules.email],
  password: [validationRules.required, validationRules.password],
};

const { values, errors, handleChange, handleBlur, validateAll } =
  useFormValidation(initialValues, validation);
```

### Built-in Validation Rules

#### Required Field

```jsx
validationRules.required;
```

Ensures field is not empty.

#### Email Validation

```jsx
validationRules.email;
```

Validates email format using regex.

#### Password Validation

```jsx
validationRules.password;
```

Enforces:

- Minimum 8 characters
- At least one lowercase letter
- At least one uppercase letter
- At least one number

#### Length Validation

```jsx
validationRules.minLength(5);
validationRules.maxLength(50);
```

Validates string length.

#### Custom Validation

```jsx
const customRule = (value, allValues) => {
  if (value !== allValues.password) {
    return "Passwords do not match";
  }
  return "";
};
```

### Real-time Validation

- **On blur** validation for immediate feedback
- **On change** validation for touched fields
- **Form-level** validation on submit
- **Visual indicators** for success/error states

## Usage Examples

### Basic Workspace Setup

```jsx
import React from "react";
import Workspace from "./modules/Workspace/Workspace";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Workspace />
    </div>
  );
}

export default App;
```

### Custom Form with Validation

```jsx
import React from "react";
import {
  InputField,
  FormContainer,
  useFormValidation,
  validationRules,
} from "./modules/Forms/FormComponents";

function LoginForm() {
  const initialValues = { email: "", password: "" };

  const validation = {
    email: [validationRules.required, validationRules.email],
    password: [validationRules.required],
  };

  const { values, errors, handleChange, handleBlur, validateAll } =
    useFormValidation(initialValues, validation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      // Handle successful submission
      console.log("Form valid:", values);
    }
  };

  return (
    <FormContainer title="Login" onSubmit={handleSubmit}>
      <InputField
        label="Email"
        type="email"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
        error={errors.email}
        required
      />

      <InputField
        label="Password"
        type="password"
        value={values.password}
        onChange={(e) => handleChange("password", e.target.value)}
        onBlur={() => handleBlur("password")}
        error={errors.password}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Login
      </button>
    </FormContainer>
  );
}
```

### Mobile-Responsive Layout

```jsx
import React, { useState } from "react";
import MobileNavigation from "./modules/Workspace/MobileNavigation";
import Workspace from "./modules/Workspace/Workspace";

function MobileApp() {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNavigation
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <main className="pb-16 lg:pb-0">
        <Workspace />
      </main>
    </div>
  );
}
```

## API Reference

### Component Props

#### Workspace

No required props. Self-contained dashboard component.

#### WorkspaceHeader

| Prop           | Type     | Required | Description            |
| -------------- | -------- | -------- | ---------------------- |
| setSidebarOpen | function | Yes      | Sidebar toggle handler |
| sidebarOpen    | boolean  | Yes      | Sidebar open state     |

#### MobileNavigation

| Prop           | Type     | Required | Description         |
| -------------- | -------- | -------- | ------------------- |
| currentView    | string   | Yes      | Current active view |
| setCurrentView | function | Yes      | View change handler |

#### InputField

| Prop     | Type      | Required | Description                |
| -------- | --------- | -------- | -------------------------- |
| label    | string    | No       | Field label                |
| type     | string    | No       | Input type (default: text) |
| value    | string    | Yes      | Current value              |
| onChange | function  | Yes      | Change handler             |
| onBlur   | function  | No       | Blur handler               |
| error    | string    | No       | Error message              |
| success  | string    | No       | Success message            |
| icon     | Component | No       | Lucide icon                |
| required | boolean   | No       | Required indicator         |

### Validation Rules

#### Built-in Rules

- `validationRules.required` - Required field
- `validationRules.email` - Email format
- `validationRules.password` - Strong password
- `validationRules.phone` - Phone number format
- `validationRules.amount` - Positive number
- `validationRules.minLength(n)` - Minimum length
- `validationRules.maxLength(n)` - Maximum length

#### Custom Rules

```jsx
const customRule = (value, allValues) => {
  // Return error message or empty string
  return value.length < 5 ? "Too short" : "";
};
```

## Best Practices

### Accessibility

- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **High contrast** color combinations
- **Focus indicators** for all interactive elements

### Performance

- **Lazy load** heavy components
- **Memoize** expensive calculations
- **Debounce** search inputs
- **Optimize** image sizes

### Code Organization

- **Modular components** in separate files
- **Consistent naming** conventions
- **PropTypes** or TypeScript for type safety
- **Error boundaries** for graceful failures

### Testing

- **Unit tests** for validation rules
- **Integration tests** for form submission
- **E2E tests** for critical user flows
- **Accessibility testing** with tools like axe

### Security

- **Input sanitization** before submission
- **CSRF protection** for forms
- **XSS prevention** with proper escaping
- **Content Security Policy** headers

## Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile browsers** with ES6 support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
