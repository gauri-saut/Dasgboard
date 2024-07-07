import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const DemoChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      labels: []
    },
    series: []
  });

  useEffect(() => {
    axios.get('https://668a6df82c68eaf3211cc988.mockapi.io/data')
      .then(response => {
        const data = response.data;

        // Extracting days and amounts from the fetched data
        const days = Object.keys(data[0]); // ["sunday", "monday", "tuesday", ...]
        const amounts = Object.values(data[0]); // [30000, 45620, 35000, ...]

        setChartData({
          options: {
            labels: days,
          },
          series: amounts
        });
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type='donut'
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default DemoChart;
