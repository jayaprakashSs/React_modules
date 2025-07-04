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
import DashboardAnalytics from './modules/Workspace/DashboardAnalytics';
import Modal from './modules/Model/Modal';
import { LogIn } from 'lucide-react';
import WorkspaceHeader from './modules/Workspace/WorkspaceHeader';
import Workspace from './modules/Workspace/Workspace';
import Anti from './modules/anti/anti';
import MyPage from './modules/anti/MyPage';
import ATable from './modules/anti/ATable';
import PaginationPage from './modules/Pagination/PaginationPage';
import SkeletonLoaderPage from './modules/SkeletonLoader/SkeletonLoaderPage';
import StepperPage from './modules/Stepper/StepperPage';
import AuditTrailPage from './modules/AuditTrail/AuditTrailPage';
import HeatMapComponent from './HeatMap';
import Login from './pages/Login';

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
      {/* <Navbar /> */}
      <ActivityLog />
      {/* <DashboardAnalytics/> */}
      {/* <Workspace/> */}
      <Anti />
      <ATable />
      <SkeletonLoaderPage />
      <PaginationPage />
      <StepperPage/>
      <AuditTrailPage/>
      <HeatMapComponent />
      <Login />
    </div>
  );
};

export default App;
