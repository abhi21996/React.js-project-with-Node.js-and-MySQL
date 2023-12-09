import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddResult = () => {
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
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint
            await axios.post('http://localhost:4008/addresults', formData);

            // Clear the form after successful submission
            setFormData({
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
                status: '',
            });

            navigate('/');

            console.log('Data submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
            <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
                <form onSubmit={handleSubmit}>
                    <h2>Create Result</h2>
                    <hr />
                    <label className="form-label">
                        Student Full Name:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="Student_full_name" value={formData.Student_full_name} onChange={handleChange} />
                    </label>
                    <br />
                    <div className="mb-3">
                        <label style={{ color: 'white', width: "500px" }} className="form-label">
                            select_standard:
                        </label>
                        <select style={{ width: "500px" }}
                            name="select_standard"
                            className="form-control"

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

                            onChange={handleChange}
                        >
                            <option value="semister-1">semister-1</option>
                            <option value="semister-2">semister-2</option>
                            <option value="prelims">prelims</option>
                            <option value="final-exam">final-exam</option>
                        </select>
                    </div>
                    <br />
                    <label className="form-label">
                    physics:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="physics" value={formData.physics} onChange={handleChange} />
                    </label>
                    <br />
                    <label className="form-label">
                    chemistry:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="chemistry" value={formData.chemistry} onChange={handleChange} />
                    </label>
                    <br />
                    <label className="form-label">
                    biology:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="biology" value={formData.biology} onChange={handleChange} />
                    </label>
                    <br />
                    <label className="form-label">
                    english:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="english" value={formData.english} onChange={handleChange} />
                    </label>
                    <br />
                    <label className="form-label">
                    marathi:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="marathi" value={formData.marathi} onChange={handleChange} />
                    </label>
                    <br />
                    <label className="form-label">
                    maths:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="maths" value={formData.maths} onChange={handleChange} />
                    </label>
                    <br />
                    <label className="form-label">
                    total_marks:
                        <input style={{ width: "500px" }} type="text" className="form-control" name="total_marks" value={formData.total_marks} onChange={handleChange} />
                    </label>
                    <br />
                    <div className="mb-3">
                        <label style={{ color: 'white', marginRight: '10px' }}>
                            Pass
                            <input
                                type="radio"
                                name="status"
                                value="pass"

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
                    <button className='btn btn-primary' type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
};

export default AddResult;
