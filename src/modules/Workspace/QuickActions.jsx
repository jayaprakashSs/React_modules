import React from "react";
import {
  Plus,
  UserPlus,
  FileText,
  Upload,
  CreditCard,
  Settings,
  BarChart3,
  Download,
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "Add User",
      description: "Invite new team member",
      icon: UserPlus,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "New Transaction",
      description: "Process payment",
      icon: CreditCard,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "Generate Report",
      description: "Create analytics report",
      icon: FileText,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      title: "Upload Data",
      description: "Import CSV files",
      icon: Upload,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      title: "View Analytics",
      description: "Check performance",
      icon: BarChart3,
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
    },
    {
      title: "Export Data",
      description: "Download records",
      icon: Download,
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Quick Actions
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
          >
            <div
              className={`p-2 rounded-lg ${action.color} ${action.hoverColor} transition-colors group-hover:scale-105`}
            >
              <action.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {action.title}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {action.description}
              </p>
            </div>
            <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
          </button>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
          <Settings className="w-4 h-4" />
          <span className="text-sm font-medium">Workspace Settings</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
