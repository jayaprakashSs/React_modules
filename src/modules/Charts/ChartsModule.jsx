import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import BarChartCard from "./BarChartCard";

const data = [
  { name: "Jan", uv: 400, pv: 240, amt: 2400 },
  { name: "Feb", uv: 300, pv: 456, amt: 2400 },
  { name: "Mar", uv: 200, pv: 139, amt: 2400 },
  { name: "Apr", uv: 278, pv: 390, amt: 2400 },
  { name: "May", uv: 189, pv: 480, amt: 2400 },
  { name: "Jun", uv: 239, pv: 380, amt: 2400 },
  { name: "Jul", uv: 349, pv: 430, amt: 2400 },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ChartsModule = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Line Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Line Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Bar Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Pie Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Area Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Radar Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart outerRadius={90} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar name="UV" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="PV" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Chart or Placeholder */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
       <BarChartCard/>
      </div>
    </div>
  );
};

export default ChartsModule;
