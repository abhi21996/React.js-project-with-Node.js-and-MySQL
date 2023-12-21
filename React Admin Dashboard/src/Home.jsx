import React, { useState, useEffect } from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsJustify,
} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Chart as ChartJS } from "chart.js/auto"
import { Pie, Doughnut } from "react-chartjs-2"

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
// defaults.plugins.title.color = "black";

function Home() {
  /////creating state variable to store value with innitial value as anything number, array, string or object /////////
  const [genderData, setGenderData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [studentsCount, setStudentsCount] = useState(0)
  const[standardsCount, setStandardsCount] = useState(0)
  const[teachersCount, setTeachersCount] = useState(0)
  const[resultsCount, setResultsCount] = useState(0)
 /////creating state variable to store value with innitial value as anything number, array, string or object /////////

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch gender data
      const genderResponse = await axios.get('http://localhost:4008/genderCounts');
      const genderChartData = genderResponse.data;

      // Fetch status data
      const statusResponse = await axios.get('http://localhost:4008/passsfailcounts');
      const statusChartData = statusResponse.data;

      // Fetch total counts for each category
      const studentsCountResponse = await axios.get('http://localhost:4008/countstudents');
      console.log('Students Count Response:', studentsCountResponse);
      const standardsCountResponse = await axios.get('http://localhost:4008/countstandards');
      const teachersCountResponse = await axios.get('http://localhost:4008/countteachers');
      const resultsCountResponse = await axios.get('http://localhost:4008/countresults');

      const studentsCount = studentsCountResponse.data;
      const standardsCount = standardsCountResponse.data;
      const teachersCount = teachersCountResponse.data;
      const resultsCount = resultsCountResponse.data;
      console.log('Students Count:', studentsCount);
      // Update state with the counts
      setGenderData(genderChartData);
      setStatusData(statusChartData);
      setStudentsCount(studentsCount);
      setStandardsCount(standardsCount);
      setTeachersCount(teachersCount);
      setResultsCount(resultsCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (

    <main className='main-container' style={{ backgroundColor: '#1d2634' }}>
      <div className='main-title'>
        <h3 >DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <Link style={{ textDecoration: "none" }} to="/studentslist">
          <div className='card' style={{ cursor: 'pointer', backgroundColor: "#2962ff" }}>
            <div className='card-inner'>
              <h3>STUDENTS</h3>
              <BsPeopleFill className='card_icon' />
              //////<conditional rendering ternary, && operators based on condition is true or false(by mean null,undefined,false)///////
              {studentsCount !== null && (
                <div className='statistical-value'>
                  <h3 style={{ color: 'black' }}>{`: ${studentsCount}`}</h3>
                </div>
              )}
              //////<conditional rendering ternary, && operators based on condition is true or false(by mean null,undefined,false)///////
            </div>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/homestandards">
          <div className='card' style={{ cursor: 'pointer', backgroundColor: "#ff6d00" }}>
            <div className='card-inner'>
              <h3>STANDARD</h3>
              <BsFillGrid3X3GapFill className='card_icon' />
              {studentsCount !== null && (
                <div className='statistical-value'>
                  <h3 style={{ color: 'black' }}>{`: ${standardsCount}`}</h3>
                </div>
              )}
            </div>

          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/hometeachers">
          <div className='card' style={{ cursor: 'pointer', backgroundColor: "#2e7d32" }}>
            <div className='card-inner'>
              <h3>TEACHERS</h3>
              <BsFillArchiveFill className='card_icon' />
              {studentsCount !== null && (
                <div className='statistical-value'>
                  <h3 style={{ color: 'black' }}>{`: ${teachersCount}`}</h3>
                </div>
              )}
            </div>

          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/vieres">
          <div className='card' style={{ cursor: 'pointer', backgroundColor: "#d50000" }}>
            <div className='card-inner'>
              <h3>RESULTS</h3>
              <BsFillBellFill className='card_icon' />
              {studentsCount !== null && (
                <div className='statistical-value'>
                  <h3 style={{ color: 'black' }}>{`: ${resultsCount}`}</h3>
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
      <br />
      <br />
      <div className='chart-container'>
        <div className='dataCard customerCard'>
          <Pie
            data={{
              labels: ['Boys', 'Girls'],
              datasets: [
                {
                  label: 'Gender Distribution',
                  data: genderData,
                  backgroundColor: ['#36A2EB', '#FF6384'],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: 'Gender Distribution',
                },
              },
            }}
          />
        </div>

        <div className='dataCard categoryCard'>
          <Doughnut
            data={{
              labels: ['Pass', 'Fail'],
              datasets: [
                {
                  label: 'Pass/Fail Status',
                  data: statusData,
                  backgroundColor: ['#4CAF50', '#FF4500'],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: 'Pass/Fail Status',
                },
              },
            }}
          />
        </div>
      </div>
    </main>

  );
}

export default Home;
