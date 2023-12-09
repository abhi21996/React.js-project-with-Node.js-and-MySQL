import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddResult() {

  const [formData, setFormData] = useState({
    student_unq_no: '',
    year: '',
    marks: '',
    status: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4008/createresult', formData);
      console.log('Data saved successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="student_unq_no" value={formData.student_unq_no} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" name="year" value={formData.year} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="mark" value={formData.mark} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender:
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save Data</button>
    </form>
  )
}

export default AddResult