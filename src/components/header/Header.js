import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <h1>Sarah Johnson</h1>
        <p>Senior UX Designer</p>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </header>
  );
};

export default Header;
