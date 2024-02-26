// DashboardComponent.js

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const DashboardComponent = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sales-data');
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: salesData.map((item) => item.product),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map((item) => item.sales),
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Product Sales Dashboard</h2>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DashboardComponent;
