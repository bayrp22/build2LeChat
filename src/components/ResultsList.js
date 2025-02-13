import React from 'react';

const ResultsList = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id} className="border-b p-2">
          {result.title}
        </li>
      ))}
    </ul>
  );
};

export default ResultsList;
