import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ChevronDown,
  ChevronRight,
  Settings,
  Menu,
  X,
  UserPlus,
  UserCircle,
  Smartphone,
  Monitor,
  Flag ,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);

  const handleDropdownToggle = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleNestedToggle = (key) => {
    setNestedDropdown(nestedDropdown === key ? null : key);
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      link: "#",
    },
    {
      label: "Users",
      icon: Users,
      children: [
        {
          label: "Add User",
          icon: UserPlus,
          children: [
            { label: "Mobile User", icon: Smartphone, link: "#" },
            { label: "Web User", icon: Monitor, link: "#" },
          ],
        },
        {
          label: "User List",
          icon: UserCircle,
          link: "#",
        },
      ],
    }, {
      label: "report",
      icon: Flag,
      children: [
        {
          label: "Add User",
          icon: UserPlus,
          children: [
            { label: "leave report", icon: Smartphone, link: "#" },
            { label: "Web User", icon: Monitor, link: "#" },
          ],
        },
        {
          label: "User List",
          icon: UserCircle,
          link: "#",
        },
      ],
    },
    {
      label: "Settings",
      icon: Settings,
      link: "#",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          {isOpen && (
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              MyApp
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 mt-2 space-y-1 px-2">
          {menuItems.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => item.children && handleDropdownToggle(item.label)}
                className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition"
              >
                <item.icon className="w-5 h-5" />
                {isOpen && (
                  <>
                    <span className="ml-3 text-sm font-medium">{item.label}</span>
                    {item.children && (
                      <span className="ml-auto">
                        {openDropdown === item.label ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </span>
                    )}
                  </>
                )}
              </button>

              {/* First-level Dropdown */}
              {item.children && openDropdown === item.label && isOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((child, childIdx) => (
                    <div key={childIdx}>
                      <button
                        onClick={() =>
                          child.children && handleNestedToggle(child.label)
                        }
                        className="flex items-center w-full text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <child.icon className="w-4 h-4 mr-2" />
                        {child.label}
                        {child.children && (
                          <span className="ml-auto">
                            {nestedDropdown === child.label ? (
                              <ChevronDown size={14} />
                            ) : (
                              <ChevronRight size={14} />
                            )}
                          </span>
                        )}
                      </button>

                      {/* Second-level Nested Dropdown */}
                      {child.children &&
                        nestedDropdown === child.label &&
                        isOpen && (
                          <div className="ml-6 mt-1 space-y-1">
                            {child.children.map((subChild, subIdx) => (
                              <a
                                key={subIdx}
                                href={subChild.link}
                                className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 ml-6"
                              >
                                <subChild.icon className="w-3 h-3 mr-2" />
                                {subChild.label}
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
