import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Eye,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Star,
  Target,
  Zap,
  Award,
} from "lucide-react";

const DashboardAnalytics = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  // Sample data - in real app, this would come from API
  const [analyticsData, setAnalyticsData] = useState({
    metrics: {
      revenue: { value: 124563, change: 12.5, trend: "up" },
      users: { value: 8549, change: 18.2, trend: "up" },
      orders: { value: 2847, change: -3.1, trend: "down" },
      conversion: { value: 3.2, change: 5.7, trend: "up" },
    },
    chartData: [
      { name: "Mon", revenue: 4000, users: 2400, orders: 240 },
      { name: "Tue", revenue: 3000, users: 1398, orders: 139 },
      { name: "Wed", revenue: 5000, users: 9800, orders: 980 },
      { name: "Thu", revenue: 2780, users: 3908, orders: 390 },
      { name: "Fri", revenue: 1890, users: 4800, orders: 480 },
      { name: "Sat", revenue: 2390, users: 3800, orders: 380 },
      { name: "Sun", revenue: 3490, users: 4300, orders: 430 },
    ],
    topProducts: [
      { name: "Premium Plan", sales: 1234, change: 15.2 },
      { name: "Basic Plan", sales: 987, change: -5.1 },
      { name: "Enterprise", sales: 756, change: 22.3 },
      { name: "Add-ons", sales: 432, change: 8.7 },
    ],
    recentActivity: [
      {
        type: "sale",
        message: "New subscription: Premium Plan",
        time: "2 min ago",
        amount: "$299",
      },
      {
        type: "user",
        message: "New user registration",
        time: "5 min ago",
        amount: null,
      },
      {
        type: "goal",
        message: "Monthly target achieved",
        time: "1 hour ago",
        amount: "120%",
      },
      {
        type: "alert",
        message: "Server response time improved",
        time: "2 hours ago",
        amount: null,
      },
    ],
  });

  const timeRanges = [
    { value: "1d", label: "24H" },
    { value: "7d", label: "7D" },
    { value: "30d", label: "30D" },
    { value: "90d", label: "90D" },
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const formatValue = (value, type) => {
    switch (type) {
      case "currency":
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(value);
      case "number":
        return new Intl.NumberFormat("en-US").format(value);
      case "percentage":
        return `${value}%`;
      default:
        return value;
    }
  };

  const MetricCard = ({
    title,
    value,
    change,
    trend,
    icon: Icon,
    type = "number",
    color,
  }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {formatValue(value, type)}
        </p>
        <div className="flex items-center space-x-2">
          {trend === "up" ? (
            <ArrowUpRight className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          )}
          <span
            className={`text-sm font-medium ${
              trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            vs last period
          </span>
        </div>
      </div>
    </div>
  );

  const SimpleChart = ({ data, selectedMetric }) => {
    const maxValue = Math.max(...data.map((d) => d[selectedMetric]));

    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Performance Trend
          </h3>
          <div className="flex items-center space-x-2">
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="revenue">Revenue</option>
              <option value="users">Users</option>
              <option value="orders">Orders</option>
            </select>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between space-x-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center space-y-2"
            >
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t-lg relative overflow-hidden">
                <div
                  className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                  style={{
                    height: `${(item[selectedMetric] / maxValue) * 200}px`,
                    minHeight: "4px",
                  }}
                />
              </div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {item.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                {formatValue(
                  item[selectedMetric],
                  selectedMetric === "revenue" ? "currency" : "number",
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const TopProducts = ({ products }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Top Products
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {product.sales} sales
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {product.change > 0 ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  product.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {Math.abs(product.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const RecentActivity = ({ activities }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const getIcon = (type) => {
            switch (type) {
              case "sale":
                return <DollarSign className="w-4 h-4 text-green-500" />;
              case "user":
                return <Users className="w-4 h-4 text-blue-500" />;
              case "goal":
                return <Target className="w-4 h-4 text-purple-500" />;
              case "alert":
                return <Zap className="w-4 h-4 text-orange-500" />;
              default:
                return <Activity className="w-4 h-4 text-gray-500" />;
            }
          };

          return (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg">
                {getIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </p>
              </div>
              {activity.amount && (
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {activity.amount}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const QuickStats = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <Eye className="w-5 h-5" />
          <span className="text-sm font-medium">Page Views</span>
        </div>
        <p className="text-2xl font-bold">45.2K</p>
        <p className="text-xs text-blue-100">+8.2% from yesterday</p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <Award className="w-5 h-5" />
          <span className="text-sm font-medium">Conversion</span>
        </div>
        <p className="text-2xl font-bold">3.2%</p>
        <p className="text-xs text-green-100">+0.4% from last week</p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <Star className="w-5 h-5" />
          <span className="text-sm font-medium">Rating</span>
        </div>
        <p className="text-2xl font-bold">4.8</p>
        <p className="text-xs text-purple-100">+0.1 from last month</p>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-5 h-5" />
          <span className="text-sm font-medium">Performance</span>
        </div>
        <p className="text-2xl font-bold">99.9%</p>
        <p className="text-xs text-orange-100">No downtime</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your business performance and key metrics
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-1">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  timeRange === range.value
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-4 h-4 text-gray-600 dark:text-gray-400 ${isLoading ? "animate-spin" : ""}`}
            />
          </button>

          <button className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <QuickStats />

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value={analyticsData.metrics.revenue.value}
          change={analyticsData.metrics.revenue.change}
          trend={analyticsData.metrics.revenue.trend}
          icon={DollarSign}
          type="currency"
          color="bg-green-500"
        />
        <MetricCard
          title="Active Users"
          value={analyticsData.metrics.users.value}
          change={analyticsData.metrics.users.change}
          trend={analyticsData.metrics.users.trend}
          icon={Users}
          type="number"
          color="bg-blue-500"
        />
        <MetricCard
          title="Total Orders"
          value={analyticsData.metrics.orders.value}
          change={analyticsData.metrics.orders.change}
          trend={analyticsData.metrics.orders.trend}
          icon={ShoppingCart}
          type="number"
          color="bg-purple-500"
        />
        <MetricCard
          title="Conversion Rate"
          value={analyticsData.metrics.conversion.value}
          change={analyticsData.metrics.conversion.change}
          trend={analyticsData.metrics.conversion.trend}
          icon={BarChart3}
          type="percentage"
          color="bg-orange-500"
        />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <SimpleChart
            data={analyticsData.chartData}
            selectedMetric={selectedMetric}
          />
        </div>
        <div className="lg:col-span-1">
          <TopProducts products={analyticsData.topProducts} />
        </div>
      </div>
      {/* Footer Summary */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Monthly Goal
            </h4>
            <p className="text-3xl font-bold text-blue-600 mt-2">87%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              $87K of $100K target
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Team Performance
            </h4>
            <p className="text-3xl font-bold text-green-600 mt-2">A+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Exceeding expectations
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Next Milestone
            </h4>
            <p className="text-3xl font-bold text-purple-600 mt-2">13</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Days to $100K target
            </p>
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <RecentActivity activities={analyticsData.recentActivity} />
      </div>


    </div>
  );
};

export default DashboardAnalytics;
