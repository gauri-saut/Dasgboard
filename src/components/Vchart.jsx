import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const VChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: []
      }
    },
    series: [{
      name: 'Monthly Cash',
      data: []
    }]
  });

  useEffect(() => {
    axios.get('https://668a6df82c68eaf3211cc988.mockapi.io/monthly')
      .then(response => {
        const data = response.data[0]; // Assuming the response is an array with a single object
        const months = Object.keys(data);
        const cashValues = Object.values(data);

        setChartData({
          options: {
            chart: {
              id: 'basic-bar'
            },
            xaxis: {
              categories: months
            }
          },
          series: [{
            name: 'Monthly Cash',
            data: cashValues
          }]
        });
      })
      .catch(error => console.log('Error fetching data', error));
  }, []);

  return (
    <div className="App">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type='bar'
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default VChart;
