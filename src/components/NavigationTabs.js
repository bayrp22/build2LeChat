import React, { useState } from 'react';
import './NavigationTabs.css';
import Overview from './Overview';
import MyActivity from './MyActivity';
import ResumeCV from './ResumeCV';
import ProfessionalGallery from './ProfessionalGallery';
import Connections from './Connections';

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'My Activity':
        return <MyActivity />;
      case 'Resume/CV':
        return <ResumeCV />;
      case 'Professional Gallery':
        return <ProfessionalGallery />;
      case 'Connections':
        return <Connections />;
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
