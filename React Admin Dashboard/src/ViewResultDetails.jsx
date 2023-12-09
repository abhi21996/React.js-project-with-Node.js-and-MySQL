import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const ViewResultDetails = () => {
  const [record, setRecord] = useState({});
  const { id } = useParams(); // Get the ID from the URL parameter

  useEffect(() => {
    // Fetch details for the specific record based on ID
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/getresults/${id}`);
        console.log(response.data);
        setRecord(response.data[0]); // Assuming your API returns details for the record
      } catch (error) {
        console.error('Error fetching record details:', error);
      }
    };

    fetchRecordDetails();
  }, [id]); // Run this effect whenever the ID changes

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className="container mt-5" style={{ display: "flex", justifyContent: "center", margin: "0px" }}>
        <div className="card text-white bg-dark" style={{ width: "1000px" }}>
          <div className="card-header">
            <h2>Student Exam Details</h2>
          </div>
          <div className="card-body">
            <div>
              <strong style={{ color: "white" }}>Student Full Name:</strong>
              <h4 style={{ color: "white" }}>{record.Student_full_name}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Standard:</strong>
              <h4 style={{ color: "white" }}>{record.select_standard}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Division:</strong>
              <h4 style={{ color: "white" }}>{record.select_division}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Medium:</strong>
              <h4 style={{ color: "white" }}>{record.select_medium}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Exam:</strong>
              <h4 style={{ color: "white" }}>{record.select_exam}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Physics:</strong>
              <h4 style={{ color: "white" }}>{record.physics}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>chemistry:</strong>
              <h4 style={{ color: "white" }}>{record.chemistry}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>biology:</strong>
              <h4 style={{ color: "white" }}>{record.biology}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>english:</strong>
              <h4 style={{ color: "white" }}>{record.english}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>marathi:</strong>
              <h4 style={{ color: "white" }}>{record.marathi}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>maths:</strong>
              <h4 style={{ color: "white" }}>{record.maths}</h4>
            </div>
            {/* Repeat the above structure for other subjects and fields */}
            <hr />
            <div>
              <strong style={{ color: "white" }}>Total Marks:</strong>
              <h4 style={{ color: "white" }}>{record.totalMarks}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Status:</strong>
              <h4 style={{ color: "white" }}>{record.status}</h4>
            </div>
            {/* Add more details as needed */}
            <hr />
            
            <div>
              {/* Add Carousel or other components for images if needed */}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewResultDetails;
