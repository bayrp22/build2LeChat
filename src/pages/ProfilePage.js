import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import ProfileLayout from '../components/ProfileLayout';
import './ProfilePage.css';

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
    <ProfileLayout>
      <div className="profile-content">
        <h2>{user.username}'s Profile</h2>
        <p>Email: {user.email}</p>
        {/* Add more user-specific information here */}
      </div>
    </ProfileLayout>
  );
};

export default ProfilePage;
