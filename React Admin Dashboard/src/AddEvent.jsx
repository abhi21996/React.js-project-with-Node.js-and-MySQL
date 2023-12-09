import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddEvent() {
  const [formData, setFormData] = useState({
    eventTitle: '',
    eventDescription: '',
    eventCategory: '',
    eventDateTime: '',
    eventDuration: '',
    venue: '',
    image1: null,
    image2: null,
    image3: null,
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      // Append string data
      Object.keys(formData).forEach((key) => {
        if (key === 'Image1' || key === 'Image2' || key === 'Image3') {
          // Append file data
          form.append(key, formData[key]);
        } else {
          form.append(key, formData[key]);
        }
      });

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      const response = await axios.post('http://localhost:4008/uploadevent', form, config);
      console.log('Event data saved successfully:', response.data);

      // Navigate back to the home page after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error saving event data:', error, 'details:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Event Title:</label>
            <input style={{ width: "500px" }} type="text" className="form-control" name="eventTitle" value={formData.eventTitle} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Description:</label>
            <textarea style={{ width: "500px" }} className="form-control" name="eventDescription" value={formData.eventDescription} onChange={handleChange} />
          </div>
          <div>
      <label style={{ color: 'white', width:"500px" }} className="form-label">
        Event Ctegory:
                  </label>
                  <select style={{width:"500px" }}
                    name="eventCategory"
                    className="form-control"
                   
                    onChange={handleChange}
                  >
                    <option value="sports">sports</option>
                    <option value="annual function">annual function</option>
                    <option value="Health Weeks">Health Weeks</option>
                    <option value="Inter-school Competitions">Inter-school Competitions</option>
                    <option value="Cultural Events">Cultural Events</option>
                  </select>
        </div>
          <div className="mb-3">
            <label className="form-label">Event Date and Time:</label>
            <input style={{ width: "500px" }} type="datetime-local" className="form-control" name="eventDateTime" value={formData.eventDateTime} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Duration:</label>
            <input style={{ width: "500px" }} type="text" className="form-control" name="eventDuration" value={formData.eventDuration} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Venue:</label>
            <input style={{ width: "500px" }} type="text" className="form-control" name="venue" value={formData.venue} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">image1:</label>
            <input type="file" name="image1" onChange={handleFileChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">image2:</label>
            <input type="file" name="image2" onChange={handleFileChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">image3:</label>
            <input type="file" name="image3" onChange={handleFileChange} />
          </div>
          <button style={{ width: "500px" }} type="submit" className="btn btn-primary">Submit Event</button>
        </form>
      </div>
    </main>
  );
}

export default AddEvent;
