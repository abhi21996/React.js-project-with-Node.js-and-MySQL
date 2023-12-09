import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function StuReg() {

  // const [file, setFile] = useState([]);

  //   const handleFileChange = (e) => {
  //     // setFile([...file, e.target.files[0]]);
  //      setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.files[0],
  //   });
  // };

  const [formData, setFormData] = useState({
    Profile_Picture: 'null',
    First_Name: '',
    Middle_Name: '',
    Last_Name: '',
    DOB: '',
    PlaceOf_Birth: '',
    Blood_Group: '',
    Gender: '',
    Cast: '',
    Nationality: '',
    Religion: '',
    student_contact_no: '',
    student_email_address: '',
    Parent_Name: '',
    Occupation: '',
    Annual_salary: '',
    parent_contact_no: '',
    parent_email_address: '',
    Current_Address: '',
    Current_Address_City: '',
    Current_Address_District: '',
    Current_Address_State: '',
    Current_Address_Pin_Code: '',
    Permanant_Address: '',
    Permanant_Address_City: '',
    Permanant_Address_District: '',
    Permanant_Address_State: '',
    Permanant_Address_Pincode: '',
    Last_School_Attended: '',
    Year_Of_Passing: '',
    Aadhar_Card: 'null',
    Birth_Certificate: 'null'
 
  });

  const navigate = useNavigate()

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
        if (key === 'Profile_Picture' || key === 'Aadhar_Card' || key === 'Birth_Certificate') {
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

      const response = await axios.post('http://localhost:4008/uploadfile', form, config);
      console.log('Data saved successfully:', response.data);

      // Navigate back to the home page after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error, "details:",error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634'}}>
         <div className="container mt-5" style={{display:"flex", justifyContent:"center"}}>
      <form onSubmit={handleSubmit}>
        
      <div><h3>Student details</h3></div>
        <hr />
        <div>
        <label className="form-label">Add Profile Picture:</label>
        <input type="file" name="Profile_Picture" onChange={handleFileChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">First_Name:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="First_Name" value={formData.First_Name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Middle_Name:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="Middle_Name" value={formData.Middle_Name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Last_Name:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Last_Name" value={formData.Last_Name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">DOB:</label>
          <input style={{width:"500px" }} type="date" className="form-control" name="DOB" value={formData.DOB	} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">PlaceOf_Birth:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="PlaceOf_Birth" value={formData.PlaceOf_Birth} onChange={handleChange} />
        </div>
        <div className="mb-3">
        <label style={{ color: 'white', width:"500px" }} className="form-label">
                    Blood Group:
                  </label>
                  <select style={{width:"500px" }}
                    name="Blood_Group"
                    className="form-control"
                   
                    onChange={handleChange}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
        </div>
        <div className="mb-3">
        <label style={{ color: 'white', marginRight: '10px' }}>
                      Male
                      <input
                        type="radio"
                        name="Gender"
                        value="male"
                        
                        onChange={handleChange}
                      />
                    </label>
                    <label style={{ color: 'white' }}>
                      Female
                      <input
                        type="radio"
                        name="Gender"
                        value="female"
                       
                        onChange={handleChange}
                      />
                    </label>
        </div>
        <div className="mb-3">
          <label  className="form-label">Cast:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="Cast" value={formData.Cast} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nationality:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Nationality" value={formData.Nationality} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Religion:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="Religion" value={formData.Religion} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">contact no:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="student_contact_no" value={formData.student_contact_no} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">email address:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="student_email_address" value={formData.student_email_address} onChange={handleChange} />
        </div>
        
        <div><h3>Parent details</h3></div>
        <hr />
        <div className="mb-3">
          <label  className="form-label">Parent_Name:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Parent_Name" value={formData.Parent_Name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Occupation:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Occupation" value={formData.Occupation} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Annual_salary:</label>
          <input style={{width:"500px"}} type="number" className="form-control" name="Annual_salary" value={formData.Annual_salary} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">contact no:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="parent_contact_no" value={formData.parent_contact_no} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">email address:</label>
          <input style={{width:"500px" }} type="text" className="form-control" name="parent_email_address" value={formData.parent_email_address} onChange={handleChange} />
        </div>
        <div><h3>Current Address</h3></div>
        <hr />
        <div className="mb-3">
          <label  className="form-label">Current_Address:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Current_Address" value={formData.Current_Address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Current_Address_City:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Current_Address_City" value={formData.Current_Address_City} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Current_Address_District:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Current_Address_District" value={formData.Current_Address_District	} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Current_Address_State:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Current_Address_State" value={formData.Current_Address_State} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Current_Address_Pin_Code:</label>
          <input style={{width:"500px"}} type="number" className="form-control" name="Current_Address_Pin_Code" value={formData.Current_Address_Pin_Code} onChange={handleChange} />
        </div>
        <div><h3>Permanant Address</h3></div>
        <hr />
        <div className="mb-3">
          <label  className="form-label">Permanant_Address:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Permanant_Address" value={formData.Permanant_Address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Permanant_Address_City:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Permanant_Address_City" value={formData.Permanant_Address_City} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Permanant_Address_District:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Permanant_Address_District" value={formData.Permanant_Address_District} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Permanant_Address_State:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Permanant_Address_State" value={formData.Permanant_Address_State	} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Permanant_Address_Pincode:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Permanant_Address_Pincode" value={formData.Permanant_Address_Pincode	} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Last_School_Attended:</label>
          <input style={{width:"500px"}} type="text" className="form-control" name="Last_School_Attended" value={formData.Last_School_Attended} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Year_Of_Passing:</label>
          <input style={{width:"500px"}} type="number" className="form-control" name="Year_Of_Passing" value={formData.Year_Of_Passing} onChange={handleChange} />
        </div>
        <div><h1>Certificates</h1></div>
        <hr />
        <h3>Upload Aadhar Card:</h3>
        <hr />
        <input type="file" name="Aadhar_Card" onChange={handleFileChange} />
        <hr />
        <h3>Upload Birth_Certificate:</h3>
        <hr />
        <input type="file" name="Birth_Certificate" onChange={handleFileChange} />
        <hr />
        <button style={{width:"500px"}} type="submit" className="btn btn-primary">Save Data</button>
      </form>
    </div>
    </main>    
  )
}

export default StuReg