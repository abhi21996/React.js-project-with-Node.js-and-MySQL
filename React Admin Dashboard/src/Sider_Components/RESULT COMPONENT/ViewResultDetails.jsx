import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewResultDetails() {

    const [record, setRecord] = useState({});
    const { id } = useParams(); // Get the ID from the URL parameter

    useEffect(() => {
        // Fetch details for the specific record based on ID
        const fetchRecordDetails = async () => {
          try {
            const response = await axios.get(`http://localhost:4008/results/${id}`);
            console.log(response.data)
            setRecord(response.data[0]); // Assuming your API returns details for the record
          } catch (error) {
            console.error('Error fetching record details:', error);
          }
        };
    
        fetchRecordDetails();
      }, [id]); // Run this effect whenever the ID changes

  return (
    <div>
      <h2 style={{color:"white"}}>Record Details</h2>
      <div>
        <strong style={{color:"white"}}>student_unq_no:</strong> <h4 style={{color:"white"}}>{record.student_unq_no}</h4>
      </div>
      <div>
        <strong style={{color:"white"}}>year:</strong> <h4 style={{color:"white"}}>{record.year}</h4>
      </div>
      <div>
        <strong style={{color:"white"}}>marks:</strong> <h4 style={{color:"white"}}>{record.marks}</h4>
      </div>
      <div>
        <strong style={{color:"white"}}>status:</strong> <h4 style={{color:"white"}}>{record.status}</h4>
      </div>
      {/* Add more details as needed */}
    </div>
  )
}

export default ViewResultDetails