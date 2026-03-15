import React, { useState } from 'react';
import './PageStyles.css';
import './Gallery.css';
import { FaTimes, FaUpload } from 'react-icons/fa';

const Gallery = () => {
  // Mock initial photos
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
      title: 'Annual Sports Day',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      title: 'Science Exhibition',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
      title: 'Graduation Ceremony',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      title: 'Classroom Activities',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800',
      title: 'Cultural Festival',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800',
      title: 'Library Inauguration',
    }
  ]);

  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newPhoto = {
        id: Date.now(),
        url: url,
        title: file.name.split('.')[0] || 'New Event Upload',
      };
      setPhotos([newPhoto, ...photos]);
    }
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="page-header gallery-header">
        <div className="container">
          <h1>Event Gallery</h1>
          <p>Memorable moments from Navjivan School.</p>
        </div>
      </div>

      <section className="section container">
        <div className="gallery-controls">
          <label className="btn btn-accent upload-btn glass">
            <FaUpload style={{ marginRight: '8px' }} /> Upload New Photo
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              style={{ display: 'none' }} 
            />
          </label>
        </div>

        <div className="gallery-grid">
          {photos.map(photo => (
            <div key={photo.id} className="gallery-item glass" onClick={() => setSelectedImg(photo.url)}>
              <div className="gallery-img-container">
                <img src={photo.url} alt={photo.title} loading="lazy" />
              </div>
              <div className="gallery-title">{photo.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox fade-in" onClick={() => setSelectedImg(null)}>
          <button className="close-lightbox" onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}>
            <FaTimes />
          </button>
          <img src={selectedImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
