import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'; // Assuming you're using Reactstrap
import LineChart from './Component/LineChart';

const App = () => {
  // State variables for data and editing
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editableId, setEditableId] = useState(null);

  // Function to fetch items from the server
  const getItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/crud');
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
        const response = await fetch('http://localhost:5000/crud');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle edit click, setting the editable ID
  const handleEditClick = (id) => {
    setEditableId(id);
  };

  // Function to handle update click, sending the updated item to the server
  const handleUpdateClick = async (id) => {
    // Implement the update logic here
  };

  // Function to handle delete click, sending the delete request to the server
  const handleDeleteClick = async (id) => {
    // Implement the delete logic here
  };

  return (
    <Container className="App" style={{ marginBottom: '100px' }}>
      <Row>
        <Col>
          <h1 style={{ margin: '20px 0' }}>Leads Analysis</h1>
        </Col>
      </Row>
      <Row>
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
      </Row>
      <Row>
      <Col>
        <LineChart data={items} /> {/* Pass data as props to LineChart */}
      </Col>
    </Row>
    </Container>
  );
};

export default App;
