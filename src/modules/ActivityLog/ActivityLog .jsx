import React from "react";
import { Clock, Smartphone, Globe } from "lucide-react";

const logs = [
  {
    user: "Arun Kumar",
    action: "Uploaded vehicle document",
    time: "Just now",
    device: "Chrome on Android",
    location: "Chennai, Tamil Nadu",
  },
  {
    user: "Priya Shankar",
    action: "Updated profile details",
    time: "15 mins ago",
    device: "Safari on iPhone",
    location: "Coimbatore, Tamil Nadu",
  },
  {
    user: "Vignesh R",
    action: "Requested support",
    time: "1 hour ago",
    device: "Edge on Windows",
    location: "Madurai, Tamil Nadu",
  },
  {
    user: "Divya Lakshmi",
    action: "Logged out",
    time: "3 hours ago",
    device: "Firefox on Mac",
    location: "Tiruchirappalli, Tamil Nadu",
  },
  {
    user: "Rajeshwari M",
    action: "Added new contact",
    time: "Yesterday",
    device: "Chrome on Windows",
    location: "Tirunelveli, Tamil Nadu",
  },
    {
    user: "Jayaprakash P",
    action: " new member contact",
    time: "4 weeks ago",
    device: "Chrome on Android",
    location: "Erode, Tamil Nadu",
  },
  {
    user: "Suresh Babu",
    action: "Updated vehicle details",      
    time: "2 weeks ago",
    device: "Safari on iPad",
    location: "Salem, Tamil Nadu",
  }
];

const ActivityLog = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        User Activity Log
      </h2>
      <div className="space-y-6 relative border-l-2 border-gray-200 dark:border-gray-700 pl-4">
        {logs.map((log, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-gray-800 dark:text-white font-medium">
                  {log.user}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Clock size={14} />
                  {log.time}
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                {log.action}
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-4">
                <span className="flex items-center gap-1">
                  <Smartphone size={14} />
                  {log.device}
                </span>
                <span className="flex items-center gap-1">
                  <Globe size={14} />
                  {log.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
