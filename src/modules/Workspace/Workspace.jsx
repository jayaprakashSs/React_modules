import React, { useState } from "react";
import WorkspaceHeader from "./WorkspaceHeader";
import QuickActions from "./QuickActions";
import MetricCard from "./MetricCard";
import RecentActivity from "./RecentActivity";
import MobileNavigation from "./MobileNavigation";
import Sidebar from "../Sidebar/Sidebar";
import {
  BarChart3,
  Users,
  CreditCard,
  TrendingUp,
  DollarSign,
  Activity,
  Calendar,
  Bell,
  Search,
  Filter,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const chartData = [
  { name: "Jan", value: 4000, revenue: 2400 },
  { name: "Feb", value: 3000, revenue: 1398 },
  { name: "Mar", value: 2000, revenue: 9800 },
  { name: "Apr", value: 2780, revenue: 3908 },
  { name: "May", value: 1890, revenue: 4800 },
  { name: "Jun", value: 2390, revenue: 3800 },
];

const Workspace = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("dashboard");

  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Active Users",
      value: "8,549",
      change: "+18.2%",
      changeType: "positive",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Transactions",
      value: "2,847",
      change: "+7.8%",
      changeType: "positive",
      icon: CreditCard,
      color: "bg-purple-500",
    },
    {
      title: "Growth Rate",
      value: "23.4%",
      change: "-2.1%",
      changeType: "negative",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Navigation */}
      <MobileNavigation
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:block ${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <WorkspaceHeader
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-3 lg:p-6 space-y-4 lg:space-y-6 pb-20 lg:pb-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
                <p className="text-blue-100">
                  Here's what's happening with your business today.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Today</p>
                <p className="text-xl font-semibold">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Charts and Actions Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Revenue Overview
                </h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">
                    7D
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">
                    30D
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">
                    90D
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#3B82F6"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <QuickActions />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <RecentActivity />
            </div>

            {/* Performance Metrics */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Performance Metrics
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">98.5%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Uptime
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">1.2s</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Avg Response
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Tools Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Workspace Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                <BarChart3 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Analytics
                </span>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Users
                </span>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                <CreditCard className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Payments
                </span>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                <Activity className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Reports
                </span>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                <Calendar className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Calendar
                </span>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                <Bell className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Alerts
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workspace;
