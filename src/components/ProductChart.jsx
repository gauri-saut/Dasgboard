import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../utils/productSlice';
import Chart from 'react-apexcharts';

const ProductChart = () => {
  const dispatch = useDispatch();
  const { chartData, status, error } = useSelector((state) => state.products);
  const [chartOptions, setChartOptions] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: chartData.categories,
      },
    },
    series: chartData.series,
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    // Update chart options when chartData changes
    setChartOptions({
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: chartData.categories,
        },
      },
      series: chartData.series,
    });
  }, [chartData]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <div className="row">
        <div className="bar-chart">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type='bar'
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductChart;
