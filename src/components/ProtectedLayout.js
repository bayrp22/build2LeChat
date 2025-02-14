import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import NavigationTabs from './NavigationTabs';
import ProtectedRoute from './ProtectedRoute';

const ProtectedLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
      <NavigationTabs activeTab="profile" />
      <main>
        <Outlet /> {/* This renders nested routes */}
      </main>
    </ProtectedRoute>
  );
};

export default ProtectedLayout;
