import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStuDetails() {

  const [record, setRecord] = useState({});
  const { id } = useParams(); // Get the ID from the URL parameter
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch details for the specific record based on ID
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/teachers/${id}`); // Replace with your API endpoint
        console.log("response:",response.data[0])
        setRecord(response.data[0]); // Assuming your API returns details for the record
      } catch (error) {
        console.error('Error fetching record details:', error);
      }
    };

    fetchRecordDetails();
  }, [id]); // Run this effect whenever the ID changes

  const handleFileChange = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append file data to formData
    formData.append('Profile_Picture', record.Profile_Picture);
    formData.append('id_Proof', record.id_Proof);
      console.log(e.target.first_name.value);
    // Append other form data to formData
    formData.append('first_name', e.target.first_name.value);
    console.log(e.target.Last_Name.value);
    formData.append('Last_Name', e.target.Last_Name.value);
    formData.append('DOB', e.target.DOB.value);
    formData.append('Gender', e.target.Gender.value);
    formData.append('Address', e.target.Address.value);
    formData.append('Contact_number', e.target.Contact_number.value);
    formData.append('Email', e.target.Email.value);
    formData.append('Qualification', e.target.Qualification.value);
    formData.append('Specialization', e.target.Specialization.value);
    formData.append('Experience', e.target.Experience.value);
    formData.append('Joining_Date', e.target.Joining_Date.value);
    formData.append('Position_of_joining', e.target.Position_of_joining.value);
    // ... append other form fields

    handleFormSubmit(formData);
  };

  const handleFormSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:4008/teachers/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/');
    } catch (error) {
      console.error('Error updating record details:', error);
    }
  };


  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
        <div className="mb-3">
          <h3 style={{ color: "white" }}>Edit Teacher Record</h3>
          <form onSubmit={handleSubmit}>
            {record && (
              <>
                <div>
                  <label style={{ color: 'white' }} className="form-label">
                    Profile_Picture:
                  </label>
                  <input
                    type="file"
                    name="Profile_Picture"
                    onChange={handleFileChange}
                  />
                </div>
                <div className='mb-3'>
                  <label className="form-label">first_name:</label>
                  <input style={{ width: '500px' }} type="text" name="first_name" className="form-control" defaultValue={record.first_name}/>
                </div>
                {/* ... other fields ... */}
                <div className='mb-3'>
            <label className='form-label'>Last_Name</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Last_Name' defaultValue={record.Last_Name}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>DOB:</label>
            <input style={{ width: '500px' }} type='date' className='form-control' name='DOB' defaultValue={record.DOB}/>
          </div>
          <div>
          <label style={{ color: 'white', marginRight: '10px' }}>
                      Male
                      <input
                        type="radio"
                        name="Gender"
                        value="male"
                        defaultValue={record.Gender}
                      />
                    </label>
                    <label style={{ color: 'white' }}>
                      Female
                      <input
                        type="radio"
                        name="Gender"
                        value="female"
                      
                      />
                       </label>
                       </div>
          <div className='mb-3'>
            <label className='form-label'>Address:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Address' defaultValue={record.Address} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Contact Number:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Contact_number' defaultValue={record.Contact_number}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Email' defaultValue={record.Email}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Qualification:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Qualification' defaultValue={record.Qualification}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Specialization:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Specialization' defaultValue={record.Specialization}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Experience:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Experience' defaultValue={record.Experience}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Joining Date:</label>
            <input style={{ width: '500px' }} type='date' className='form-control' name='Joining_Date' defaultValue={record.Joining_Date}/>
          </div>
          <div>
                  <label style={{ color: 'white' }} className="form-label">
                    id_Proof:
                  </label>
                  <input
                    type="file"
                    name="id_Proof"
                    onChange={handleFileChange}
                  />
                </div>
                <div className='mb-3'>
            <label className='form-label'>Position of Joining:</label>
            <input style={{ width: '500px' }} type='text' className='form-control' name='Position_of_joining' defaultValue={record.Position_of_joining}/>
          </div>
              </>
            )}
            <br />
            <div>
              <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default EditStuDetails;
