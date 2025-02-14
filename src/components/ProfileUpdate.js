import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const ProfileUpdate = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const user = supabase.auth.user();
    const { error } = await supabase
      .from('custom_users')
      .update({ username, bio })
      .eq('id', user.id);

    if (error) console.error('Error updating profile:', error);
    else console.log('Profile updated successfully');
  };

  const handleAvatarUpload = async (e) => {
    // Implementation of handleAvatarUpload function
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileUpdate;
