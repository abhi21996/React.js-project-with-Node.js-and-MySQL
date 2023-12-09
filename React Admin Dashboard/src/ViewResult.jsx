// StandardsTable.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewResult = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint for standards
    axios.get('http://localhost:4008/viewresults')
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error('Error fetching standards:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      // Delete the record based on the ID
      await axios.delete(`http://localhost:4008/deleteresults/${id}`);

      // Update the state to remove the deleted record
      setResults((prevResults) =>
      prevResults.filter((result) => result.id !== id)
      );

      console.log('Record deleted successfully!');
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };


  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634'}}>
    <div className="container">
      <h3>Standards Table</h3>
      <table className="table table-hover table-dark">
      <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Student Full Name</th>
            <th>Select Standard</th>
            <th>Select Division</th>
            <th>Select Medium</th>
            <th>Select Exam</th>
            <th>physics</th>
            <th>chemistry</th>
            <th>biology</th>
            <th>english</th>
            <th>marathi</th>
            <th>maths</th>
            <th>total_marks</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.Student_full_name}</td>
              <td>{result.select_standard}</td>
              <td>{result.select_division}</td>
              <td>{result.select_medium}</td>
              <td>{result.select_exam}</td>
              <td>{result.physics}</td>
              <td>{result.chemistry}</td>
              <td>{result.biology}</td>
              <td>{result.english}</td>
              <td>{result.marathi}</td>
              <td>{result.maths}</td>
              <td>{result.total_marks}</td>
              <td>{result.status}</td>
              <td>
              <Link to={`/viewresults/${result.id}`}>
                  <button className="btn btn-primary">View</button>
                </Link>
                <Link to={`/editresults/${result.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(result.id)}>
                    Delete
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
  );
};

export default ViewResult;
