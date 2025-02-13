import React from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const user = supabase.auth.user();

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
