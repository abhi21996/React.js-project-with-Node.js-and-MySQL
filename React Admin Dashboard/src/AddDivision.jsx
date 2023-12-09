import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddDivision = () => {
  const [formData, setFormData] = useState({
    division_name: '',
    class_teacher: '',
    no_of_students: ''
    // Add more fields as needed
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint
      await axios.post('http://localhost:4008/adddivisions', formData);

      // Clear the form after successful submission
    //   setFormData({
    //     name: '',
    //     email: '',
    //     // Reset other fields as needed
    //   });
      navigate('/');

      console.log('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634'}}>
         <div className="container mt-5" style={{display:"flex", justifyContent:"center"}}>
    <form style={{width:"500px"}} onSubmit={handleSubmit}>
    <label className="form-label">
      Standard_Name:
        <input style={{width:"500px"}} type="text" className="form-control" name="Standard_Name" value={formData.Standard_Name} onChange={handleChange} />
      </label>
      <label className="form-label">
      division_name:
        <input style={{width:"500px"}} type="text" className="form-control" name="division_name" value={formData.division_name} onChange={handleChange} />
      </label>
      <br />
      <label className="form-label">
      class_teacher:
        <input style={{width:"500px"}} type="text" className="form-control" name="class_teacher" value={formData.class_teacher} onChange={handleChange} />
      </label>
      <br />
      <label className="form-label">
      no_of_students:
        <input style={{width:"500px"}} type="number" className="form-control" name="no_of_students" value={formData.no_of_students} onChange={handleChange} />
      </label>
      <br />
      {/* Add more input fields as needed */}
      <button className='btn btn-primary' type="submit">Submit</button>
    </form>
    </div>
    </main>
  );
};

export default AddDivision;
