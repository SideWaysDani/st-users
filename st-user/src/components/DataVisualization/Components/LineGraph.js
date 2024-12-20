import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Loading data...</p>;
  }

  console.log('Data received in LineChart:', data);
  const chartData = {
    labels: data.map((item) => item.battle_date), // X-axis labels (Lead Date)
    datasets: [
      {
        label: 'Profit and Loss Percentage',
        data: data.map((item) => item.percentage_profit_and_loss), // Y-axis data (Profit and Loss Percentage)
        backgroundColor: 'rgba(140, 198, 63, 0.2)', // Adjust green shades as needed
        borderColor: 'rgba(110, 180, 40, 1)',
        borderWidth: 1,
      },
    ],
  };
  

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'dd/MM/yyyy',
          displayFormats: {
            day: 'dd/MM/yyyy',
          },
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Profit and Loss Percentage',
        },
      },
    },
  };

  return (
    <div>
      <h2>Profit and Loss Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
