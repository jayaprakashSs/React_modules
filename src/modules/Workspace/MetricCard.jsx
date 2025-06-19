import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {value}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        {changeType === "positive" ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span
          className={`text-sm font-medium ${
            changeType === "positive" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          vs last month
        </span>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              changeType === "positive" ? "bg-green-500" : "bg-red-500"
            }`}
            style={{
              width: `${Math.abs(parseFloat(change.replace("%", "")))}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
