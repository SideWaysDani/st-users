import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");


  const getItems = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/leads_1`);
      const data = await response.json();
      if (data.length > 0) {
        setItems(data);
        // console.log('Data fetched successfully:', data);
      } else {
        console.warn('No data received from server');
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await getItems();
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleActionClick = (id) => {
    const lead = items.find(item => item.id === id);
    if (!lead) return;

    const action = lead.valid === 'Yes' ? 'invalid' : lead.valid === 'No' ? 'valid' : '';
    const url = `${process.env.REACT_APP_API_URL}/${action}_lead/${id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        getItems();
      })
      .catch(error => {
        console.error(`Error during ${action} lead:`, error);
      });
  };



  return (
    <Container className="App" style={{ marginTop: '100px', marginBottom: '80px' }}>
      <Row>
        <Col>
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '25px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            leads_1 and fortune_1000 Analysis
          </h2>
        </Col>
      </Row>

      <Row>
        <Col>
          {isLoading && <p style={{ textAlign: 'center' }}>Loading data...</p>}

          {items.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <div style={{ position: "relative" }}>
                  {/* Unicons Search Icon */}
                  <i
                    className="uil uil-search-alt"
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#777",
                      fontSize: "18px",
                    }}
                  ></i>

                  {/* Input */}
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      padding: "8px 12px 8px 38px", // padding-left for icon
                      width: "250px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>



              <table style={styles.table}>
                <thead>
                  <tr style={styles.headerRow}>
                    <th style={styles.th}>Lead Date</th>
                    <th style={styles.th}>Stock Name</th>
                    <th style={styles.th}>Company</th>
                    <th style={styles.th}>Sector</th>
                    <th style={styles.th}>Industry</th>
                    <th style={styles.th}>Prediction - Iter 3</th>
                    <th style={styles.th}>Prediction - Iter 6</th>
                    <th style={styles.th}>Activation Status</th>
                    <th style={styles.th}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items
                    .filter(item => {
                      const value = search.toLowerCase();

                      return (
                        item.company?.toLowerCase().includes(value) ||
                        item.ticker?.toLowerCase().includes(value) ||
                        item.stock_name?.toLowerCase().includes(value) ||
                        item.sector?.toLowerCase().includes(value)
                      );
                    })
                    .map((item, index) => (

                      <tr
                        key={index}
                        style={{
                          ...((index % 2 === 0) ? styles.evenRow : styles.oddRow),
                          opacity: item.activation_status === 'Inactive' ? 0.6 : 1,
                        }}
                      >

                        <td style={styles.td}>
                          {item.lead_date
                            ? new Date(item.lead_date).toISOString().split('T')[0].replace(/-/g, '/')
                            : 'N/A'}
                        </td>

                        <td style={styles.td}>{item.stock_name || 'N/A'}</td>
                        <td style={styles.td}>{item.company || 'N/A'}</td>
                        <td style={styles.td}>{item.sector || 'N/A'}</td>
                        <td style={styles.td}>{item.industry || 'N/A'}</td>
                        <td
                          style={{
                            ...styles.td,
                            color:
                              item.prediction === 1
                                ? '#2e7d32'
                                : item.prediction === 0
                                  ? '#c62828'
                                  : '#757575',
                            fontWeight: 600,
                          }}
                        >
                          {item.prediction === 1
                            ? "1"
                            : item.prediction === 0
                              ? "0"
                              : "N/A"}
                        </td>

                        <td
                          style={{
                            ...styles.td,
                            color:
                              item.prediction_iter_6 === 1
                                ? '#2e7d32'
                                : item.prediction_iter_6 === 0
                                  ? '#c62828'
                                  : '#757575',
                            fontWeight: 600,
                          }}
                        >
                          {item.prediction_iter_6 === 1
                            ? "1"
                            : item.prediction_iter_6 === 0
                              ? "0"
                              : "N/A"}
                        </td>

                        <td
                          style={{
                            ...styles.td,
                            color:
                              item.valid === 'Yes'
                                ? '#2e7d32'
                                : item.valid === 'No'
                                  ? '#c62828'
                                  : '#757575',
                            fontWeight: 500,
                          }}
                        >
                          {item.valid === 'Yes'
                            ? 'Active'
                            : item.valid === 'No'
                              ? 'Inactive'
                              : 'N/A'}
                        </td>

                        <td style={styles.td}>
                          <button
                            style={{
                              padding: '6px 12px',
                              backgroundColor: item.valid === 'Yes' ? '#d32f2f' : '#2e7d32',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleActionClick(item.id)}
                          >
                            {item.valid === 'Yes' ? 'Deactivate' : item.valid === 'No' ? 'Activate' : ''}
                          </button>

                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            !isLoading && (
              <p style={{ textAlign: 'center', marginTop: '20px' }}>No data available.</p>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
  },
  headerRow: {
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  },
  th: {
    padding: '10px 14px',
    fontWeight: '600',
    fontSize: '15px',
    borderBottom: '1px solid #ccc',
  },
  td: {
    padding: '10px 14px',
    fontSize: '14px',
    borderBottom: '1px solid #e0e0e0',
  },
  evenRow: {
    backgroundColor: '#fafafa',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
};

export default App;
