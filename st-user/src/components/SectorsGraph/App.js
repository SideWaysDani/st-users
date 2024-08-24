import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineGraph from './Components/LineGraph';
import { format, parseISO } from 'date-fns'; // Import date-fns for formatting

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/sector`);
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
    

    return (
        <Container className="App">
            <Row>
                <Col>
                    <h1 style={{ margin: '20px 0' }}>Sector Summary - stocktrader.sector_summary</h1>
                    {isLoading ? <p>Loading data...</p> : <LineGraph data={items} />}
                </Col>
            </Row>
        </Container>
    );
};

export default App;
