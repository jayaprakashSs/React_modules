import React from 'react';
import ThemeToggleTable from './modules/DarkTheme/ThemeToggleTable';
import ExamplePage from './modules/ui/ExamplePage';
import Dashboard from './modules/Card/Dashboard';
import Example from './modules/Toast/Example';
import Example_Toast from './modules/Model/Example_Toast';
import BulkUpload from './modules/BulkUpload/bulkUpload';
import LoadingPage from './modules/Loader/LoadingPage';
import Loader from './modules/Loader/MultiLoader';
import MobileOtpLogin from './modules/Login/MobileOtpLogin';
import Sidebar from './modules/Sidebar/Sidebar';
import ChartsModule from './modules/Charts/ChartsModule';
import ActivityLog from './modules/ActivityLog/ActivityLog ';
import Navbar from './modules/Navbar/GoogleStyleNavbar';
import LogInOTPPage from './modules/Login/LogInOTPPage';
import DashboardAnalytics from './modules/Workspace/DashboardAnalytics';
import Modal from './modules/Model/Modal';
import { LogIn } from 'lucide-react';

const App = () => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 p-4 space-y-4">
      <ThemeToggleTable />
     <BulkUpload/>
      <ExamplePage />
      <Dashboard />
      <Example />
      <LoadingPage />
      <Example_Toast />
      <MobileOtpLogin />
      <Sidebar />
      <ChartsModule />
      <ActivityLog />
      <DashboardAnalytics/>
      <LogInOTPPage />
    </div>
  );
};

export default App;
