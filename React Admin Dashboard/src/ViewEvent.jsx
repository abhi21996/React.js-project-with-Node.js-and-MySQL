import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewEvent() {

  const [events, setEvents] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your MySQL database or API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4008/events');
        setEvents(response.data); // Assuming your API returns an array of events
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [deleteSuccess]); // Run this effect only once when the component mounts

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4008/events/${id}`);
      setDeleteSuccess(true);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleNavigateBack = () => {
    setDeleteSuccess(false);
    navigate('/viewevent');
  };

  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchTerm(input);

    if (input === '') {
      // If input is empty, reset to original events
      fetchData();
    } else {
      const filteredEvents = events.filter((event) =>
        event.EventTitle.toLowerCase().includes(input)
      );
      setEvents(filteredEvents);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4008/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <h2>Manage Events</h2>
      <div style={{display:"flex", justifyContent:"right"}}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search event title"
        />
        <button className='btn btn-primary' onClick={handleSearchInput}>Search</button>
      </div>
      {deleteSuccess ? (
        <div className="alert alert-success" role="alert">
          <h2>Successfully deleted!</h2>
          <button className="btn btn-primary ml-2" onClick={handleNavigateBack}>
            Back to View Events
          </button>
        </div>
      ) : (
        <table className="table table-hover table-dark">
          <thead className="thead-light">
            <tr>
              <th>Event Title</th>
              <th>Event Description</th>
              <th>Event Category</th>
              <th>Event Date and Time</th>
              <th>Event Duration</th>
              <th>Venue</th>
              <th>Image 1</th>
              <th>Image 2</th>
              <th>Image 3</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.eventTitle}</td>
                <td>{event.eventDescription}</td>
                <td>{event.eventCategory}</td>
                <td>{event.eventDateTime}</td>
                <td>{event.eventDuration}</td>
                <td>{event.venue}</td>
                <td>{event.image1}</td>
                <td>{event.image2}</td>
                <td>{event.image3}</td>
                <td>
                  <Link to={`/vieweventdetails/${event.id}`}>
                    <button className="btn btn-primary">View</button>
                  </Link>
                  <Link to={`/editeventdetails/${event.id}`}>
                    <button className="btn btn-warning">Edit</button>
                  </Link>
                  <button className="btn btn-danger" onClick={() => handleDelete(event.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}

export default ViewEvent;
