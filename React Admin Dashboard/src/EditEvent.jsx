import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditEvent() {
    const [record, setRecord] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchRecordDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:4008/events/${id}`);
          console.log(response.data);
          setRecord(response.data[0]);
        } catch (error) {
          console.error('Error fetching record details:', error);
        }
      };
  
      fetchRecordDetails();
    }, [id]);
  
    const handleFormSubmit = async (formData) => {
      try {
        await axios.put(`http://localhost:4008/events/${id}`, formData, {
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
  
      formData.append('eventTitle', e.target.eventTitle.value);
      formData.append('eventDescription', e.target.eventDescription.value);
      formData.append('eventCategory', e.target.eventCategory.value);
      formData.append('eventDateTime', e.target.eventDateTime.value);
      formData.append('eventDuration', e.target.eventDuration.value);
      formData.append('venue', e.target.venue.value);
      formData.append('image1', record.image1);
      formData.append('image2', record.image2);
      formData.append('image3', record.image3);
  
      handleFormSubmit(formData);
    };
  
    return (
        <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
        <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
          <div className="mb-3">
      <form onSubmit={handleSubmit}>
        {record && (
          <>
          <h2>Edit event details</h2>
          <hr />
            <div>
                  <label style={{ color: "white" }} className="form-label">eventTitle:</label>
                  <input type="text" name="eventTitle" className="form-control" defaultValue={record.eventTitle} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">eventDescription:</label>
                  <input type="text" name="eventDescription" className="form-control" defaultValue={record.eventDescription} />
                </div>
                <div>
      <label style={{ color: 'white', width:"500px" }} className="form-label">
        Event Ctegory:
                  </label>
                  <select style={{width:"500px" }}
                    name="eventCategory"
                    className="form-control"
                    defaultValue={record.eventCategory}
                  >
                    <option value="sports">sports</option>
                    <option value="annual function">annual function</option>
                    <option value="Health Weeks">Health Weeks</option>
                    <option value="Inter-school Competitions">Inter-school Competitions</option>
                    <option value="Cultural Events">Cultural Events</option>
                  </select>
        </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">eventDateTime:</label>
                  <input type="text" name="eventDateTime" className="form-control" defaultValue={record.eventDateTime} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">eventDuration:</label>
                  <input type="text" name="eventDuration" className="form-control" defaultValue={record.eventDuration} />
                </div>
                <div>
                  <label style={{ color: "white" }} className="form-label">venue:</label>
                  <input type="text" name="venue" className="form-control" defaultValue={record.venue} />
                </div>
            <div>
              <label style={{ color: 'white' }} className="form-label">
                Image 1:
              </label>
              <input
                type="file"
                name="image1"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label style={{ color: 'white' }} className="form-label">
                Image 2:
              </label>
              <input
                type="file"
                name="image2"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label style={{ color: 'white' }} className="form-label">
                Image 3:
              </label>
              <input
                type="file"
                name="image3"
                onChange={handleFileChange}
              />
            </div>
            {/* Other input fields */}
          </>
        )}
        <br />
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>
      </main>
  
      // ... (rest of the code)
    );
  }

  export default EditEvent;
  