import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlay, FaTimes } from 'react-icons/fa';
import './pages.css';

const Photos = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Dummy data for photos and videos related to an event without titles
  const [mediaItems] = useState([
    {
      id: 1,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 7,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 8,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1520881363902-a0ff4e722963?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 9,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1506869640319-ce1a17b96126?auto=format&fit=crop&q=80&w=800'
    }
  ]);

  const [selectedMedia, setSelectedMedia] = useState(null);

  const getEventName = () => {
    const events = {
      1: 'Annual Sports Day',
      2: 'Science Exhibition',
      3: 'Graduation Ceremony',
      4: 'Classroom Activities',
      5: 'Cultural Festival',
      6: 'Library Inauguration'
    };
    return events[eventId] || 'Event';
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="page-header gallery-header">
        <div className="container" style={{ position: 'relative' }}>
          <button 
            className="btn btn-accent glass" 
            style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}
            onClick={() => navigate('/gallery')}
          >
            <FaArrowLeft /> Back
          </button>
          <h1>{getEventName()}</h1>
        </div>
      </div>

      <section style={{ padding: '0 5vw', marginBottom: '80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gridAutoRows: '120px',
          gap: '4px',
          width: '100%',
        }}>
          {mediaItems.map((item, index) => {
            // Give some items a double span for a more dynamic Google Photos look (masonry-ish grid)
            const isLarge = index === 0 || index === 5;
            const colSpan = isLarge ? 2 : 1;
            const rowSpan = isLarge ? 2 : 1;

            return (
              <div 
                key={item.id} 
                onClick={() => setSelectedMedia(item)}
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  backgroundColor: '#f0f0f0'
                }}
              >
                <img 
                  src={item.type === 'video' ? item.thumbnail : item.url} 
                  alt="" 
                  loading="lazy" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {item.type === 'video' && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px'
                  }}>
                    <FaPlay />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="lightbox fade-in" onClick={() => setSelectedMedia(null)}>
          <button className="close-lightbox" onClick={(e) => { e.stopPropagation(); setSelectedMedia(null); }}>
            <FaTimes />
          </button>
          
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90%', maxHeight: '90%' }}>
            {selectedMedia.type === 'video' ? (
              <video 
                src={selectedMedia.url} 
                controls 
                autoPlay 
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
              />
            ) : (
              <img 
                src={selectedMedia.url} 
                alt="Enlarged view" 
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
