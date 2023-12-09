import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const EditData = () => {
  const { dataType, id } = useParams();
  const [data, setData] = useState(null);
  const [editedData, setEditedData] = useState({
    // Replace with the actual field names from your data structure
    Full_Name : '',
    Gender : '',
    Date_of_Birth : '',
    Place_of_Birth : '',
    Nationality : '',
    Address : '',
    Contact_Number : '',
    Email_Address : '',
    Parent_Guardian_Name : '',
    Relationship_to_Student : '',
    Parent_Guardian_Contact_Number : '',
    Parent_Guardian_Email_Address : '',
    teacher: '',
    division: '',
    max_student: '',
    first_name: '',
    qualification: '',
    student_unq_no: '',
    year: '',
    marks: '',
    status: '',
    // ... other fields
  });
  
  const [updateSuccess, setUpdateSuccess] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/${dataType}/${id}`);
        setData(response.data[0]);
        console.log(response.data)
        setEditedData(response.data[0]); // Initialize edited data with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataType, id]);

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:4008/${dataType}/${id}`, editedData);
      setUpdateSuccess(true);
      // Optionally, you can navigate to a different page or reset the form
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleChange = (e) => {
    console.log('Input Change:', e.target.name, e.target.value);
    // Update the corresponding field in the edited data
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  if (updateSuccess) {
    return <div><h1 style={{color:"white"}}>Data updated successfully! Provide feedback or redirect here.</h1></div>;
  }

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634'}}>
    <div className="container" style={{width:"800px"}} >
    <h2 className="text-center" style={{color:"white"}}>{`Edit ${dataType} Data`}</h2>
    {/* Display and edit form for the data */}
    <form>
      {Object.keys(data).map((field) => (
        <div className="mb-3" key={field}>
          <label className="form-label" style={{color:"white"}}>{field}:</label>
          <input
            type="text"
            className="form-control"
            name={field}
            value={editedData[field]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={handleEdit}>
        Save
      </button>
    </form>
  </div>
  </main>
  );
};

export default EditData;
