import React, { useState } from "react";
import { Menu, ChevronDown, User, Settings, LogOut } from "lucide-react";

const NavItem = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
      >
        {label} <ChevronDown className="w-4 h-4" />
      </button>
      {children && open && (
        <div className="absolute top-full left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md mt-2 rounded z-50 w-48">
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <Icon className="w-4 h-4" /> {label}
  </button>
);

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-3 flex justify-between items-center shadow sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          AppName
        </h1>
      </div>

      <div className="flex gap-6">
        <NavItem label="Dashboard">
          <DropdownItem icon={User} label="Profile" />
          <DropdownItem icon={Settings} label="Settings" />
          <DropdownItem icon={LogOut} label="Logout" />
        </NavItem>

        <NavItem label="Users">
          <DropdownItem icon={User} label="Add User" />
          <DropdownItem icon={User} label="User List" />
        </NavItem>

        <NavItem label="Reports">
          <DropdownItem icon={User} label="Daily Report" />
          <DropdownItem icon={User} label="Monthly Report" />
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
