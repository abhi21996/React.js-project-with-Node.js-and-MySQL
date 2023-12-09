import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const EditStandards = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    division_name: '',
    class_teacher: '',
    no_of_students: ''
    // Add more fields as needed
  });

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch data for the selected standard based on the ID
    axios.get(`http://localhost:4008/divisions/${id}`)
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
      await axios.put(`http://localhost:4008/divisions/${id}`, formData);
      console.log('Standard data updated successfully!');
      // Redirect to the standards table after updating
      navigate('/');
    } catch (error) {
      console.error('Error updating standard data:', error);
    }
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className="container mb-3" style={{width:"500px"}}>
        
        <h3>Edit Division</h3>
        <hr />
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="Standard_Name">division_name Name:</label>
            <input
              type="text"
              className="form-control"
              id="Standard_Name"
              name="Standard_Name"
              value={formData.Standard_Name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="division_name">Division Name:</label>
            <input
              type="text"
              className="form-control"
              id="division_name"
              name="division_name"
              value={formData.division_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Academic_Year">class_teacher Year:</label>
            <input
              type="text"
              className="form-control"
              id="class_teacher"
              name="class_teacher"
              value={formData.class_teacher}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="medium">no_of_students:</label>
            <input
              type="number"
              className="form-control"
              id="no_of_students"
              name="no_of_students"
              value={formData.no_of_students}
              onChange={handleChange}
            />
          </div>
          {/* Add more input fields as needed */}
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </main>
  );
};

export default EditStandards;
