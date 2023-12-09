import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteStu() {

    const [records, setRecords] = useState([]);
    const navigate = useNavigate()

  useEffect(() => {
    // Fetch records from the MySQL database
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:4008/'); // Replace with your API endpoint
        setRecords(response.data); // Assuming your API returns an array of records
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);


  const handleDelete = (id) => {
    axios.delete(`http://localhost:4008/students/${id}`)
      .then(res =>{
        //to reload the userinterface
        navigate('/')
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>Record List</h2>
      <table style={{ color: "white", borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more columns as needed */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.email}</td>
              {/* Add more columns as needed */}
              <td>
                <button onClick={() => handleDelete(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DeleteStu