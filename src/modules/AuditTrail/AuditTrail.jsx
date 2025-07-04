import React from "react";

const AuditTrail = ({ logs = [] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Audit Trail
      </h2>

      {logs.length === 0 ? (
        <div className="text-gray-500 dark:text-gray-300">No activity logs found.</div>
      ) : (
        <ul className="space-y-4 max-h-[400px] overflow-auto">
          {logs.map((log, index) => (
            <li key={index} className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>{log.user}</strong> {log.action}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(log.timestamp).toLocaleString()}
              </p>
              {log.details && (
                <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-xs mt-1 overflow-x-auto text-gray-800 dark:text-gray-200">
                  {JSON.stringify(log.details, null, 2)}
                </pre>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AuditTrail;
