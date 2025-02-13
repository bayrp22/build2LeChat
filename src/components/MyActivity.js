import React from 'react';
import './MyActivity.css';

const MyActivity = () => {
  const activities = [
    { id: 1, date: '2024-01-15', description: 'Updated profile picture' },
    { id: 2, date: '2024-01-10', description: 'Changed password' },
    { id: 3, date: '2024-01-05', description: 'Logged in' },
  ];

  return (
    <div className="my-activity">
      <h2>My Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.date}:</strong> {activity.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyActivity;
