import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProfileLayout = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="profile-layout">
      <header className="profile-header">
        <h1>Profile</h1>
        {user && <p>Welcome, {user.email}</p>}
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main className="profile-main">
        {children}
      </main>
    </div>
  );
};

export default ProfileLayout;
