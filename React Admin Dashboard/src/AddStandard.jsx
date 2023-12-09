import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddStandard = () => {
  const [formData, setFormData] = useState({
    Standard_Name: '',
    Academic_Year: '',
    medium: '',
    max_students: ''
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
      await axios.post('http://localhost:4008/addstandards', formData);

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
    <form onSubmit={handleSubmit}>
      <label className="form-label">
      Standard_Name:
        <input style={{width:"500px"}} type="text" className="form-control" name="Standard_Name" value={formData.Standard_Name} onChange={handleChange} />
      </label>
      <br />
      <label className="form-label">
      Academic_Year:
        <input style={{width:"500px"}} type="number" className="form-control" name="Academic_Year" value={formData.Academic_Year} onChange={handleChange} />
      </label>
      <br />
      <div>
      <label style={{ color: 'white', width:"500px" }} className="form-label">
        Medium:
                  </label>
                  <select style={{width:"500px" }}
                    name="medium"
                    className="form-control"
                   
                    onChange={handleChange}
                  >
                    <option value="hindi">Hindi</option>
                    <option value="e nglish">English</option>
                    <option value="marathi">Marathi</option>
                  </select>
        </div>
      <br />
      <label className="form-label">
      max_students:
        <input style={{width:"500px"}} type="number" className="form-control" name="max_students" value={formData.max_students} onChange={handleChange} />
      </label>
      <br />
      {/* Add more input fields as needed */}
      <button className='btn btn-primary' type="submit">Submit</button>
    </form>
    </div>
    </main>
  );
};

export default AddStandard;
