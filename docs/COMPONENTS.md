# Component API Documentation

## Component Overview

This document provides detailed API documentation for all workspace components.

## Core Components

### Workspace

**File:** `src/modules/Workspace/Workspace.jsx`

Main dashboard component that serves as the central hub for the application.

#### Usage

```jsx
import Workspace from "./modules/Workspace/Workspace";

<Workspace />;
```

#### Props

None required.

#### Features

- Responsive grid layout
- Integrated sidebar navigation
- Real-time metrics display
- Interactive charts and graphs
- Quick actions panel
- Recent activity feed
- Dark/light mode support

#### Example

```jsx
function App() {
  return (
    <div className="min-h-screen">
      <Workspace />
    </div>
  );
}
```

---

### WorkspaceHeader

**File:** `src/modules/Workspace/WorkspaceHeader.jsx`

Professional header component with search, notifications, and user profile management.

#### Usage

```jsx
import WorkspaceHeader from "./modules/Workspace/WorkspaceHeader";

<WorkspaceHeader setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />;
```

#### Props

| Prop           | Type     | Required | Default | Description                           |
| -------------- | -------- | -------- | ------- | ------------------------------------- |
| setSidebarOpen | function | Yes      | -       | Function to toggle sidebar visibility |
| sidebarOpen    | boolean  | Yes      | -       | Current sidebar open state            |

#### Features

- Global search functionality
- Notification dropdown with real-time updates
- User profile dropdown menu
- Dark mode toggle
- Mobile-responsive design

#### Example

```jsx
function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <WorkspaceHeader
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      {/* Rest of layout */}
    </div>
  );
}
```

---

### MobileNavigation

**File:** `src/modules/Workspace/MobileNavigation.jsx`

Mobile-optimized navigation with bottom tabs and slide-out menu.

#### Usage

```jsx
import MobileNavigation from "./modules/Workspace/MobileNavigation";

<MobileNavigation currentView={currentView} setCurrentView={setCurrentView} />;
```

#### Props

| Prop           | Type     | Required | Default | Description                      |
| -------------- | -------- | -------- | ------- | -------------------------------- |
| currentView    | string   | Yes      | -       | Currently active view identifier |
| setCurrentView | function | Yes      | -       | Function to change active view   |

#### Features

- Bottom tab navigation for mobile
- Slide-out sidebar menu
- Touch-optimized interactions
- Floating action button
- Profile section in sidebar

#### Example

```jsx
function MobileApp() {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="mobile-app">
      <MobileNavigation
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      {/* Content based on currentView */}
    </div>
  );
}
```

---

### QuickActions

**File:** `src/modules/Workspace/QuickActions.jsx`

Panel containing frequently used actions and shortcuts.

#### Usage

```jsx
import QuickActions from "./modules/Workspace/QuickActions";

<QuickActions />;
```

#### Props

None required.

#### Features

- Pre-defined action buttons
- Visual icons with hover effects
- Workspace settings access
- Customizable action items

---

### MetricCard

**File:** `src/modules/Workspace/MetricCard.jsx`

Reusable component for displaying key performance indicators.

#### Usage

```jsx
import MetricCard from "./modules/Workspace/MetricCard";

<MetricCard
  title="Total Revenue"
  value="$124,563"
  change="+12.5%"
  changeType="positive"
  icon={DollarSign}
  color="bg-green-500"
/>;
```

#### Props

| Prop       | Type      | Required | Default | Description                         |
| ---------- | --------- | -------- | ------- | ----------------------------------- |
| title      | string    | Yes      | -       | Metric title/label                  |
| value      | string    | Yes      | -       | Main metric value                   |
| change     | string    | Yes      | -       | Change percentage                   |
| changeType | string    | Yes      | -       | 'positive' or 'negative'            |
| icon       | Component | Yes      | -       | Lucide React icon component         |
| color      | string    | Yes      | -       | Tailwind CSS background color class |

#### Example

```jsx
const metrics = [
  {
    title: "Active Users",
    value: "8,549",
    change: "+18.2%",
    changeType: "positive",
    icon: Users,
    color: "bg-blue-500",
  },
];

return (
  <div className="grid grid-cols-4 gap-4">
    {metrics.map((metric, index) => (
      <MetricCard key={index} {...metric} />
    ))}
  </div>
);
```

---

### RecentActivity

**File:** `src/modules/Workspace/RecentActivity.jsx`

Component displaying recent activities and system events.

#### Usage

```jsx
import RecentActivity from "./modules/Workspace/RecentActivity";

<RecentActivity />;
```

#### Props

None required.

#### Features

- Real-time activity feed
- Status indicators
- Timestamp display
- Action buttons
- Scrollable list with load more

---

## Form Components

### InputField

**File:** `src/modules/Forms/FormComponents.jsx`

Versatile input component with built-in validation and styling.

#### Usage

```jsx
import { InputField } from "./modules/Forms/FormComponents";

<InputField
  label="Email Address"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  onBlur={() => validateEmail()}
  error={emailError}
  icon={Mail}
  required
/>;
```

#### Props

| Prop        | Type      | Required | Default | Description                |
| ----------- | --------- | -------- | ------- | -------------------------- |
| label       | string    | No       | -       | Field label text           |
| type        | string    | No       | 'text'  | HTML input type            |
| value       | string    | Yes      | -       | Current input value        |
| onChange    | function  | Yes      | -       | Change event handler       |
| onBlur      | function  | No       | -       | Blur event handler         |
| error       | string    | No       | -       | Error message to display   |
| success     | string    | No       | -       | Success message to display |
| placeholder | string    | No       | -       | Placeholder text           |
| required    | boolean   | No       | false   | Show required indicator    |
| icon        | Component | No       | -       | Lucide React icon          |

#### Features

- Real-time validation feedback
- Password visibility toggle
- Icon support
- Success/error states
- Accessibility compliant

#### Example

```jsx
function ContactForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    if (!email.includes("@")) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  return (
    <InputField
      label="Email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onBlur={validateEmail}
      error={emailError}
      icon={Mail}
      required
    />
  );
}
```

---

### SelectField

**File:** `src/modules/Forms/FormComponents.jsx`

Dropdown selection component with validation support.

#### Usage

```jsx
import { SelectField } from "./modules/Forms/FormComponents";

<SelectField
  label="Country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={countryOptions}
  error={countryError}
  placeholder="Select a country"
  required
/>;
```

#### Props

| Prop        | Type     | Required | Default | Description                     |
| ----------- | -------- | -------- | ------- | ------------------------------- |
| label       | string   | No       | -       | Field label text                |
| value       | string   | Yes      | -       | Selected value                  |
| onChange    | function | Yes      | -       | Change event handler            |
| options     | array    | Yes      | -       | Array of {value, label} objects |
| error       | string   | No       | -       | Error message to display        |
| success     | string   | No       | -       | Success message to display      |
| placeholder | string   | No       | -       | Placeholder option text         |
| required    | boolean  | No       | false   | Show required indicator         |

#### Example

```jsx
const roleOptions = [
  { value: "admin", label: "Administrator" },
  { value: "user", label: "User" },
  { value: "viewer", label: "Viewer" },
];

<SelectField
  label="Role"
  value={selectedRole}
  onChange={(e) => setSelectedRole(e.target.value)}
  options={roleOptions}
  placeholder="Select a role"
  required
/>;
```

---

### CheckboxField

**File:** `src/modules/Forms/FormComponents.jsx`

Checkbox component with validation and custom styling.

#### Usage

```jsx
import { CheckboxField } from "./modules/Forms/FormComponents";

<CheckboxField
  label="I agree to the terms and conditions"
  checked={agreedToTerms}
  onChange={(e) => setAgreedToTerms(e.target.checked)}
  error={termsError}
  required
/>;
```

#### Props

| Prop     | Type     | Required | Default | Description              |
| -------- | -------- | -------- | ------- | ------------------------ |
| label    | string   | Yes      | -       | Checkbox label text      |
| checked  | boolean  | Yes      | -       | Checked state            |
| onChange | function | Yes      | -       | Change event handler     |
| error    | string   | No       | -       | Error message to display |
| required | boolean  | No       | false   | Show required indicator  |

---

### FormContainer

**File:** `src/modules/Forms/FormComponents.jsx`

Container component that wraps forms with consistent styling.

#### Usage

```jsx
import { FormContainer } from "./modules/Forms/FormComponents";

<FormContainer
  title="User Registration"
  subtitle="Create a new account"
  onSubmit={handleSubmit}
  className="max-w-lg mx-auto"
>
  {/* Form fields */}
</FormContainer>;
```

#### Props

| Prop      | Type      | Required | Default | Description               |
| --------- | --------- | -------- | ------- | ------------------------- |
| title     | string    | No       | -       | Form title                |
| subtitle  | string    | No       | -       | Form subtitle/description |
| children  | ReactNode | Yes      | -       | Form content              |
| onSubmit  | function  | Yes      | -       | Form submit handler       |
| className | string    | No       | ''      | Additional CSS classes    |

---

### useFormValidation Hook

**File:** `src/modules/Forms/FormComponents.jsx`

Custom hook for comprehensive form validation management.

#### Usage

```jsx
import {
  useFormValidation,
  validationRules,
} from "./modules/Forms/FormComponents";

const { values, errors, handleChange, handleBlur, validateAll, reset } =
  useFormValidation(initialValues, validationConfig);
```

#### Parameters

| Parameter        | Type   | Required | Description                    |
| ---------------- | ------ | -------- | ------------------------------ |
| initialValues    | object | Yes      | Initial form values            |
| validationConfig | object | Yes      | Validation rules configuration |

#### Returns

| Property     | Type     | Description                           |
| ------------ | -------- | ------------------------------------- |
| values       | object   | Current form values                   |
| errors       | object   | Current validation errors             |
| touched      | object   | Fields that have been interacted with |
| handleChange | function | Handle field value changes            |
| handleBlur   | function | Handle field blur events              |
| validateAll  | function | Validate entire form                  |
| reset        | function | Reset form to initial state           |
| isValid      | boolean  | Whether form is currently valid       |

#### Example

```jsx
function RegistrationForm() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validation = {
    email: [validationRules.required, validationRules.email],
    password: [validationRules.required, validationRules.password],
    confirmPassword: [
      validationRules.required,
      validationRules.confirmPassword,
    ],
  };

  const { values, errors, handleChange, handleBlur, validateAll, reset } =
    useFormValidation(initialValues, validation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Email"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
        error={errors.email}
      />
      {/* More fields */}
    </form>
  );
}
```

---

### Toast

**File:** `src/modules/Forms/FormComponents.jsx`

Notification toast component for success/error messages.

#### Usage

```jsx
import { Toast } from "./modules/Forms/FormComponents";

{
  toast && (
    <Toast
      type={toast.type}
      message={toast.message}
      onClose={() => setToast(null)}
    />
  );
}
```

#### Props

| Prop    | Type     | Required | Default | Description            |
| ------- | -------- | -------- | ------- | ---------------------- |
| type    | string   | Yes      | -       | 'success' or 'error'   |
| message | string   | Yes      | -       | Toast message text     |
| onClose | function | Yes      | -       | Close handler function |

---

## Validation Rules

### Built-in Rules

All validation rules are available from the `validationRules` export:

```jsx
import { validationRules } from "./modules/Forms/FormComponents";
```

#### Available Rules

##### required

Ensures field is not empty.

```jsx
validationRules.required;
```

##### email

Validates email format.

```jsx
validationRules.email;
```

##### password

Enforces strong password requirements:

- Minimum 8 characters
- At least one lowercase letter
- At least one uppercase letter
- At least one number

```jsx
validationRules.password;
```

##### minLength(length)

Validates minimum string length.

```jsx
validationRules.minLength(5);
```

##### maxLength(length)

Validates maximum string length.

```jsx
validationRules.maxLength(100);
```

##### phone

Validates phone number format.

```jsx
validationRules.phone;
```

##### amount

Validates positive numeric amounts.

```jsx
validationRules.amount;
```

##### confirmPassword

Validates password confirmation matches.

```jsx
validationRules.confirmPassword;
```

### Custom Validation Rules

Create custom validation rules by returning error messages:

```jsx
const customRule = (value, allValues) => {
  if (someCondition) {
    return "Error message";
  }
  return ""; // No error
};

const validation = {
  fieldName: [validationRules.required, customRule],
};
```

---

## Styling Guidelines

### Tailwind Classes

All components use Tailwind CSS classes for styling. Key patterns:

#### Colors

- **Primary**: `bg-blue-600`, `text-blue-600`
- **Success**: `bg-green-500`, `text-green-500`
- **Error**: `bg-red-500`, `text-red-500`
- **Warning**: `bg-yellow-500`, `text-yellow-500`

#### Dark Mode

All components support dark mode with `dark:` prefixed classes:

- `dark:bg-gray-800`
- `dark:text-white`
- `dark:border-gray-700`

#### Responsive Design

Mobile-first approach with responsive prefixes:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Custom CSS

Minimal custom CSS is used. Most styling is achieved through Tailwind utilities.

---

## Accessibility

### ARIA Labels

Components include appropriate ARIA attributes:

- `aria-label` for icon buttons
- `aria-describedby` for form errors
- `role` attributes for custom components

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab order is logical and intuitive
- Enter/Space key support for custom buttons

### Screen Reader Support

- Proper heading hierarchy
- Form labels are associated with inputs
- Error messages are announced
- Status updates are communicated

### Focus Management

- Visible focus indicators
- Focus trapping in modals
- Logical focus order

---

## Performance Considerations

### Bundle Size

Components are designed to be tree-shakeable:

```jsx
// Import only what you need
import { InputField, useFormValidation } from "./modules/Forms/FormComponents";
```

### Re-rendering

- Use React.memo for pure components
- Optimize event handlers with useCallback
- Minimize prop drilling

### Loading States

Components support loading states for better UX:

```jsx
<InputField
  disabled={loading}
  placeholder={loading ? "Loading..." : "Enter value"}
/>
```

---

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Mobile Browsers

- **iOS Safari**: 14+
- **Chrome Mobile**: 90+
- **Samsung Internet**: 13+

---

## Testing

### Unit Testing

Test validation rules and component logic:

```jsx
import { validationRules } from "./modules/Forms/FormComponents";

test("email validation", () => {
  expect(validationRules.email("invalid")).toBeTruthy();
  expect(validationRules.email("valid@email.com")).toBeFalsy();
});
```

### Integration Testing

Test form submission and validation flow:

```jsx
import { render, fireEvent } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

test("form submission", () => {
  const { getByRole } = render(<RegistrationForm />);
  // Test form interaction
});
```

### Accessibility Testing

Use tools like axe-core for accessibility testing:

```bash
npm install --save-dev @axe-core/react
```
