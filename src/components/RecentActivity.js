import React from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  const activities = [
    { id: 1, description: 'Logged in' },
    { id: 2, description: 'Updated profile picture' },
    { id: 3, description: 'Changed password' },
  ];

  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
