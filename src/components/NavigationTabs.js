import React, { useState } from 'react';
import './NavigationTabs.css';
import Overview from './Overview';

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      // Add cases for other tabs here
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="navigation-tabs">
        <button
          className={activeTab === 'Overview' ? 'active' : ''}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'My Activity' ? 'active' : ''}
          onClick={() => setActiveTab('My Activity')}
        >
          My Activity
        </button>
        <button
          className={activeTab === 'Resume/CV' ? 'active' : ''}
          onClick={() => setActiveTab('Resume/CV')}
        >
          Resume/CV
        </button>
        <button
          className={activeTab === 'Professional Gallery' ? 'active' : ''}
          onClick={() => setActiveTab('Professional Gallery')}
        >
          Professional Gallery
        </button>
        <button
          className={activeTab === 'Connections' ? 'active' : ''}
          onClick={() => setActiveTab('Connections')}
        >
          Connections
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default NavigationTabs;
