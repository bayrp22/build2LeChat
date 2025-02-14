import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './ProfilePage.css';
import ProfessionalGallery from '../components/ProfessionalGallery';
import RecentActivity from '../components/RecentActivity';

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase
          .from('custom_users')
          .select('*')
          .eq('id', userId)
          .single();

        if (error) throw error;
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="profile-content">
      <h2>{user.username}'s Profile</h2>
      <ProfessionalGallery />
      <RecentActivity />
      {Object.entries(user).map(([key, value]) => (
        <div key={key} className="profile-field">
          <strong>{key}:</strong> {value?.toString() || 'N/A'}
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
