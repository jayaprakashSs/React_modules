import React from "react";
import {
  User,
  CreditCard,
  FileText,
  UserPlus,
  Settings,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "payment",
      title: "Payment received",
      description: "$2,500 from TechCorp Inc.",
      time: "2 minutes ago",
      icon: CreditCard,
      iconColor: "bg-green-500",
      status: "success",
    },
    {
      id: 2,
      type: "user",
      title: "New user registered",
      description: "Sarah Johnson joined the workspace",
      time: "15 minutes ago",
      icon: UserPlus,
      iconColor: "bg-blue-500",
      status: "info",
    },
    {
      id: 3,
      type: "report",
      title: "Monthly report generated",
      description: "Financial report for November 2024",
      time: "1 hour ago",
      icon: FileText,
      iconColor: "bg-purple-500",
      status: "success",
    },
    {
      id: 4,
      type: "system",
      title: "System update completed",
      description: "Platform updated to version 2.1.4",
      time: "2 hours ago",
      icon: Settings,
      iconColor: "bg-orange-500",
      status: "success",
    },
    {
      id: 5,
      type: "alert",
      title: "High traffic detected",
      description: "Unusual activity on payment gateway",
      time: "3 hours ago",
      icon: AlertCircle,
      iconColor: "bg-red-500",
      status: "warning",
    },
    {
      id: 6,
      type: "user",
      title: "Profile updated",
      description: "John Doe updated security settings",
      time: "4 hours ago",
      icon: User,
      iconColor: "bg-indigo-500",
      status: "info",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case "warning":
        return <AlertCircle className="w-3 h-3 text-yellow-500" />;
      default:
        return <Clock className="w-3 h-3 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
          >
            <div
              className={`p-2 rounded-lg ${activity.iconColor} flex-shrink-0`}
            >
              <activity.icon className="w-4 h-4 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {activity.title}
                </p>
                {getStatusIcon(activity.status)}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>

            <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 12h12M12 6v12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Showing latest 6 activities
          </span>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
