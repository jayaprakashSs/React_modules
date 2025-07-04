import React from "react";
import AuditTrail from "./AuditTrail";

const logs = [
  {
    user: "Admin",
    action: "deleted a user account",
    timestamp: Date.now() - 10000,
    details: { userId: "abc123", username: "test_user" },
  },
  {
    user: "Jayaprakash",
    action: "updated profile settings",
    timestamp: Date.now() - 5000,
  },
];

const AuditTrailPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <AuditTrail logs={logs} />
    </div>
  );
};

export default AuditTrailPage;
