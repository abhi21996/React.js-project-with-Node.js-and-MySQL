import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewTeacherDetails = () => {
    const [record, setRecord] = useState({});
    const { id } = useParams(); // Get the ID from the URL parameter

    useEffect(() => {
        // Fetch details for the specific record based on ID
        const fetchRecordDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4008/teachers/${id}`);
                console.log(response.data)
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
                        <h2>Teacher Details</h2>
                    </div>
                    <div className="card-body">
                        <div>
                            <strong style={{ color: "white" }}>Profile_Picture:</strong>
                            <img src={record.Profile_Picture} alt="Profile" style={{ width: "100px", height: "100px", borderRadius:"100%" }} />
                            <p>{record.Profile_Picture}</p>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>First_Name:</strong> <h4 style={{ color: "white" }}>{record.first_name}</h4>
                        </div>
                        {/* ... other fields ... */}
                        <div>
                            <strong style={{ color: "white" }}>Last_Name:</strong> <h4 style={{ color: "white" }}>{record.Last_Name}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>DOB:</strong> <h4 style={{ color: "white" }}>{record.DOB}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Gender:</strong> <h4 style={{ color: "white" }}>{record.Gender}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Address:</strong> <h4 style={{ color: "white" }}>{record.Address}</h4>
                        </div>
                        {/* ... other fields ... */}
                        <div>
                            <strong style={{ color: "white" }}>Contact_number:</strong> <h4 style={{ color: "white" }}>{record.Contact_number}</h4>
                        </div>
                        <div>
                            <strong style={{ color: "white" }}>Email:</strong> <h4 style={{ color: "white" }}>{record.Email}</h4>
                        </div>
                        <div>
                            <strong style={{ color: "white" }}>Qualification:</strong> <h4 style={{ color: "white" }}>{record.Qualification}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Specialization:</strong> <h4 style={{ color: "white" }}>{record.Specialization}</h4>
                        </div>
                        {/* ... other fields ... */}
                        <div>
                            <strong style={{ color: "white" }}>Experience:</strong> <h4 style={{ color: "white" }}>{record.Experience}</h4>
                        </div>
                        <div>
                            <strong style={{ color: "white" }}>Joining_Date:</strong> <h4 style={{ color: "white" }}>{record.Joining_Date}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>id_Proof:</strong>
                            <a href={record.id_Proof} target="_blank" rel="noopener noreferrer">View ID Proof</a>
                            <p>{record.id_Proof}</p>
                        </div>
                        <div>
                            <strong style={{ color: "white" }}>Position_of_joining:</strong> <h4 style={{ color: "white" }}>{record.Position_of_joining}</h4>
                        </div>
                        {/* Add more details as needed */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ViewTeacherDetails;
