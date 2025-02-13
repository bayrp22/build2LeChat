import React from 'react';
import './Overview.css';

const Overview = () => {
  const bio = "Passionate UX designer with 8+ years of experience creating user-centered digital experiences. Specialized in mobile applications and web platforms.";

  const skills = [
    "UI Design",
    "User Research",
    "Prototyping",
    "Figma",
    "Adobe XD",
    "Sketch",
  ];

  return (
    <div className="overview">
      <div className="about-me">
        <h2>About Me</h2>
        <p>{bio}</p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
