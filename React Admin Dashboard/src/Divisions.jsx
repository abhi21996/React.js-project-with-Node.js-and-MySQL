// DivisionsTable.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Divisions = () => {
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint for divisions
    axios.get('http://localhost:4008/divisions')
      .then((response) => {
        setDivisions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching divisions:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      // Delete the record based on the ID
      await axios.delete(`http://localhost:4008/divisions/${id}`);

      // Update the state to remove the deleted record
      setDivisions((prevDivisions) =>
        prevDivisions.filter((division) => division.id !== id)
      );

      console.log('Record deleted successfully!');
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };


  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634'}}>
    <div className="container">
      <h3>Divisions Table</h3>
      <table className="table table-hover table-dark">
      <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Standard_Name</th>
            <th>division_name</th>
            <th>class_teacher</th>
            <th>no_of_students</th>
            {/* Add more columns as needed */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {divisions.map((division) => (
            <tr key={division.id}>
               <td>{division.id}</td>
               <td>{division.Standard_Name}</td>
              <td>{division.division_name}</td>
              <td>{division.class_teacher}</td>
              <td>{division.no_of_students}</td>
              {/* Add more columns as needed */}
              <td>
                <Link to={`/editdivision/${division.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(division.id)}>
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

export default Divisions;
