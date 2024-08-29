import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import LineGraph from './Components/LineGraph';

const App = () => {
  // State variables for data and editing
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editableId, setEditableId] = useState(null);

  // Function to fetch items from the server
  const getItems = async () => {
    try {
      //const response = await fetch('http://localhost:5000/strength1');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cstrength1`);
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cstrength1`);
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        //const response = await fetch('http://localhost:5000/strength2');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cstrength2`);
        const data = await response.json();

        // Format the dates
        const formattedData = data.map(item2 => ({
          ...item2,
          battle_date: new Date(item2.battle_date).toLocaleDateString('en-GB') // format date as dd/mm/yyyy
        }));

        setItems2(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        //const response = await fetch('http://localhost:5000/strength2');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cstrength3`);
        const data = await response.json();

        // Format the dates
        const formattedData = data.map(item3 => ({
          ...item3,
          battle_date: new Date(item3.battle_date).toLocaleDateString('en-GB') // format date as dd/mm/yyyy
        }));

        setItems3(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
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
        <h1 style={{ margin: '20px 0' }}>Total Strength - Iteration 2 - war_clone_test</h1>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          {isLoading && <p>Loading data...</p>}
          {items.length > 0 && (
            <table style={{ width: '100%', borderSpacing: '10px' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Stock Name</th>
                  <th>Lead Date</th>
                  <th>Sealing Flag</th>
                  <th>Sealing Price</th>
                  <th>Lead Price</th>
                  <th>Active Flag</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.stock_name || 'N/A'}</td>
                    <td>{item.lead_date ? new Date(item.lead_date).toLocaleDateString() : 'N/A'}</td>
                    <td>{item.sealing_flag || 'N/A'}</td>
                    <td>{typeof item.sealing_price === 'number' ? item.sealing_price.toFixed(2) : 'N/A'}</td>
                    <td>{typeof item.lead_price === 'number' ? item.lead_price.toFixed(2) : 'N/A'}</td>
                    <td>{item.active_flag ? 'Yes' : 'No'}</td>
                    <td>
                      <button onClick={() => handleEditClick(item.id)}>Edit</button>
                      <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Col>
      </Row> */}
      <Row>
        <Col>
        <h1 style={{ margin: '20px 0' }}>Committed Strength - Iteration 4 - war_iter_4</h1>
          <LineGraph data={items} /> {/* Pass data as props to LineChart */}
          <h1 style={{ margin: '20px 0' }}>Committed Strength - Iteration 4.2 - war_iter_4_2</h1>
          <LineGraph data={items3} /> {/* Pass data as props to LineChart */}
          <h1 style={{ margin: '20px 0' }}>Committed strength - Iteration 3 - war_iter_3</h1>
          <LineGraph data={items2} /> {/* Pass data as props to LineChart */}
        </Col>
      </Row>
    </Container>
  );
};

export default App;

