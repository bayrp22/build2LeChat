import React, { useState } from 'react';
import './ProfessionalGallery.css';

const ProfessionalGallery = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    // Limit to 6 images
    const limitedFiles = files.slice(0, 6);
    setImages(limitedFiles);
  };

  const removeImage = (fileName) => {
    setImages(images.filter(image => image.name !== fileName));
  };

  return (
    <div className="professional-gallery">
      <h2>Professional Gallery</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <p>{image.name}</p>
            <button onClick={() => removeImage(image.name)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalGallery;
