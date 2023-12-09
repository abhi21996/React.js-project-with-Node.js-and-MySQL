import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewData = () => {
  const { dataType, id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/${dataType}/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataType, id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderDataDetails = () => {
    return Object.keys(data).map((field) => (
      <div key={field}>
        <strong>{field}:</strong>
        {typeof data[field] === 'object'
          ? renderNestedObject(data[field])
          : data[field]}
      </div>
    ));
  };
   
  const renderNestedObject = (nestedObject) => {
    return Object.keys(nestedObject).map((key) => (
      <div key={key}>
        <strong>{key}:</strong> {nestedObject[key]}
      </div>
    ));
  };
  
   
  return ( 
    <main className='main-container' style={{ backgroundColor: '#1d2634',marginLeft:"200px",width:"600px"}}>
    <div className="container-fluid mt-5 custom-container"> {/* Bootstrap container class with top margin */}
      <div className="row justify-content-center"> {/* Bootstrap row with content centered */}
        <div className="col-md-16"> {/* Bootstrap column with medium size */}
          <div className="card bg-warning"> 
            <div className="card-body">
              <h2 className="card-title">{`View ${dataType} Data`}</h2>
              {/* Display data details here */}
              {renderDataDetails()}
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}; 

export default ViewData;
