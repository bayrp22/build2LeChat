import React from 'react';
import './NavigationTabs.css';

const NavigationTabs = () => {
  return (
    <div className="navigation-tabs">
      <button className="active">Overview</button>
      <button>My Activity</button>
      <button>Resume/CV</button>
      <button>Professional Gallery</button>
      <button>Connections</button>
    </div>
  );
};

export default NavigationTabs;
