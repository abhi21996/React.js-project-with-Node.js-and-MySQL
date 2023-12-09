import React from 'react';
import { Pie } from 'react-chartjs-2';

const ChartOne = () => {
  // Sample data
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Simple Pie Chart</h2>
      <Pie key="uniqueKey1" data={data} />
    </div>
  );
};

export default ChartOne;
