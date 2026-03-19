import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './pages.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent successfully.');
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="page-header contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to answer any questions you may have.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid-2-col gap-lg">
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <div className="title-underline-left"></div>
            <p className="mb-4">
              Whether you have a question about admissions, curriculum, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="contact-card glass">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Address</h4>
                <p>Navjivan English Medium School<br />Near Platinum Chokdi Ring Road,<br />Unjha, Gujarat 384170, India</p>
              </div>
            </div>

            <div className="contact-card glass">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210 <br/>+91 12345 67890</p>
              </div>
            </div>

            <div className="contact-card glass">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>info@navjivanschool.edu<br/>admissions@navjivanschool.edu</p>
              </div>
            </div>
          </div>

          <div className="inquiry-form-container glass">
            <h3>Send a Message</h3>
            <p>Fill out the form below and we will be in touch shortly.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" required placeholder="Inquiry about..." />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea required rows="5" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299.4957287929271!2d72.38718198112214!3d23.813686081550543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c5fa4cd3d4ec1%3A0x6cbc1daf9fb0cfb5!2sNavjivan%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1773885599390!5m2!1sen!2sin"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Navjivan English Medium School Unjha Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
