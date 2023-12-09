import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStuDetails() {

  const [record, setRecord] = useState({});
  const { id } = useParams(); // Get the ID from the URL parameter
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch details for the specific record based on ID
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/students/${id}`); // Replace with your API endpoint
        console.log(response.data)
        setRecord(response.data[0]); // Assuming your API returns details for the record
      } catch (error) {
        console.error('Error fetching record details:', error);
      }
    };

    fetchRecordDetails();
  }, [id]); // Run this effect whenever the ID changes

  //   const formData = new FormData();
  // formData.append('Profile_Picture', file1);
  // formData.append('Aadhar_Card', file2);
  // formData.append('Birth_Certificate', file3);

  // console.log([...formData]); // Check the data before sending it

  const handleFormSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:4008/students/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/');
    } catch (error) {
      console.error('Error updating record details:', error);
    }
  };
  const handleFileChange = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append file data to formData
    formData.append('Profile_Picture', record.Profile_Picture);
    formData.append('Aadhar_Card', record.Aadhar_Card);
    formData.append('Birth_Certificate', record.Birth_Certificate);

    // Append other form data to formData
    formData.append('First_Name', e.target.First_Name.value);
    formData.append('Middle_Name', e.target.Middle_Name.value);
    formData.append('Last_Name', e.target.Last_Name.value);
    formData.append('DOB', e.target.DOB.value);
    formData.append('Place_of_Birth', e.target.Place_of_Birth.value);
    formData.append('Blood_Group', e.target.Blood_Group.value);
    formData.append('Gender', e.target.Gender.value);
    formData.append('Cast', e.target.Cast.value);
    formData.append('Nationality', e.target.Nationality.value);
    formData.append('Religion', e.target.Religion.value);
    formData.append('student_contact_no', e.target.student_contact_no.value);
    formData.append('student_email_address', e.target.student_email_address.value);
    formData.append('Parent_Name', e.target.Parent_Name.value);
    formData.append('Occupation', e.target.Occupation.value);
    formData.append('Annual_salary', e.target.Annual_salary.value);
    formData.append('parent_contact_no', e.target.parent_contact_no.value);
    formData.append('parent_email_address', e.target.parent_email_address.value);
    formData.append('Current_Address', e.target.Current_Address.value);
    formData.append('Current_Address_City', e.target.Current_Address_City.value);
    formData.append('Current_Address_District', e.target.Current_Address_District.value);
    formData.append('Current_Address_State', e.target.Current_Address_State.value);
    formData.append('Current_Address_Pin_Code', e.target.Current_Address_Pin_Code.value);
    formData.append('Permanant_Address', e.target.Permanant_Address.value);
    formData.append('Permanant_Address_City', e.target.Permanant_Address_City.value);
    formData.append('Permanant_Address_District', e.target.Permanant_Address_District.value);
    formData.append('Permanant_Address_State', e.target.Permanant_Address_State.value);
    formData.append('Permanant_Address_Pincode', e.target.Permanant_Address_Pincode.value);
    formData.append('Last_School_Attended', e.target.Last_School_Attended.value);
    formData.append('Aadhar_Card', e.target.Aadhar_Card.value);
    formData.append('Birth_Certificate', e.target.Birth_Certificate.value);
    // ... append other form fields

    handleFormSubmit(formData);
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
        <div className="mb-3">
          <h2 style={{ color: "white" }}>Edit Student Record</h2>
          <form onSubmit={handleSubmit}>
            {record && (
              <>
                <div>
                  <label style={{ color: 'white' }} className="form-label">
                    Profile_Picture:
                  </label>
                  <input
                    type="file"
                    name="Profile_Picture"
                    onChange={handleFileChange}
                  // defaultValue={record?.Profile_Picture}
                  />
                </div>
                <div><h3>Student details</h3></div>
                <div>
                  <label style={{ color: "white" }} className="form-label">First_Name:</label>
                  <input type="text" name="First_Name" className="form-control" defaultValue={record.First_Name} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Middle_Name:</label>
                  <input type="text" name="Middle_Name" className="form-control" defaultValue={record.Middle_Name} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Last_Name:</label>
                  <input type="text" name="Last_Name" className="form-control" defaultValue={record.Last_Name} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">DOB:</label>
                  <input type="date" name="DOB" className="form-control" defaultValue={record.DOB} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Place_of_Birth:</label>
                  <input type="text" name="Place_of_Birth" className="form-control" defaultValue={record.Place_of_Birth} />
                </div>
                <div>
                <label style={{ color: 'white', width:"500px" }} className="form-label">
                    Blood Group:
                  </label>
                  <select style={{width:"500px" }}
                    name="Blood_Group"
                    className="form-control"
                    defaultValue={record.Blood_Group}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div>
                <label style={{ color: 'white', marginRight: '10px' }}>
                      Male
                      <input
                        type="radio"
                        name="Gender"
                        value="male"
                        defaultValue={record.Gender}
                      />
                    </label>
                    <label style={{ color: 'white' }}>
                      Female
                      <input
                        type="radio"
                        name="Gender"
                        value="female"
                      
                      />
                    </label>
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Cast:</label>
                  <input type="text" name="Cast" className="form-control" defaultValue={record.Cast} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Nationality:</label>
                  <input type="text" name="Nationality" className="form-control" defaultValue={record.Nationality} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Religion:</label>
                  <input type="text" name="Religion" className="form-control" defaultValue={record.Religion} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">student_contact_no:</label>
                  <input type="text" name="student_contact_no" className="form-control" defaultValue={record.student_contact_no} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">student_email_address:</label>
                  <input type="text" name="student_email_address" className="form-control" defaultValue={record.student_email_address} />
                </div>
                <div><h3>Parent details</h3></div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Parent_Name:</label>
                  <input type="text" name="Parent_Name" className="form-control" defaultValue={record.Parent_Name} />
                </div>

                <div>
                  <label style={{ color: "white" }} className="form-label">Occupation:</label>
                  <input type="text" name="Occupation" className="form-control" defaultValue={record.Occupation} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Annual_salary:</label>
                  <input type="number" name="Annual_salary" className="form-control" defaultValue={record.Annual_salary} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">parent_contact_no:</label>
                  <input type="text" name="parent_contact_no" className="form-control" defaultValue={record.parent_contact_no} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">parent_email_address:</label>
                  <input type="text" name="parent_email_address" className="form-control" defaultValue={record.parent_email_address} />
                </div>
                <div><h3>Current Address</h3></div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Current_Address:</label>
                  <input type="text" name="Current_Address" className="form-control" defaultValue={record.Current_Address} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Current_Address_City:</label>
                  <input type="text" name="Current_Address_City" className="form-control" defaultValue={record.Current_Address_City} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Current_Address_District:</label>
                  <input type="text" name="Current_Address_District" className="form-control" defaultValue={record.Current_Address_District} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Current_Address_State:</label>
                  <input type="text" name="Current_Address_State" className="form-control" defaultValue={record.Current_Address_State} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Current_Address_Pin_Code:</label>
                  <input type="number" name="Current_Address_Pin_Code" className="form-control" defaultValue={record.Current_Address_Pin_Code} />
                </div>
                <div><h3>Permanant Address</h3></div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Permanant_Address:</label>
                  <input type="text" name="Permanant_Address" className="form-control" defaultValue={record.Permanant_Address} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Permanant_Address_City:</label>
                  <input type="text" name="Permanant_Address_City" className="form-control" defaultValue={record.Permanant_Address_City} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Permanant_Address_District:</label>
                  <input type="text" name="Permanant_Address_District" className="form-control" defaultValue={record.Permanant_Address_District} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Permanant_Address_State:</label>
                  <input type="text" name="Permanant_Address_State" className="form-control" defaultValue={record.Permanant_Address_State} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Permanant_Address_Pincode:</label>
                  <input type="number" name="Permanant_Address_Pincode" className="form-control" defaultValue={record.Permanant_Address_Pincode} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Last_School_Attended:</label>
                  <input type="text" name="Last_School_Attended" className="form-control" defaultValue={record.Last_School_Attended} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">Year_Of_Passing:</label>
                  <input type="number" name="Year_Of_Passing" className="form-control" defaultValue={record.Year_Of_Passing} />
                </div>
                <div><h1>Certificates</h1></div>
                <div>
                  <label style={{ color: 'white' }} className="form-label">
                    Aadhar_Card:
                  </label>
                  <input
                    type="file"
                    name="Aadhar_Card"
                    onChange={handleFileChange}
                  // defaultValue={record?.Aadhar_Card}
                  />
                </div>
                <hr />
                <div>
                  <label style={{ color: 'white' }} className="form-label">
                    Birth_Certificate:
                  </label>
                  <input
                    type="file"
                    name="Birth_Certificate"
                    onChange={handleFileChange}
                  // defaultValue={record?.Birth_Certificate}
                  />
                </div>
              </>
            )}
            {/* Add other form fields for additional details */}
            <br />
            <div>
              <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default EditStuDetails