import React, { useState } from 'react';
import './pages.css';

const Admissions = () => {
  const [formData, setFormData] = useState({
    "Guardian Name": '',
    "Child's Name": '',
    "Grade Applying For": '',
    "Email Address": '',
    "Contact Number": '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you shortly.');
        setFormData({
          "Guardian Name": '',
          "Child's Name": '',
          "Grade Applying For": '',
          "Email Address": '',
          "Contact Number": '',
        });
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        alert('Server not responding. Please make sure the server is running.');
      } else {
        alert('An error occurred while submitting the form. Please try again.');
      }
    }
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="page-header admissions-header">
        <div className="container">
          <h1>Admissions</h1>
          <p>Take the first step towards a bright future.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid-2-col gap-lg">
          <div className="admissions-info">
            <h2>Admission Process</h2>
            <div className="title-underline-left"></div>
            <p className="mb-4">We welcome students from diverse backgrounds. Our admissions process is designed to be transparent and straightforward.</p>
            
            <ul className="steps-list">
              <li>
                <span className="step-number">1</span>
                <div>
                  <h4>Submit Application</h4>
                  <p>Fill out the online application form or visit the school office to collect a physical copy.</p>
                </div>
              </li>
              <li>
                <span className="step-number">2</span>
                <div>
                  <h4>Interaction Session</h4>
                  <p>Shortlisted candidates will be invited for a brief interaction with the faculty.</p>
                </div>
              </li>
              <li>
                <span className="step-number">3</span>
                <div>
                  <h4>Document Verification</h4>
                  <p>Submit required documents including birth certificate, previous school records, and photographs.</p>
                </div>
              </li>
              <li>
                <span className="step-number">4</span>
                <div>
                  <h4>Fee Payment</h4>
                  <p>Complete the admission process by paying the initial admission and term fees.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="inquiry-form-container glass">
            <h3>Admission Inquiry</h3>
            <p>Fill out this form and our admissions team will get in touch with you.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Parent/Guardian Name</label>
                <input type="text" name="Guardian Name" value={formData['Guardian Name']} onChange={handleChange} required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Child's Name</label>
                <input type="text" name="Child's Name" value={formData["Child's Name"]} onChange={handleChange} required placeholder="Jane Doe" />
              </div>
              <div className="form-group">
                <label>Grade Applying For</label>
                <select name="Grade Applying For" value={formData['Grade Applying For']} onChange={handleChange} required>
                  <option value="">Select Grade</option>
                  <option value="kg">Kindergarten</option>
                  <option value="1-5">Primary (1 - 5)</option>
                  <option value="6-8">Middle School (6 - 8)</option>
                  <option value="9-10">High School (9 - 10)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="Email Address" value={formData['Email Address']} onChange={handleChange} required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" name="Contact Number" value={formData['Contact Number']} onChange={handleChange} required placeholder="+91 9876543210" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
