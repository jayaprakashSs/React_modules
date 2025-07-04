// components/GitHubHeatMap.jsx
import React from "react";
import HeatMap from "@uiw/react-heat-map";

// Generate dummy data for 1 year
const generateData = () => {
  const today = new Date();
  const lastYear = new Date(today);
  lastYear.setFullYear(today.getFullYear() - 1);

  const data = [];
  const currentDate = new Date(lastYear);

  while (currentDate <= today) {
    const dateStr = currentDate.toISOString().split("T")[0];
    const count = Math.floor(Math.random() * 5); // simulate contribution count (0–4)
    data.push({ date: dateStr, count });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const GitHubHeatMap = () => {
  const values = generateData();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contribution Heatmap</h2>
      <HeatMap
        value={values}
        startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
        panelColors={{
          0: "#eeeeee",
          1: "#c6e48b",
          2: "#7bc96f",
          3: "#239a3b",
          4: "#196127",
        }}
        rectSize={12}
        legendCellSize={12}
        weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
        monthLabels={[
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ]}
      />
    </div>
  );
};

export default GitHubHeatMap;
