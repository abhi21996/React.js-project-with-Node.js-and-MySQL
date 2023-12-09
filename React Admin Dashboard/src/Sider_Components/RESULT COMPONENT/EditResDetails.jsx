import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate , useParams } from 'react-router-dom';

function EditResDetails() {
    
    const [record, setRecord] = useState({});
    const { id } = useParams(); // Get the ID from the URL parameter
    const navigate = useNavigate()

useEffect(() => {
  // Fetch details for the specific record based on ID
  const fetchRecordDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4008/results/${id}`); // Replace with your API endpoint
      setRecord(response.data[0]); // Assuming your API returns details for the record
    } catch (error) {
      console.error('Error fetching record details:', error);
    }
  };

  fetchRecordDetails();
}, [id]); // Run this effect whenever the ID changes

const handleFormSubmit = async (updatedDetails) => {
  try {
    // Send a request to update the record details in the database
    await axios.put(`http://localhost:4008/results/${id}`, updatedDetails); // Replace with your API endpoint
    // Redirect to the record list page after successful submission
    // You can use react-router-dom's history or Link component for navigation
    navigate('/')
  } catch (error) {
    console.error('Error updating record details:', error);
  }
};

return (
  <div>
    <h2 style={{ color: "white" }}>Edit Record</h2>
    <form onSubmit={(e) => {
      e.preventDefault();
      // Extract updated details from the form fields
      const updatedDetails = {
        student_unq_no: e.target.student_unq_no.value,
        year: e.target.year.value,
        marks: e.target.marks.value,
        status: e.target.status.value
        // Add other fields as needed
      };
      handleFormSubmit(updatedDetails);
    }}>
      <div>
        <label style={{ color: "white" }}>Name:</label>
        <input type="text" name="student_unq_no" defaultValue={record.student_unq_no} />
      </div>
      <div>
        <label style={{ color: "white" }}>Email:</label>
        <input type="text" name="year" defaultValue={record.year} />
      </div>
      <div>
        <label style={{ color: "white" }}>Email:</label>
        <input type="text" name="marks" defaultValue={record.marks} />
      </div>
      <div>
        <label style={{ color: "white" }}>Email:</label>
        <input type="text" name="status" defaultValue={record.status} />
      </div>
      {/* Add other form fields for additional details */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
};

export default EditResDetails