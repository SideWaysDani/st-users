import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>Loading data...</p>;
    }

    // X-axis: Year
    const chartData = {
        labels: data.map((item) => item.year), // X-axis labels (Year)
        datasets: [
            {
                label: 'Cumulative Leads Generated',
                data: data.map((item) => item.cumulative_leads_generated),
                backgroundColor: 'rgba(63, 140, 198, 0.2)',
                borderColor: 'rgba(40, 110, 180, 1)',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Cumulative Leads Allocated',
                data: data.map((item) => item.cumulative_leads_allocated),
                backgroundColor: 'rgba(198, 63, 140, 0.2)',
                borderColor: 'rgba(180, 40, 110, 1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
                ticks: {
                    callback: function(value, index, values) {
                        return chartData.labels[index];
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Leads',
                },
            },
        },
    };

    return (
        <div>
            <h2>Cumulative Leads Generated & Allocated Over Years</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;