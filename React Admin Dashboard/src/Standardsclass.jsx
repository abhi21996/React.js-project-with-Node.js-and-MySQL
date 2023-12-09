// StandardsTable.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Standardsclass = () => {
  const [standards, setStandards] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint for standards
    axios.get('http://localhost:4008/standards')
      .then((response) => {
        setStandards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching standards:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      // Delete the record based on the ID
      await axios.delete(`http://localhost:4008/standards/${id}`);

      // Update the state to remove the deleted record
      setStandards((prevStandards) =>
        prevStandards.filter((standard) => standard.id !== id)
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
            <th>Standard_Name</th>
            <th>Academic_Year</th>
            <th>medium</th>
            <th>max_students</th>
            {/* Add more columns as needed */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {standards.map((standard) => (
            <tr key={standard.id}>
              <td>{standard.id}</td>
              <td>{standard.Standard_Name}</td>
              <td>{standard.Academic_Year}</td>
              <td>{standard.medium}</td>
              <td>{standard.max_students}</td>
              {/* Add more columns as needed */}
              <td>
                <Link to={`/editstandards/${standard.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(standard.id)}>
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

export default Standardsclass;
