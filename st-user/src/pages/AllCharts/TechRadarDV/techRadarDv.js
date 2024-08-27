import React, { useEffect, useState } from 'react';
import RadarTimer from '../../../components/TechRadarDV/Radar/RadarTimer';

function App() {
    const [setup, setSetup] = useState({
        rings: ['-50,0', '0-5', '5-10', 'above 10'],
        quadrants: [],
        data: []
    });
    const [battleDates, setBattleDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const [setup2, setSetup2] = useState({
        rings: ['-50,0', '0-5', '5-10', 'above 10'],
        quadrants: [],
        data: []
    });

    const [battleDates2, setBattleDates2] = useState([]);
    const [selectedDate2, setSelectedDate2] = useState('');
    const [isPlaying2, setIsPlaying2] = useState(false);

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
                        rings: ['-50,0', '0-5', '5-10', 'above 10'],
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
                        rings: ['-50,0', '0-5', '5-10', 'above 10'],
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
        if (percentageProfitAndLoss < 0) return '-50,0';
        if (percentageProfitAndLoss >= 0 && percentageProfitAndLoss <= 5) return '0-5';
        if (percentageProfitAndLoss > 5 && percentageProfitAndLoss <= 10) return '5-10';
        return 'above 10';
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

    console.log('Setup quadrants:', setup.quadrants);

    return (
        <div>
            <div style={{ marginTop: '100px', marginLeft: '0px'}}>
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
                <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px'}}>
                    <RadarTimer {...setup} data={filteredData} animate={isPlaying} />
                </div>
            </div>
        </div>

        <div style={{ marginTop: '10px', marginLeft: '0px'}}>
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
                <div className="chart-container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px'}}>
                    <RadarTimer {...setup2} data={filteredData2} animate={isPlaying2} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;