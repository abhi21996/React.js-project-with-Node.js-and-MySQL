import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeachersAdd() {
  const [formData, setFormData] = useState({
    Profile_Picture: 'null',
    First_Name: '',
    Last_Name: '',
    DOB: '',
    Gender: '',
    Address: '',
    Contact_number: '',
    Email: '',
    Qualification: '',
    Specialization: '',
    Experience: '',
    Joining_Date: '',
    id_Proof: 'null',
    Position_of_joining: '',
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
        // Append file data
        if (key === 'Profile_Picture' || key === 'id_Proof') {
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

      const response = await axios.post('http://localhost:4008/uploadTeacherfile', form, config);
      console.log('Data saved successfully:', response.data);

      // Navigate back to the home page after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error, 'details:', error.message);
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
      <div className='container mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
       <div>
        <form onSubmit={handleSubmit}>
        <h2>Create Teacher</h2>
        <hr />
          <div>
            <label className='form-label'>Add Profile Picture:</label>
            <input type='file' name='Profile_Picture' onChange={handleFileChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>First Name:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='First_Name' value={formData.First_Name} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Last Name:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Last_Name' value={formData.Last_Name} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>DOB:</label>
            <input style={{ width: '500px' }} type='date' className='form-control' name='DOB' value={formData.DOB} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Gender:</label>
            <select style={{ width: '500px' }} name='Gender' className='form-control' onChange={handleChange}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Address:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Address' value={formData.Address} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Contact Number:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Contact_number' value={formData.Contact_number} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Email' value={formData.Email} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Qualification:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Qualification' value={formData.Qualification} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Specialization:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Specialization' value={formData.Specialization} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Experience:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Experience' value={formData.Experience} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Joining Date:</label>
            <input style={{ width: '500px' }} type='date' className='form-control' name='Joining_Date' value={formData.Joining_Date} onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>ID Proof:</label>
            <input type='file' name='id_Proof' onChange={handleFileChange} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Position of Joining:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Position_of_joining' value={formData.Position_of_joining} onChange={handleChange} />
          </div>

          <button style={{ width: '500px' }} type='submit' className='btn btn-primary'>
            Save Data
          </button>
        </form>
        </div>
      </div>
    </main>
  );
}

export default TeachersAdd;
