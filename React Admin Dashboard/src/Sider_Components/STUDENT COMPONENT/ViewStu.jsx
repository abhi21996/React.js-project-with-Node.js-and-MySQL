import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewStu() {

  const [records, setRecords] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your MySQL database or API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4008/');
        setRecords(response.data); // Assuming your API returns an array of records
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [deleteSuccess]); // Run this effect only once when the component mounts


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4008/students/${id}`);
      setDeleteSuccess(true);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleNavigateBack = () => {
    setDeleteSuccess(false);
    navigate('/studentslist');
  };

  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchTerm(input);

    if (input === '') {
      // If input is empty, reset to original records
      fetchData();
    } else {
      const filteredRecords = records.filter((record) =>
        record.Full_Name.toLowerCase().includes(input)
      );
      setRecords(filteredRecords);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4008/');
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <h2>Manage Students</h2>
      <div style={{display:"flex", justifyContent:"right"}}>
      <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search name"
        />
      <button className='btn btn-primary' onClick={handleSearchInput}>Search</button>
      </div>
      {deleteSuccess ? (
        <div className="alert alert-success" role="alert">
         <h2> Successfully deleted!</h2>
          <button className="btn btn-primary ml-2" onClick={handleNavigateBack}>
            Back to View Students
          </button>
        </div>
      ) : (
      <table className="table table-hover table-dark">
      <thead className="thead-light">
          <tr>
            <th>Profile_Picture</th>
            <th>First_Name</th>
            <th>Middle_Name</th>
            <th>Last_Name</th>
            <th>DOB</th>
            <th>Place_of_Birth</th>
            <th>Blood_Group</th>
            <th>Gender</th>
            <th>Cast</th>
            <th>Nationality</th>
            <th>Religion</th>
            <th>student_contact_no</th>
            <th>student_email_address</th>
            <th>Parent_Name</th>
            <th>Occupation</th>
            <th>Annual_salary</th>
            <th>parent_contact_no</th>
            <th>parent_email_address</th>
            <th>Current_Address</th>
            <th>Current_Address_City</th>
            <th>Current_Address_District</th>
            <th>Current_Address_State</th>
            <th>Current_Address_Pin_Code</th>
            <th>Permanant_Address</th>
            <th>Permanant_Address_City</th>
            <th>Permanant_Address_District</th>
            <th>Permanant_Address_State</th>
            <th>Permanant_Address_Pincode</th>
            <th>Last_School_Attended</th>
            <th>Year_Of_Passing</th>
            <th>Aadhar_Card</th>
            <th>Birth_Certificate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.Profile_Picture}</td>
              <td>{record.First_Name}</td>
              <td>{record.Middle_Name}</td>
              <td>{record.Last_Name}</td>
              <td>{record.DOB}</td>
              <td>{record.Place_of_Birth}</td>
              <td>{record.Blood_Group}</td>
              <td>{record.Gender}</td>
              <td>{record.Cast}</td>
              <td>{record.Nationality}</td>
              <td>{record.Religion}</td>
              <td>{record.student_contact_no}</td>
              <td>{record.student_email_address}</td>
              <td>{record.Parent_Name}</td>
              <td>{record.Occupation}</td>
              <td>{record.Annual_salary}</td>
              <td>{record.parent_contact_no}</td>
              <td>{record.parent_email_address}</td>
              <td>{record.Current_Address}</td>
              <td>{record.Current_Address_City}</td>
              <td>{record.Current_Address_District}</td>
              <td>{record.Current_Address_State}</td>
              <td>{record.Current_Address_Pin_Code}</td>
              <td>{record.Permanant_Address}</td>
              <td>{record.Permanant_Address_City}</td>
              <td>{record.Permanant_Address_District}</td>
              <td>{record.Permanant_Address_State}</td>
              <td>{record.Permanant_Address_Pincode}</td>
              <td>{record.Last_School_Attended}</td>
              <td>{record.Year_Of_Passing}</td>
              <td>{record.Aadhar_Card}</td>
              <td>{record.Birth_Certificate}</td>
              <td>
                <Link to={`/view/${record.id}`}>
                  <button className="btn btn-primary">View</button>
                </Link>
                <Link to={`/edit/${record.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(record.id)}>
                    Delete
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </main>
  )
}

export default ViewStu