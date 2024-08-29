// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const LineChart = ({ data }) => {
//     if (!data || data.length === 0) {
//         return <p>Loading data...</p>;
//     }

//     console.log('Data received in LineChart:', data);

//     // Separate data by sector
//     const healthCareData = data.filter(item => item.sector === 'Health Care');
//     const energyData = data.filter(item => item.sector === 'Energy');
//     const technologyData = data.filter(item => item.sector === 'Technology');

//     const chartData = {
//         labels: data.map((item) => new Date(item.Date).toLocaleDateString('en-GB')), // X-axis labels (Date) formatted as dd/MM/yyyy
//         datasets: [
//             {
//                 label: 'Health Care',
//                 data: healthCareData.map((item) => item.PnL_Percentage), // Y-axis data for Health Care
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//             },
//             {
//                 label: 'Energy',
//                 data: energyData.map((item) => item.PnL_Percentage), // Y-axis data for Energy
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1,
//             },
//             {
//                 label: 'Technology',
//                 data: technologyData.map((item) => item.PnL_Percentage), // Y-axis data for Technology
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//             }
//         ],
//     };

//     const options = {
//         scales: {
//             x: {
//                 type: 'time',
//                 time: {
//                     unit: 'day',
//                     tooltipFormat: 'dd/MM/yyyy',
//                     displayFormats: {
//                         day: 'dd/MM/yyyy',
//                     },
//                 },
//                 title: {
//                     display: true,
//                     text: 'Date',
//                 },
//             },
//             y: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Profit and Loss Percentage',
//                 },
//             },
//         },
//     };

//     return (
//         <div>
//             <h2>Sector Performance Over Time</h2>
//             <Line data={chartData} options={options} />
//         </div>
//     );
// };

// export default LineChart;

// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const LineChart = ({ data }) => {
//     if (!data || data.length === 0) {
//         return <p>Loading data...</p>;
//     }

//     // Create a unique list of dates
//     const uniqueDates = Array.from(new Set(data.map(item => item.Date)))
//                               .sort((a, b) => new Date(a) - new Date(b));

//     // Initialize data sets for each sector
//     const sectors = [
//         'Health Care', 
//         'Energy', 
//         'Technology',
//         'Financials',
//         'Transportation',
//         'Retailing',
//         'Food, Beverages & Tobacco',
//         'Food & Drug Stores',
//         'Aerospace & Defense',
//         'Chemicals',
//         'Wholesalers',
//         'Industrials',
//         'Media',
//         'Telecommunications'
//     ];

//     // Assign distinguishable colors to each sector
//     const sectorColors = {
//         'Health Care': 'rgba(255, 99, 132, 1)', // Red
//         'Energy': 'rgba(44, 160, 44, 1)',       // Green
//         'Technology': 'rgba(255, 205, 86, 1)',  // Yellow
//         'Financials': 'rgba(75, 192, 192, 1)',  // Aqua
//         'Transportation': 'rgba(54, 162, 235, 1)', // Blue
//         'Retailing': 'rgba(153, 102, 255, 1)',  // Purple
//         'Food, Beverages & Tobacco': 'rgba(255, 159, 64, 1)', // Orange
//         'Food & Drug Stores': 'rgba(199, 199, 199, 1)', // Grey
//         'Aerospace & Defense': 'rgba(255, 99, 71, 1)', // Tomato
//         'Chemicals': 'rgba(255, 215, 0, 1)',    // Gold
//         'Wholesalers': 'rgba(50, 205, 50, 1)',  // LimeGreen
//         'Industrials': 'rgba(138, 43, 226, 1)', // BlueViolet
//         'Media': 'rgba(255, 140, 0, 1)',        // DarkOrange
//         'Telecommunications': 'rgba(70, 130, 180, 1)', // SteelBlue
//     };

//     const datasets = sectors.map(sector => {
//         return {
//             label: sector,
//             data: uniqueDates.map(date => {
//                 const sectorData = data.filter(item => item.sector === sector && item.Date === date);
//                 return sectorData.length > 0 ? sectorData[0].Profitandlosspercentage : null;
//             }),
//             borderColor: sectorColors[sector],
//             borderWidth: 1,
//             fill: false, // Remove the background fill
//         };
//     });

//     const chartData = {
//         labels: uniqueDates,
//         datasets: datasets,
//     };

//     const options = {
//         scales: {
//             x: {
//                 type: 'time',
//                 time: {
//                     unit: 'day',
//                     tooltipFormat: 'DD/MM/YYYY', // Tooltip format
//                     displayFormats: {
//                         day: 'DD/MM/YYYY', // Display format for the X-axis
//                     },
//                 },
//                 title: {
//                     display: true,
//                     text: 'Date',
//                 },
//             },
//             y: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Profit and Loss Percentage',
//                 },
//             },
//         },
//         plugins: {
//             legend: {
//                 display: true,
//             },
//             tooltip: {
//                 enabled: true,
//             },
//         },
//     };

//     return (
//         <div>
//             <h2>Sector Performance Over Time</h2>
//             <Line data={chartData} options={options} />
//         </div>
//     );
// };

// export default LineChart;

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Slider, Rail, Handles } from 'react-compound-slider';

const LineChartWithSlider = ({ data }) => {
    const uniqueDates = data && data.length > 0
        ? Array.from(new Set(data.map(item => item.Date)))
            .sort((a, b) => new Date(a) - new Date(b))
        : [];

    // Initialize date range indices and selectedRange
    const dateRangeIndices = { min: 0, max: uniqueDates.length - 1 };
    const [selectedRange, setSelectedRange] = useState([
        dateRangeIndices.min, 
        Math.min(dateRangeIndices.min + 180, dateRangeIndices.max) // Default to a 6-month range
    ]);

    // Early return if data is not loaded yet
    if (!data || data.length === 0) {
        return <p>Loading data...</p>;
    }

    const sectors = [
        'Health Care', 'Energy', 'Technology', 'Financials',
        'Transportation', 'Retailing', 'Food, Beverages & Tobacco',
        'Food & Drug Stores', 'Aerospace & Defense', 'Chemicals',
        'Wholesalers', 'Industrials', 'Media', 'Telecommunications'
    ];

    const sectorColors = {
        'Health Care': 'rgba(255, 99, 132, 1)',  'Energy': 'rgba(44, 160, 44, 1)',       
        'Technology': 'rgba(255, 205, 86, 1)',   'Financials': 'rgba(75, 192, 192, 1)',  
        'Transportation': 'rgba(54, 162, 235, 1)', 'Retailing': 'rgba(153, 102, 255, 1)',
        'Food, Beverages & Tobacco': 'rgba(255, 159, 64, 1)', 'Food & Drug Stores': 'rgba(199, 199, 199, 1)',
        'Aerospace & Defense': 'rgba(255, 99, 71, 1)', 'Chemicals': 'rgba(255, 215, 0, 1)',    
        'Wholesalers': 'rgba(50, 205, 50, 1)',  'Industrials': 'rgba(138, 43, 226, 1)', 
        'Media': 'rgba(255, 140, 0, 1)', 'Telecommunications': 'rgba(70, 130, 180, 1)'
    };

    const datasets = sectors.map(sector => {
        return {
            label: sector,
            data: uniqueDates.map((date, index) => {
                if (index < selectedRange[0] || index > selectedRange[1]) return null;
                const sectorData = data.filter(item => item.sector === sector && item.Date === date);
                return sectorData.length > 0 ? sectorData[0].Profitandlosspercentage : null;
            }),
            borderColor: sectorColors[sector],
            borderWidth: 2,
            fill: false,
        };
    });

    const chartData = {
        labels: uniqueDates.slice(selectedRange[0], selectedRange[1] + 1),
        datasets: datasets,
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    tooltipFormat: 'DD/MM/YYYY',
                    displayFormats: {
                        day: 'DD/MM/YYYY',
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
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                        <h2>Sector Performance Over Time</h2>
            <Line data={chartData} options={options} />
            <div style={{ marginTop: '40px' }}>
                <Slider
                    mode={2}
                    step={1}
                    domain={[dateRangeIndices.min, dateRangeIndices.max]}
                    values={selectedRange}
                    onUpdate={setSelectedRange}
                    onChange={setSelectedRange}
                    rootStyle={{
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <Rail>
                        {({ getRailProps }) => (
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: 10,
                                    marginTop: 35,
                                    borderRadius: 5,
                                    backgroundColor: 'lightgrey',
                                }}
                                {...getRailProps()}
                            />
                        )}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div>
                                {handles.map(handle => (
                                    <div
                                        key={handle.id}
                                        style={{
                                            left: `${handle.percent}%`,
                                            position: 'absolute',
                                            marginLeft: '-11px',
                                            marginTop: '30px',
                                            zIndex: 2,
                                            width: 24,
                                            height: 24,
                                            cursor: 'pointer',
                                            borderRadius: '50%',
                                            backgroundColor: '#2C3E50',
                                        }}
                                        {...getHandleProps(handle.id)}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                </Slider>
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <span>
                        Showing data from {uniqueDates[selectedRange[0]]} to {uniqueDates[selectedRange[1]]}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LineChartWithSlider;
