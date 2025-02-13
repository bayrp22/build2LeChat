import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from('custom_users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user:', error);
      } else {
        setUser(data);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Add more user-specific information here */}
    </div>
  );
};

export default ProfilePage;
