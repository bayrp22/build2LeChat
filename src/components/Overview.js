import React from 'react';
import './Overview.css';

const Overview = ({ user }) => {
  const defaultSkills = [
    "UI Design",
    "User Research",
    "Prototyping",
    "Figma",
    "Adobe XD",
    "Sketch",
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overview-grid">
      <div className="about-section">
        <h2>About Me</h2>
        <p>{user?.bio || 'No bio available'}</p>
      </div>
      
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {(user?.skills || defaultSkills).map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
