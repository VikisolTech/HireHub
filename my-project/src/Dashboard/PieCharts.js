// BasicPie.js
import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  // State variable to store the data fetched from the API
  const [chartData, setChartData] = useState([]);

  // Function to fetch data from the dummy API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/chartdata'); // Update the URL if your server is running on a different host or port
      const data = await response.json();
      setChartData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{marginLeft:"20px"}}>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Active' },
            { id: 1, value: 15, label: 'Won' },
            { id: 2, value: 20, label: 'Lost' },
            { id: 3, value: 20, label: 'On Hold' },
          ],
        },
      ]}
      width={500}
      height={250}
    />
    </div>
  );
}
