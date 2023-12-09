import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditResult() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch the list of records from your API
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:4008/results'); // Replace with your API endpoint
        setRecords(response.data); // Assuming your API returns an array of records
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h2 style={{ color: "white" }}>Record List</h2>
      <table style={{ width: '100%', color: "white" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>student_unq_no</th>
            <th>year</th>
            <th>marks</th>
            <th>status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.student_unq_no}</td>
              <td>{record.year}</td>
              <td>{record.marks}</td>
              <td>{record.status}</td>
              <td>
                <Link to={`/editresult/${record.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default EditResult