import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditResult = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        Student_full_name: '',
        select_standard: '',
        select_division: '',
        select_medium: '',
        select_exam: '',
        physics: '',
        chemistry: '',
        biology: '',
        english: '',
        marathi: '',
        maths: '',
        total_marks: '',
        status: ''
        // Add more fields as needed
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data for the selected standard based on the ID
        axios.get(`http://localhost:4008/getresults/${id}`)
            .then((response) => {
                setFormData(response.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching standard for editing:', error, "message :", error.message);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {  
        console.log("updateresults called");
        e.preventDefault();
          
        try {
            // Update the data for the selected standard
            await axios.put(`http://localhost:4008/updateresults/${id}`, formData);
            console.log('Standard data updated successfully!');
            // Redirect to the standards table after updating
            navigate('/');
        } catch (error) {
            console.error('Error updating standard data:', error);
        }
    };

    return (
        <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
            <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
                
                <hr />
                <form onSubmit={handleSubmit}>
                <h3>Edit Result</h3>
                    <div className="form-group">
                        <label style={{width: "500px" }} className="form-label">Student Full Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Student_full_name"
                            name="Student_full_name"
                            value={formData.Student_full_name}
                            onChange={handleChange}
                            style={{ width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="mb-3">
                        <label style={{ color: 'white', width: "500px" }} className="form-label">
                            select_standard:
                        </label>
                        <select style={{ width: "500px" }}
                            name="select_standard"
                            className="form-control"
                            value={formData.select_standard}
                            onChange={handleChange}
                        >
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                            <option value="3rd">3rd</option>
                            <option value="4th">4th</option>
                            <option value="5th">5th</option>
                            <option value="6th">6th</option>
                            <option value="7th">7th</option>
                            <option value="8th">8th</option>
                            <option value="9th">9th</option>
                            <option value="10th">10th</option>
                        </select>
                    </div>
                    <br />
                    <div className="mb-3">
                        <label style={{ color: 'white', width: "500px" }} className="form-label">
                            select_division:
                        </label>
                        <select style={{ width: "500px" }}
                            name="select_division"
                            className="form-control"
                            value={formData.select_division}
                            onChange={handleChange}
                        >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <br />
                    <div className="mb-3">
                        <label style={{ color: 'white', width: "500px" }} className="form-label">
                            select_medium:
                        </label>
                        <select style={{ width: "500px" }}
                            name="select_medium"
                            className="form-control"
                            value={formData.select_medium}
                            onChange={handleChange}
                        >
                            <option value="hindi">hindi</option>
                            <option value="english">english</option>
                            <option value="marathi">marathi</option>
                        </select>
                    </div>
                    <br />
                    <div className="mb-3">
                        <label style={{ color: 'white', width: "500px" }} className="form-label">
                            select_exam:
                        </label>
                        <select style={{ width: "500px" }}
                            name="select_exam"
                            className="form-control"
                            value={formData.select_exam}
                            onChange={handleChange}
                        >
                            <option value="semister-1">semister-1</option>
                            <option value="semister-2">semister-2</option>
                            <option value="prelims">prelims</option>
                            <option value="final-exam">final-exam</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label style={{width: "500px" }} className="form-label">physics:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="physics"
                            name="physics"
                            value={formData.physics}
                            onChange={handleChange}
                            style={{ width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label style={{ width: "500px" }} className="form-label">chemistry:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="chemistry"
                            name="chemistry"
                            value={formData.chemistry}
                            onChange={handleChange}
                            style={{ width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label style={{ width: "500px" }} className="form-label">biology:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="biology"
                            name="biology"
                            value={formData.biology}
                            onChange={handleChange}
                            style={{  width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label style={{  width: "500px" }} className="form-label">english:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="english"
                            name="english"
                            value={formData.english}
                            onChange={handleChange}
                            style={{  width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label style={{ width: "500px" }} className="form-label">marathi:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="marathi"
                            name="marathi"
                            value={formData.marathi}
                            onChange={handleChange}
                            style={{width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label style={{ width: "500px" }} className="form-label">maths:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="maths"
                            name="maths"
                            value={formData.maths}
                            onChange={handleChange}
                            style={{ width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label style={{  width: "500px" }} className="form-label">total_marks:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="total_marks"
                            name="total_marks"
                            value={formData.total_marks}
                            onChange={handleChange}
                            style={{  width: "500px" }}
                        />
                    </div>
                    <br />
                    <div className="mb-3">
                        <label style={{ color: 'white', marginRight: '10px' }}>
                            Pass
                            <input
                                type="radio"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            />
                        </label>
                        <label style={{ color: 'white' }}>
                            Fail
                            <input
                                type="radio"
                                name="status"
                                value="fail"

                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </main>
    );
};

export default EditResult;
