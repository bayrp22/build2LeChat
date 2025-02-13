import React, { useState } from 'react';
import './ResumeCV.css';

const ResumeCV = () => {
  const [resume, setResume] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  return (
    <div className="resume-cv">
      <h2>Resume/CV</h2>
      <input type="file" onChange={handleFileChange} />
      {resume && (
        <div>
          <h3>Uploaded File:</h3>
          <p>{resume.name}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeCV;
