import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const EditStandards = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    Standard_Name: '',
    Academic_Year: '',
    medium: '',
    max_students: ''
    // Add more fields as needed
  });

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch data for the selected standard based on the ID
    axios.get(`http://localhost:4008/standards/${id}`)
      .then((response) => {
        setFormData(response.data[[0]]);
      })
      .catch((error) => {
        console.error('Error fetching standard for editing:', error ,"message :", error.message);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update the data for the selected standard
      await axios.put(`http://localhost:4008/standards/${id}`, formData);
      console.log('Standard data updated successfully!');
      // Redirect to the standards table after updating
      navigate('/');
    } catch (error) {
      console.error('Error updating standard data:', error);
    }
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className="container mt-5" style={{display:"flex", justifyContent:"center"}}><div></div>
        
        <form onSubmit={handleSubmit}>
        <h3>Edit Standard</h3>
          <div className="form-group">
            <label htmlFor="Standard_Name">Standard Name:</label>
            <input
              type="text"
              className="form-control"
              id="Standard_Name"
              name="Standard_Name"
              value={formData.Standard_Name}
              onChange={handleChange}
              style={{width:"500px"}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Academic_Year">Academic Year:</label>
            <input
              type="text"
              className="form-control"
              id="Academic_Year"
              name="Academic_Year"
              value={formData.Academic_Year}
              onChange={handleChange}
              style={{width:"500px"}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="medium">Medium:</label>
            <input
              type="text"
              className="form-control"
              id="medium"
              name="medium"
              value={formData.medium}
              onChange={handleChange}
              style={{width:"500px"}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="max_students">Maximum Students:</label>
            <input
              type="text"
              className="form-control"
              id="max_students"
              name="max_students"
              value={formData.max_students}
              onChange={handleChange}
              style={{width:"500px"}}
            />
          </div>
          <br />
          {/* Add more input fields as needed */}
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </main>
  );
};

export default EditStandards;
