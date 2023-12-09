import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewTeacher() {
  const [records, setRecords] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteSuccess]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4008/teachers/${id}`);
      setDeleteSuccess(true);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleNavigateBack = () => {
    setDeleteSuccess(false);
    navigate('/manageteacher');
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4008/viewteacher');
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <h2>Manage Teacher</h2>
      {deleteSuccess ? (
        <div className="alert alert-success" role="alert">
          <h2> Successfully deleted!</h2>
          <button className="btn btn-primary ml-2" onClick={handleNavigateBack}>
            Go Back 
          </button>
        </div>
      ) : (
        <table className="table table-hover table-dark">
          <thead className="thead-light">
            <tr>
              <th>Profile_Picture</th>
              <th>first_name</th>
              <th>Last_Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Contact_number</th>
              <th>Email</th>
              <th>Qualification</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Joining_Date</th>
              <th>id_Proof</th>
              <th>Position_of_joining</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.Profile_Picture}</td>
                <td>{record.first_name}</td>
                <td>{record.Last_Name}</td>
                <td>{record.DOB}</td>
                <td>{record.Gender}</td>
                <td>{record.Address}</td>
                <td>{record.Contact_number}</td>
                <td>{record.Email}</td>
                <td>{record.Qualification}</td>
                <td>{record.Specialization}</td>
                <td>{record.Experience}</td>
                <td>{record.Joining_Date}</td>
                <td>{record.id_Proof}</td>
                <td>{record.Position_of_joining}</td>
                <td>
                  <Link to={`/viewteacher/${record.id}`}>
                    <button className="btn btn-primary">View</button>
                  </Link>
                  <Link to={`/editteacher/${record.id}`}>
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
  );
}

export default ViewTeacher;
