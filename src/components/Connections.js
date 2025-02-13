import React from 'react';
import './Connections.css';

const Connections = () => {
  const connections = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
  ];

  return (
    <div className="connections">
      <h2>Connections</h2>
      <ul>
        {connections.map((connection) => (
          <li key={connection.id}>{connection.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Connections;
