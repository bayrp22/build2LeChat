import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import './Header.css';

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <header className="header">
      <img 
        src={user.user_metadata?.avatar_url || '/default-avatar.png'} 
        alt="Profile" 
        className="profile-pic" 
      />
      <div className="profile-info">
        <h1>{user.user_metadata?.full_name || user.email}</h1>
        <p>{user.user_metadata?.position || 'Member'}</p>
      </div>
    </header>
  );
}
