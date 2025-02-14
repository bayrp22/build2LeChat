import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';
import NavigationTabs from './components/NavigationTabs';
import Header from './components/header/Header';
import RecentActivity from './components/RecentActivity';
import ProfessionalGallery from './components/ProfessionalGallery';
import ProtectedLayout from './components/ProtectedLayout';

function App() {
  console.log('[Debug] Header component:', Header);
  console.log('[Debug] NavigationTabs component:', NavigationTabs);
  console.log('[Debug] ProfessionalGallery component:', ProfessionalGallery);
  console.log('[Debug] RecentActivity component:', RecentActivity);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Protected routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/profile" element={<Navigate to="/login" />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
