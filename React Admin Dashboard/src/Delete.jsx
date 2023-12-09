import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const DeleteData = () => {
  const { dataType, id } = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/${dataType}/${id}`);
        console.log(response.data)
        setData(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataType, id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:4008/${dataType}/${id}`)
      .then(res =>{
        //to reload the userinterface
        navigate('/')
      })
      .catch(err => console.log(err));
  };
  

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
    <div>
      <h2 style={{color:"white"}}>{`Delete ${dataType} Data`}</h2>
      {/* Display confirmation message and delete button */}
      <h4 style={{color:"white"}}>Are you sure you want to delete ?</h4>
      <button button type="button" className="btn btn-danger"  onClick={handleDelete}>
        Delete
      </button>
    </div>
    </main>
  );
};

export default DeleteData;
