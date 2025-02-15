import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const ProfileUpdate = ({ user, onClose }) => {
  const [username, setUsername] = useState(user?.username || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [avatar, setAvatar] = useState(null);
  const [skills, setSkills] = useState(user?.skills || []);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from('custom_users')
      .update({ username, bio, skills })
      .eq('id', user.id);

    if (error) {
      console.error('Error updating profile:', error);
    } else {
      console.log('Profile updated successfully');
      onClose();
    }
  };

  const handleAvatarUpload = async (e) => {
    // Implementation of handleAvatarUpload function
  };

  return (
    <div className="profile-update-form">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Edit Profile</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself"
            rows="4"
          />
        </div>
        <div className="form-group">
          <label>Skills</label>
          <div className="skills-input-container">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill"
            />
            <button 
              type="button" 
              onClick={handleAddSkill}
              className="add-skill-btn"
            >
              Add
            </button>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span>{skill}</span>
                <button 
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="remove-skill-btn"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="update-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
