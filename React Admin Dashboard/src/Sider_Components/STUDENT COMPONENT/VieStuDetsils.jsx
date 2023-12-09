import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VieStuDetsils = () => {
    const [record, setRecord] = useState({});
    const { id } = useParams(); // Get the ID from the URL parameter

    useEffect(() => {
        // Fetch details for the specific record based on ID
        const fetchRecordDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4008/students/${id}`);
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
            <div className="container mt-5" style={{ display:"flex", justifyContent:"center", margin:"0px"}}>
                <div className="card text-white bg-dark" style={{width:"1000px"}}>
                    <div className="card-header">
                        <h2>Student Details</h2>
                    </div>
                    <div className="card-body"></div>
                    <div><h3>Student details</h3></div>
                    <hr />
                        <div>
                            <strong style={{ color: "white" }}>Profile_Picture:{'    '}</strong> 
                            <img src={record.Profile_Picture} alt="Profile" style={{ width: "150px", height: "150px", borderRadius:"100%" }} />
                            <p>{record.Profile_Picture}</p>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>First_Name:</strong> <h4 style={{ color: "white" }}>{record.First_Name}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Middle_Name:</strong> <h4 style={{ color: "white" }}>{record.Middle_Name}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Last_Name:</strong> <h4 style={{ color: "white" }}>{record.Last_Name}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>DOB:</strong> <h4 style={{ color: "white" }}>{record.DOB}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Place_of_Birth:</strong> <h4 style={{ color: "white" }}>{record.Place_of_Birth}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Blood_Group:</strong> <h4 style={{ color: "white" }}>{record.Blood_Group}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Gender:</strong> <h4 style={{ color: "white" }}>{record.Gender}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Cast:</strong> <h4 style={{ color: "white" }}>{record.Cast}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Nationality:</strong> <h4 style={{ color: "white" }}>{record.Nationality}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Religion:</strong> <h4 style={{ color: "white" }}>{record.Religion}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>student_contact_no:</strong> <h4 style={{ color: "white" }}>{record.student_contact_no}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>student_email_address:</strong> <h4 style={{ color: "white" }}>{record.student_email_address}</h4>
                        </div>
                        <hr />
                        <div><h3>Parent details</h3></div>
                         <hr />
                        <div>
                            <strong style={{ color: "white" }}>Parent_Name:</strong> <h4 style={{ color: "white" }}>{record.Parent_Name}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Occupation:</strong> <h4 style={{ color: "white" }}>{record.Occupation}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Annual_salary:</strong> <h4 style={{ color: "white" }}>{record.Annual_salary}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>parent_contact_no:</strong> <h4 style={{ color: "white" }}>{record.parent_contact_no}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>parent_email_address:</strong> <h4 style={{ color: "white" }}>{record.parent_email_address}</h4>
                        </div>
                        <hr />
                        <div><h3>Current Address</h3></div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Current_Address:</strong> <h4 style={{ color: "white" }}>{record.Current_Address}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Current_Address_City:</strong> <h4 style={{ color: "white" }}>{record.Current_Address_City}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Current_Address_District:</strong> <h4 style={{ color: "white" }}>{record.Current_Address_District}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Current_Address_State:</strong> <h4 style={{ color: "white" }}>{record.Current_Address_State}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Current_Address_Pin_Code:</strong> <h4 style={{ color: "white" }}>{record.Current_Address_Pin_Code}</h4>
                        </div>
                        <hr />
                        <div><h3>Permanant Address</h3></div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Permanant_Address:</strong> <h4 style={{ color: "white" }}>{record.Permanant_Address}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Permanant_Address_City:</strong> <h4 style={{ color: "white" }}>{record.Permanant_Address_City}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Permanant_Address_District:</strong> <h4 style={{ color: "white" }}>{record.Permanant_Address_District}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Permanant_Address_State:</strong> <h4 style={{ color: "white" }}>{record.Permanant_Address_State}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Permanant_Address_Pincode:</strong> <h4 style={{ color: "white" }}>{record.Permanant_Address_Pincode}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Last_School_Attended:</strong> <h4 style={{ color: "white" }}>{record.Last_School_Attended}</h4>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Year_Of_Passing:</strong> <h4 style={{ color: "white" }}>{record.Year_Of_Passing}</h4>
                        </div>
                        <hr />
                        <div><h3>Certificates</h3></div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Aadhar_Card:</strong> 
                            <a href={record.Aadhar_Card} target="_blank" rel="noopener noreferrer">View Aadhar Card</a>
                            <p>{record.Aadhar_Card}</p>
                        </div>
                        <hr />
                        <div>
                            <strong style={{ color: "white" }}>Birth_Certificate:</strong>
                            <a href={record.Birth_Certificate} target="_blank" rel="noopener noreferrer">View Birth Certificate</a>
                            <p>{record.Birth_Certificate}</p>
                        </div>
                        {/* Add more details as needed */}
                    </div>
                </div>
        </main>
    );
};

export default VieStuDetsils;
