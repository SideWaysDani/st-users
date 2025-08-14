import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'; // Assuming you're using Reactstrap
import LineGraph from './Components/LineGraph';

const App = () => {
  // State variables for data and editing
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editableId, setEditableId] = useState(null);

  // Function to fetch items from the server
  const getItems = async () => {
    try {
      //const response = await fetch('http://localhost:5000/strength1');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/leadsutilization`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/leadsutilization`);
        //const response = await fetch('http://localhost:5000/strength1');
        const data = await response.json();

        // Format the dates
        const formattedData = data.map(item => ({
          ...item,
          battle_date: new Date(item.battle_date).toLocaleDateString('en-GB') // format date as dd/mm/yyyy
        }));

        setItems(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
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
          <h1 style={{ margin: '20px 0' }}>Total Strength - Iteration 2 - war_clone_test</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 style={{ margin: '20px 0' }}>leads Utilization Graph</h1>
          <LineGraph data={items} /> {/* Pass data as props to LineChart */}

        </Col>
      </Row>
    </Container>
  );
};

export default App;

