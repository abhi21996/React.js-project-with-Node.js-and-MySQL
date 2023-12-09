import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewResult() {

  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch data from your MySQL database or API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4008/results');
        console.log(response.data)
        setRecords(response.data); // Assuming your API returns an array of records
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
    
    <h2>Result Records</h2>
    <table className="table table-hover table-dark">
      <thead className="thead-light">
        <tr>
          <th>student_unq_no</th>
          <th>year</th>
          <th>marks</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>{record.student_unq_no}</td>
            <td>{record.year}</td>
            <td>{record.marks}</td>
            <td>{record.status}</td>
            <td>
            <Link to={`/viewresult/${record.id}`}>
                <button className="btn btn-primary">View</button>
            </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  
  </main>
  )
}

export default ViewResult