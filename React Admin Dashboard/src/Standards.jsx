import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import Standardsclass from './Standardsclass';
import Divisions from './Divisions';

const TabsComponent = () => {
  const [key, setKey] = useState('standards');

  return (
    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className="container">

        <div className='main-cards'>
          <Link style={{ textDecoration: "none" }} to="/addstandard">
            <div className='card' style={{ cursor: 'pointer', backgroundColor: "#E85C5C" }}>
              <div className='card-inner'>
                <h3>ADD Standards</h3>
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/adddivision">
            <div className='card' style={{ cursor: 'pointer', backgroundColor: "#5CE861" }}>
              <div className='card-inner'>
                <h3>ADD Division</h3>
              </div>
            </div>
          </Link>
        </div>

      <br />

        <Tabs
          id="controlled-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          style={{ marginTop: '20px', display: "flex", justifyContent: "space-evenly" }}
        >
          <Tab eventKey="standards" title="Standards" >
            <Standardsclass />
          </Tab>
          <Tab eventKey="divisions" title="Divisions">
            <Divisions />
          </Tab>
        </Tabs>
      </div>
    </main>
  );
};

export default TabsComponent;