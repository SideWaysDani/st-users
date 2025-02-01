import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineGraph from './Components/LineGraph';
import { format, parseISO } from 'date-fns'; // Import date-fns for formatting

const App = () => {
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);
    const [items3, setItems3] = useState([]);
    const [items4, setItems4] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // 9 days average 
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/sector1`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
    
                // Format the dates to a more readable format
                const formattedData = data.map(item => ({
                    ...item,
                    Date: format(parseISO(item.Date), 'dd/MM/yyyy') // Convert to 'dd/MM/yyyy' format
                }));
    
                setItems(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);

    // 30 days average 
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/sector2`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
    
                // Format the dates to a more readable format
                const formattedData = data.map(item => ({
                    ...item,
                    Date: format(parseISO(item.Date), 'dd/MM/yyyy') // Convert to 'dd/MM/yyyy' format
                }));
    
                setItems2(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);

    // 60 days average 
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/sector3`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
    
                // Format the dates to a more readable format
                const formattedData = data.map(item => ({
                    ...item,
                    Date: format(parseISO(item.Date), 'dd/MM/yyyy') // Convert to 'dd/MM/yyyy' format
                }));
    
                setItems3(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);

    // 90 days average 
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/sector4`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
    
                // Format the dates to a more readable format
                const formattedData = data.map(item => ({
                    ...item,
                    Date: format(parseISO(item.Date), 'dd/MM/yyyy') // Convert to 'dd/MM/yyyy' format
                }));
    
                setItems4(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <Container className="App" style={{ marginBottom: '100px' }}>
            <Row>
                <Col>
                <br/><br/><br/>
                    <h1 style={{ margin: '20px 0' }}>Sector Summary - stocktrader.sector_summary</h1>
                    <h1 style={{ margin: '20px 0' }}>9 Days Average Profit and Loss Percentage</h1>
                    {isLoading ? <p>Loading data...</p> : <LineGraph data={items} />}
                    <br/><br/>
                    <h1 style={{ margin: '20px 0', marginTop: '100px' }}>30 Days Average Profit and Loss Percentage</h1>
                    {isLoading ? <p>Loading data...</p> : <LineGraph data={items2} />}
                    <br/><br/>
                    <h1 style={{ margin: '20px 0', marginTop: '100px' }}>60 Days Average Profit and Loss Percentage</h1>
                    {isLoading ? <p>Loading data...</p> : <LineGraph data={items3} />}
                    <br/><br/>
                    <h1 style={{ margin: '20px 0', marginTop: '100px' }}>90 Days Average Profit and Loss Percentage</h1>
                    {isLoading ? <p>Loading data...</p> : <LineGraph data={items4} />}

                </Col>
            </Row>
        </Container>
    );
};

export default App;
