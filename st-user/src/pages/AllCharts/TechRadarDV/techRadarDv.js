import React, { useEffect, useState } from 'react';
import RadarTimer from '../../../components/TechRadarDV/Radar/RadarTimer';

function App() {
    const [setup, setSetup] = useState({
        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
        quadrants: [],
        data: []
    });
    const [battleDates, setBattleDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const [setup2, setSetup2] = useState({
        rrings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
        quadrants: [],
        data: []
    });

    const [battleDates2, setBattleDates2] = useState([]);
    const [selectedDate2, setSelectedDate2] = useState('');
    const [isPlaying2, setIsPlaying2] = useState(false);

    const [setup3, setSetup3] = useState({
        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
        quadrants: [],
        data: []
    });

    const [battleDates3, setBattleDates3] = useState([]);
    const [selectedDate3, setSelectedDate3] = useState('');
    const [isPlaying3, setIsPlaying3] = useState(false);

    const [setup4, setSetup4] = useState({
        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
        quadrants: [],
        data: []
    });

    const [battleDates4, setBattleDates4] = useState([]);
    const [selectedDate4, setSelectedDate4] = useState('');
    const [isPlaying4, setIsPlaying4] = useState(false);

    const [setup5, setSetup5] = useState({
        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
        quadrants: [],
        data: []
    });

    const [battleDates5, setBattleDates5] = useState([]);
    const [selectedDate5, setSelectedDate5] = useState('');
    const [isPlaying5, setIsPlaying5] = useState(false);

    const [setup6, setSetup6] = useState({
        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
        quadrants: [],
        data: []
    });

    const [battleDates6, setBattleDates6] = useState([]);
    const [selectedDate6, setSelectedDate6] = useState('');
    const [isPlaying6, setIsPlaying6] = useState(false);



    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', process.env.REACT_APP_API_URL);

                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data`);
                //const response = await fetch('http://localhost:5000/api/data');
                const data = await response.json();

                console.log('Fetched data:', data);

                if (Array.isArray(data)) {
                    const uniqueBattleDates = [...new Set(data.map(item => item.battle_date.split('T')[0]))];
                    const sectors = [...new Set(data.map(item => item.sector))];
                    const mappedData = data.map(item => ({
                        name: `Unit ${item.unit_assignment_id}`,
                        quadrant: item.sector,
                        ring: determineRing(parseFloat(item.percentageprofitandloss)),
                        percentageprofitandloss: item.percentageprofitandloss,
                        stock_name: item.stock_name,
                        profit_and_loss: item.profit_and_loss,
                        unit_assignment_id: item.unit_assignment_id,
                        battle_date: item.battle_date.split('T')[0]
                    }));

                    console.log('Mapped data:', mappedData);

                    setBattleDates(uniqueBattleDates);
                    setSetup({
                        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
                        quadrants: sectors,
                        data: mappedData
                    });
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            setSelectedDate(battleDates[0]);
            interval = setInterval(() => {
                setSelectedDate(prevDate => {
                    const currentIndex = battleDates.indexOf(prevDate);
                    const nextIndex = currentIndex + 1;

                    if (nextIndex >= battleDates.length) {
                        setIsPlaying(false);
                        clearInterval(interval);
                        return prevDate;
                    }

                    return battleDates[nextIndex];
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPlaying, battleDates]);

    const filteredData = selectedDate
        ? setup.data.filter(item => item.battle_date === selectedDate)
        : setup.data;

    const handlePlayClick = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setSelectedDate(battleDates[0]);
            setIsPlaying(true);
        }
    };


    //-------------------------------------------------------------------------------------------------------------------------


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', process.env.REACT_APP_API_URL);

                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dataa`);
                //const response = await fetch('http://localhost:5000/api/dataa');
                const data = await response.json();

                console.log('Fetched data:', data);

                if (Array.isArray(data)) {
                    const uniqueBattleDates2 = [...new Set(data.map(item => item.battle_date.split('T')[0]))];
                    const sectors2 = [...new Set(data.map(item => item.sector))];
                    const mappedData2 = data.map(item => ({
                        name: `Unit ${item.unit_assignment_id}`,
                        quadrant: item.sector,
                        ring: determineRing(parseFloat(item.percentageprofitandloss)),
                        percentageprofitandloss: item.percentageprofitandloss,
                        profit_and_loss: item.profit_and_loss,
                        unit_assignment_id: item.unit_assignment_id,
                        stock_name: item.stock_name,
                        battle_date: item.battle_date.split('T')[0]
                    }));

                    console.log('Mapped data:', mappedData2);

                    setBattleDates2(uniqueBattleDates2);
                    setSetup2({
                        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
                        quadrants: sectors2,
                        data: mappedData2
                    });
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying2) {
            setSelectedDate2(battleDates2[0]);
            interval = setInterval(() => {
                setSelectedDate2(prevDate => {
                    const currentIndex = battleDates2.indexOf(prevDate); // Corrected line
                    const nextIndex = currentIndex + 1;

                    if (nextIndex >= battleDates2.length) { // Corrected line
                        setIsPlaying2(false);
                        clearInterval(interval);
                        return prevDate;
                    }

                    return battleDates2[nextIndex]; // Corrected line
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPlaying2, battleDates2]);



    const determineRing = (percentageProfitAndLoss) => {
        // Updated to match new ring ranges
        if (percentageProfitAndLoss < 0) return '-50,0';
        if (percentageProfitAndLoss >= 0 && percentageProfitAndLoss <= 10) return '0-10';
        if (percentageProfitAndLoss > 10 && percentageProfitAndLoss <= 20) return '10-20';
        if (percentageProfitAndLoss > 20 && percentageProfitAndLoss <= 30) return '20-30';
        if (percentageProfitAndLoss > 30 && percentageProfitAndLoss <= 40) return '30-40';
        return 'above 40';
    };

    const filteredData2 = selectedDate2
        ? setup2.data.filter(item => item.battle_date === selectedDate2)
        : setup2.data;

    const handlePlayClick2 = () => {
        if (isPlaying2) {
            setIsPlaying2(false);
        } else {
            setSelectedDate2(battleDates2[0]);
            setIsPlaying2(true);
        }
    };

    // ------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', process.env.REACT_APP_API_URL);

                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data4.2`);
                //const response = await fetch('http://localhost:5000/api/dataa');
                const data = await response.json();

                console.log('Fetched data:', data);

                if (Array.isArray(data)) {
                    const uniqueBattleDates3 = [...new Set(data.map(item => item.battle_date.split('T')[0]))];
                    const sectors3 = [...new Set(data.map(item => item.sector))];
                    const mappedData3 = data.map(item => ({
                        name: `Unit ${item.unit_assignment_id}`,
                        quadrant: item.sector,
                        ring: determineRing(parseFloat(item.percentageprofitandloss)),
                        percentageprofitandloss: item.percentageprofitandloss,
                        profit_and_loss: item.profit_and_loss,
                        unit_assignment_id: item.unit_assignment_id,
                        stock_name: item.stock_name,
                        battle_date: item.battle_date.split('T')[0]
                    }));

                    console.log('Mapped data:', mappedData3);

                    setBattleDates3(uniqueBattleDates3);
                    setSetup3({
                        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
                        quadrants: sectors3,
                        data: mappedData3
                    });
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying3) {
            setSelectedDate3(battleDates3[0]);
            interval = setInterval(() => {
                setSelectedDate3(prevDate => {
                    const currentIndex = battleDates3.indexOf(prevDate); // Corrected line
                    const nextIndex = currentIndex + 1;

                    if (nextIndex >= battleDates3.length) { // Corrected line
                        setIsPlaying3(false);
                        clearInterval(interval);
                        return prevDate;
                    }

                    return battleDates3[nextIndex]; // Corrected line
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPlaying3, battleDates3]);

    const filteredData3 = selectedDate3
        ? setup3.data.filter(item => item.battle_date === selectedDate3)
        : setup3.data;

    const handlePlayClick3 = () => {
        if (isPlaying3) {
            setIsPlaying3(false);
        } else {
            setSelectedDate3(battleDates3[0]);
            setIsPlaying3(true);
        }
    };

    //------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', process.env.REACT_APP_API_URL);

                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data4.3`);
                //const response = await fetch('http://localhost:5000/api/dataa');
                const data = await response.json();

                console.log('Fetched data:', data);

                if (Array.isArray(data)) {
                    const uniqueBattleDates4 = [...new Set(data.map(item => item.battle_date.split('T')[0]))];
                    const sectors4 = [...new Set(data.map(item => item.sector))];
                    const mappedData4 = data.map(item => ({
                        name: `Unit ${item.unit_assignment_id}`,
                        quadrant: item.sector,
                        ring: determineRing(parseFloat(item.percentageprofitandloss)),
                        percentageprofitandloss: item.percentageprofitandloss,
                        profit_and_loss: item.profit_and_loss,
                        unit_assignment_id: item.unit_assignment_id,
                        stock_name: item.stock_name,
                        battle_date: item.battle_date.split('T')[0]
                    }));

                    console.log('Mapped data:', mappedData4);

                    setBattleDates4(uniqueBattleDates4);
                    setSetup4({
                        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
                        quadrants: sectors4,
                        data: mappedData4
                    });
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying4) {
            setSelectedDate4(battleDates4[0]);
            interval = setInterval(() => {
                setSelectedDate4(prevDate => {
                    const currentIndex = battleDates4.indexOf(prevDate); // Corrected line
                    const nextIndex = currentIndex + 1;

                    if (nextIndex >= battleDates4.length) { // Corrected line
                        setIsPlaying4(false);
                        clearInterval(interval);
                        return prevDate;
                    }

                    return battleDates4[nextIndex]; // Corrected line
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPlaying4, battleDates4]);

    const filteredData4 = selectedDate4
        ? setup4.data.filter(item => item.battle_date === selectedDate4)
        : setup4.data;

    const handlePlayClick4 = () => {
        if (isPlaying4) {
            setIsPlaying4(false);
        } else {
            setSelectedDate4(battleDates4[0]);
            setIsPlaying4(true);
        }
    };

    //------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', process.env.REACT_APP_API_URL);

                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data4.4`);
                //const response = await fetch('http://localhost:5000/api/dataa');
                const data = await response.json();

                console.log('Fetched data:', data);

                if (Array.isArray(data)) {
                    const uniqueBattleDates5 = [...new Set(data.map(item => item.battle_date.split('T')[0]))];
                    const sectors5 = [...new Set(data.map(item => item.sector))];
                    const mappedData5 = data.map(item => ({
                        name: `Unit ${item.unit_assignment_id}`,
                        quadrant: item.sector,
                        ring: determineRing(parseFloat(item.percentageprofitandloss)),
                        percentageprofitandloss: item.percentageprofitandloss,
                        profit_and_loss: item.profit_and_loss,
                        unit_assignment_id: item.unit_assignment_id,
                        stock_name: item.stock_name,
                        battle_date: item.battle_date.split('T')[0]
                    }));

                    console.log('Mapped data:', mappedData5);

                    setBattleDates5(uniqueBattleDates5);
                    setSetup5({
                        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
                        quadrants: sectors5,
                        data: mappedData5
                    });
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying5) {
            setSelectedDate5(battleDates5[0]);
            interval = setInterval(() => {
                setSelectedDate5(prevDate => {
                    const currentIndex = battleDates5.indexOf(prevDate); // Corrected line
                    const nextIndex = currentIndex + 1;

                    if (nextIndex >= battleDates5.length) { // Corrected line
                        setIsPlaying5(false);
                        clearInterval(interval);
                        return prevDate;
                    }

                    return battleDates5[nextIndex]; // Corrected line
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPlaying5, battleDates5]);

    const filteredData5 = selectedDate5
        ? setup5.data.filter(item => item.battle_date === selectedDate5)
        : setup5.data;

    const handlePlayClick5 = () => {
        if (isPlaying5) {
            setIsPlaying5(false);
        } else {
            setSelectedDate5(battleDates5[0]);
            setIsPlaying5(true);
        }
    };

    //------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', process.env.REACT_APP_API_URL);

                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data5`);
                //const response = await fetch('http://localhost:5000/api/dataa');
                const data = await response.json();

                console.log('Fetched data:', data);

                if (Array.isArray(data)) {
                    const uniqueBattleDates6 = [...new Set(data.map(item => item.battle_date.split('T')[0]))];
                    const sectors6 = [...new Set(data.map(item => item.sector))];
                    const mappedData6 = data.map(item => ({
                        name: `Unit ${item.unit_assignment_id}`,
                        quadrant: item.sector,
                        ring: determineRing(parseFloat(item.percentageprofitandloss)),
                        percentageprofitandloss: item.percentageprofitandloss,
                        profit_and_loss: item.profit_and_loss,
                        unit_assignment_id: item.unit_assignment_id,
                        stock_name: item.stock_name,
                        battle_date: item.battle_date.split('T')[0]
                    }));

                    console.log('Mapped data:', mappedData6);

                    setBattleDates6(uniqueBattleDates6);
                    setSetup6({
                        rings: ['-50,0', '0-10', '10-20', '20-30', '30-40', 'above 40'],
                        quadrants: sectors6,
                        data: mappedData6
                    });
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying6) {
            setSelectedDate6(battleDates6[0]);
            interval = setInterval(() => {
                setSelectedDate6(prevDate => {
                    const currentIndex = battleDates6.indexOf(prevDate); // Corrected line
                    const nextIndex = currentIndex + 1;

                    if (nextIndex >= battleDates6.length) { // Corrected line
                        setIsPlaying6(false);
                        clearInterval(interval);
                        return prevDate;
                    }

                    return battleDates6[nextIndex]; // Corrected line
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPlaying6, battleDates6]);

    const filteredData6 = selectedDate6
        ? setup6.data.filter(item => item.battle_date === selectedDate6)
        : setup6.data;

    const handlePlayClick6 = () => {
        if (isPlaying6) {
            setIsPlaying6(false);
        } else {
            setSelectedDate6(battleDates6[0]);
            setIsPlaying6(true);
        }
    };

    //console.log('Setup quadrants:', setup.quadrants);

    return (
        <div>
            <div style={{ marginTop: '100px', marginLeft: '0px' }}>
                <div className="App">
                    <h1 style={{ margin: '20px 0' }}>Tech Radar Graph - Iteration 4 - war_iter_4</h1>
                    <div className="dropdown-container">
                        <select onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate} disabled={isPlaying}>
                            <option value="">Select Battle Date</option>
                            {battleDates.map((date, index) => (
                                <option key={index} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>
                        <button onClick={handlePlayClick}>
                            {isPlaying ? 'Stop' : 'Play'}
                        </button>
                    </div>
                    <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                        <RadarTimer {...setup} data={filteredData} animate={isPlaying} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '100px', marginLeft: '0px' }}>
                <div className="App">
                    <h1 style={{ margin: '20px 0' }}>Tech Radar Graph - Iteration 4.2 - war_iter_4_2</h1>
                    <div className="dropdown-container">
                        <select onChange={(e) => setSelectedDate3(e.target.value)} value={selectedDate3} disabled={isPlaying3}>
                            <option value="">Select Battle Date</option>
                            {battleDates3.map((date, index) => (
                                <option key={index} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>
                        <button onClick={handlePlayClick3}>
                            {isPlaying3 ? 'Stop' : 'Play'}
                        </button>
                    </div>
                    <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                        <RadarTimer {...setup} data={filteredData3} animate={isPlaying3} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '100px', marginLeft: '0px' }}>
                <div className="App">
                    <h1 style={{ margin: '20px 0' }}>Tech Radar Graph - Iteration 4.3 - war_iter_4_3</h1>
                    <div className="dropdown-container">
                        <select onChange={(e) => setSelectedDate4(e.target.value)} value={selectedDate4} disabled={isPlaying4}>
                            <option value="">Select Battle Date</option>
                            {battleDates4.map((date, index) => (
                                <option key={index} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>
                        <button onClick={handlePlayClick4}>
                            {isPlaying4 ? 'Stop' : 'Play'}
                        </button>
                    </div>
                    <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                        <RadarTimer {...setup} data={filteredData4} animate={isPlaying4} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '100px', marginLeft: '0px' }}>
                <div className="App">
                    <h1 style={{ margin: '20px 0' }}>Tech Radar Graph - Iteration 4.4 - war_iter_4_4</h1>
                    <div className="dropdown-container">
                        <select onChange={(e) => setSelectedDate5(e.target.value)} value={selectedDate5} disabled={isPlaying5}>
                            <option value="">Select Battle Date</option>
                            {battleDates5.map((date, index) => (
                                <option key={index} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>
                        <button onClick={handlePlayClick5}>
                            {isPlaying5 ? 'Stop' : 'Play'}
                        </button>
                    </div>
                    <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                        <RadarTimer {...setup} data={filteredData5} animate={isPlaying5} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '100px', marginLeft: '0px' }}>
                <div className="App">
                    <h1 style={{ margin: '20px 0' }}>Tech Radar Graph - Iteration 5 - war_iter_5</h1>
                    <div className="dropdown-container">
                        <select onChange={(e) => setSelectedDate6(e.target.value)} value={selectedDate6} disabled={isPlaying6}>
                            <option value="">Select Battle Date</option>
                            {battleDates6.map((date, index) => (
                                <option key={index} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>
                        <button onClick={handlePlayClick6}>
                            {isPlaying6 ? 'Stop' : 'Play'}
                        </button>
                    </div>
                    <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                        <RadarTimer {...setup} data={filteredData6} animate={isPlaying6} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '10px', marginLeft: '0px' }}>
                <div className="App">
                    <h1 style={{ margin: '20px 0' }}>Tech Radar Graph - Iteration 3 - war_iter_3</h1>
                    <div className="dropdown-container">
                        <select onChange={(e) => setSelectedDate2(e.target.value)} value={selectedDate2} disabled={isPlaying2}>
                            <option value="">Select Battle Date</option>
                            {battleDates2.map((date, index) => (
                                <option key={index} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>
                        <button onClick={handlePlayClick2}>
                            {isPlaying2 ? 'Stop' : 'Play'}
                        </button>
                    </div>
                    <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                        <RadarTimer {...setup2} data={filteredData2} animate={isPlaying2} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

