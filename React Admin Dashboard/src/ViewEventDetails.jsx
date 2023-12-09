import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const ViewEventDetails = () => {
  const [record, setRecord] = useState({});
  const { id } = useParams(); // Get the ID from the URL parameter

  useEffect(() => {
    // Fetch details for the specific record based on ID
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/events/${id}`);
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
            <h2>Event Details</h2>
          </div>
          <div className="card-body">
            <div>
              <strong style={{ color: "white" }}>Event Title:</strong>
              <h4 style={{ color: "white" }}>{record.eventTitle}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Event Description:</strong>
              <p style={{ color: "white" }}>{record.eventDescription}</p>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Event Category:</strong>
              <h4 style={{ color: "white" }}>{record.eventCategory}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Event Date and Time:</strong>
              <h4 style={{ color: "white" }}>{record.eventDateTime}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Event Duration:</strong>
              <h4 style={{ color: "white" }}>{record.eventDuration}</h4>
            </div>
            <hr />
            <div>
              <strong style={{ color: "white" }}>Venue:</strong>
              <h4 style={{ color: "white" }}>{record.venue}</h4>
            </div>
            {/* Add more details as needed */}
            <hr />
            
            <div>
            <Carousel>
      <Carousel.Item style={{height:"400px"}}>
      <img
      className="d-block w-100"
      src={record.image1}
      alt="First slide"
    />
        <Carousel.Caption>
          <h3>Annual event 2023</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"400px"}}>
      <img
      className="d-block w-100"
      src={record.image2}
      alt="First slide"
    />
        <Carousel.Caption>
          <h3>Annual event 2023</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"400px"}}>
      <img
      className="d-block w-100"
      src={record.image3}
      alt="First slide"
    />
        <Carousel.Caption>
          <h3>Annual event 2023</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewEventDetails;