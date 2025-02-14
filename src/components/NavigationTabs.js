import React, { useState } from 'react';
import './NavigationTabs.css';
import Overview from './Overview';
import MyActivity from './MyActivity';
import ResumeCV from './ResumeCV';
import ProfessionalGallery from './ProfessionalGallery';
import Connections from './Connections';

const NavigationTabs = ({ activeTab }) => {
  const [activeTabState, setActiveTabState] = useState('Overview');

  const renderContent = () => {
    switch (activeTabState) {
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
          className={activeTabState === 'Overview' ? 'active' : ''}
          onClick={() => setActiveTabState('Overview')}
        >
          Overview
        </button>
        <button
          className={activeTabState === 'My Activity' ? 'active' : ''}
          onClick={() => setActiveTabState('My Activity')}
        >
          My Activity
        </button>
        <button
          className={activeTabState === 'Resume/CV' ? 'active' : ''}
          onClick={() => setActiveTabState('Resume/CV')}
        >
          Resume/CV
        </button>
        <button
          className={activeTabState === 'Professional Gallery' ? 'active' : ''}
          onClick={() => setActiveTabState('Professional Gallery')}
        >
          Professional Gallery
        </button>
        <button
          className={activeTabState === 'Connections' ? 'active' : ''}
          onClick={() => setActiveTabState('Connections')}
        >
          Connections
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default NavigationTabs;
